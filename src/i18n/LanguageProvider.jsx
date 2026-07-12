"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { LANGS, translations } from "./translations";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

let currentLang = null;
const listeners = new Set();

function getSnapshot() {
  if (currentLang === null) {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("language") : null;
    currentLang = stored && LANGS.includes(stored) ? stored : "en";
  }
  return currentLang;
}

function getServerSnapshot() {
  return "en";
}

function subscribe(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setLanguage(next) {
  if (!LANGS.includes(next)) return;
  currentLang = next;
  if (typeof window !== "undefined") {
    localStorage.setItem("language", next);
  }
  listeners.forEach((l) => l());
}

export function LanguageProvider({ children }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const t = (key) => {
    const dict = translations[lang] || translations.en;
    return dict[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
