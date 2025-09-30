// src/components/GallerySection.jsx
import React from "react";
import { useI18n } from "../i18n/I18nProvider";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpg";

export default function GallerySection() {
  const { t } = useI18n();
  const images = [gallery1, gallery2, gallery3, gallery4];

  return (
    <section id="gallery" className="bg-white py-16 sm:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 ring-1 ring-orange-100">
            {t("gallery.badge")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-orange-500">
            {t("gallery.title")}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500/80" />
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {images.map((src, idx) => (
            <figure
              key={idx}
              className="group relative overflow-hidden rounded-xl ring-1 ring-gray-200 bg-white shadow-md transition-all duration-300 hover:ring-orange-500 hover:shadow-[0_10px_24px_rgba(249,115,22,0.25)]"
            >
              <img
                src={src}
                alt={`gallery-${ idx + 1 }`}
                loading="lazy"
                decoding="async"
                className="block w-full aspect-[4/5] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* overlay hover halus */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
