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
        logoSrc="/logo.png"
        items={[
          { label: "HOME", href: "#" },
          { label: "OUR BIKES", href: "#bikes" },
          { label: "ABOUT US", href: "#about" },
        ]}
        onBookNow={() => alert("Booking!")}
        initialLang="EN"
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
