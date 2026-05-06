import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";
import { translations, type Lang } from "../i18n/translations";

type TFunc = (key: string, params?: Record<string, string | number>) => string;

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: TFunc;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function interpolate(str: string, params: Record<string, string | number>): string {
  return str.replace(/\{\{(\w+)\}\}/g, (_, key) => String(params[key] ?? `{{${key}}}`));
}

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem("lang");
    if (stored === "fr" || stored === "en") return stored;
  } catch {
    // localStorage unavailable
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      // ignore
    }
  }, []);

  const t: TFunc = useCallback(
    (key, params) => {
      const dict = translations[lang];
      const str = dict[key as keyof typeof dict] ?? translations.en[key as keyof typeof translations.en] ?? key;
      return params ? interpolate(str, params) : str;
    },
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
