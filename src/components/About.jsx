import { GiFarmTractor } from "react-icons/gi"; 
import { GiFarmer } from "react-icons/gi"; 
import React, { useState, useEffect } from "react";

export default function About() {
  return (
    <div>
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Decorative Shapes */}
        <img
          src="img/apel.png"
          alt=""
          className="absolute top-0 left-0 w-32 h-auto z-0"
        />
        <img
          src="img/sayuran.png"
          alt=""
          className="absolute bottom-0 left-0 w-40 h-auto animate-fade-in-left z-0"
        />

        {/* Floated Text */}
        <h2 className="absolute top-10 right-10 text-[8rem] font-bold text-gray-100 pointer-events-none z-0 select-none">
          Organic
        </h2>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            {/* Image */}

            {/* Text Content */}
            <div>
              {/* Title Block */}
              <div className="mb-6">
                <p className="text-green-600 font-medium text-sm">Shopping Store</p>
                <h3 className="text-3xl font-bold text-gray-800 mt-1">Organic Food Only</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8">
              Ada banyak pilihan makanan online,
              namun tak semuanya menjaga cita rasa asli.
              Sedap hadir tanpa tambahan yang berlebihan —
              hanya kelezatan murni yang bisa Anda percaya.
              </p>

              {/* Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <GiFarmer />
                  <h3 className="text-lg font-semibold">Professional Farmers</h3>
                </div>
                <div className="flex items-start gap-4">
                  <GiFarmTractor />
                  <h3 className="text-lg font-semibold">Solution for Farming</h3>
                </div>
              </div>

              {/* Button */}
              <a
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
