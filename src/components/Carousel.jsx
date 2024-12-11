import React, { useState } from 'react';

const Carousel = ({ pages }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pages.length) % pages.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevPage} className='next-button-left'><box-icon name='chevron-left' type='solid'
                color='#ffffff'></box-icon></button>
      <div className="carousel-content">
        {pages[currentIndex]}
      </div>
      <button onClick={nextPage} className='next-button-right'><box-icon name='chevron-right' type='solid'
                color='#ffffff'></box-icon></button>
    </div>
  );
};

export default Carousel;
