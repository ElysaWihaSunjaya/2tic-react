import { AiOutlineCheckCircle } from "react-icons/ai"; 
import React from "react";

export default function About2() {
  return (
    <div>
      <section className="relative py-16 bg-white overflow-hidden">
        {/* Shapes */}
        <img
          src="img\apel.png"
          alt=""
          className="absolute bottom-0 left-0"
        />
        <img
          src="img\buahan.png"
          alt=""
          className="absolute bottom-0 right-0"
        />

        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse xl:flex-row items-center gap-12">
            {/* Image Section */}
            <div className="w-full xl:w-1/2 relative">
              <h2 className="absolute text-[120px] font-bold opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                Healthy
              </h2>
            </div>

            {/* Content Section */}
            <div className="w-full xl:w-1/2 space-y-6">
              <div className="text-left">
                <div className="w-12 h-1 bg-green-500 mb-3"></div>
                <p className="text-green-600 font-semibold text-sm">
                  Pure Organic Products
                </p>
                <h3 className="text-3xl font-bold mt-2">Everyday Fresh Food</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                  Setiap Hari, Rasa Autentik
                  </h4>
                  <p className="text-gray-600">
                  Nikmati pilihan kuliner lezat dan higienis dari masakan Nusantara hingga internasional.
                  Praktis dipesan, siap dikirim langsung ke rumah Anda.
                  </p>
                </div>

                <ul className="space-y-2 text-gray-700">
                  {[
                    "Cita rasa khas yang menggugah selera",
                    "Makanan sehat",
                    "Pilihan sehat untuk gaya hidup aktif",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <AiOutlineCheckCircle />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300"
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
