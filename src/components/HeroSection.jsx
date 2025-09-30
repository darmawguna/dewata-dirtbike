// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "../i18n/I18nProvider";
import heroBike from "../assets/hero-bike.jpg"; // ganti jika pakai aset lain

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="bg-white pt-6 sm:pt-10 pb-14 sm:pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Kartu hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[28px] shadow-[0_10px_24px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
        >
          {/* Gambar */}
          <picture>
            <motion.img
              src={heroBike}
              alt="Dewata Dirt Bike Tour"
              loading="eager"
              decoding="async"
              className="w-full h-[58vh] sm:h-[62vh] lg:h-[68vh] object-cover"
              initial={{ scale: 1.04 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </picture>

          {/* Overlay supaya teks kontras */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/25 to-transparent"
            aria-hidden="true"
          />

          {/* Teks judul kiri */}
          <div className="absolute inset-x-0 bottom-0 sm:inset-y-0 sm:flex sm:items-center">
            <div className="px-5 sm:px-8 lg:px-12 pb-6 sm:pb-0 max-w-[46rem]">
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-white font-extrabold tracking-tight text-[1.6rem] leading-tight sm:text-4xl md:text-[2.75rem] lg:text-[3rem] drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
              >
                <span className="block">{t("hero.title1")}</span>
                <span className="block">{t("hero.title2")}</span>
              </motion.h1>

              {/* Subjudul opsional (i18n) */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-3 text-white/90 text-sm sm:text-base"
              >
                {t("hero.subtitle")}
              </motion.p>
            </div>
          </div>

          {/* Dekor lembut (opsional) */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-20 w-20 rounded-full bg-black/5 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
