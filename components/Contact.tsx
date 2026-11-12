"use client";

import {
  useLanguage,
} from "./LanguageProvider";

export default function Contact() {
  const { copy } =
    useLanguage();

  const content =
    copy.contact;

  return (
    <section
      className="contact-section"
      id="contact"
    >
      <div className="contact-inner">
        <div className="contact-top">
          <span>
            {
              content.meta
            }
          </span>

          <span>
            {
              content.question
            }
          </span>
        </div>

        <div className="contact-main">
          <h2>
            {
              content.line1
            }

            <br />

            {
              content.line2
            }

            <br />

            <span>
              {
                content.line3
              }
            </span>
          </h2>

          <div className="contact-context">
            {content.contexts.map(
              (
                context,
                index
              ) => (
                <span
                  key={
                    context
                  }
                  style={{
                    display:
                      "contents",
                  }}
                >
                  <span>
                    {
                      context
                    }
                  </span>

                  {index <
                    content
                      .contexts
                      .length -
                      1 && (
                    <i
                      aria-hidden="true"
                    />
                  )}
                </span>
              )
            )}
          </div>
        </div>

        <div className="contact-bottom">
          <a
            className="contact-primary-link"
            href="mailto:sebastianyopasar@gmail.com"
          >
            <span className="contact-primary-copy">
              <small>
                {
                  content.start
                }
              </small>

              <strong>
                {
                  content.email
                }
              </strong>
            </span>

            <span
              className="contact-primary-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/sebasti%C3%A1n-yopas%C3%A1-reyes/"
              target="_blank"
              rel="noreferrer"
              aria-label={
                content.linkedinAria
              }
            >
              {
                content.linkedin
              }

              <span aria-hidden="true">
                ↗
              </span>
            </a>

            <a href="#top">
              {
                content.backToTop
              }

              <span aria-hidden="true">
                ↑
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}