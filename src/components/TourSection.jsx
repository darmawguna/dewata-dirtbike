import React from "react";
import tour1 from "/assets/tour1.jpg";
import tour2 from "/assets/tour2.jpg";
import tour3 from "/assets/tour3.jpeg";

const tours = [
  { id: 1, title: "Beginner Trail", desc: "Perfect for new riders exploring Bali’s countryside.", img: tour1 },
  { id: 2, title: "Intermediate Ride", desc: "A balanced adventure through rice fields and hills.", img: tour2 },
  { id: 3, title: "Extreme Jungle", desc: "For experienced riders seeking adrenaline rush.", img: tour3 },
];

const TourSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-12">Our Tours</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img src={tour.img} alt={tour.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{tour.title}</h3>
                <p className="mt-3 text-gray-600">{tour.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourSection;
