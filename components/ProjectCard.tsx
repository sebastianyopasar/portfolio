"use client";

import Link from "next/link";

import {
  useRouter,
} from "next/navigation";

import {
  useState,
  type MouseEvent,
} from "react";

import {
  createPortal,
} from "react-dom";

import ProjectVisual from "./ProjectVisual";

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  focus: string;
  href: string;

  visual:
    | "dashboard"
    | "commerce"
    | "concept";

  openLabel: string;
  openingLabel: string;
  exploreAriaLabel: string;
};

export default function ProjectCard({
  number,
  title,
  description,
  focus,
  href,
  visual,
  openLabel,
  exploreAriaLabel,
}: ProjectCardProps) {
  const router =
    useRouter();

  const [
    navigating,
    setNavigating,
  ] =
    useState(false);

  const handleClick = (
    event:
      MouseEvent<HTMLAnchorElement>
  ) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reducedMotion) {
      return;
    }

    event.preventDefault();

    if (navigating) {
      return;
    }

    setNavigating(true);

    window.setTimeout(
      () => {
        router.push(href);
      },
      1650
    );
  };

  return (
    <>
      <Link
        href={href}
        className="work-card"
        data-project={
          visual
        }
        data-navigating={
          navigating
            ? "true"
            : "false"
        }
        aria-label={
          exploreAriaLabel
        }
        aria-busy={
          navigating
        }
        onClick={
          handleClick
        }
      >
        <div className="work-card-visual">
          <ProjectVisual
            visual={
              visual
            }
          />
        </div>

        <span className="work-card-number">
          {number}
        </span>

        <div className="work-card-copy">
          <div className="work-card-heading">
            <span className="work-card-focus">
              {
                focus
              }
            </span>

            <h3>
              {title}
            </h3>
          </div>

          <p className="work-card-description">
            {
              description
            }
          </p>
        </div>

        <div className="work-card-action">
          <span className="work-card-sr-only">
            {
              openLabel
            }
          </span>

          <span
            className="work-card-arrow"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>
      </Link>

      {navigating &&
        createPortal(
          <div
            className="case-transition case-transition-active"
            aria-hidden="true"
          >
            <div className="case-transition-layer case-transition-red" />

            <div className="case-transition-layer case-transition-blue" />
          </div>,
          document.body
        )}
    </>
  );
}