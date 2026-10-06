"use client";

import {
  languageOptions,
} from "@/lib/homeTranslations";

import {
  useLanguage,
} from "./LanguageProvider";

import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const {
    locale,
    setLocale,
    copy,
  } =
    useLanguage();

  return (
    <nav
      className={
        styles.switcher
      }
      aria-label={
        copy.ui.languageLabel
      }
    >
      {languageOptions.map(
        (language) => {
          const isActive =
            locale ===
            language.code;

          return (
            <button
              type="button"
              key={
                language.code
              }
              className={
                isActive
                  ? styles.active
                  : ""
              }
              onClick={() =>
                setLocale(
                  language.code
                )
              }
              aria-pressed={
                isActive
              }
              aria-label={`${copy.ui.useLanguage} ${language.label}`}
              title={
                language.label
              }
              lang={
                language.code
              }
            >
              {
                language.short
              }
            </button>
          );
        }
      )}
    </nav>
  );
}