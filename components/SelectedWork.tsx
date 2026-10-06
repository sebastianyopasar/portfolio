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
              {content.meta}
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

      <Reveal delay={70}>
        <div
          className="work-interaction-note"
          aria-hidden="true"
        >
          <span>
            {
              content.selectedCases
            }
          </span>

          <span>
            {
              content.interactionHint
            }
          </span>
        </div>
      </Reveal>

      <div className="projects-list">
        <Reveal
          className="project-reveal"
          delay={0}
        >
          <ProjectCard
            number="01"
            title={
              content.projects
                .tokyo.title
            }
            category={
              content.projects
                .tokyo.category
            }
            focus={
              content.projects
                .tokyo.focus
            }
            focusLabel={
              content.focusLabel
            }
            description={
              content.projects
                .tokyo.description
            }
            href="/work/tokyo"
            visual="dashboard"
            imageSrc="/tokyo/home-dashboard.png"
            imageAlt={
              content.projects
                .tokyo.imageAlt
            }
            imageLabel={
              content.projects
                .tokyo.imageLabel
            }
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
          className="project-reveal"
          delay={80}
        >
          <ProjectCard
            number="02"
            title={
              content.projects
                .ecommerce.title
            }
            category={
              content.projects
                .ecommerce.category
            }
            focus={
              content.projects
                .ecommerce.focus
            }
            focusLabel={
              content.focusLabel
            }
            description={
              content.projects
                .ecommerce.description
            }
            href="/work/ecommerce"
            visual="commerce"
            imageSrc="/ecommerce/home.png"
            imageAlt={
              content.projects
                .ecommerce.imageAlt
            }
            imageLabel={
              content.projects
                .ecommerce.imageLabel
            }
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
          className="project-reveal"
          delay={160}
        >
          <ProjectCard
            number="03"
            title={
              content.projects
                .identidad.title
            }
            category={
              content.projects
                .identidad.category
            }
            focus={
              content.projects
                .identidad.focus
            }
            focusLabel={
              content.focusLabel
            }
            description={
              content.projects
                .identidad.description
            }
            href="/work/niwa?enter=1"
            visual="concept"
            imageSrc="/identidad/identidad-co.png"
            imageAlt={
              content.projects
                .identidad.imageAlt
            }
            imageLabel={
              content.projects
                .identidad.imageLabel
            }
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

            <span>
              ↓
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}