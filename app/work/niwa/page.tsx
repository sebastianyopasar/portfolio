import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import IdentidadCardDeck from "../../../components/IdentidadCardDeck";
import InfographicPanel from "../../../components/InfographicPanel";

import styles from "./identidad.module.css";

const outputs = [
  {
    number: "01",
    title: "Website Experience",
    description:
      "A digital entry point introducing the concept, visual identity and cultural narrative of the project.",
  },
  {
    number: "02",
    title: "Interactive Card Series",
    description:
      "A set of immersive visual cards designed to communicate key moments of the coffee journey in a bilingual and experiential format.",
  },
  {
    number: "03",
    title: "Immersive Visual Assets",
    description:
      "3D-inspired scenes, symbolic compositions and visual storytelling pieces connecting coffee, place and identity.",
  },
  {
    number: "04",
    title: "Research Infographic",
    description:
      "A large-format infographic summarizing the project framework, goals, cultural context and immersive direction.",
  },
];

export default function NiwaPage() {
  return (
    <main className={styles.identidadPage}>
      <div className={styles.siteContainer}>
        <nav className={styles.caseNav}>
          <Link href="/" className={styles.brand}>
            SEBASTIÁN YOPASÁ
          </Link>

          <Link href="/#work" className={styles.caseBack}>
            ← Back to work
          </Link>
        </nav>

        {/* HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroEyebrow}>
            <span>03 / IDENTIDAD.CO</span>
            <span>VR · WEB · CULTURE</span>
          </div>

          <div className={styles.heroGrid}>
            <Reveal>
              <div className={styles.heroCopy}>
                <span className={styles.heroKicker}>
                  CULTURAL DIGITAL EXPERIENCE
                </span>

                <h1 className={styles.heroTitle}>
                  IDENTIDAD<span>.CO</span>
                </h1>

                <h2 className={styles.heroSubtitle}>
                  Colombian culture through
                  <span> immersive media.</span>
                </h2>

                <p className={styles.heroDescription}>
                  A web and VR concept exploring Colombian identity through
                  coffee, territory and digital storytelling.
                </p>

                <div className={styles.heroActions}>
                  <a href="#website-experience" className={styles.primaryButton}>
                    ENTER THE EXPERIENCE
                    <span>↓</span>
                  </a>

                  <span className={styles.heroCaption}>
                    WEB EXPERIENCE · VR STORYTELLING · CULTURAL IDENTITY
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className={styles.heroVisualCard}>
                <div className={styles.heroVisualInner}>
                  <Image
                    src="/identidad/hero-market.png"
                    alt="Colombian market and community environment representing the cultural experience of Identidad.CO"
                    fill
                    className={styles.heroVisualImage}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className={styles.heroVisualMeta}>
                  <span>CULTURAL IDENTITY</span>
                  <span>COLOMBIA · COFFEE · MEDIA</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className={styles.heroMetaGrid}>
            <div>
              <span>Medium</span>
              <strong>Web + VR</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>Immersive Storytelling</strong>
            </div>
            <div>
              <span>Connector</span>
              <strong>Colombian Coffee</strong>
            </div>
            <div>
              <span>Objective</span>
              <strong>Culture → Experience</strong>
            </div>
          </div>
        </section>

        {/* WEBSITE EXPERIENCE */}
        <section id="website-experience" className={styles.contentSection}>
          <div className={styles.sectionLabel}>
            <span>01</span>
            <span>Website Experience</span>
          </div>

          <div className={styles.experienceIntro}>
            <Reveal>
              <div className={styles.experienceImageWrap}>
                <div className={styles.experienceImageInner}>
                  <Image
                    src="/identidad/hero-market.png"
                    alt="Polished Colombian market scene used as the main visual for Identidad.CO"
                    fill
                    className={styles.experienceImage}
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className={styles.experienceCopy}>
                <span className={styles.sectionMiniTitle}>
                  A digital entry point into the cultural story.
                </span>

                <h3>
                  A website that introduces the concept, the visual identity and
                  the immersive direction of the project.
                </h3>

                <p>
                  The web experience works as the first layer of the project.
                  It frames the cultural context, communicates the design
                  intention and guides users toward the immersive pieces created
                  around coffee, identity and Colombian storytelling.
                </p>

                <div className={styles.tagList}>
                  <span>UX / UI</span>
                  <span>WEB</span>
                  <span>STORYTELLING</span>
                  <span>CULTURE</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <IdentidadCardDeck />
          </Reveal>
        </section>

        {/* OUTPUTS */}
        <section className={styles.outputsSection}>
          <div className={styles.sectionLabel}>
            <span>02</span>
            <span>What was created</span>
          </div>

          <div className={styles.outputsGrid}>
            {outputs.map((item, index) => (
              <Reveal key={item.number} delay={index * 60}>
                <article className={styles.outputCard}>
                  <span className={styles.outputNumber}>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* INFOGRAPHIC */}
        <Reveal>
          <InfographicPanel />
        </Reveal>

        {/* NEXT */}
        <section className={styles.caseNext}>
          <p>Next project</p>

          <Link href="/work/tokyo">
            Project Tokyo
            <span>↗</span>
          </Link>
        </section>
      </div>
    </main>
  );
}