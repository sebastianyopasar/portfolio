"use client";

import {
  useRef,
  type PointerEvent,
} from "react";

import {
  useLanguage,
} from "./LanguageProvider";

import styles from "./Hero.module.css";

export default function Hero() {
  const visualRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const { copy } =
    useLanguage();

  const handlePointerMove = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    const element =
      visualRef.current;

    if (!element) return;

    const rect =
      element.getBoundingClientRect();

    const x =
      ((event.clientX -
        rect.left) /
        rect.width) *
      100;

    const y =
      ((event.clientY -
        rect.top) /
        rect.height) *
      100;

    element.style.setProperty(
      "--pointer-x",
      `${x}%`
    );

    element.style.setProperty(
      "--pointer-y",
      `${y}%`
    );
  };

  const handlePointerLeave =
    () => {
      const element =
        visualRef.current;

      if (!element) return;

      element.style.setProperty(
        "--pointer-x",
        "50%"
      );

      element.style.setProperty(
        "--pointer-y",
        "50%"
      );
    };

  return (
    <section
      className={styles.hero}
      id="identity"
      aria-labelledby="hero-title"
    >
      {/* =========================
          IDENTITY
      ========================= */}

      <div
        ref={visualRef}
        className={styles.visual}
        onPointerMove={
          handlePointerMove
        }
        onPointerLeave={
          handlePointerLeave
        }
      >
        <div
          className={
            styles.identityArea
          }
        >
          <div
            className={
              styles.monogram
            }
            aria-hidden="true"
          >
            <span>S</span>

            <span>Y</span>
          </div>

          <div
            className={
              styles.tickerShell
            }
          >
            <div
              className={
                styles.tickerScreen
              }
            >
              <div
                className={
                  styles.tickerTrack
                }
              >
                <TickerGroup
                  items={
                    copy.ticker
                  }
                />

                <TickerGroup
                  items={
                    copy.ticker
                  }
                  duplicate
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          INTRO
      ========================= */}

      <div
        className={styles.intro}
      >
        <div
          className={
            styles.introMain
          }
        >
          <p
            className={
              styles.eyebrow
            }
          >
            {
              copy.hero
                .eyebrow
            }
          </p>

          <h1
            id="hero-title"
            className={
              styles.name
            }
          >
            Sebastián
            <span>.</span>
          </h1>

          <h2
            className={
              styles.role
            }
          >
            {
              copy.hero.role
            }

            <br />

            <span>
              {
                copy.hero
                  .builder
              }
            </span>
          </h2>

          <p
            className={
              styles.description
            }
          >
            {
              copy.hero
                .description
            }
          </p>

          <div
            className={
              styles.pillars
            }
          >
            {copy.hero.pillars.map(
              (pillar) => (
                <span
                  key={pillar}
                >
                  {pillar}
                </span>
              )
            )}
          </div>
        </div>

        <button
          type="button"
          className={
            styles.explore
          }
          onClick={() => {
            document
              .querySelector(
                '[data-station-id="work"]'
              )
              ?.scrollIntoView({
                behavior:
                  "smooth",
              });
          }}
        >
          {
            copy.hero
              .explore
          }

          <span>↓</span>
        </button>
      </div>
    </section>
  );
}

function TickerGroup({
  items,
  duplicate = false,
}: {
  items:
    readonly string[];

  duplicate?: boolean;
}) {
  return (
    <div
      className={
        styles.tickerGroup
      }
      aria-hidden={
        duplicate
          ? true
          : undefined
      }
    >
      {items.map(
        (item, index) => (
          <div
            className={
              styles.tickerItem
            }
            key={`${item}-${index}`}
          >
            <span
              className={
                styles.tickerCode
              }
            >
              {String(
                index + 1
              ).padStart(
                2,
                "0"
              )}
            </span>

            <strong>
              {item}
            </strong>

            <span
              className={
                index % 2 === 0
                  ? styles.amber
                  : styles.green
              }
            >
              {index % 2 === 0
                ? "▲"
                : "●"}
            </span>
          </div>
        )
      )}
    </div>
  );
}