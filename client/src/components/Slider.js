import React, { useState } from "react";
import image1 from "../media/slider1.jpg";
import image2 from "../media/slider2.jpg";
import image3 from "../media/slider3.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="relative mt-1">
      <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide}`}
        className="slide w-full h-80 object-cover"
      />

      <div className="dots-container absolute bottom-4 left-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              index === currentSlide ? "active bg-gray-800" : ""
            } inline-block w-4 h-4 rounded-full bg-gray-300 mr-2 cursor-pointer`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <div className="buttons-container absolute bottom-4 right-4">
        <button onClick={handlePrevSlide} className="mr-1">
          <svg
            stroke="currentColor"
            fill="green"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M872 572H266.8l144.3-183c4.1-5.2.4-13-6.3-13H340c-9.8 0-19.1 4.5-25.1 12.2l-164 208c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </button>
        <button onClick={handleNextSlide} className="ml-1">
          <svg
            className=""
            stroke="currentColor"
            fill="green"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M873.1 596.2l-164-208A32 32 0 0 0 684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
