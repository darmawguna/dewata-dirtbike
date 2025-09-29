import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Dewata Dirt Bike. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="wa.me/+6285829292919" className="hover:underline">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
