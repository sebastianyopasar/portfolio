"use client";

import { useRef, type PointerEvent } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handlePointerMove = (
    event: PointerEvent<HTMLElement>
  ) => {
    const hero = heroRef.current;
    const title = titleRef.current;

    if (!hero || !title) return;

    const heroRect = hero.getBoundingClientRect();
    const titleRect = title.getBoundingClientRect();

    hero.style.setProperty(
      "--cursor-x",
      `${event.clientX - heroRect.left}px`
    );

    hero.style.setProperty(
      "--cursor-y",
      `${event.clientY - heroRect.top}px`
    );

    title.style.setProperty(
      "--title-x",
      `${event.clientX - titleRect.left}px`
    );

    title.style.setProperty(
      "--title-y",
      `${event.clientY - titleRect.top}px`
    );
  };

  const handlePointerEnter = () => {
    heroRef.current?.setAttribute(
      "data-cursor-active",
      "true"
    );
  };

  const handlePointerLeave = () => {
    heroRef.current?.setAttribute(
      "data-cursor-active",
      "false"
    );

    titleRef.current?.style.setProperty(
      "--title-x",
      "-500px"
    );

    titleRef.current?.style.setProperty(
      "--title-y",
      "-500px"
    );
  };

  return (
    <section
      ref={heroRef}
      className="hero hero-interactive"
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className="hero-cursor-orb"
        aria-hidden="true"
      />

      <div className="hero-intro">
        <p className="hero-label">
          Digital Product Designer & Developer
        </p>

        <p className="hero-number">
          Portfolio / 2026
        </p>
      </div>

      <div className="hero-main">
        <h1
          ref={titleRef}
          className="hero-title hero-title-interactive"
        >
          <span>I DESIGN</span>
          <span>DIGITAL</span>
          <span>PRODUCTS.</span>
        </h1>

        <div className="hero-message">
          <span className="accent-marker" />

          <p>
            And I build them.

            <span>
              Creating intuitive digital experiences
              that connect design, technology and
              business.
            </span>
          </p>
        </div>
      </div>

      <div className="hero-footer">
        <div className="capabilities">
          <span>UX / UI</span>
          <span>Development</span>
          <span>E-Commerce</span>
        </div>

        <a
          href="#work"
          className="scroll-link"
        >
          Selected work
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}