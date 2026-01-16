"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "@/lib/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (path: string): string => {
    const keys = path.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[language];

    for (const key of keys) {
      if (value === undefined) return path;
      value = value[key];
    }

    return (value as string) || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
