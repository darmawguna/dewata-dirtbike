import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function useOnClickOutside(refs, handler) {
    useEffect(() => {
        const listener = (event) => {
            const arr = Array.isArray(refs) ? refs : [refs];
            if (arr.some((r) => r?.current && r.current.contains(event.target))) return;
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [refs, handler]);
}

const FlagEN = (props) => (
    <svg viewBox="0 0 60 30" className="h-4 w-6" aria-hidden="true" {...props}>
        <clipPath id="t"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
        <clipPath id="s"><path d="M30,15 h30 v15 z v-30 H0 v30 z" /></clipPath>
        <g clipPath="url(#t)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#s)" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
    </svg>
);

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

export default function Navbar({ logoSrc, items = [], onBookNow, initialLang = "EN" }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [lang, setLang] = useState(initialLang);

    const langRef = useRef(null);
    useOnClickOutside(langRef, () => setLangOpen(false));

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

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
            <div className="border-t-4 border-orange-500" />
            <nav className="w-full px-4 sm:px-6 lg:px-10">
                <div className="flex h-16 items-center justify-between">
                    <a href="#" className="flex items-center gap-2">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-gray-200 overflow-hidden">
                            {logoSrc ? (
                                <img src={logoSrc} alt="Logo" className="h-full w-full object-cover" />
                            ) : (
                                <span className="text-xs">LOGO</span>
                            )}
                        </span>
                        <span className="sr-only">Go to homepage</span>
                    </a>

                    <div className="hidden lg:flex items-center gap-6">
                        <div className="relative" ref={langRef}>
                            <button
                                onClick={() => setLangOpen((v) => !v)}
                                aria-haspopup="listbox"
                                aria-expanded={langOpen}
                                className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium ring-1 ring-gray-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                            >
                                <FlagEN />
                                <span>{lang}</span>
                                <svg className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {langOpen && (
                                    <motion.div
                                        key="lang-menu"
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={dropdownVariants}
                                        className="absolute left-0 mt-2 w-44 rounded-lg border border-gray-200 bg-white shadow-lg"
                                    >
                                        {[
                                            { code: "EN", label: "English" },
                                            { code: "ID", label: "Bahasa Indonesia" },
                                            { code: "FR", label: "Français" },
                                        ].map((opt) => (
                                            <button
                                                key={opt.code}
                                                role="option"
                                                aria-selected={lang === opt.code}
                                                className={`flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 ${ lang === opt.code ? "bg-gray-50" : "" }`}
                                                onClick={() => {
                                                    setLang(opt.code);
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
                        <div className="flex items-center gap-6 text-sm font-medium">
                            {items.map((it) => (
                                <a key={it.label} href={it.href} className="hover:text-gray-600">
                                    {it.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={onBookNow}
                            className="hidden sm:inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        >
                            BOOK NOW
                        </button>
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

            <AnimatePresence initial={false}>
                {mobileOpen && (
                    <motion.div
                        id="mobile-menu"
                        key="mobile-menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileVariants}
                        className="lg:hidden overflow-hidden"
                    >
                        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 pb-3">
                            <div className="flex items-center justify-between py-2">
                                <div className="relative w-full" ref={langRef}>
                                    <button
                                        onClick={() => setLangOpen((v) => !v)}
                                        className="w-full inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium ring-1 ring-gray-200 hover:bg-gray-50"
                                    >
                                        <span className="h-4 w-6 bg-gray-200 inline-block rounded-sm" />
                                        <span>{lang}</span>
                                        <svg className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <AnimatePresence>
                                        {langOpen && (
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                variants={dropdownVariants}
                                                className="absolute left-0 right-0 mt-2 rounded-lg border border-gray-200 bg-white shadow-lg"
                                            >
                                                {[
                                                    { code: "EN", label: "English" },
                                                    { code: "ID", label: "Bahasa Indonesia" },
                                                    { code: "FR", label: "Français" },
                                                ].map((opt) => (
                                                    <button
                                                        key={opt.code}
                                                        className={`w-full px-3 py-2 text-sm hover:bg-gray-50 text-left ${ lang === opt.code ? "bg-gray-50" : "" }`}
                                                        onClick={() => {
                                                            setLang(opt.code);
                                                            setLangOpen(false);
                                                        }}
                                                    >
                                                        {opt.label}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                            <div className="space-y-1 border-t border-gray-100 pt-2">
                                {items.map((it) => (
                                    <a key={it.label} href={it.href} className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-50">
                                        {it.label}
                                    </a>
                                ))}
                                <button
                                    onClick={onBookNow}
                                    className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
                                >
                                    BOOK NOW
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
