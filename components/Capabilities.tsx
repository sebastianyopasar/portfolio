"use client";

import {
  useState,
} from "react";

import Reveal from "./Reveal";

import {
  useLanguage,
} from "./LanguageProvider";

export default function Capabilities() {
  const { copy } =
    useLanguage();

  const content =
    copy.capabilities;

  const capabilities =
    content.entries;

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const active =
    capabilities[
      activeIndex
    ];

  return (
    <section
      className="capabilities-section home-station"
      id="capabilities"
    >
      <Reveal>
        <header className="station-intro station-intro-capabilities">
          <div className="station-intro-meta">
            <span>
              {
                content.meta
              }
            </span>

            <span>
              {
                content.metaContext
              }
            </span>
          </div>

          <div className="station-intro-main">
            <h2>
              {
                content.title
              }

              <br />

              <span>
                {
                  content.titleAccent
                }
              </span>
            </h2>

            <p>
              {
                content.description
              }
            </p>
          </div>
        </header>
      </Reveal>

      <Reveal delay={100}>
        <div className="capability-workbench">
          <div
            className="capability-tabs"
            role="tablist"
            aria-label={
              content.meta
            }
          >
            <div className="capability-tabs-heading">
              <span>
                {
                  content.areas
                }
              </span>

              <strong>
                {String(
                  activeIndex + 1
                ).padStart(
                  2,
                  "0"
                )}
                {" / "}
                {String(
                  capabilities.length
                ).padStart(
                  2,
                  "0"
                )}
              </strong>
            </div>

            {capabilities.map(
              (
                capability,
                index
              ) => {
                const isActive =
                  index ===
                  activeIndex;

                return (
                  <button
                    id={`capability-tab-${index}`}
                    key={
                      capability.number
                    }
                    type="button"
                    role="tab"
                    aria-selected={
                      isActive
                    }
                    aria-controls="capability-panel"
                    className={
                      isActive
                        ? "capability-tab active"
                        : "capability-tab"
                    }
                    onMouseEnter={() =>
                      setActiveIndex(
                        index
                      )
                    }
                    onFocus={() =>
                      setActiveIndex(
                        index
                      )
                    }
                    onClick={() =>
                      setActiveIndex(
                        index
                      )
                    }
                  >
                    <span>
                      {
                        capability.number
                      }
                    </span>

                    <strong>
                      {
                        capability.title
                      }
                    </strong>

                    <i
                      aria-hidden="true"
                    >
                      →
                    </i>
                  </button>
                );
              }
            )}
          </div>

          <div
            id="capability-panel"
            className="capability-panel"
            role="tabpanel"
            aria-labelledby={`capability-tab-${activeIndex}`}
            key={`${active.number}-${active.title}`}
          >
            <div className="capability-panel-top">
              <span>
                {
                  content.currentCapability
                }
              </span>

              <strong>
                {
                  active.number
                }
              </strong>
            </div>

            <div className="capability-panel-main">
              <h3>
                {
                  active.title
                }
              </h3>

              <p className="capability-panel-summary">
                {
                  active.summary
                }
              </p>

              <p className="capability-panel-context">
                {
                  active.context
                }
              </p>
            </div>

            <div className="capability-panel-list">
              {active.items.map(
                (
                  item,
                  index
                ) => (
                  <span
                    key={
                      item
                    }
                  >
                    <small>
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </small>

                    {
                      item
                    }
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}