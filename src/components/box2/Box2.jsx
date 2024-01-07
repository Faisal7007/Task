import React, { useState } from 'react';

const ImageCarousel = ({ imageUrls }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageClick = (imageNumber) => {
    setCurrentImage(imageNumber);
  };

  return (
    <div className="image-carousel">
      <div className="images">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            style={{ display: currentImage === index ? 'block' : 'none' }}
          />
        ))}
      </div>
      <div className="image-selector">
        {imageUrls.map((_, index) => (
          <button key={index} onClick={() => handleImageClick(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
