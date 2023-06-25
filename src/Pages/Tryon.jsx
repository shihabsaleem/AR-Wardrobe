import React, { useRef, useEffect } from 'react';

const FilteredImage = ({ imageUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      // Set canvas dimensions to match the image
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the image on the canvas
      context.drawImage(image, 0, 0);

      // Apply the sunglass filter
      applyFilter(context);
    };
  }, [imageUrl]);

  const applyFilter = (context) => {
    const image = new Image();
    image.src = 'sunglasses.png';
    image.onload = () => {
      // Calculate the position to overlay the sunglasses
      const x = context.canvas.width / 2 - image.width / 2; // Center horizontally
      const y = context.canvas.height / 2 - image.height / 2; // Center vertically

      // Draw the sunglasses on the canvas
      context.drawImage(image, x, y);
    };
  };

  return <canvas ref={canvasRef} />;
};

export default FilteredImage;
