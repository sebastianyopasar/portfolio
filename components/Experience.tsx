"use client";

import {
  useState,
} from "react";

import {
  useLanguage,
} from "./LanguageProvider";

export default function Experience() {
  const { copy } =
    useLanguage();

  const content =
    copy.experience;

  const experience =
    content.entries;

  const [
    openIndex,
    setOpenIndex,
  ] =
    useState<
      number | null
    >(null);

  return (
    <section
      className="experience-section"
      id="experience"
    >
      <div className="experience-heading">
        <span>
          {
            content.meta
          }
        </span>

        <div>
          <h2>
            {
              content.titleLine1
            }

            <br />

            {
              content.titleLine2
            }
          </h2>

          <div className="experience-heading-bottom">
            <p className="experience-helper">
              {
                content.helper
              }
            </p>

            <span>
              {
                content.contextCount
              }
            </span>
          </div>
        </div>
      </div>

      <div className="experience-list-v11">
        {experience.map(
          (
            item,
            index
          ) => {
            const isOpen =
              openIndex ===
              index;

            const panelId =
              `experience-panel-${index}`;

            return (
              <article
                className={`experience-entry ${
                  isOpen
                    ? "experience-entry-open"
                    : ""
                }`}
                data-open={
                  isOpen
                    ? "true"
                    : "false"
                }
                key={
                  item.number
                }
              >
                <button
                  type="button"
                  className="experience-entry-button"
                  aria-expanded={
                    isOpen
                  }
                  aria-controls={
                    panelId
                  }
                  onClick={() =>
                    setOpenIndex(
                      isOpen
                        ? null
                        : index
                    )
                  }
                >
                  <div className="experience-entry-index">
                    <span>
                      {
                        item.number
                      }
                    </span>

                    <small>
                      {
                        item.period
                      }
                    </small>
                  </div>

                  <div className="experience-entry-role">
                    <strong>
                      {
                        item.company
                      }
                    </strong>

                    <span>
                      {
                        item.role
                      }
                    </span>
                  </div>

                  <p className="experience-entry-description">
                    {
                      item.description
                    }
                  </p>

                  <div className="experience-entry-action">
                    <small>
                      {isOpen
                        ? content.close
                        : content.explore}
                    </small>

                    <span
                      className="experience-entry-toggle"
                      aria-hidden="true"
                    >
                      {isOpen
                        ? "−"
                        : "+"}
                    </span>
                  </div>
                </button>

                <div
                  id={
                    panelId
                  }
                  className="experience-panel-shell-v11"
                  aria-hidden={
                    !isOpen
                  }
                >
                  <div className="experience-panel-inner-v11">
                    <div className="experience-panel-v11">
                      <div>
                        <span className="experience-panel-label">
                          {
                            content.contribution
                          }
                        </span>

                        <p>
                          {
                            item.contribution
                          }
                        </p>
                      </div>

                      <div>
                        <span className="experience-panel-label">
                          {
                            content.areas
                          }
                        </span>

                        <div className="experience-panel-tags">
                          {item.areas.map(
                            (
                              area
                            ) => (
                              <strong
                                key={
                                  area
                                }
                              >
                                {
                                  area
                                }
                              </strong>
                            )
                          )}
                        </div>
                      </div>

                      <div>
                        <span className="experience-panel-label">
                          {
                            content.tools
                          }
                        </span>

                        <div className="experience-panel-tags">
                          {item.tools.map(
                            (
                              tool
                            ) => (
                              <strong
                                key={
                                  tool
                                }
                              >
                                {
                                  tool
                                }
                              </strong>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
}