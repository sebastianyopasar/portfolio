"use client";

import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

import {
  useLanguage,
} from "./LanguageProvider";

export default function SelectedWork() {
  const { copy } =
    useLanguage();

  const content =
    copy.selectedWork;

  return (
    <section
      className="selected-work home-station"
      id="work"
    >
      <Reveal>
        <header className="station-intro work-intro">
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

      <div className="work-projects-list">
        <Reveal
          className="work-project-reveal"
          delay={0}
        >
          <ProjectCard
            number="01"
            title={
              content.projects
                .tokyo.title
            }
            focus={
              content.projects
                .tokyo.focus
            }
            description={
              content.projects
                .tokyo.description
            }
            href="/work/tokyo"
            visual="dashboard"
            openLabel={
              content.openCaseStudy
            }
            openingLabel={
              content.openingCaseStudy
            }
            exploreAriaLabel={
              content.projects
                .tokyo.aria
            }
          />
        </Reveal>

        <Reveal
          className="work-project-reveal"
          delay={70}
        >
          <ProjectCard
            number="02"
            title={
              content.projects
                .ecommerce.title
            }
            focus={
              content.projects
                .ecommerce.focus
            }
            description={
              content.projects
                .ecommerce.description
            }
            href="/work/ecommerce"
            visual="commerce"
            openLabel={
              content.openCaseStudy
            }
            openingLabel={
              content.openingCaseStudy
            }
            exploreAriaLabel={
              content.projects
                .ecommerce.aria
            }
          />
        </Reveal>

        <Reveal
          className="work-project-reveal"
          delay={140}
        >
          <ProjectCard
            number="03"
            title={
              content.projects
                .identidad.title
            }
            focus={
              content.projects
                .identidad.focus
            }
            description={
              content.projects
                .identidad.description
            }
            href="/work/niwa?enter=1"
            visual="concept"
            openLabel={
              content.openCaseStudy
            }
            openingLabel={
              content.openingCaseStudy
            }
            exploreAriaLabel={
              content.projects
                .identidad.aria
            }
          />
        </Reveal>
      </div>

      <Reveal delay={180}>
        <div className="work-process-bridge">
          <span>
            {
              content.bridge
            }
          </span>

          <a href="#process">
            {
              content.processLink
            }

            <span aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}