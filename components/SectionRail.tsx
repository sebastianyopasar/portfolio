"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  useLanguage,
} from "./LanguageProvider";

import styles from "./SectionRail.module.css";

type SectionRailProps = {
  guided: boolean;
  onToggleGuided: () => void;
};

export default function SectionRail({
  guided,
  onToggleGuided,
}: SectionRailProps) {
  const { copy } =
    useLanguage();

  const [active, setActive] =
    useState("identity");

  const sections = useMemo(
    () => [
      {
        id: "identity",
        label: copy.rail.identity,
      },
      {
        id: "work",
        label: copy.rail.work,
      },
      {
        id: "process",
        label: copy.rail.process,
      },
      {
        id: "capabilities",
        label:
          copy.rail.capabilities,
      },
      {
        id: "about",
        label: copy.rail.about,
      },
      {
        id: "experience",
        label:
          copy.rail.experience,
      },
      {
        id: "contact",
        label: copy.rail.contact,
      },
    ],
    [copy]
  );

  useEffect(() => {
    const root =
      document.querySelector<HTMLElement>(
        "[data-home-scroll]"
      );

    if (!root) return;

    const elements =
      Array.from(
        root.querySelectorAll<HTMLElement>(
          "[data-station-id]"
        )
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          let mostVisible:
            | IntersectionObserverEntry
            | undefined;

          for (const entry of entries) {
            if (
              !entry.isIntersecting
            ) {
              continue;
            }

            if (
              !mostVisible ||
              entry.intersectionRatio >
                mostVisible.intersectionRatio
            ) {
              mostVisible = entry;
            }
          }

          if (!mostVisible) return;

          const element =
            mostVisible.target as HTMLElement;

          const stationId =
            element.dataset.stationId;

          if (stationId) {
            setActive(stationId);
          }
        },
        {
          root,
          threshold: [
            0.15,
            0.3,
            0.5,
            0.7,
          ],
        }
      );

    elements.forEach(
      (element) => {
        observer.observe(element);
      }
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  const goTo = (
    id: string
  ) => {
    const target =
      document.querySelector<HTMLElement>(
        `[data-station-id="${id}"]`
      );

    if (!target) return;

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    target.scrollIntoView({
      behavior: reducedMotion
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <aside
      className={styles.rail}
      aria-label="Portfolio sections"
    >
      <div
        className={
          styles.sectionList
        }
      >
        {sections.map(
          (section) => (
            <button
              key={section.id}
              type="button"
              className={
                active ===
                section.id
                  ? styles.active
                  : ""
              }
              onClick={() =>
                goTo(section.id)
              }
              aria-label={
                section.label
              }
              aria-current={
                active ===
                section.id
                  ? "true"
                  : undefined
              }
            >
              <span
                className={
                  styles.dot
                }
              />

              <strong>
                {section.label}
              </strong>
            </button>
          )
        )}
      </div>

      <button
        type="button"
        className={
          styles.modeToggle
        }
        onClick={
          onToggleGuided
        }
        aria-pressed={guided}
      >
        <span>
          {guided ? "◉" : "○"}
        </span>

        <strong>
          {guided
            ? copy.rail.guided
            : copy.rail.free}
        </strong>
      </button>
    </aside>
  );
}