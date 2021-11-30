import React, { useState, useEffect } from "react";
import { carouselImages } from "../assets/carouselImages";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Carousel = () => {
  const length = carouselImages.length;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });

  // useEffect(() => {
  //   nextSlide();
  // }, []);

  return (
    <>
      <section className="slider">
        {carouselImages.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Carousel;
