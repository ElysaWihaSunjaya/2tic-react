import { BiCart } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import React from "react";

export default function Header2() {
  return (
    <div>
      <div className="w-full bg-white shadow px-6 py-4 flex flex-wrap justify-between items-center">
        {/* Sosial & Email - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-4 text-gray-500">
            <a href="#" className="hover:text-blue-400"><AiOutlineTwitter /></a>
            <a href="#" className="hover:text-blue-600"><CgFacebook /></a>
            <a href="#" className="hover:text-pink-500"><AiOutlineInstagram /></a>
          </div>
          <p className="text-sm text-gray-700">Email: <a href="mailto:info@sedap.com" className="text-blue-500 underline">info@sedap.com</a></p>
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-6">
          <h1 className="text-4xl font-extrabold text-gray-800">
            <span>Sedap</span><span className="text-green-500">.</span>
          </h1>

          {/* Tombol Mobile */}
          <div className="flex items-center space-x-4 md:hidden text-gray-600">
            <AiOutlineSearch />
            <BiCart />
            <i className="fa fa-bars" />
          </div>
        </div>

        {/* Telepon & Ikon - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <p className="text-sm text-gray-700">Phone: <a href="tel:+6281212345678" className="text-blue-500 underline">+62 812 1234 5678</a></p>
          <div className="flex items-center space-x-4 text-gray-600">
            <AiOutlineSearch className="hover:text-red-500 text-xl" />
            <BiCart className="hover:text-red-500 text-xl" />
          </div>
        </div>
      </div>

      {/* Navigasi */}
      <div className="w-full px-6 py-4 bg-white shadow flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-gray-700 flex space-x-4">
          <a href="/login" className="hover:text-green-600">Login</a>
          <span>/</span>
          <a href="/register" className="hover:text-green-600">Register</a>
        </div>

        <ul className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 text-sm font-medium text-gray-700">
          <li><a href="/" className="hover:text-green-600">Home</a></li>
          <li><a href="/about" className="hover:text-green-600">About</a></li>
          <li><a href="/shop" className="hover:text-green-600">Shop</a></li>
          <li><a href="/news" className="hover:text-green-600">News</a></li>
          <li><a href="/contact" className="hover:text-green-600">Contact</a></li>
          <li><a href="/cekAnggota" className="hover:text-green-600">Cek Anggota</a></li>
        </ul>
      </div>
    </div>
  );
}
