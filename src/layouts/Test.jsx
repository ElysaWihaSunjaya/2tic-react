import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

export default function Test() {
  // fitur slider fitur (features)
  const features = [
    {
      icon: "organik-icon-online-store",
      title: "Store Locator",
      description: "Find your nearest store",
    },
    {
      icon: "organik-icon-global-shipping",
      title: "Return Policy",
      description: "Money back guarantee",
    },
    {
      icon: "organik-icon-delivery-truck",
      title: "Free Shipping",
      description: "On all orders over $25.00",
    },
  ];

  const [current, setCurrent] = useState(0);
  const total = features.length;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(autoSlide);
  }, [total]);

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  // banner
  const banners = [
    {
      id: 1,
      image: "assets/images/resources/offer-banner-1-1.jpg",
      title: "100%",
      subtitle: "Organic",
      description: "Quality Organic Food Store",
    },
    {
      id: 2,
      image: "assets/images/resources/offer-banner-1-2.jpg",
      title: "100%",
      subtitle: "Organic",
      description: "Quality Organic Food Store",
    },
  ];

  // facts untuk CountUp
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

  // brand logos scroll
  const brandLogos = Array(20).fill("assets/images/resources/brand-1-1.png");
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
    <div>
      {/* Feature Box */}
      <section className="feature-box py-12 bg-white">
        <div className="container mx-auto px-4">
          <div
            id="contact-infos-box"
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)`, width: `${total * 100}%` }}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                className="feature-box__single flex-shrink-0 w-full md:w-1/3 px-4"
              >
                <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow">
                  <i className={`${feature.icon} feature-box__icon text-4xl mb-4 text-green-600`}></i>
                  <div className="feature-box__content">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="tns-controls absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button
              type="button"
              aria-controls="contact-infos-box"
              aria-label="Previous"
              onClick={prev}
              className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
            >
              <i className="fa fa-angle-left"></i>
            </button>
            <button
              type="button"
              aria-controls="contact-infos-box"
              aria-label="Next"
              onClick={next}
              className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
            >
              <i className="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
      </section>

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
                  <a
                    href="products.html"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold text-sm"
                  >
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
        style={{ backgroundImage: "url('assets/images/backgrounds/funfact-bg-1-1.jpg')" }}
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

      {/* Brand Logos Scroll */}
      <div className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-10 no-scrollbar"
          >
            {brandLogos.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-40">
                <img src={src} alt={`Brand ${index + 1}`} className="mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
