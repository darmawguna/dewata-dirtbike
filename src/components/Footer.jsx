// src/components/Footer.jsx
import React from "react";
import { useI18n } from "../i18n/I18nProvider";

const SOCIAL_USERNAME = "Ridewithdewata";

const socials = [
  { key: "Instagram", href: `https://www.instagram.com/ridewithdewata?igsh=c3R2Y3Vqcmg1aHNt`, Icon: InstagramIcon },
];

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-gray-300 text-center md:text-left">
            &copy; {year} <span className="font-semibold">Dewata Dirt Bike</span>. {t("footer.rights")}
          </p>

          <nav aria-label="social links" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {socials.map(({ key, href, Icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-gray-300 hover:text-orange-500 transition"
                title={`${ key } @${ SOCIAL_USERNAME }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="text-sm">{key}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 h-px w-full bg-white/10" />
        <div className="mt-4 text-center text-xs text-gray-400">
          {t("footer.built")}
        </div>
      </div>
    </footer>
  );
}

/* ============================
   Inline SVG Icons (currentColor)
   ============================ */

function InstagramIcon({ className = "" }) {
  // simple glyph approximating Instagram logo
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.6"></rect>
      <circle cx="12" cy="12" r="3.8" strokeWidth="1.6"></circle>
      <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none"></circle>
    </svg>
  );
}

function FacebookIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M22 12.06C22 6.52 17.52 2 12 2S2 6.52 2 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.22.19 2.22.19v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.91h-2.32V22c4.78-.81 8.44-4.95 8.44-9.94z" />
    </svg>
  );
}

function TikTokIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M21 8.5a6.9 6.9 0 0 1-4.82-2.01V16a5.5 5.5 0 1 1-5.5-5.5c.24 0 .48.02.71.06v2.77a2.8 2.8 0 1 0 2.8 2.8V2.5h2.75c.2.89.66 1.71 1.31 2.37A4.2 4.2 0 0 0 21 6.5v2z" />
    </svg>
  );
}

function YouTubeIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M23.5 7.2a4 4 0 0 0-2.8-2.8C18.7 4 12 4 12 4s-6.7 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.3 20 12 20 12 20s6.7 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.8 15.5V8.5l6.1 3.5-6.1 3.5z" />
    </svg>
  );
}

function XIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M18.9 2H22l-7.7 8.8L22.7 22h-7.1l-5.1-6.8-5.8 6.8H2l8.2-9.6L1.6 2h7.2l4.6 6.2L18.9 2zM17 19.6h1.9L8.1 4.3H6.1L17 19.6z" />
    </svg>
  );
}
