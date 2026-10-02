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
  } = useLanguage();

  return (
    <nav
      className={styles.switcher}
      aria-label="Language"
    >
      {languageOptions.map(
        (language) => (
          <button
            type="button"
            key={language.code}
            className={
              locale ===
              language.code
                ? styles.active
                : ""
            }
            onClick={() =>
              setLocale(
                language.code
              )
            }
            aria-pressed={
              locale ===
              language.code
            }
          >
            {language.short}
          </button>
        )
      )}
    </nav>
  );
}