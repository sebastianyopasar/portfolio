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
        number: "01",
        label: copy.rail.identity,
      },
      {
        id: "work",
        number: "02",
        label: copy.rail.work,
      },
      {
        id: "process",
        number: "03",
        label: copy.rail.process,
      },
      {
        id: "capabilities",
        number: "04",
        label:
          copy.rail.capabilities,
      },
      {
        id: "about",
        number: "05",
        label: copy.rail.about,
      },
      {
        id: "experience",
        number: "06",
        label:
          copy.rail.experience,
      },
      {
        id: "contact",
        number: "07",
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

    if (!elements.length) return;

    let frame = 0;

    const updateActive = () => {
      frame = 0;

      const rootRect =
        root.getBoundingClientRect();

      const anchorY =
        rootRect.top +
        root.clientHeight * 0.46;

      let bestId =
        elements[0].dataset
          .stationId ?? "identity";

      let bestDistance =
        Number.POSITIVE_INFINITY;

      for (
        const element
        of elements
      ) {
        const rect =
          element.getBoundingClientRect();

        const stationId =
          element.dataset.stationId;

        if (!stationId) continue;

        /*
          If our viewport anchor is
          inside the station, this is
          the active station.
        */

        if (
          anchorY >= rect.top &&
          anchorY <= rect.bottom
        ) {
          bestId = stationId;
          bestDistance = 0;
          break;
        }

        const center =
          rect.top +
          rect.height / 2;

        const distance =
          Math.abs(
            center - anchorY
          );

        if (
          distance <
          bestDistance
        ) {
          bestDistance =
            distance;

          bestId =
            stationId;
        }
      }

      setActive(bestId);
    };

    const requestUpdate = () => {
      if (frame) return;

      frame =
        window.requestAnimationFrame(
          updateActive
        );
    };

    updateActive();

    root.addEventListener(
      "scroll",
      requestUpdate,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      requestUpdate
    );

    return () => {
      root.removeEventListener(
        "scroll",
        requestUpdate
      );

      window.removeEventListener(
        "resize",
        requestUpdate
      );

      if (frame) {
        window.cancelAnimationFrame(
          frame
        );
      }
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

  const darkSection =
    active === "process";

  return (
    <aside
      className={styles.rail}
      data-tone={
        darkSection
          ? "dark"
          : "light"
      }
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
                `Go to ${section.label}`
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
                <small>
                  {section.number}
                </small>

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
        aria-label={
          guided
            ? "Switch to free scrolling"
            : "Switch to guided scrolling"
        }
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