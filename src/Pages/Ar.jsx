import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ARjs } from 'ar.js';

const ARTryOn = () => {
  const canvasRef = useRef();

  useEffect(() => {
    
    // Initialize AR.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    const arToolkitSource = new ARjs.Source({});


    
    // Set up camera parameters
    camera.matrixAutoUpdate = false;

    // Add canvas to the DOM
    const canvas = canvasRef.current;
    canvas.appendChild(renderer.domElement);

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load('src/Models/uploads_files_1952475_Glasses.FBX', (gltf) => {
      const model = gltf.scene;
      scene.add(model);
    });

    // Create AR.js context
    
    const arToolkitContext = new ARjs.Context({
      cameraParametersUrl: 'path/to/camera_para.dat',
      detectionMode: 'mono',
    });

    // Initialize AR.js context
    arToolkitContext.init(() => {
      camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    });

    // Update AR.js on every frame
    const animate = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      arToolkitSource.domElement.style.position = 'absolute';
      arToolkitSource.domElement.style.top = '0px';
      arToolkitSource.domElement.style.left = '0px';

      // Update AR.js context
      arToolkitContext.update(arToolkitSource.domElement);

      // Render the scene
      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      canvas.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default ARTryOn;
