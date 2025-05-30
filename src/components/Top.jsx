import { AiOutlineStar } from "react-icons/ai"; 
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { AiFillHeart } from "react-icons/ai"; 
import { GiFruitBowl } from "react-icons/gi"; 
import React, { useState } from "react";
import data from "../product.json";

export default function Top() {
  const { filters, products } = data;
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div>
      <section className="relative bg-white py-16">
        <img
          src="img/food.png"
          alt=""
          className="absolute top-0 left-0"
        />
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <div className="mb-2 h-1 w-12 mx-auto bg-green-500"></div>
            <p className="text-green-600">Recently Added</p>
            <h3 className="text-3xl font-bold">New Products</h3>
          </div>

          <ul className="flex justify-center gap-4 flex-wrap mb-10">
            {filters.map((filter) => (
              <li
                key={filter.value}
                className={`cursor-pointer px-4 py-2 rounded-md text-sm font-medium ${
                  activeFilter === filter.value
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative">
                  {product.sale && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      Sale
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute bottom-2 right-2 flex gap-2">
                    <button className="bg-white p-1 rounded-full shadow">
                      <GiFruitBowl />
                    </button>
                    <button className="bg-white p-1 rounded-full shadow">
                      <AiFillHeart />
                    </button>
                    <button className="bg-white p-1 rounded-full shadow">
                      <AiOutlineShoppingCart />
                    </button>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">
                    <a
                      href="product-details.html"
                      className="hover:text-green-600"
                    >
                      {product.name}
                    </a>
                  </h3>
                  <div className="flex justify-center text-yellow-400 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i key={i} ><AiOutlineStar /></i> 
                    ))}
                  </div>
                  <p className="text-gray-700 font-bold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
