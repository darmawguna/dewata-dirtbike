import React from "react";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpg";

const images = [gallery1, gallery2, gallery3, gallery4];

const GallerySection = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 ring-1 ring-orange-100">
            Our Moments
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-orange-500">
            Gallery
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500/80" />
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {images.map((src, idx) => (
            <figure
              key={idx}
              className="
                group relative overflow-hidden rounded-xl
                ring-1 ring-gray-200 bg-white shadow-md
                transition-all duration-300
                hover:ring-orange-500 hover:shadow-[0_10px_24px_rgba(249,115,22,0.25)]
              "
            >
              <img
                src={src}
                alt={`gallery-${ idx + 1 }`}
                loading="lazy"
                decoding="async"
                className="
                  block w-full aspect-[4/5] object-cover
                  transition-transform duration-300 group-hover:scale-105
                "
              />
              {/* subtle orange overlay on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </figure>
          ))}
        </div>

        {/* CTA opsional */}
        {/* <div className="mt-10 text-center">
          <a href="#gallery" className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600">
            View More
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default GallerySection;
