import { AiFillCaretRight } from "react-icons/ai"; 
import { AiFillCaretLeft } from "react-icons/ai"; 
import React, { useState, useEffect } from "react";

export default function Hero() {
  const slides = [
    {
      id: 1,
      image: "img/buahan.png",
      title: (
        <>
          <span className="text-green-500">Organic</span> <br />
          Food Market
        </>
      ),
      link: "/products",
    },
    {
      id: 2,
      image: "img/sayuran.png",
      title: (
        <>
          <span className="text-green-500">Organic</span> <br />
          Food Market
        </>
      ),
      link: "/products",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div>
      <section className="relative w-full h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full bg-center bg-cover flex items-center justify-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== currentIndex}
          >
            <div className="container mx-auto px-4 text-center text-white">
              <h2 className="text-4xl font-bold mb-6">{slide.title}</h2>
              <a
                className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md transition"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={goPrev}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition z-20"
        >
          <AiFillCaretLeft />
        </button>
        <button
          onClick={goNext}
          aria-label="Next Slide"
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition z-20"
        >
          <AiFillCaretRight />
        </button>
      </section>
    </div>
  );
}
