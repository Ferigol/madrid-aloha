"use client";

import { createContext, useContext, useState } from "react";
import type { Lang } from "@/lib/translations";
import t from "@/lib/translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  tr: (typeof t)["es"] | (typeof t)["en"];
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  tr: t.es,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
