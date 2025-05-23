import React, { useEffect, useRef, useState } from "react";
import Header2 from "../components/Header2";
import CountUp from "react-countup";
import Footer from "../components/Footer";
import About from "../components/About";
import About2 from "../components/About2";
import Testi from "../components/Testi";
import Hero from "../components/Hero";
import Top from "../components/Top";

export default function GuestLayout() {
  // Banner
  const banners = [
    {
      id: 1,
      image: "img/sayuran.png",
      title: "100%",
      subtitle: "Organic",
      description: "Quality Organic Food Store",
    },
    {
      id: 2,
      image: "img/buahan.png",
      title: "100%",
      subtitle: "Organic",
      description: "Quality Organic Food Store",
    },
  ];

  // Facts untuk CountUp
  const facts = [
    {
      id: 1,
      value: 8080,
      label: "Organic Products Available",
    },
    {
      id: 2,
      value: 697,
      label: "Healthy Recipes",
    },
    {
      id: 3,
      value: 440,
      label: "Expert Team Members",
    },
    {
      id: 4,
      value: 2870,
      label: "Satisfied Customers",
    },
  ];

  // Brand logos scroll
  const brandLogos = Array(20).fill("img/food.png");
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <div id="main-content" className="flex-1 p-4">
          <Header2 />
          <Hero />
          <Top />

          {/* Banner Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-8">
                {banners.map((banner) => (
                  <div
                    key={banner.id}
                    className="w-full md:w-1/2 relative h-80 rounded-xl bg-cover bg-center flex items-center justify-center text-white"
                    style={{ backgroundImage: `url(${banner.image})` }}
                  >
                    <div className="bg-black/50 p-6 rounded-xl text-center">
                      <h3 className="text-4xl font-bold leading-tight">
                        <span>{banner.title}</span> <br /> {banner.subtitle}
                      </h3>
                      <p className="mt-2 mb-4 text-sm">{banner.description}</p>
                      <a className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold text-sm">
                        Order Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Facts Section */}
          <section
            className="relative py-20 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('img/food.png')" }}
          >
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="relative z-10 container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
                {facts.map((fact) => (
                  <div key={fact.id} className="animate-fade-in-up">
                    <div className="text-4xl font-extrabold">
                      <CountUp end={fact.value} duration={2} separator="," />
                    </div>
                    <p className="mt-2 text-sm md:text-base">{fact.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <About />

          {/* Brand Logo Scroller */}
          <div className="py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
              <div ref={scrollRef} className="flex space-x-10 overflow-hidden">
                {brandLogos.map((src, index) => (
                  <div key={index} className="flex-shrink-0 w-40">
                    <div className="flex items-center justify-center mb-6">
                      <h1 className="text-4xl font-rubik-variableFont_wght font-extrabold text-gray-800">
                        <span className="text-black">Sedap</span>
                        <span className="text-green-500">.</span>
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <About2 />
          <Testi />
          <Footer />
        </div>
      </div>
    </div>
  );
}
