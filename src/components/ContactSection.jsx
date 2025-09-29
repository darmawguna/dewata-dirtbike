import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 ring-1 ring-orange-100">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Contact Us
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500/80" />
          <p className="mt-4 text-gray-600">
            Ready to ride? Get in touch to book your next dirt bike adventure.
          </p>
        </div>

        {/* Card Form */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-6 sm:p-8 shadow-[0_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-gray-100">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your plan…"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
