import React from "react";
import gallery1 from "/assets/gallery1.jpg";
import gallery2 from "/assets/gallery2.jpg";
import gallery3 from "/assets/gallery3.jpg";
import gallery4 from "/assets/gallery4.jpg";

const GallerySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-12">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[gallery1, gallery2, gallery3, gallery4].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`gallery-${idx}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
