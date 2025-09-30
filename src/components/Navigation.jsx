import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "../i18n/I18nProvider";

/* =========================
   WhatsApp helpers (robust)
   ========================= */
const WHATSAPP_PHONE = "6285829292919"; // format internasional, tanpa '+'

function getBookingTemplate() {
    return (
        "*Dewata Dirt Bike – Booking Request*\n\n" +
        "Name / Nama: \n" +
        "Tour: \n" +
        "Preferred Date / Tanggal: \n" +
        "Rider Count / Jumlah Rider: \n" +
        "Notes / Catatan: \n"
    );
}

function getWhatsAppUrl() {
    const text = getBookingTemplate();
    return `https://api.whatsapp.com/send?phone=${ WHATSAPP_PHONE }&text=${ encodeURIComponent(text) }`;
}

/* ==============
   Motion variants
   ============== */
const dropdownVariants = {
    hidden: { opacity: 0, y: -6, pointerEvents: "none" },
    visible: { opacity: 1, y: 0, pointerEvents: "auto", transition: { duration: 0.15 } },
    exit: { opacity: 0, y: -6, pointerEvents: "none", transition: { duration: 0.12 } },
};
const mobileVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.2 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.18 } },
};

export default function Navbar({ items = [] }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const { lang, setLang, t } = useI18n();

    const langRef = useRef(null);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") {
                setMobileOpen(false);
                setLangOpen(false);
            }
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    // Translasi item navbar
    const legacyMap = {
        HOME: "home",
        "OUR BIKES": "bikes",
        "ABOUT US": "about",
        BERANDA: "home",
        "SEPEDA KAMI": "bikes",
        "TENTANG KAMI": "about",
    };

    function transLabel(item) {
        if (item.key) return t(`nav.${ item.key }`);
        const key = legacyMap[(item.label || "").toUpperCase()];
        if (key) return t(`nav.${ key }`);
        return item.label ?? "";
    }

    const defaultItems = [
        { key: "home", href: "#" },
        { key: "bikes", href: "#bikes" },
        { key: "about", href: "#about" },
    ];
    const navItems = (items.length ? items : defaultItems).map((it) => ({
        ...it,
        label: transLabel(it),
    }));
    const LOGO_PATH = "/Logo.png";

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
            <div className="border-t-4 border-orange-500" />

            <nav className="w-full px-4 sm:px-6 lg:px-10">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-gray-200 overflow-hidden">
                            <img
                                src={LOGO_PATH}
                                alt="Dewata Dirt Bike logo"
                                className="h-full w-full object-cover"
                                loading="eager"
                                decoding="async"
                                // Optional: tambahkan onError untuk debugging
                                onError={(e) => {
                                    console.error("Failed to load logo from:", LOGO_PATH);
                                    e.currentTarget.style.display = "none";
                                }}
                            />
                        </span>
                        <span className="sr-only">Go to homepage</span>
                    </a>

                    {/* Desktop: Language + Links */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Language */}
                        <div className="relative" ref={langRef}>
                            <button
                                onClick={() => setLangOpen((v) => !v)}
                                aria-haspopup="listbox"
                                aria-expanded={langOpen}
                                className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium ring-1 ring-gray-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                            >
                                <span className="h-4 w-6 bg-gray-200 inline-block rounded-sm" />
                                <span className="uppercase">{t("nav.lang")}</span>
                                <svg className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <AnimatePresence>
                                {langOpen && (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={dropdownVariants}
                                        className="absolute left-0 mt-2 w-44 rounded-lg border border-gray-200 bg-white shadow-lg"
                                    >
                                        {[
                                            { code: "EN", v: "en", label: "English" },
                                            { code: "ID", v: "id", label: "Bahasa Indonesia" },
                                        ].map((opt) => (
                                            <button
                                                key={opt.v}
                                                role="option"
                                                aria-selected={lang === opt.v}
                                                className={`flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 ${ lang === opt.v ? "bg-gray-50" : ""
                                                    }`}
                                                onClick={() => {
                                                    setLang(opt.v);
                                                    setLangOpen(false);
                                                }}
                                            >
                                                <span className="h-4 w-6 bg-gray-200 inline-block rounded-sm" />
                                                {opt.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-6 text-sm font-medium">
                            {navItems.map((it) => (
                                <a key={`${ it.href }-${ it.label }`} href={it.href} className="hover:text-gray-600">
                                    {it.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: CTA + Hamburger */}
                    <div className="flex items-center gap-2">
                        <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        >
                            {t("nav.book")}
                        </a>
                        <button
                            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-gray-200 hover:bg-gray-50"
                            aria-controls="mobile-menu"
                            aria-expanded={mobileOpen}
                            aria-label="Toggle menu"
                            onClick={() => setMobileOpen((v) => !v)}
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                {mobileOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                                ) : (
                                    <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence initial={false}>
                {mobileOpen && (
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={mobileVariants} className="lg:hidden overflow-hidden">
                        <div className="w-full px-3 sm:px-6 lg:px-8 pb-3">
                            <div className="space-y-1 border-t border-gray-100 pt-2">
                                {navItems.map((it) => (
                                    <a key={`${ it.href }-${ it.label }-m`} href={it.href} className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-50">
                                        {it.label}
                                    </a>
                                ))}
                                <a
                                    href={getWhatsAppUrl()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
                                >
                                    {t("nav.book")}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
