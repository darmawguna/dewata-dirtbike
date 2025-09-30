// src/components/ContactSection.jsx
import React, { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

const WHATSAPP_PHONE = "6285829292919"; // ganti bila perlu (format internasional, TANPA '+')

export default function ContactSection() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      alert(t("contact.requiredAlert"));
      return;
    }
    setSubmitting(true);

    const text =
      `*${ t("contact.templateTitle") }*` + "\n\n" +
      `*${ t("contact.fieldName") }:* ${ form.name }\n` +
      (form.email ? `*${ t("contact.fieldEmail") }:* ${ form.email }\n` : "") +
      `*${ t("contact.fieldMessage") }:*\n${ form.message }\n`;

    const url = `https://wa.me/${ WHATSAPP_PHONE }?text=${ encodeURIComponent(text) }`;
    const w = window.open(url, "_blank");
    if (!w) window.location.href = url;

    setSubmitting(false);
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 ring-1 ring-orange-100">
            {t("contact.badge")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            {t("contact.title")}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500/80" />
          <p className="mt-4 text-gray-600">
            {t("contact.desc")}
          </p>
        </div>

        {/* Card Form */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-6 sm:p-8 shadow-[0_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-gray-100">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                {t("contact.name")} <span className="text-orange-600">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                placeholder="John Doe"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                {t("contact.email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                {t("contact.message")} <span className="text-orange-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about your plan…"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:opacity-60"
            >
              {submitting ? "Preparing…" : t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
