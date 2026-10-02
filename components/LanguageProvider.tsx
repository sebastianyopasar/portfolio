"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  homeCopy,
  type Locale,
} from "@/lib/homeTranslations";

type LanguageContextValue = {
  locale: Locale;

  setLocale: (
    locale: Locale
  ) => void;

  copy:
    (typeof homeCopy)[Locale];
};

const LanguageContext =
  createContext<LanguageContextValue | null>(
    null
  );

const STORAGE_KEY =
  "sebastian-portfolio-language";

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [locale, setLocaleState] =
    useState<Locale>("en");

  useEffect(() => {
    const saved =
      window.localStorage.getItem(
        STORAGE_KEY
      );

    if (
      saved === "en" ||
      saved === "fr" ||
      saved === "es"
    ) {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang =
      locale;
  }, [locale]);

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      setLocaleState(nextLocale);

      window.localStorage.setItem(
        STORAGE_KEY,
        nextLocale
      );
    },
    []
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      copy: homeCopy[locale],
    }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider
      value={value}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context =
    useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}