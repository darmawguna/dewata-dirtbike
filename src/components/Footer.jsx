import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-8">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-gray-300">
            &copy; {year} <span className="font-semibold">Dewata Dirt Bike</span>. All rights reserved.
          </p>

          <nav aria-label="social links" className="flex items-center gap-5">
            <a
              href="#"
              className="text-gray-300 hover:text-orange-500 transition"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-orange-500 transition"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/6285829292919"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition"
            >
              WhatsApp
            </a>
          </nav>
        </div>

        {/* garis tipis pemisah (opsional) */}
        <div className="mt-6 h-px w-full bg-white/10" />
        <div className="mt-4 text-center text-xs text-gray-400">
          Built with ❤️ in Bali
        </div>
      </div>
    </footer>
  );
};

export default Footer;
