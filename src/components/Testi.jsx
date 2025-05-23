import React, { useState, useEffect } from "react";
import testimonialsData from "../testi.json";

export default function Testi() {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  if (testimonials.length === 0) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-1 mx-auto bg-blue-500 mb-4 rounded-full"></div>
            <p className="text-blue-600 text-sm uppercase tracking-wide">Our Testimonials</p>
            <h3 className="text-3xl font-bold mt-2">What People Say?</h3>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center relative">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mx-auto mb-6"
            />
            <p className="text-gray-700 italic mb-4">"{testimonials[current].message}"</p>
            <h3 className="text-xl font-semibold text-gray-800">{testimonials[current].name}</h3>
            <span className="text-sm text-gray-500">{testimonials[current].role}</span>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-blue-500 text-white rounded-full w-10 h-10 hover:bg-blue-600 focus:outline-none"
              aria-label="Previous"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-blue-500 text-white rounded-full w-10 h-10 hover:bg-blue-600 focus:outline-none"
              aria-label="Next"
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
