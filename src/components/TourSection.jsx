import React from "react";
import tour1 from "../assets/tour1.jpeg";
import tour2 from "../assets/tour2.jpeg";
import tour3 from "../assets/tour3.jpeg";

const tours = [
  {
    id: 1,
    title: "Beginner Trail",
    desc: "Perfect for new riders exploring Bali’s countryside.",
    img: tour1,
    meta: "Easy • 2–3 hrs",
  },
  {
    id: 2,
    title: "Intermediate Ride",
    desc: "A balanced adventure through rice fields and hills.",
    img: tour2,
    meta: "Moderate • 3–4 hrs",
  },
  {
    id: 3,
    title: "Extreme Jungle",
    desc: "For experienced riders seeking adrenaline rush.",
    img: tour3,
    meta: "Hard • 4–6 hrs",
  },
];

const TourSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 ring-1 ring-orange-100">
            Choose Your Adventure
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-orange-500">
            Our Tours
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500/80" />
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-3">
          {tours.map((tour) => (
            <article
              key={tour.id}
              className="
                group overflow-hidden rounded-2xl bg-white
                ring-1 ring-gray-200 shadow-md transition
                hover:ring-orange-500 hover:shadow-[0_10px_24px_rgba(249,115,22,0.25)]
              "
            >
              <figure className="relative">
                <img
                  src={tour.img}
                  alt={tour.title}
                  className="block h-56 w-full object-cover sm:h-60 md:h-64"
                  loading="lazy"
                  decoding="async"
                />
                {/* subtle overlay & label */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute left-3 top-3 rounded-full bg-orange-500/90 px-3 py-1 text-xs font-semibold text-white shadow">
                  {tour.meta}
                </span>
              </figure>

              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {tour.title}
                </h3>
                <p className="mt-3 text-gray-600">{tour.desc}</p>

                <div className="mt-5 flex items-center justify-between">
                  <a
                    href="#booking"
                    className="inline-flex items-center rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  >
                    Book Now
                  </a>
                  <a
                    href="#details"
                    className="text-sm font-medium text-orange-600 hover:text-orange-700"
                  >
                    Details →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourSection;
