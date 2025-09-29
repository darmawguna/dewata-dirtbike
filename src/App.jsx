import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TourSection from "./components/TourSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="overflow-hidden font-sans">
      <HeroSection />
      <AboutSection />
      <TourSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
