"use client";

import Image from "next/image";
import Link from "next/link";

import {
  useRouter,
} from "next/navigation";

import {
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
} from "react";

type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  focus: string;
  focusLabel: string;
  href: string;

  visual:
    | "dashboard"
    | "commerce"
    | "concept";

  imageSrc: string;
  imageAlt: string;
  imageLabel: string;

  openLabel: string;
  openingLabel: string;
  exploreAriaLabel: string;
};

export default function ProjectCard({
  number,
  title,
  category,
  description,
  focus,
  focusLabel,
  href,
  visual,
  imageSrc,
  imageAlt,
  imageLabel,
  openLabel,
  openingLabel,
  exploreAriaLabel,
}: ProjectCardProps) {
  const router =
    useRouter();

  const cardRef =
    useRef<HTMLAnchorElement | null>(
      null
    );

  const [
    navigating,
    setNavigating,
  ] = useState(false);

  const handlePointerMove = (
    event:
      PointerEvent<HTMLAnchorElement>
  ) => {
    const card =
      cardRef.current;

    if (!card) return;

    const finePointer =
      window.matchMedia(
        "(hover: hover) and (pointer: fine)"
      ).matches;

    if (!finePointer) {
      return;
    }

    const rect =
      card.getBoundingClientRect();

    const x =
      (event.clientX -
        rect.left) /
      rect.width;

    const y =
      (event.clientY -
        rect.top) /
      rect.height;

    card.style.setProperty(
      "--card-x",
      `${x * 100}%`
    );

    card.style.setProperty(
      "--card-y",
      `${y * 100}%`
    );

    card.style.setProperty(
      "--card-shift-x",
      `${(x - 0.5) * 8}px`
    );

    card.style.setProperty(
      "--card-shift-y",
      `${(y - 0.5) * 6}px`
    );
  };

  const handlePointerLeave =
    () => {
      const card =
        cardRef.current;

      if (!card) return;

      card.style.setProperty(
        "--card-x",
        "50%"
      );

      card.style.setProperty(
        "--card-y",
        "50%"
      );

      card.style.setProperty(
        "--card-shift-x",
        "0px"
      );

      card.style.setProperty(
        "--card-shift-y",
        "0px"
      );
    };

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
      760
    );
  };

  return (
    <Link
      ref={cardRef}
      href={href}
      className="project-card"
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
      onPointerMove={
        handlePointerMove
      }
      onPointerLeave={
        handlePointerLeave
      }
      onClick={
        handleClick
      }
    >
      <div className="project-visual project-visual-real">
        <div className="project-image-frame">
          <Image
            src={
              imageSrc
            }
            alt={
              imageAlt
            }
            fill
            sizes="
              (max-width: 900px)
              100vw,
              36vw
            "
            className="project-card-image"
          />

          <span
            className="project-image-overlay"
            aria-hidden="true"
          />

          <span
            className="project-image-scan"
            aria-hidden="true"
          />
        </div>

        <span className="project-image-label">
          {
            imageLabel
          }
        </span>
      </div>

      <div className="project-info">
        <span
          className="project-watermark"
          aria-hidden="true"
        >
          {number}
        </span>

        <div className="project-topline">
          <span>
            {number}
          </span>

          <span>
            {
              category
            }
          </span>
        </div>

        <div className="project-copy">
          <p className="project-focus">
            <span>
              {
                focusLabel
              }
            </span>

            {focus}
          </p>

          <div className="project-title-row">
            <h3>
              {title}
            </h3>
          </div>

          <p className="project-description">
            {
              description
            }
          </p>

          <span className="project-link">
            {
              openLabel
            }

            <span>
              ↗
            </span>
          </span>
        </div>
      </div>

      <div
        className={`project-open-curtain ${
          navigating
            ? "project-open-curtain-active"
            : ""
        }`}
        aria-hidden="true"
      >
        <div className="project-open-message">
          <span>
            {number}
          </span>

          <strong>
            {title}
          </strong>

          <small>
            {
              openingLabel
            }
          </small>
        </div>
      </div>
    </Link>
  );
}