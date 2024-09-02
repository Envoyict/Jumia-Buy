import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    "https://www.jamarahome.com/cdn/shop/products/SFL200ECO.jpg?v=1700639593&width=500",
    "https://www.collinsdictionary.com/images/full/television_160593200.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ftTVJxMuYyEYGWS3q373-di7MT5OIkE5gQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6FcdaagVefCfmlANMBuqsFX-pkHWwksmSENcJ8eJ1PJuHKj6qQrF_BcZt1ixwYRwy70&usqp=CAU",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpP1DHPNvf2ZX5O2KQiIm2GGe2UG5iDgDtg&s",
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfQKsltTTQBvpeJByHa0hMdyH-mRl0WSpMg&s"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up the timer to automatically change slides
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Change slide every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center bg-gray-200 overflow-hidden">
      <button onClick={prevSlide} className="absolute left-0 bg-gray-800 text-white p-2 z-10">
        &#8592;
      </button>
      <div className="w-full h-full flex items-center justify-center p-4 md:p-6 lg:p-8">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover md:w-4/5 lg:w-3/4"
        />
      </div>
      <button onClick={nextSlide} className="absolute right-0 bg-gray-800 text-white p-2 z-10">
        &#8594;
      </button>
    </div>
  );
};

export default ImageSlider;
