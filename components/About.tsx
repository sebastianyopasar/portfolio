"use client";

import { Fragment } from "react";

import Reveal from "./Reveal";

import {
  useLanguage,
} from "./LanguageProvider";

export default function About() {
  const { copy } =
    useLanguage();

  const content =
    copy.about;

  return (
    <section
      className="about-section home-station"
      id="about"
    >
      <div className="about-single-meta">
        <span>
          {
            content.meta
          }
        </span>

        <span>
          {
            content.locationTop
          }
        </span>
      </div>

      <div className="about-compact-layout">
        <Reveal>
          <div className="about-statement">
            <span className="about-statement-label">
              {
                content.statementLabel
              }
            </span>

            <h2 className="about-compact-title">
              {
                content.prefix
              }{" "}

              <span>
                {
                  content.design
                }
              </span>
              ,

              <br />

              {
                content.technology
              }

              <br />

              {
                content.connector
              }{" "}

              <span>
                {
                  content.business
                }
              </span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="about-compact-copy">
            <p className="about-lead">
              {
                content.lead
              }
            </p>

            <p>
              {
                content.paragraph1
              }
            </p>

            <p>
              {
                content.paragraph2
              }
            </p>

            <p>
              {
                content.paragraph3
              }
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={130}>
        <div className="about-approach">
          <span className="about-approach-label">
            {
              content.approach
            }
          </span>

          <div className="about-approach-flow">
            {content.approachSteps.map(
              (
                step,
                index
              ) => (
                <Fragment
                  key={step}
                >
                  <div>
                    <small>
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </small>

                    <strong>
                      {
                        step
                      }
                    </strong>
                  </div>

                  {index <
                    content
                      .approachSteps
                      .length -
                      1 && (
                    <i
                      aria-hidden="true"
                    >
                      →
                    </i>
                  )}
                </Fragment>
              )
            )}
          </div>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div className="about-meta-strip">
          <div>
            <span>
              {
                content.locationLabel
              }
            </span>

            <strong>
              {
                content.location
              }
            </strong>
          </div>

          <div>
            <span>
              {
                content.focusLabel
              }
            </span>

            <strong>
              {
                content.focus
              }
            </strong>
          </div>

          <div>
            <span>
              {
                content.buildLabel
              }
            </span>

            <strong>
              {
                content.build
              }
            </strong>
          </div>

          <div>
            <span>
              {
                content.statusLabel
              }
            </span>

            <strong className="about-status">
              <i />

              {
                content.status
              }
            </strong>
          </div>
        </div>
      </Reveal>
    </section>
  );
}