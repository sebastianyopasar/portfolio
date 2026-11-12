"use client";

import { useEffect, useRef, useState } from "react";
import { languageOptions, type Locale } from "@/lib/homeTranslations";
import { useLanguage } from "./LanguageProvider";
import styles from "./IntroExperience.module.css";

type Stage = "ready" | "cover" | "reveal";
const STORAGE_KEY = "sebastian-portfolio-language";

export default function IntroExperience() {
  const { setLocale } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [stage, setStage] = useState<Stage>("ready");
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const activeTimers = timers.current;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "fr" || saved === "es") {
      activeTimers.push(window.setTimeout(() => setVisible(false), 0));
    }
    return () => { activeTimers.forEach((timer) => window.clearTimeout(timer)); };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [visible]);

  const choose = (language: Locale) => {
    if (stage !== "ready") return;
    setLocale(language);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setVisible(false); return; }
    setStage("cover");
    timers.current.push(window.setTimeout(() => setStage("reveal"), 790));
    timers.current.push(window.setTimeout(() => setVisible(false), 1550));
  };

  if (!visible) return null;

  return (
    <div className={`${styles.overlay} ${styles[stage]}`} role="dialog" aria-modal="true" aria-label="Choose portfolio language">
      <div className={styles.shell}>
        <div className={styles.left}>
          <span className={styles.name}>Sebastián Yopasá<span>.</span></span>
          <div className={styles.introCopy}>
            <h2>Different ideas.<br /><span>One way of thinking.</span></h2>
            <p>Digital products, thoughtful interfaces and experiences made to work.</p>
          </div>
          <span className={styles.corner} aria-hidden="true">SY / 2026</span>
        </div>
        <div className={styles.right}>
          <h3>Where should<br />we begin?</h3>
          <p className={styles.hint}>Choose your language / Choisissez votre langue / Elige tu idioma</p>
          <div className={styles.languages} role="group" aria-label="Portfolio language">
            {languageOptions.map((lang) => (
              <button key={lang.code} type="button" disabled={stage !== "ready"} onClick={() => choose(lang.code)}>
                <span className={styles.languageName}>{lang.label}</span>
                <span className={styles.languageArrow} aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.curtainCoral} aria-hidden="true" />
      <div className={styles.curtainBlue} aria-hidden="true" />
    </div>
  );
}
