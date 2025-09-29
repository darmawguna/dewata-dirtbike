import React from "react";
import aboutImg from "../assets/gallery2.jpg";

const AboutSection = () => {
  return (
    <section className="bg-white pt-4 pb:12 sm:pt-6 sm:pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="order-1 md:order-1 flex justify-center md:justify-start">
            <div className="relative inline-block overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <img
                src={aboutImg}
                alt="Professional motorbike tours in Bali"
                className="block w-full h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="order-2 md:order-2">
            <p className="text-sm font-medium text-gray-400">
              High Quality Motorbike Only for You
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl lg:text-[28px] font-extrabold tracking-tight uppercase text-orange-500">
              Professional Motorbike Rental in Bali
            </h2>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-gray-700">
              <p>Explore Bali with Ease on Two Wheels!</p>
              <p>
                Discover Bali’s hidden gems and scenic routes at your own pace. Our motorbike rentals are
                perfect for all levels of riders – from beginners to experienced explorers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
