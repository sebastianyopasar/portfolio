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
  | "cover"
  | "reveal";

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
      }, 950);

    return () =>
      window.clearTimeout(timer);
  }, []);

  const enter = (
    selectedLocale: Locale
  ) => {
    setLocale(selectedLocale);

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reducedMotion) {
      setVisible(false);
      return;
    }

    /*
      PHASE 1
      The angled curtain rises
      from the bottom and covers
      the language experience.
    */

    setStage("cover");

    /*
      PHASE 2
      Once the screen is covered,
      the curtain continues upward
      and reveals the portfolio.
    */

    window.setTimeout(() => {
      setStage("reveal");
    }, 620);

    /*
      Remove the intro completely
      after the reveal finishes.
    */

    window.setTimeout(() => {
      setVisible(false);
    }, 1370);
  };

  if (!visible) return null;

  const transitionLocked =
    stage === "cover" ||
    stage === "reveal";

  return (
    <div
      className={`${styles.overlay} ${styles[stage]}`}
      role="dialog"
      aria-modal="true"
      aria-label="Choose portfolio language"
    >
      <div className={styles.grid}>
        {/* =========================================
            IDENTITY
        ========================================== */}

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

        {/* =========================================
            LANGUAGE
        ========================================== */}

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
                  disabled={transitionLocked}
                  className={
                    locale === language.code
                      ? styles.activeLanguage
                      : ""
                  }
                  onClick={() =>
                    enter(language.code)
                  }
                >
                  <span>
                    {language.short}
                  </span>

                  <strong>
                    {language.label}
                  </strong>

                  <i aria-hidden="true">
                    →
                  </i>
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* =========================================
          SINGLE ANGLED CURTAIN
      ========================================== */}

      <div
        className={styles.curtain}
        aria-hidden="true"
      >
        <div
          className={styles.curtainTexture}
        />

        <span
          className={styles.curtainStamp}
        >
          SY / PORTFOLIO
        </span>
      </div>
    </div>
  );
}