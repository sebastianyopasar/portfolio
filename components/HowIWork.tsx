"use client";

import {
  useEffect,
  useState,
} from "react";

import Reveal from "./Reveal";

import {
  useLanguage,
} from "./LanguageProvider";

export default function HowIWork() {
  const { copy } =
    useLanguage();

  const content =
    copy.process;

  const processSteps =
    content.steps;

  const [
    activeStep,
    setActiveStep,
  ] = useState(0);

  const [
    interactionPaused,
    setInteractionPaused,
  ] = useState(false);

  const [
    autoCycle,
    setAutoCycle,
  ] = useState(true);

  const [
    reducedMotion,
    setReducedMotion,
  ] = useState(false);

  useEffect(() => {
    const query =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

    const update = () => {
      const reduced =
        query.matches;

      setReducedMotion(
        reduced
      );

      if (reduced) {
        setAutoCycle(
          false
        );
      }
    };

    update();

    query.addEventListener(
      "change",
      update
    );

    return () => {
      query.removeEventListener(
        "change",
        update
      );
    };
  }, []);

  const paused =
    interactionPaused ||
    !autoCycle ||
    reducedMotion;

  useEffect(() => {
    if (paused) {
      return;
    }

    const timer =
      window.setTimeout(
        () => {
          setActiveStep(
            (current) =>
              (current + 1) %
              processSteps.length
          );
        },
        7000
      );

    return () => {
      window.clearTimeout(
        timer
      );
    };
  }, [
    activeStep,
    paused,
    processSteps.length,
  ]);

  const active =
    processSteps[
      activeStep
    ];

  return (
    <section
      className="process-station"
      id="process"
    >
      <div className="process-station-inner">
        <Reveal>
          <header className="process-heading">
            <div className="process-heading-meta">
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

            <div className="process-heading-main">
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

              <div className="process-heading-copy">
                <p>
                  {
                    content.description
                  }
                </p>

                <span>
                  {
                    content.helper
                  }
                </span>
              </div>
            </div>
          </header>
        </Reveal>

        <Reveal delay={70}>
          <div className="process-controls-row">
            <div className="process-controls-hint">
              <span>
                {
                  content.stages
                }
              </span>

              <i />

              <span>
                {
                  content.interactive
                }
              </span>
            </div>

            <button
              type="button"
              className="process-auto-toggle"
              aria-pressed={
                autoCycle
              }
              onClick={() =>
                setAutoCycle(
                  (current) =>
                    !current
                )
              }
            >
              <i
                className={
                  autoCycle
                    ? "process-auto-light active"
                    : "process-auto-light"
                }
              />

              <span>
                {
                  content.auto
                }
              </span>

              <strong>
                {autoCycle
                  ? content.on
                  : content.off}
              </strong>

              <small>
                {autoCycle
                  ? content.pause
                  : content.resume}
              </small>
            </button>
          </div>
        </Reveal>

        <Reveal delay={110}>
          <div
            className="process-map"
            role="tablist"
            aria-label={
              content.tablistLabel
            }
            data-paused={
              paused
                ? "true"
                : "false"
            }
            onPointerEnter={() =>
              setInteractionPaused(
                true
              )
            }
            onPointerLeave={() =>
              setInteractionPaused(
                false
              )
            }
          >
            {processSteps.map(
              (
                step,
                index
              ) => {
                const isActive =
                  index ===
                  activeStep;

                return (
                  <button
                    id={`process-tab-${index}`}
                    type="button"
                    role="tab"
                    key={
                      step.number
                    }
                    aria-selected={
                      isActive
                    }
                    aria-controls="process-detail-panel"
                    className={
                      isActive
                        ? "process-step active"
                        : "process-step"
                    }
                    onFocus={() =>
                      setInteractionPaused(
                        true
                      )
                    }
                    onBlur={() =>
                      setInteractionPaused(
                        false
                      )
                    }
                    onClick={() =>
                      setActiveStep(
                        index
                      )
                    }
                  >
                    <span className="process-step-dot" />

                    <small>
                      {
                        step.number
                      }
                    </small>

                    <strong>
                      {
                        step.title
                      }
                    </strong>

                    <span className="process-step-action">
                      {
                        content.explore
                      }
                    </span>

                    {isActive &&
                      autoCycle &&
                      !reducedMotion && (
                        <span
                          key={
                            step.number
                          }
                          className="process-step-progress"
                          aria-hidden="true"
                        />
                      )}
                  </button>
                );
              }
            )}
          </div>
        </Reveal>

        <div
          id="process-detail-panel"
          role="tabpanel"
          aria-labelledby={`process-tab-${activeStep}`}
          className="process-detail"
          key={
            `${active.number}-${copy.process.meta}`
          }
        >
          <span className="process-detail-number">
            {
              active.number
            }
          </span>

          <div className="process-detail-title">
            <small>
              {
                content.currentStage
              }
            </small>

            <h3>
              {
                active.title
              }
            </h3>
          </div>

          <p>
            {
              active.description
            }
          </p>

          <div className="process-detail-focus">
            <span>
              {
                content.lookingAt
              }
            </span>

            <strong>
              {
                active.focus
              }
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}