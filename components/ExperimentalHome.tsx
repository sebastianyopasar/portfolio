"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { LanguageProvider, useLanguage } from "./LanguageProvider";
import type { Locale } from "@/lib/homeTranslations";
import styles from "./ExperimentalHome.module.css";
import IntroExperience from "./IntroExperience";

const work = [
  { key: "tokyo" as const, href: "/work/tokyo", image: "/tokyo/home-dashboard.png", name: "Project Tokyo", theme: "tokyo" as const },
  { key: "ecommerce" as const, href: "/work/ecommerce", image: "/ecommerce/home.png", name: "E-Commerce", theme: "commerce" as const },
  { key: "identidad" as const, href: "/work/niwa?enter=1", image: "/identidad/identidad-co.png", name: "Identidad.CO", theme: "identidad" as const },
];

type BackgroundEntry = { period: string; title: string; role: string; summary?: string };
type Capability = { name: string; headline: string; description: string; skills: string[] };
type ProcessStep = { name: string; description: string; example: string };
type LanguageStrings = {
  navWork: string; navExperience: string; navAbout: string; navContact: string;
  heroA: string; heroB: string; heroIntro: string; sectionWork: string;
  experience: string; experienceIntro: string; workTitle: string; educationTitle: string; learningTitle: string;
  career: BackgroundEntry[]; education: BackgroundEntry[]; learning: BackgroundEntry[];
  expertise: string; expertiseIntro: string; capabilities: Capability[];
  aboutTitle: string; aboutStatement: string; aboutBody: string; aboutFooter: string; aboutWords: [string, string, string];
  processTitle: string; processHeading: string; processIntro: string; processFooter: string;
  processSteps: ProcessStep[];
  contactTitle: string; contactButton: string; backToTop: string;
  projects: { tokyo: string; ecommerce: string; identidad: string };
};

const messages: Record<Locale, LanguageStrings> = {
  en: {
    navWork: "Work", navExperience: "Background", navAbout: "About", navContact: "Let's talk",
    heroA: "I make complex", heroB: "things simple.",
    heroIntro: "I'm Sebastián — a designer and developer who turns complicated ideas into digital experiences people enjoy using.",
    sectionWork: "Selected work",
    experience: "Experience & background.",
    experienceIntro: "A path through communication, customer experience and digital products — with learning built into every step.",
    workTitle: "Work", educationTitle: "Education", learningTitle: "Selected learning",
    career: [
      { period: "2025 — Present", title: "Corporate Facility Supply", role: "Marketing Lead", summary: "E-commerce, digital campaigns, UX improvements, analytics and web implementation." },
      { period: "2024", title: "RO, Horatio", role: "Bilingual Associate", summary: "English–Spanish client support and improvements to communication workflows." },
    ],
    education: [
      { period: "2026", title: "University of Niagara Falls", role: "MA · Digital Media & Global Communications" },
      { period: "2024", title: "National University of Colombia", role: "BA · Philology & Languages" },
    ],
    learning: [
      { period: "2026", title: "Google UX Design", role: "Professional Certificate · Coursera" },
      { period: "2024", title: "Excel Skills for Business", role: "Macquarie University" },
      { period: "2024", title: "Introduction to Data Analysis Using Excel", role: "Rice University" },
      { period: "2023", title: "Programming for Everybody", role: "University of Michigan" },
      { period: "2023", title: "Introduction to Programming with Python", role: "Universidad Austral" },
      { period: "2023", title: "Responsive Web Design", role: "freeCodeCamp" },
    ],
    expertise: "What I bring.", expertiseIntro: "Four disciplines. One way of thinking: make it useful, usable and real.",
    capabilities: [
      { name: "UX / UI", headline: "Make it intuitive.", description: "I translate user needs and messy requirements into clear interfaces and thoughtful journeys.", skills: ["User journeys", "Information architecture", "Wireframes & prototypes", "Responsive interfaces"] },
      { name: "Development", headline: "Make it work.", description: "I connect visual decisions to implementation, so ideas become functioning digital products.", skills: ["React & Next.js", "TypeScript", "HTML & CSS", "Interaction details"] },
      { name: "E-Commerce", headline: "Make it easier to buy.", description: "I work on discovery, product communication and customer-specific buying experiences.", skills: ["Shopify", "Merchandising", "Product discovery", "Conversion journeys"] },
      { name: "Digital strategy", headline: "Make it measurable.", description: "I connect product work with business goals, reporting and opportunities to improve.", skills: ["Google Analytics", "Excel & reporting", "CRM workflows", "Campaign execution"] },
    ],
    aboutTitle: "The connecting thread.",
    aboutStatement: "Good digital work starts with understanding people.",
    aboutBody: "My foundation in languages and communication influences the way I approach digital products. Today I connect that perspective with design, development and e-commerce — thinking about the person using the experience and the system supporting it.",
    aboutFooter: "Curiosity guides the questions. Craft shapes the answers.",
    aboutWords: ["Listen.", "Connect.", "Build."],
    processTitle: "How I work.", processHeading: "Progress isn't a straight line.",
    processIntro: "Every project moves differently. I use an iterative loop: understand what matters, make something real, learn, and return with better questions.",
    processFooter: "Different starting points. A shared habit of improving.",
    processSteps: [
      { name: "Understand", description: "Discover the real problem, who it affects and what success should look like.", example: "People · Context · Constraints" },
      { name: "Structure", description: "Organize information and workflows so the experience has a clear foundation.", example: "Flows · Priorities · Architecture" },
      { name: "Explore", description: "Sketch and prototype directions early — before decisions become expensive.", example: "Concepts · Prototypes · Feedback" },
      { name: "Build", description: "Turn design decisions into working interfaces and connected experiences.", example: "Implementation · Interaction · QA" },
      { name: "Refine", description: "Improve usability, accessibility and the details that shape how something feels.", example: "Testing · Polish · Accessibility" },
      { name: "Iterate", description: "Look at real feedback and performance, then return to the problem with new insight.", example: "Learning · Analytics · Next version" },
    ],
    contactTitle: "Let's make it better.", contactButton: "Get in touch", backToTop: "Back to top",
    projects: {
      tokyo: "A connected workspace for CRM, inventory and daily business operations.",
      ecommerce: "Helping people discover products and move from browsing to buying.",
      identidad: "Exploring Colombian identity through culture, coffee and digital storytelling.",
    },
  },
  es: {
    navWork: "Proyectos", navExperience: "Trayectoria", navAbout: "Sobre mí", navContact: "Hablemos",
    heroA: "Hago simple", heroB: "lo complejo.",
    heroIntro: "Soy Sebastián, diseñador y desarrollador. Convierto ideas complejas en experiencias digitales claras y agradables de usar.",
    sectionWork: "Proyectos",
    experience: "Experiencia y trayectoria.",
    experienceIntro: "Un recorrido entre comunicación, atención al cliente y productos digitales, acompañado por aprendizaje continuo.",
    workTitle: "Trabajo", educationTitle: "Educación", learningTitle: "Formación complementaria",
    career: [
      { period: "2025 — Actualidad", title: "Corporate Facility Supply", role: "Marketing Lead", summary: "E-commerce, campañas digitales, UX, analítica e implementación web." },
      { period: "2024", title: "RO, Horatio", role: "Bilingual Associate", summary: "Atención bilingüe y mejoras en los flujos de comunicación con clientes." },
    ],
    education: [
      { period: "2026", title: "University of Niagara Falls", role: "Maestría · Digital Media & Global Communications" },
      { period: "2024", title: "Universidad Nacional de Colombia", role: "Pregrado · Filología e Idiomas" },
    ],
    learning: [
      { period: "2026", title: "Google UX Design", role: "Certificado profesional · Coursera" },
      { period: "2024", title: "Excel Skills for Business", role: "Macquarie University" },
      { period: "2024", title: "Introduction to Data Analysis Using Excel", role: "Rice University" },
      { period: "2023", title: "Programming for Everybody", role: "University of Michigan" },
      { period: "2023", title: "Introduction to Programming with Python", role: "Universidad Austral" },
      { period: "2023", title: "Responsive Web Design", role: "freeCodeCamp" },
    ],
    expertise: "Lo que aporto.", expertiseIntro: "Cuatro disciplinas. Una misma forma de pensar: útil, claro y funcional.",
    capabilities: [
      { name: "UX / UI", headline: "Que sea intuitivo.", description: "Convierto necesidades de usuarios y requisitos complejos en interfaces y recorridos claros.", skills: ["Recorridos de usuario", "Arquitectura de información", "Prototipos", "Diseño responsive"] },
      { name: "Desarrollo", headline: "Que funcione.", description: "Conecto las decisiones de diseño con la implementación para construir productos digitales reales.", skills: ["React y Next.js", "TypeScript", "HTML y CSS", "Microinteracciones"] },
      { name: "E-Commerce", headline: "Que comprar sea fácil.", description: "Me enfoco en descubrir productos, comunicar su valor y mejorar la experiencia de compra.", skills: ["Shopify", "Merchandising", "Descubrimiento", "Conversión"] },
      { name: "Estrategia digital", headline: "Que se pueda medir.", description: "Relaciono decisiones de producto con objetivos de negocio, datos y mejora continua.", skills: ["Google Analytics", "Excel y reportes", "CRM", "Campañas"] },
    ],
    aboutTitle: "El hilo conductor.",
    aboutStatement: "El buen trabajo digital empieza por entender a las personas.",
    aboutBody: "Mi formación en idiomas y comunicación influye en cómo abordo los productos digitales. Hoy conecto esa perspectiva con diseño, desarrollo y e-commerce, pensando tanto en la persona que usa la experiencia como en el sistema que la hace posible.",
    aboutFooter: "La curiosidad guía las preguntas. El oficio construye las respuestas.",
    aboutWords: ["Escuchar.", "Conectar.", "Construir."],
    processTitle: "Cómo trabajo.", processHeading: "El progreso no es lineal.",
    processIntro: "Cada proyecto avanza de forma distinta. Trabajo en ciclos: entender lo importante, construir algo real, aprender y volver con mejores preguntas.",
    processFooter: "Diferentes puntos de partida. Una misma costumbre: mejorar.",
    processSteps: [
      { name: "Entender", description: "Identificar el problema, a quién afecta y qué significaría resolverlo.", example: "Personas · Contexto · Límites" },
      { name: "Estructurar", description: "Organizar la información y los flujos para crear una base clara.", example: "Recorridos · Prioridades · Arquitectura" },
      { name: "Explorar", description: "Probar bocetos y prototipos antes de tomar decisiones costosas.", example: "Conceptos · Prototipos · Feedback" },
      { name: "Construir", description: "Transformar decisiones de diseño en interfaces y experiencias funcionales.", example: "Implementación · Interacción · QA" },
      { name: "Refinar", description: "Mejorar usabilidad, accesibilidad y los detalles de la experiencia.", example: "Pruebas · Detalles · Accesibilidad" },
      { name: "Iterar", description: "Revisar feedback y resultados para regresar al problema con una visión más clara.", example: "Aprendizaje · Analítica · Nueva versión" },
    ],
    contactTitle: "Hagámoslo mejor.", contactButton: "Conversemos", backToTop: "Volver arriba",
    projects: {
      tokyo: "Una plataforma conectada para CRM, inventario y operaciones empresariales.",
      ecommerce: "Experiencias que conectan el descubrimiento de productos con la compra.",
      identidad: "Identidad colombiana explorada a través del café, la cultura y la narrativa digital.",
    },
  },
  fr: {
    navWork: "Projets", navExperience: "Parcours", navAbout: "À propos", navContact: "Parlons",
    heroA: "Je simplifie", heroB: "le complexe.",
    heroIntro: "Je suis Sebastián, designer et développeur. Je transforme des idées complexes en expériences numériques claires et agréables à utiliser.",
    sectionWork: "Projets choisis",
    experience: "Expérience et parcours.",
    experienceIntro: "Un parcours entre communication, service client et produits numériques, enrichi par un apprentissage continu.",
    workTitle: "Expérience", educationTitle: "Études", learningTitle: "Formation complémentaire",
    career: [
      { period: "2025 — Aujourd'hui", title: "Corporate Facility Supply", role: "Responsable marketing", summary: "E-commerce, campagnes, UX, analyse et développement web." },
      { period: "2024", title: "RO, Horatio", role: "Conseiller bilingue", summary: "Accompagnement client en anglais et en espagnol et amélioration des échanges." },
    ],
    education: [
      { period: "2026", title: "University of Niagara Falls", role: "Maîtrise · Digital Media & Global Communications" },
      { period: "2024", title: "Université nationale de Colombie", role: "Licence · Philologie et langues" },
    ],
    learning: [
      { period: "2026", title: "Google UX Design", role: "Certificat professionnel · Coursera" },
      { period: "2024", title: "Excel Skills for Business", role: "Macquarie University" },
      { period: "2024", title: "Introduction to Data Analysis Using Excel", role: "Rice University" },
      { period: "2023", title: "Programming for Everybody", role: "University of Michigan" },
      { period: "2023", title: "Introduction to Programming with Python", role: "Universidad Austral" },
      { period: "2023", title: "Responsive Web Design", role: "freeCodeCamp" },
    ],
    expertise: "Ce que j'apporte.", expertiseIntro: "Quatre disciplines. Une même manière de penser : utile, claire et concrète.",
    capabilities: [
      { name: "UX / UI", headline: "Rendre intuitif.", description: "Je transforme les besoins des utilisateurs et les contraintes en interfaces et parcours clairs.", skills: ["Parcours utilisateur", "Architecture de l'information", "Prototypes", "Responsive"] },
      { name: "Développement", headline: "Rendre fonctionnel.", description: "Je relie les choix de design à leur mise en œuvre pour créer des produits numériques réels.", skills: ["React et Next.js", "TypeScript", "HTML et CSS", "Microinteractions"] },
      { name: "E-Commerce", headline: "Faciliter l'achat.", description: "Je travaille sur la découverte des produits, leur présentation et l'expérience d'achat.", skills: ["Shopify", "Merchandising", "Découverte produit", "Conversion"] },
      { name: "Stratégie digitale", headline: "Rendre mesurable.", description: "Je relie les décisions produit aux objectifs métier, aux données et à l'amélioration continue.", skills: ["Google Analytics", "Excel et reporting", "CRM", "Campagnes"] },
    ],
    aboutTitle: "Le fil conducteur.",
    aboutStatement: "Un bon produit numérique commence par la compréhension des personnes.",
    aboutBody: "Ma formation en langues et en communication influence mon approche des produits numériques. Aujourd'hui, je relie cette perspective au design, au développement et au e-commerce, en pensant autant à l'utilisateur qu'au système qui soutient l'expérience.",
    aboutFooter: "La curiosité pose les questions. Le savoir-faire construit les réponses.",
    aboutWords: ["Écouter.", "Relier.", "Créer."],
    processTitle: "Ma méthode.", processHeading: "Le progrès n'est pas linéaire.",
    processIntro: "Chaque projet avance différemment. Je travaille en boucle : comprendre, concrétiser, apprendre et revenir avec de meilleures questions.",
    processFooter: "Différents points de départ. Une même envie d'améliorer.",
    processSteps: [
      { name: "Comprendre", description: "Identifier le problème, les personnes concernées et la réussite attendue.", example: "Personnes · Contexte · Contraintes" },
      { name: "Structurer", description: "Organiser les informations et les parcours sur une base claire.", example: "Parcours · Priorités · Architecture" },
      { name: "Explorer", description: "Tester des idées et prototypes avant de figer les choix.", example: "Concepts · Prototypes · Retours" },
      { name: "Construire", description: "Transformer les choix de design en interfaces et expériences fonctionnelles.", example: "Développement · Interactions · QA" },
      { name: "Affiner", description: "Améliorer l'utilisabilité, l'accessibilité et les détails.", example: "Tests · Finitions · Accessibilité" },
      { name: "Itérer", description: "Observer les retours et résultats pour revenir au problème avec un regard neuf.", example: "Apprentissage · Analyse · Version suivante" },
    ],
    contactTitle: "Faisons mieux.", contactButton: "Me contacter", backToTop: "Retour en haut",
    projects: {
      tokyo: "Un espace connecté pour le CRM, l'inventaire et les opérations.",
      ecommerce: "Une expérience qui relie découverte de produits et achat.",
      identidad: "L'identité colombienne racontée par le café, la culture et le numérique.",
    },
  },
};

const linkedin = "https://www.linkedin.com/in/sebasti%C3%A1n-yopas%C3%A1-reyes/";
const email = "sebastianyopasar@gmail.com";

function BackgroundColumn({ heading, entries, type }: { heading: string; entries: BackgroundEntry[]; type: "work" | "education" | "learning" }) {
  return (
    <div className={`${styles.backgroundColumn} ${styles[type]}`}>
      <h3>{heading}</h3>
      <div className={styles.backgroundItems}>
        {entries.map((entry) => (
          <article key={`${entry.title}-${entry.period}`} className={styles.backgroundItem} data-reveal>
            <span className={styles.entryYear}>{entry.period}</span>
            <h4>{entry.title}</h4>
            <strong>{entry.role}</strong>
            {entry.summary && <p>{entry.summary}</p>}
          </article>
        ))}
      </div>
    </div>
  );
}

function InnerHome() {
  const { locale, setLocale } = useLanguage();
  const t = messages[locale];
  const router = useRouter();
  const [navigating, setNavigating] = useState(false);
  const [activeCapability, setActiveCapability] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const siteRef = useRef<HTMLElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const capabilityRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const site = siteRef.current;
    if (!site) return;
    const nodes = Array.from(site.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => { node.dataset.visible = "true"; });
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -20px 0px" });
    nodes.forEach((node) => observer.observe(node));
    site.dataset.ready = "true";
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const previousBody = document.body.style.backgroundColor;
    const previousHtml = document.documentElement.style.backgroundColor;
    document.body.style.backgroundColor = "#0d0e10";
    document.documentElement.style.backgroundColor = "#0d0e10";
    return () => {
      document.body.style.backgroundColor = previousBody;
      document.documentElement.style.backgroundColor = previousHtml;
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function openProject(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.preventDefault();
    if (navigating) return;
    setNavigating(true);
    timer.current = setTimeout(() => router.push(href), 1620);
  }

  function onIndexKey(event: KeyboardEvent<HTMLButtonElement>, index: number, length: number, setter: (index: number) => void, refs: React.RefObject<(HTMLButtonElement | null)[]>) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + length) % length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = length - 1;
    else return;
    event.preventDefault();
    setter(next);
    refs.current[next]?.focus();
  }

  return (
    <main ref={siteRef} id="top" className={styles.site}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Sebastián Yopasá — homepage"><span className={styles.brandMark}>S.</span><span>Sebastián Yopasá</span></a>
        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#work">{t.navWork}</a>
          <a href="#experience">{t.navExperience}</a>
          <a href="#about">{t.navAbout}</a>
        </nav>
        <div className={styles.headerEnd}>
          <label htmlFor="portfolio-language" className={styles.srOnly}>Language</label>
          <select id="portfolio-language" className={styles.languageSelect} value={locale} onChange={(event) => setLocale(event.target.value as Locale)}>
            <option value="en">EN</option><option value="fr">FR</option><option value="es">ES</option>
          </select>
          <a className={styles.workTogether} href="#contact">{t.navContact} <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="portfolio-title">
        <div className={styles.heroBody}>
          <h1 id="portfolio-title"><span>{t.heroA}</span><span>{t.heroB}</span></h1>
          <p>{t.heroIntro}</p>
        </div>
        <a className={styles.heroScroll} href="#work" aria-label={t.navWork}><span aria-hidden="true">↓</span></a>
      </section>

      <section id="work" className={styles.work} aria-labelledby="work-title">
        <h2 className={styles.srOnly} id="work-title">{t.sectionWork}</h2>
        <div className={styles.projectGrid}>
          {work.map((item, index) => (
            <Link key={item.key} href={item.href} onClick={(event) => openProject(event, item.href)}
              className={`${styles.project} ${styles[item.theme]} ${index === 0 ? styles.featured : ""}`}
              aria-label={`${item.name}: ${t.projects[item.key]}`} data-reveal>
              <div className={styles.projectText}>
                <h3>{item.name}</h3><p>{t.projects[item.key]}</p>
                <span className={styles.projectArrow} aria-hidden="true">↗</span>
              </div>
              <div className={styles.projectShot} aria-hidden="true">
                <Image src={item.image} alt="" fill sizes={index === 0 ? "(max-width: 850px) 100vw, 65vw" : "(max-width: 850px) 100vw, 45vw"} className={styles.projectShotImage} priority={index === 0} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 1 — Experience: an editorial record, not a two-item timeline */}
      <section id="experience" className={`${styles.section} ${styles.backgroundSection}`} aria-labelledby="experience-title">
        <div className={styles.sectionIntro} data-reveal>
          <h2 className={styles.heading} id="experience-title">{t.experience}</h2>
          <p>{t.experienceIntro}</p>
        </div>
        <div className={styles.backgroundGrid}>
          <BackgroundColumn heading={t.workTitle} entries={t.career} type="work" />
          <BackgroundColumn heading={t.educationTitle} entries={t.education} type="education" />
          <BackgroundColumn heading={t.learningTitle} entries={t.learning} type="learning" />
        </div>
      </section>

      {/* 2 — What I bring: typography-led, keyboard-accessible index */}
      <section id="expertise" className={`${styles.section} ${styles.expertise}`} aria-labelledby="expertise-title">
        <div className={styles.sectionIntro} data-reveal>
          <h2 className={styles.heading} id="expertise-title">{t.expertise}</h2>
          <p>{t.expertiseIntro}</p>
        </div>
        <div className={styles.capabilityLayout}>
          <div className={styles.capabilityIndex} aria-label={t.expertise}>
            {t.capabilities.map((item, index) => (
              <button key={item.name} type="button" className={`${styles.capabilityButton} ${activeCapability === index ? styles.capabilitySelected : ""}`}
                onClick={() => setActiveCapability(index)}
                onKeyDown={(event) => onIndexKey(event, index, t.capabilities.length, setActiveCapability, capabilityRefs)}
                ref={(node) => { capabilityRefs.current[index] = node; }}
                aria-pressed={activeCapability === index} aria-controls="capability-detail">
                <span className={styles.capabilityNumber}>0{index + 1}</span><strong>{item.name}</strong>
                <span className={styles.capabilityArrow} aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <div id="capability-detail" className={styles.capabilityDetail} aria-live="polite" aria-atomic="true">
            <div className={styles.capabilityHalo} aria-hidden="true" />
            <div key={`${locale}-${activeCapability}`} className={styles.capabilityContent}>
              <span className={styles.capabilityLargeNumber} aria-hidden="true">0{activeCapability + 1}</span>
              <h3>{t.capabilities[activeCapability].headline}</h3>
              <p>{t.capabilities[activeCapability].description}</p>
              <div className={styles.capabilitySkills}>
                {t.capabilities[activeCapability].skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — About: personal foundation, not a clone of a photo + bio */}
      <section id="about" className={`${styles.section} ${styles.about}`} aria-labelledby="about-title">
        <h2 className={styles.heading} id="about-title" data-reveal>{t.aboutTitle}</h2>
        <div className={styles.aboutEditorial}>
          <div className={styles.aboutLeft} data-reveal><h3>{t.aboutStatement}</h3></div>
          <div className={styles.aboutRight} data-reveal><p>{t.aboutBody}</p><p className={styles.aboutFooter}>{t.aboutFooter}</p></div>
        </div>
        <div className={styles.aboutWords} aria-label={t.aboutWords.join(" ")} data-reveal>
          {t.aboutWords.map((word, index) => <span key={index}>{word}</span>)}
        </div>
      </section>

      {/* 4 — How I work: a responsive, interactive, non-linear orbit */}
      <section id="process" className={`${styles.section} ${styles.process}`} aria-labelledby="process-title">
        <div className={styles.processIntro} data-reveal>
          <div><h2 className={styles.heading} id="process-title">{t.processTitle}</h2><h3>{t.processHeading}</h3></div>
          <p>{t.processIntro}</p>
        </div>
        <div className={styles.processDiagram} data-reveal>
          <div className={styles.orbitRings} aria-hidden="true"><span /><span /></div>
          <div className={styles.processCore} id="process-detail" aria-live="polite" aria-atomic="true">
            <div key={`${locale}-${activeStep}`} className={styles.processCoreContent}>
              <span className={styles.processCoreIndex}>0{activeStep + 1} / 06</span>
              <h4>{t.processSteps[activeStep].name}</h4>
              <p>{t.processSteps[activeStep].description}</p>
              <strong>{t.processSteps[activeStep].example}</strong>
            </div>
          </div>
          <div className={styles.processNodes} aria-label={t.processTitle}>
            {t.processSteps.map((step, index) => (
              <button key={index} type="button" className={`${styles.processNode} ${activeStep === index ? styles.processNodeActive : ""}`}
                onClick={() => setActiveStep(index)}
                onKeyDown={(event) => onIndexKey(event, index, t.processSteps.length, setActiveStep, stepRefs)}
                ref={(node) => { stepRefs.current[index] = node; }}
                aria-pressed={activeStep === index} aria-controls="process-detail"
                aria-label={`0${index + 1}. ${step.name}`}>
                <span>0{index + 1}</span><strong>{step.name}</strong>
              </button>
            ))}
          </div>
        </div>
        <p className={styles.processFootnote} data-reveal>{t.processFooter}<span aria-hidden="true"> ↺</span></p>
      </section>

      <footer id="contact" className={styles.contact}>
        <h2 data-reveal>{t.contactTitle}</h2>
        <div className={styles.contactActions}>
          <a href={`mailto:${email}`} className={styles.primaryContact}>{t.contactButton} <span aria-hidden="true">↗</span></a>
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <div className={styles.footerBottom}><span>© 2026 Sebastián Yopasá</span><a href="#top">↑ {t.backToTop}</a></div>
      </footer>

      {navigating && createPortal(
        <div className={styles.transition} aria-hidden="true"><div className={styles.curtainCoral} /><div className={styles.curtainBlue} /></div>,
        document.body
      )}
    </main>
  );
}

export default function ExperimentalHome() {
  return <LanguageProvider><IntroExperience /><InnerHome /></LanguageProvider>;
}
