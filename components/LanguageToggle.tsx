"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`p-1 rounded-sm transition-all ${
          language === "en" ? "opacity-100 ring-2 ring-primary" : "opacity-50 hover:opacity-100"
        }`}
        aria-label="Switch to English"
        title="English"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 30"
          width="30"
          height="15"
          className="shadow-sm border border-gray-200"
        >
          <rect width="60" height="30" fill="#012169" />
          <path
            d="M0,0 L60,30 M60,0 L0,30"
            stroke="#fff"
            strokeWidth="6"
          />
          <path
            d="M0,0 L60,30 M60,0 L0,30"
            stroke="#C8102E"
            strokeWidth="4"
          />
          <path
            d="M30,0 L30,30 M0,15 L60,15"
            stroke="#fff"
            strokeWidth="10"
          />
          <path
            d="M30,0 L30,30 M0,15 L60,15"
            stroke="#C8102E"
            strokeWidth="6"
          />
        </svg>
      </button>

      <button
        onClick={() => setLanguage("de")}
        className={`p-1 rounded-sm transition-all ${
          language === "de" ? "opacity-100 ring-2 ring-primary" : "opacity-50 hover:opacity-100"
        }`}
        aria-label="Switch to German"
        title="Deutsch"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 30"
          width="30"
          height="15"
          className="shadow-sm border border-gray-200"
        >
          <rect width="50" height="30" fill="#FFCC00" />
          <rect width="50" height="20" fill="#DD0000" />
          <rect width="50" height="10" fill="#000000" />
        </svg>
      </button>
    </div>
  );
}
