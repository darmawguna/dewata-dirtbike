import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import translations from "./translations";

// helper: deteksi default language
function detectInitialLang() {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
    const nav = navigator.language?.toLowerCase() || "en";
    return nav.startsWith("id") ? "id" : "en";
}

const I18nContext = createContext({
    lang: "en",
    setLang: () => { },
    t: (key, vars) => key,
});

export function I18nProvider({ children }) {
    const [lang, setLang] = useState(detectInitialLang());

    useEffect(() => {
        localStorage.setItem("lang", lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const t = useMemo(() => {
        const dict = translations[lang] || {};
        const resolver = (key, vars = {}) => {
            const parts = key.split(".");
            let cur = dict;
            for (const p of parts) {
                cur = cur?.[p];
                if (cur === undefined) return key; // fallback tampilkan key kalau miss
            }
            if (typeof cur === "string") {
                return cur.replace(/\{\{(.*?)\}\}/g, (_, k) => String(vars[k.trim()] ?? ""));
            }
            return cur;
        };
        return resolver;
    }, [lang]);

    const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
    return useContext(I18nContext);
}
