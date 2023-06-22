import React, { useEffect, useRef } from 'react';
import * as p5 from 'p5';
import clm from 'clmtrackr';

import img1 from '../Assets/glass1.png'

const ARTryOn = () => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const faceTrackerRef = useRef(null);
  const selectedFilterRef = useRef(-1);

  useEffect(() => {
    let outputWidth;
    let outputHeight;

    let imgSpidermanMask;
    let imgDogEarRight, imgDogEarLeft, imgDogNose;

    const preload = (p) => {
      imgSpidermanMask = p.loadImage(img1);
      imgDogEarRight = p.loadImage(img1);
    };

    const setup = (p) => {
      const maxWidth = Math.min(p.windowWidth, p.windowHeight);
      p.pixelDensity(1);
      outputWidth = maxWidth;
      outputHeight = maxWidth * 0.75; // 4:3
    
      canvasRef.current = p.createCanvas(outputWidth, outputHeight).parent('canvas-container');
    
      videoRef.current = p.createCapture(p.VIDEO);
      videoRef.current.size(outputWidth, outputHeight);
      videoRef.current.hide();
    
      faceTrackerRef.current = new window.clm.tracker();
      faceTrackerRef.current.init();
      faceTrackerRef.current.start(videoRef.current.elt);
    };
    
    const draw = (p) => {
      p.image(videoRef.current, 0, 0, outputWidth, outputHeight);

      switch (selectedFilterRef.current) {
        case -1:
          break;
        case 0:
          drawSpidermanMask(p);
          break;
        case 1:
          drawDogFace(p);
          break;
        default:
          break;
      }
    };

    const drawSpidermanMask = (p) => {
      const positions = faceTrackerRef.current.getCurrentPosition();
      if (positions !== false) {
        p.push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 1.1;
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][1], positions[20][1])) * 0.5;
        p.translate(-wx / 2, -wy / 2);
        p.image(imgSpidermanMask, positions[62][0], positions[66][1], wx, wy);
        p.pop();
      }
    };

    const drawDogFace = (p) => {
      const positions = faceTrackerRef.current.getCurrentPosition();
      if (positions !== false) {
        p.push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 1.4;
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][1], positions[20][1])) * 1.3;
        p.translate(-wx / 2, -wy / 2);
        p.image(imgDogEarRight, positions[62][0], positions[66][1], wx, wy);
        p.pop();
      }
    };

    const windowResized = (p) => {
      const maxWidth = Math.min(p.windowWidth, p.windowHeight);
      p.pixelDensity(1);
      outputWidth = maxWidth;
      outputHeight = maxWidth * 0.75; // 4:3
      p.resizeCanvas(outputWidth, outputHeight);
    };

    new p5((p) => {
      p.preload = () => preload(p);
      p.setup = () => setup(p);
      p.draw = () => draw(p);
      p.windowResized = () => windowResized(p);
    });
  }, []);

  const applyFilter = (filterType) => {
    selectedFilterRef.current = filterType;
  };

  return (
    <div>
      <div id="canvas-container" ref={canvasRef}></div>
      <div>
        <button onClick={() => applyFilter(-1)}>No Filter</button>
        <button onClick={() => applyFilter(0)}>Spiderman Mask</button>
        <button onClick={() => applyFilter(1)}>Dog Face</button>
      </div>
    </div>
  );
};
export default ARTryOn;
