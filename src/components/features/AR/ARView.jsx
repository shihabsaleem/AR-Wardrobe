import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import * as THREE from "three";
import { useLocation, useNavigate } from "react-router-dom";

const ARView = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state || {};
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!product) {
            navigate("/");
            return;
        }

        let scene, camera, renderer, glassesGroup;
        let animationFrameId;

        const create3DGlasses = () => {
            const group = new THREE.Group();

            // Material
            const glassMaterial = new THREE.MeshPhysicalMaterial({
                color: 0x222222,
                metalness: 0.9,
                roughness: 0.1,
                transparent: true,
                opacity: 0.3,
                transmission: 0.9,
            });

            const frameMaterial = new THREE.MeshStandardMaterial({
                color: 0x111111,
                metalness: 0.8,
                roughness: 0.2,
            });

            // Left lens
            const leftLens = new THREE.Mesh(
                new THREE.CircleGeometry(0.4, 32),
                glassMaterial
            );
            leftLens.position.set(-0.5, 0, 0);
            group.add(leftLens);

            // Right lens
            const rightLens = new THREE.Mesh(
                new THREE.CircleGeometry(0.4, 32),
                glassMaterial
            );
            rightLens.position.set(0.5, 0, 0);
            group.add(rightLens);

            // Bridge
            const bridge = new THREE.Mesh(
                new THREE.CylinderGeometry(0.03, 0.03, 0.2, 16),
                frameMaterial
            );
            bridge.rotation.z = Math.PI / 2;
            bridge.position.set(0, 0, 0);
            group.add(bridge);

            // Left frame
            const leftFrame = new THREE.Mesh(
                new THREE.TorusGeometry(0.4, 0.03, 16, 32),
                frameMaterial
            );
            leftFrame.position.set(-0.5, 0, 0);
            group.add(leftFrame);

            // Right frame
            const rightFrame = new THREE.Mesh(
                new THREE.TorusGeometry(0.4, 0.03, 16, 32),
                frameMaterial
            );
            rightFrame.position.set(0.5, 0, 0);
            group.add(rightFrame);

            // Left temple
            const leftTemple = new THREE.Mesh(
                new THREE.CylinderGeometry(0.02, 0.02, 1.2, 16),
                frameMaterial
            );
            leftTemple.rotation.z = Math.PI / 2;
            leftTemple.position.set(-1.1, 0, 0);
            group.add(leftTemple);

            // Right temple
            const rightTemple = new THREE.Mesh(
                new THREE.CylinderGeometry(0.02, 0.02, 1.2, 16),
                frameMaterial
            );
            rightTemple.rotation.z = Math.PI / 2;
            rightTemple.position.set(1.1, 0, 0);
            group.add(rightTemple);

            return group;
        };

        const init3DScene = () => {
            const video = videoRef.current;
            const canvas = canvasRef.current;

            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(
                45,
                video.videoWidth / video.videoHeight,
                0.1,
                1000
            );
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                alpha: true,
                antialias: true
            });
            renderer.setSize(video.videoWidth, video.videoHeight);
            renderer.setClearColor(0x000000, 0);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(0, 1, 1);
            scene.add(directionalLight);

            const pointLight = new THREE.PointLight(0xffffff, 0.5);
            pointLight.position.set(0, 0, 2);
            scene.add(pointLight);

            // Create 3D glasses
            glassesGroup = create3DGlasses();
            scene.add(glassesGroup);

            setIsLoading(false);
        };

        const runAR = async () => {
            try {
                await Promise.all([
                    faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
                    faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
                ]);

                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        width: 640,
                        height: 480,
                        facingMode: "user"
                    }
                });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                console.error("AR Initialization Error:", err);
                setError("Failed to initialize camera or load models.");
                setIsLoading(false);
            }
        };

        const handleVideoPlay = async () => {
            const video = videoRef.current;
            if (!video) return;

            init3DScene();

            const detectAndRender = async () => {
                if (!video || video.paused || video.ended) return;

                const detections = await faceapi
                    .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                    .withFaceLandmarks();

                renderer.clear();

                if (detections.length > 0 && glassesGroup) {
                    const landmarks = detections[0].landmarks;
                    const leftEye = landmarks.getLeftEye();
                    const rightEye = landmarks.getRightEye();

                    // Get the center point between the eyes (where glasses sit)
                    const leftEyeCenter = {
                        x: leftEye.reduce((sum, p) => sum + p.x, 0) / leftEye.length,
                        y: leftEye.reduce((sum, p) => sum + p.y, 0) / leftEye.length
                    };

                    const rightEyeCenter = {
                        x: rightEye.reduce((sum, p) => sum + p.x, 0) / rightEye.length,
                        y: rightEye.reduce((sum, p) => sum + p.y, 0) / rightEye.length
                    };

                    const eyeCenter = {
                        x: (leftEyeCenter.x + rightEyeCenter.x) / 2,
                        y: (leftEyeCenter.y + rightEyeCenter.y) / 2
                    };

                    // Convert to normalized device coordinates (-1 to 1)
                    const x = (eyeCenter.x / video.videoWidth) * 2 - 1;
                    const y = -((eyeCenter.y / video.videoHeight) * 2 - 1);

                    // Position in 3D space
                    glassesGroup.position.set(x * 2, y * 2, 0);

                    // Calculate rotation based on eye angle
                    const angle = Math.atan2(
                        rightEyeCenter.y - leftEyeCenter.y,
                        rightEyeCenter.x - leftEyeCenter.x
                    );
                    glassesGroup.rotation.z = angle;

                    // Calculate scale based on distance between eyes
                    const eyeDistance = Math.sqrt(
                        Math.pow(rightEyeCenter.x - leftEyeCenter.x, 2) +
                        Math.pow(rightEyeCenter.y - leftEyeCenter.y, 2)
                    );

                    // Scale to fit face - glasses should be slightly wider than eye distance
                    const scale = (eyeDistance / video.videoWidth) * 6;
                    glassesGroup.scale.set(scale, scale, scale);
                }

                renderer.render(scene, camera);
                animationFrameId = requestAnimationFrame(detectAndRender);
            };

            detectAndRender();
        };


        runAR();

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('play', handleVideoPlay);
        }

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            if (videoElement && videoElement.srcObject) {
                const tracks = videoElement.srcObject.getTracks();
                tracks.forEach(track => track.stop());
            }
            if (renderer) {
                renderer.dispose();
            }
            if (scene) {
                scene.traverse((object) => {
                    if (object.geometry) object.geometry.dispose();
                    if (object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach(material => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                });
            }
        };
    }, [product, navigate]);

    const takeScreenshot = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (!video || !canvas) return;

        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = video.videoWidth;
        tempCanvas.height = video.videoHeight;
        const ctx = tempCanvas.getContext("2d");

        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(video, -tempCanvas.width, 0, tempCanvas.width, tempCanvas.height);
        ctx.restore();
        ctx.drawImage(canvas, 0, 0);

        const dataURL = tempCanvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = `ar-tryon-${product?.name || 'glasses'}.png`;
        link.href = dataURL;
        link.click();
    };

    if (!product) return null;

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
            <div className="absolute top-0 left-0 w-full z-20 p-5 flex justify-between items-center pointer-events-none">
                <button
                    onClick={() => navigate(-1)}
                    className="pointer-events-auto bg-white/10 text-white border border-white/30 px-5 py-2.5 rounded-full backdrop-blur-md transition hover:bg-white hover:text-black font-medium"
                >
                    ← Back
                </button>
                <h2 className="text-white text-2xl font-bold drop-shadow-2xl">{product.name}</h2>
            </div>

            <div className="relative w-full max-w-[800px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black">
                {isLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black z-10">
                        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
                        <div className="text-white text-lg font-medium">Loading 3D AR...</div>
                    </div>
                )}
                {error && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/90 z-20 text-red-400 p-5 text-center font-medium">
                        {error}
                    </div>
                )}

                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover transform -scale-x-100"
                />
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full object-cover transform -scale-x-100 pointer-events-none"
                />
            </div>

            <div className="absolute bottom-10 left-0 w-full flex justify-center gap-4 z-20 pointer-events-none">
                <button
                    onClick={takeScreenshot}
                    className="pointer-events-auto w-20 h-20 rounded-full border-4 border-white flex items-center justify-center bg-white/20 backdrop-blur-md transition hover:bg-white/40 hover:scale-110 active:scale-95 group shadow-2xl"
                >
                    <div className="w-14 h-14 bg-white rounded-full transition group-active:scale-90"></div>
                </button>
            </div>
        </div>
    );
};

export default ARView;
