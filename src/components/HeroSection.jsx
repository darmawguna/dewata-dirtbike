import React from "react";
import { motion } from "framer-motion";
import brush from "/assets/brush.png";
import heroBike from "/assets/hero-bike.JPG";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-white">
      {/* Brush background */}
      <img
        src={brush}
        alt="brush"
        className="absolute top-0 left-0 w-full h-40 object-cover"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-green-700 drop-shadow-lg">
          Dewata Dirt Bike
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Adventure the wild trails of Bali with professional dirt bike tours.
        </p>

        <motion.img
          src={heroBike}
          alt="hero dirt bike"
          className="mx-auto mt-10 max-w-md md:max-w-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
