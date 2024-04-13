import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const images = [
  "https://images.pexels.com/photos/414191/pexels-photo-414191.jpeg",
  "https://images.pexels.com/photos/243415/pexels-photo-243415.jpeg",
  "https://images.pexels.com/photos/350749/pexels-photo-350749.jpeg",
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const sliderRef = useRef();
  const intervalRef = useRef();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = [entries];
        if (entry.isIntersecting) {
          intervalRef.current = setInterval(nextSlide, 3000);
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
      },
      { threshold: 0.5 }
    );
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = sectionRef.current;

    const animation = gsap.fromTo(
      element,
      {
        x: -200,
        autoAlpha: 0,
        scale: 0.95,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 2,
        scale: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      animation.kill(); // Proper cleanup to avoid memory leaks
    };
  }, []);

  const nextSlide = () => {
    setCurrentImage((prevImageIndex) => (prevImageIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prevImageIndex) => {
      return (prevImageIndex - 1 + images.length) % images.length;
    });
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "500px" }}
    >
      <img
        src={images[currentImage]}
        alt="Slider image"
        className="w-full h-full object-cover"
      />
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#810CA0] to-[#8C147E] text-white p-2 rounded-full focus:outline-none z-10"
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#810CA0] to-[#8C147E] text-white p-2 rounded-full focus:outline-none z-10"
        aria-label="Next slide"
      >
        &#10095;
      </button>
      <div className="absolute flex justify-center w-full bottom-0 pb-4">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`mx-2 h-3 w-3 rounded-full ${
              currentImage === index
                ? "bg-gradient-to-r from-[#810CA0] to-[#8C147E]"
                : "bg-gray-300"
            } focus:outline-none`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
