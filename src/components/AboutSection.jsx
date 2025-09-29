import React from "react";
import aboutImg from "/assets/brush.png";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:flex md:items-center md:gap-10">
        {/* Image */}
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="about"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="flex-1 mt-10 md:mt-0">
          <h2 className="text-4xl font-bold text-green-700 mb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Dewata Dirt Bike is your ultimate adventure partner in Bali. 
            With professional guides and top-quality dirt bikes, 
            we offer tours that explore Bali’s most hidden trails, 
            rice fields, and jungles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
