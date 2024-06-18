'use client'

import './Carousel.css'
import { useState } from 'react';

const Carousel = ({ children }) => {
  const [selected, setSelected] = useState(0);

  const showPrev = () => {
    setSelected(selected - 1);
  }

  const showNext = () => {
    setSelected(selected + 1);
  }

  let currentImage;
  for (const i in children) {
    if (i == selected) {
      currentImage = <div className="carousel-item">{children[i]}</div>
    }
  }

  const leftHidden = selected === 0 ? "hidden" : "";
  const rightHidden = selected === children.length - 1 ? "hidden" : "";

  return (
    <div className="carousel-container">
      <div className="carousel-images-container">
        {currentImage}
      </div>
      <div className="carousel-navigation">
        <button className={`carousel-left ${leftHidden}`} onClick={showPrev}>&lt;</button>
        <button className={`carousel-right ${rightHidden}`} onClick={showNext}>&gt;</button>
      </div>
    </div>
  )
}

export default Carousel;
