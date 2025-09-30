// src/components/AboutSection.jsx
import React from "react";
import { useI18n } from "../i18n/I18nProvider";
import aboutImg from "../assets/gallery2.jpg"; // ganti jika perlu

export default function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="bg-white pt-6 sm:pt-8 pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="order-1">
            <div className="relative inline-block overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <img
                src={aboutImg}
                alt="About Dewata Dirt Bike"
                loading="lazy"
                decoding="async"
                className="block w-full h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-2">
            <p className="text-sm font-medium text-gray-400">
              {t("about.eyebrow")}
            </p>

            <h2 className="mt-1 text-2xl sm:text-3xl lg:text-[28px] font-extrabold tracking-tight uppercase text-orange-500">
              {t("about.title")}
            </h2>

            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-gray-700">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>

            {/* Optional: CTA anchor to contact/booking */}
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                {t("nav.book")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
