"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  languageOptions,
  type Locale,
} from "@/lib/homeTranslations";

import {
  useLanguage,
} from "./LanguageProvider";

import styles from "./IntroExperience.module.css";

type Stage =
  | "intro"
  | "language"
  | "exit";

export default function IntroExperience() {
  const {
    locale,
    setLocale,
  } = useLanguage();

  const [stage, setStage] =
    useState<Stage>("intro");

  const [visible, setVisible] =
    useState(true);

  useEffect(() => {
    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reducedMotion) {
      setStage("language");

      return;
    }

    const timer =
      window.setTimeout(() => {
        setStage("language");
      }, 1050);

    return () =>
      window.clearTimeout(timer);
  }, []);

  const enter = (
    selectedLocale: Locale
  ) => {
    setLocale(selectedLocale);

    setStage("exit");

    window.setTimeout(() => {
      setVisible(false);
    }, 650);
  };

  if (!visible) return null;

  return (
    <div
      className={`${styles.overlay} ${
        styles[stage]
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Choose portfolio language"
    >
      <div className={styles.grid}>
        <div className={styles.identity}>
          <div
            className={styles.monogram}
            aria-hidden="true"
          >
            <span>S</span>

            <span>Y</span>
          </div>

          <div className={styles.signal}>
            <i />

            <span>
              UX/UI DESIGNER
            </span>

            <i />

            <span>
              WHO ALSO BUILDS
            </span>
          </div>
        </div>

        <div className={styles.languageArea}>
          <p className={styles.languageTitle}>
            Language · Langue · Idioma
          </p>

          <div
            className={styles.languages}
            aria-label="Select language"
          >
            {languageOptions.map(
              (language) => (
                <button
                  key={language.code}
                  type="button"
                  className={
                    locale ===
                    language.code
                      ? styles.activeLanguage
                      : ""
                  }
                  onClick={() =>
                    enter(
                      language.code
                    )
                  }
                >
                  <span>
                    {
                      language.short
                    }
                  </span>

                  <strong>
                    {
                      language.label
                    }
                  </strong>

                  <i>
                    →
                  </i>
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}