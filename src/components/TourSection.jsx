// src/components/TourSection.jsx
import React from "react";
import { useI18n } from "../i18n/I18nProvider";
import tour1 from "../assets/tour1.jpeg";
import tour2 from "../assets/tour2.jpeg";
import tour3 from "../assets/tour3.jpeg";

export default function TourSection() {
  const { t } = useI18n();
  // items berisi array { title, meta, desc } dari translations
  const items = t("tours.items");
  const imgs = [tour1, tour2, tour3];

  return (
    <section id="bikes" className="bg-white py-16 sm:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 ring-1 ring-orange-100">
            {t("tours.badge")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-orange-500">
            {t("tours.title")}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500/80" />
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-3">
          {items.map((tour, i) => (
            <article
              key={tour.title}
              className="
                group overflow-hidden rounded-2xl bg-white
                ring-1 ring-gray-200 shadow-md transition
                hover:ring-orange-500 hover:shadow-[0_10px_24px_rgba(249,115,22,0.25)]
              "
            >
              <figure className="relative">
                <img
                  src={imgs[i]}
                  alt={tour.title}
                  loading="lazy"
                  decoding="async"
                  className="block h-56 w-full object-cover sm:h-60 md:h-64"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {tour.meta && (
                  <span className="absolute left-3 top-3 rounded-full bg-orange-500/90 px-3 py-1 text-xs font-semibold text-white shadow">
                    {tour.meta}
                  </span>
                )}
              </figure>

              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {tour.title}
                </h3>
                <p className="mt-3 text-gray-600">{tour.desc}</p>

                <div className="mt-5 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  >
                    {t("tours.book")}
                  </a>
                  <a
                    href="#details"
                    className="text-sm font-medium text-orange-600 hover:text-orange-700"
                  >
                    {t("tours.details")}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
