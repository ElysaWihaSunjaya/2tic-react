import { CiLocationOn } from "react-icons/ci"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { AiOutlinePhone } from "react-icons/ai"; 
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 relative text-gray-300">
        {/* Background shapes */}
        <img
          src="buahan.png"
          alt=""
          className="absolute top-0 left-0 opacity-20 pointer-events-none"
        />
        <img
          src="sayuran.png"
          alt=""
          className="absolute bottom-0 right-0 opacity-20 pointer-events-none"
        />

        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-wrap -mx-4">
            {/* About */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-10 sm:mb-0">
              <div>
                <a href="index.html" className="inline-block mb-4">
                  <h1 className="text-4xl font-rubik-variableFont_wght font-extrabold text-gray-800">
              <span className="text-white">Sedap</span>
              <span className="text-green-500">.</span>
            </h1>
                </a>
                <p className="text-gray-400 leading-relaxed">
                  Sedap adalah toko makanan online yang 
                  <br />
                  menyajikan aneka kuliner lezat, praktis, dan higienis.
                  <br />
                  Nikmati cita rasa autentik Nusantara dan internasional, 
                  <br />
                  dari makanan rumahan hingga camilan kekinian, langsung ke rumah Anda.
                  <br />
                  Belanja mudah tanpa antre, tanpa repot — dan pastinya, sedap di setiap gigitan!
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="w-full sm:w-1/2 lg:w-1/6 px-4 mb-10 sm:mb-0">
              <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-3">
                  <AiOutlinePhone />
                  <a className="hover:text-white transition"
                  >
                    0812 1234 5678
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineMail />
                  <a className="hover:text-white transition"
                  >
                    info@sedap.com
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <CiLocationOn />
                  <a className="hover:text-white transition">
                    Pekanbaru
                  </a>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div className="w-full sm:w-1/2 lg:w-1/6 px-4 mb-10 sm:mb-0">
              <h3 className="text-white text-lg font-semibold mb-6">Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a className="hover:text-white transition">
                    Top Sellers
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition">
                    Shopping
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition">
                    About Store
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition">
                    Help
                  </a>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div className="w-full sm:w-1/2 lg:w-1/6 px-4 mb-10 sm:mb-0">
              <h3 className="text-white text-lg font-semibold mb-6">Explore</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a className="hover:text-white transition">
                    New Products
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition">
                    My Account
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition">
                    Support
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <h3 className="text-white text-lg font-semibold mb-6">Newsletter</h3>
              <form
                action="#"
                data-url="YOUR_MAILCHIMP_URL"
                className="flex flex-col sm:flex-row"
                noValidate
              >
                <input
                  type="email"
                  name="EMAIL"
                  id="mc-email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 rounded-l sm:rounded sm:rounded-r-none border border-gray-600 bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="mt-3 sm:mt-0 sm:ml-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-semibold transition"
                >
                  Subscribe
                </button>
              </form>
              <div className="mc-form__response mt-3 text-sm text-gray-400"></div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="bg-gray-800 border-t border-gray-700 py-8">
          <div className="container mx-auto px-6 flex items-center justify-center space-x-12">
            <img
              src="img/alfamart.png"
              alt="Partner 1"
              className="h-12 object-contain"
            />
            <img
              src="img/indomaret.png"
              alt="Partner 2"
              className="h-12 object-contain"
            />
            <img
              src="img/indofood.png"
              alt="Partner 3"
              className="h-12 object-contain"
            />
            <img
              src="img/greenfields.png"
              alt="Partner 4"
              className="h-12 object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
