import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TourSection from "./components/TourSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navigation";


function App() {
  return (
    <div className="overflow-hidden font-sans">
      <Navbar
        items={[
          { key: "home", href: "#" },
          { key: "bikes", href: "#bikes" },
          { key: "about", href: "#about" },
        ]}
      />

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
