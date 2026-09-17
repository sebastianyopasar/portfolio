"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./identidad.module.css";

export default function IdentidadCoPage() {
  const [isEntering, setIsEntering] = useState(false);

  const playTransition = (scrollAfter = false) => {
    setIsEntering(true);

    if (scrollAfter) {
      window.setTimeout(() => {
        document
          .getElementById("identidad-overview")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 750);
    }

    window.setTimeout(() => {
      setIsEntering(false);
    }, 1450);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("enter") === "1") {
      const timer = window.setTimeout(() => {
        playTransition(false);
      }, 100);

      return () => window.clearTimeout(timer);
    }
  }, []);

  return (
    <main className={styles.page}>
      {/* TRANSITION */}

      <div
        className={`${styles.transition} ${
          isEntering ? styles.transitionActive : ""
        }`}
        aria-hidden="true"
      >
        <div className={`${styles.transitionBand} ${styles.bandYellow}`} />
        <div className={`${styles.transitionBand} ${styles.bandBlue}`} />
        <div className={`${styles.transitionBand} ${styles.bandRed}`} />

        <div className={styles.transitionBean}>
          <span />
        </div>

        <span className={styles.transitionWordmark}>
          IDENTIDAD.CO
        </span>
      </div>

      <div className="site-container">
        {/* NAV */}

        <header className={styles.nav}>
          <Link href="/" className={styles.brand}>
            Sebastián Yopasá
          </Link>

          <Link href="/#work" className={styles.back}>
            ← Back to work
          </Link>
        </header>

        {/* HERO */}

        <section className={styles.hero}>
          <div className={styles.eyebrow}>
            <span>03 / Cultural Digital Experience</span>
            <span>VR + Web / Colombian Identity</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>
                Identidad.CO
              </p>

              <h1>
                BUILDING
                <br />
                COLOMBIAN
                <br />
                IDENTITY
                <br />

                <span>
                  THROUGH
                  <br />
                  IMMERSIVE DIGITAL
                  <br />
                  MEDIA
                </span>
              </h1>

              <p className={styles.intro}>
                A concept project focused on celebrating Colombian culture
                through an immersive VR experience and a companion website,
                using coffee as a symbolic, cultural and economic connector.
              </p>

              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.enterButton}
                  onClick={() => playTransition(true)}
                >
                  <span>Enter Identidad.CO</span>
                  <span>↗</span>
                </button>

                <p className={styles.heroMeta}>
                  Web Experience · VR Storytelling · Cultural Identity
                </p>
              </div>
            </div>

            {/* HERO VISUAL */}

            <div className={styles.heroVisual}>
              <div className={styles.coffeeLandscape} />

              <div className={styles.mountainLayerOne} />
              <div className={styles.mountainLayerTwo} />

              <div className={styles.coffeeRows}>
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className={styles.beanOrbitLarge} />
              <div className={styles.beanOrbitSmall} />

              <div className={styles.coffeeBean}>
                <span className={styles.beanCut} />
                <span className={styles.beanHighlight} />
              </div>

              <div className={`${styles.floatingCard} ${styles.cardBlue}`}>
                <small>01</small>
                <strong>Immersive Media</strong>
                <span>VR + Web Experience</span>
              </div>

              <div className={`${styles.floatingCard} ${styles.cardYellow}`}>
                <small>02</small>
                <strong>Identity</strong>
                <span>Culture / Story / Memory</span>
              </div>

              <div className={`${styles.floatingCard} ${styles.cardRed}`}>
                <small>03</small>
                <strong>Coffee</strong>
                <span>Symbol / Product / Connection</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}

        <section
          className={styles.about}
          id="identidad-overview"
        >
          <SectionHeading
            number="01"
            title="About the Project"
            secondary="Overview"
          />

          <div className={styles.editorialGrid}>
            <h2>
              Designing an immersive narrative around Colombian identity.
            </h2>

            <div className={styles.editorialCopy}>
              <p className={styles.lead}>
                Identidad.CO was conceived as a digital experience that
                highlights Colombian culture through one of its most
                meaningful products: coffee.
              </p>

              <p>
                The project combines a website and a virtual reality concept
                to create an experience that feels educational, emotional and
                visually memorable.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION */}

        <section className={styles.mission}>
          <SectionHeading
            number="02"
            title="Mission"
            secondary="Purpose"
          />

          <div className={styles.editorialGrid}>
            <h2>
              Using immersive media to present Colombian culture in a
              positive and engaging way.
            </h2>

            <div className={styles.editorialCopy}>
              <p className={styles.lead}>
                The mission is to foster a stronger and more positive
                Colombian digital identity through immersive technology,
                cultural storytelling and research-based design.
              </p>

              <ul className={styles.missionList}>
                <li>
                  <span>01</span>
                  Strengthen cultural identity through digital narratives
                </li>

                <li>
                  <span>02</span>
                  Highlight coffee as a national and cultural symbol
                </li>

                <li>
                  <span>03</span>
                  Promote positive storytelling around Colombia
                </li>

                <li>
                  <span>04</span>
                  Connect visual design, research and technology
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}

        <section className={styles.deliverables}>
          <SectionHeading
            number="03"
            title="Deliverables"
            secondary="What I Built"
          />

          <div className={styles.deliverableGrid}>
            <article className={`${styles.deliverableCard} ${styles.blueTop}`}>
              <div className={styles.cardNumber}>01</div>

              <div className={`${styles.iconBox} ${styles.blueIcon}`}>
                <div className={styles.vrIcon} />
              </div>

              <div className={styles.deliverableContent}>
                <h3>Immersive VR Experience</h3>

                <p>
                  An immersive concept that guides users through the story
                  of Colombian coffee, its regions and its cultural
                  significance.
                </p>
              </div>
            </article>

            <article
              className={`${styles.deliverableCard} ${styles.yellowTop}`}
            >
              <div className={styles.cardNumber}>02</div>

              <div className={`${styles.iconBox} ${styles.yellowIcon}`}>
                <div className={styles.webIcon} />
              </div>

              <div className={styles.deliverableContent}>
                <h3>Companion Website</h3>

                <p>
                  A digital platform communicating the concept, mission,
                  research and visual direction through a cohesive web
                  experience.
                </p>
              </div>
            </article>

            <article className={`${styles.deliverableCard} ${styles.redTop}`}>
              <div className={styles.cardNumber}>03</div>

              <div className={`${styles.iconBox} ${styles.redIcon}`}>
                <div className={styles.narrativeIcon} />
              </div>

              <div className={styles.deliverableContent}>
                <h3>Visual + Narrative System</h3>

                <p>
                  A visual language based on Colombian color, clear
                  typography and symbolic elements that reinforce the
                  cultural narrative.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* RESULTS */}

        <section className={styles.results}>
          <SectionHeading
            number="04"
            title="Results"
            secondary="What the Project Demonstrates"
          />

          <div className={styles.resultsGrid}>
            <article className={`${styles.resultCard} ${styles.resultBlue}`}>
              <span>01</span>

              <h3>Versatility</h3>

              <p>
                Concept development, UX/UI, visual design, immersive thinking
                and web presentation.
              </p>
            </article>

            <article
              className={`${styles.resultCard} ${styles.resultYellow}`}
            >
              <span>02</span>

              <h3>Clear Identity</h3>

              <p>
                A culturally grounded visual direction supported by a strong
                storytelling system.
              </p>
            </article>

            <article className={`${styles.resultCard} ${styles.resultRed}`}>
              <span>03</span>

              <h3>Interactive Thinking</h3>

              <p>
                Motion, transitions and symbolic interactions reinforce the
                meaning of the experience.
              </p>
            </article>
          </div>
        </section>

        {/* END */}

        <section className={styles.end}>
          <span>End / Identidad.CO</span>

          <h2>
            CULTURE.
            <br />
            STORY.
            <br />
            TECHNOLOGY.
          </h2>

          <Link href="/#about">
            About me <span>↓</span>
          </Link>
        </section>
      </div>
    </main>
  );
}

type SectionHeadingProps = {
  number: string;
  title: string;
  secondary: string;
};

function SectionHeading({
  number,
  title,
  secondary,
}: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading}>
      <div>
        <span className={styles.sectionDot} />
        <span>{number}</span>
        <strong>{title}</strong>
      </div>

      <span>{secondary}</span>
    </div>
  );
}