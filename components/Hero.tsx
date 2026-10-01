"use client";

import {
  useRef,
  type PointerEvent,
} from "react";

import styles from "./Hero.module.css";

const tickerItems = [
  {
    label: "UX / UI",
    type: "up",
    symbol: "▲",
  },
  {
    label: "USER FLOWS",
    type: "live",
    symbol: "●",
  },
  {
    label: "PROTOTYPING",
    type: "up",
    symbol: "▲",
  },
  {
    label: "INTERACTION",
    type: "live",
    symbol: "●",
  },
  {
    label: "DEVELOPMENT",
    type: "up",
    symbol: "▲",
  },
  {
    label: "E-COMMERCE",
    type: "live",
    symbol: "●",
  },
  {
    label: "DESIGN SYSTEMS",
    type: "up",
    symbol: "▲",
  },
  {
    label: "BUSINESS THINKING",
    type: "live",
    symbol: "●",
  },
  {
    label: "ITERATE",
    type: "up",
    symbol: "▲",
  },
];

export default function Hero() {
  const visualRef =
    useRef<HTMLDivElement | null>(null);

  const handlePointerMove = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    const visual =
      visualRef.current;

    if (!visual) return;

    const rect =
      visual.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) /
        rect.width) *
      100;

    const y =
      ((event.clientY - rect.top) /
        rect.height) *
      100;

    visual.style.setProperty(
      "--pointer-x",
      `${x}%`
    );

    visual.style.setProperty(
      "--pointer-y",
      `${y}%`
    );
  };

  const handlePointerLeave = () => {
    const visual =
      visualRef.current;

    if (!visual) return;

    visual.style.setProperty(
      "--pointer-x",
      "50%"
    );

    visual.style.setProperty(
      "--pointer-y",
      "42%"
    );
  };

  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        {/* =================================================
            LEFT SIDE
        ================================================= */}

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
              styles.visualTop
            }
          >
            <span>
              Portfolio / 2026
            </span>

            <span>
              UX/UI + Development
            </span>
          </div>

          <div
            className={
              styles.identityArea
            }
          >
            {/* MONOGRAM */}

            <div
              className={
                styles.monogram
              }
              aria-label="SY"
            >
              <span>S</span>
              <span>Y</span>
            </div>

            {/* RETRO LED TICKER */}

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
                  <TickerGroup />

                  <TickerGroup
                    duplicate
                  />
                </div>
              </div>
            </div>

            {/* IDENTITY PILLARS */}

            <div
              className={
                styles.leftStatement
              }
            >
              <span>Design</span>

              <i />

              <span>
                Technology
              </span>

              <i />

              <span>Business</span>
            </div>
          </div>

          <div
            className={
              styles.visualBottom
            }
          >
            <span>
              Digital experiences
            </span>

            <span>
              Built with intention
            </span>
          </div>
        </div>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div
          className={styles.intro}
        >
          <div
            className={
              styles.introTop
            }
          >
            <span>
              Ontario, Canada
            </span>

            <span
              className={
                styles.status
              }
            >
              <i />

              Open to opportunities
            </span>
          </div>

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
              Hi, I&apos;m
            </p>

            <h1
              className={styles.name}
            >
              Sebastián
              <span>.</span>
            </h1>

            <h2
              className={styles.role}
            >
              UX/UI Designer
              <br />

              <span>
                who also builds.
              </span>
            </h2>

            <p
              className={
                styles.description
              }
            >
              I design intuitive
              digital experiences by
              connecting user needs,
              technology and business
              goals — then I help build
              them.
            </p>

            <div
              className={
                styles.pillars
              }
            >
              <span>
                UX / UI
              </span>

              <span>
                Development
              </span>

              <span>
                E-Commerce
              </span>
            </div>
          </div>

          <div
            className={
              styles.introFooter
            }
          >
            <a
              href="#work"
              className={
                styles.explore
              }
            >
              Explore selected work

              <span>↓</span>
            </a>

            <div
              className={
                styles.processPreview
              }
            >
              <span>
                My process
              </span>

              <p>
                Identify → Propose →
                Prototype → Evaluate →
                Refine → Launch →
                Iterate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TickerGroup({
  duplicate = false,
}: {
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
      {tickerItems.map(
        (item, index) => (
          <div
            className={
              styles.tickerItem
            }
            key={`${item.label}-${index}`}
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
              {item.label}
            </strong>

            <span
              className={
                item.type === "up"
                  ? styles.ledAmber
                  : styles.ledGreen
              }
            >
              {item.symbol}
            </span>
          </div>
        )
      )}
    </div>
  );
}