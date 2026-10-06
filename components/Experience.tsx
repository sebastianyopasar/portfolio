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

      <div className="experience-list">
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
                className={
                  isOpen
                    ? "experience-row experience-row-open"
                    : "experience-row"
                }
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
                  className="experience-row-button"
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
                  <div className="experience-index">
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

                  <div className="experience-role">
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

                  <p>
                    {
                      item.description
                    }
                  </p>

                  <div className="experience-action">
                    <small>
                      {isOpen
                        ? content.close
                        : content.explore}
                    </small>

                    <span className="experience-toggle">
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
                  className="experience-expand-shell"
                  aria-hidden={
                    !isOpen
                  }
                >
                  <div className="experience-expand-inner">
                    <div className="experience-expanded">
                      <div className="experience-expanded-column">
                        <span>
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

                      <div className="experience-expanded-column">
                        <span>
                          {
                            content.areas
                          }
                        </span>

                        <div className="experience-tags">
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

                      <div className="experience-expanded-column">
                        <span>
                          {
                            content.tools
                          }
                        </span>

                        <div className="experience-tools">
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