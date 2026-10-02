"use client";

import {
  useState,
  type ReactNode,
} from "react";

import IntroExperience from "./IntroExperience";
import LanguageSwitcher from "./LanguageSwitcher";
import SectionRail from "./SectionRail";
import {
  LanguageProvider,
} from "./LanguageProvider";

import styles from "./HomeExperience.module.css";

export default function HomeExperience({
  children,
}: {
  children: ReactNode;
}) {
  const [guided, setGuided] =
    useState(true);

  return (
    <LanguageProvider>
      <div
        className={`${styles.scroller} ${
          guided
            ? styles.guided
            : styles.free
        }`}
        data-home-scroll
      >
        <IntroExperience />

        <LanguageSwitcher />

        <SectionRail
          guided={guided}
          onToggleGuided={() =>
            setGuided(
              (current) =>
                !current
            )
          }
        />

        <div
          className={
            styles.content
          }
        >
          {children}
        </div>
      </div>
    </LanguageProvider>
  );
}