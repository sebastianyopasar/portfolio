"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { LanguageProvider, useLanguage } from "./LanguageProvider";
import type { Locale } from "@/lib/homeTranslations";
import TokyoDemo from "./TokyoDemo";
import IdentidadCardDeck from "./IdentidadCardDeck";
import styles from "./CaseStudy.module.css";

type ProjectId = "tokyo" | "ecommerce" | "identidad";
type ProjectCopy = {
  category: string; title: string; subtitle: string;
  role: string; approach: string; context: string; contextBody: string;
  workTitle: string; workIntro: string;
  decisions: { title: string; text: string }[];
  closing: string; note: string;
  images?: { src: string; alt: string; title: string; description: string }[];
};
type SharedCopy = {
  work: string; back: string; view: string; context: string; decisions: string;
  next: string; nextLabel: string; explore: string; sample: string; infographic: string;
  infographicDetails: string; openInfographic: string; backTop: string;
};

const shared: Record<Locale, SharedCopy> = {
  en: { work: "Selected work", back: "Back to work", view: "Explore the experience", context: "The challenge", decisions: "Design decisions", next: "Next project", nextLabel: "Keep exploring", explore: "Explore the interactive cards", sample: "Interactive product preview. Representative sample data, not a live environment.", infographic: "The research, in one visual story.", infographicDetails: "Explore the project research infographic", openInfographic: "Open full infographic", backTop: "Back to top" },
  es: { work: "Proyectos", back: "Volver a proyectos", view: "Explora la experiencia", context: "El desafío", decisions: "Decisiones de diseño", next: "Siguiente proyecto", nextLabel: "Seguir explorando", explore: "Explora las tarjetas interactivas", sample: "Vista interactiva del producto. Datos de ejemplo, no un entorno real.", infographic: "La investigación en una historia visual.", infographicDetails: "Explora la infografía del proyecto", openInfographic: "Abrir infografía completa", backTop: "Volver arriba" },
  fr: { work: "Projets", back: "Retour aux projets", view: "Explorer l’expérience", context: "Le défi", decisions: "Choix de conception", next: "Projet suivant", nextLabel: "Continuer à explorer", explore: "Explorer les cartes interactives", sample: "Aperçu interactif du produit. Données fictives, pas un environnement réel.", infographic: "La recherche, racontée visuellement.", infographicDetails: "Explorer l’infographie du projet", openInfographic: "Ouvrir l’infographie complète", backTop: "Retour en haut" },
};

const content: Record<Locale, Record<ProjectId, ProjectCopy>> = {
  en: {
    tokyo: {
      category: "Product design / development", title: "Project Tokyo", subtitle: "One system. A clearer way to work.",
      role: "Product design + development", approach: "Business systems / UX / UI", context: "Complexity doesn't have to feel complicated.",
      contextBody: "Customer information, inventory, sales and everyday operations are easier to manage when they share context. Tokyo explores how to turn disconnected workflows into one understandable product.",
      workTitle: "A system you can actually explore.", workIntro: "Instead of describing a platform through dozens of screens, this interactive sample lets you move between the dashboard, companies, inventory and work orders.",
      decisions: [
        { title: "Keep the context", text: "Connect customers, stock and activity so people don't have to reconstruct their work across tools." },
        { title: "Make actions predictable", text: "Reuse navigation, tables and interaction patterns throughout the product." },
        { title: "Design for growth", text: "Keep the underlying structure modular without making the interface harder to learn." },
      ], closing: "A more capable product should still feel simple.", note: "Concept and working product exploration — no invented performance claims.",
    },
    ecommerce: {
      category: "E-commerce / digital experience", title: "E-Commerce", subtitle: "From discovery to checkout.",
      role: "Experience design + implementation", approach: "Shopify / merchandising / UX", context: "A product can't convert if people can't find it.",
      contextBody: "A large commercial catalog creates choices, questions and friction. This work focuses on making products easier to discover, evaluate and buy through clearer information and connected promotional experiences.",
      workTitle: "Three moments. One shopping journey.", workIntro: "From the first promotion to the product detail page, the experience needs to speak the same language.",
      decisions: [
        { title: "Lead with discovery", text: "Make categories, search and product presentation easy to scan." },
        { title: "Answer buying questions", text: "Give availability, applications and useful technical information a clear place." },
        { title: "Connect the campaign", text: "Carry the promotional message consistently from landing page to product and order." },
      ], closing: "Make it easier to find. Easier to understand. Easier to buy.", note: "Real Shopify work and interface examples; no unsupported conversion claims.",
      images: [
        { src: "/ecommerce/home.png", alt: "Corporate Facility Supply storefront homepage", title: "Attract", description: "A focused landing page connects the campaign message to the catalog." },
        { src: "/ecommerce/collection.png", alt: "Shopify product collection", title: "Discover", description: "Browse and compare relevant products without fighting the interface." },
        { src: "/ecommerce/product.png", alt: "Shopify product detail", title: "Decide", description: "Clear product information supports a confident purchase." },
      ],
    },
    identidad: {
      category: "Culture / immersive media", title: "Identidad.CO", subtitle: "A culture you can experience.",
      role: "Digital storytelling + experience", approach: "Web / cultural research / interaction", context: "How can a story become an experience?",
      contextBody: "Coffee is part of Colombia's culture, landscape and shared identity. Identidad.CO explores how research, interactive storytelling and immersive visual media can make that story more tangible.",
      workTitle: "From origin to interaction.", workIntro: "The project connects a web experience, an interactive card series and visual research about Colombian coffee and identity.",
      decisions: [
        { title: "Start with the culture", text: "Use Colombian coffee as a recognizable point of entry into a broader identity story." },
        { title: "Let people explore", text: "Move beyond a static page with interactive visual cards and layered content." },
        { title: "Give research a form", text: "Translate the cultural context into a visual infographic that can be explored independently." },
      ], closing: "A story becomes more memorable when people take part in it.", note: "An exploratory web and immersive-media concept, not a launched VR product.",
    },
  },
  es: {
    tokyo: {
      category: "Diseño de producto / desarrollo", title: "Project Tokyo", subtitle: "Un sistema. Una forma más clara de trabajar.",
      role: "Diseño de producto + desarrollo", approach: "Sistemas empresariales / UX / UI", context: "Lo complejo no tiene que sentirse complicado.",
      contextBody: "La información de clientes, inventario, ventas y operaciones es más fácil de gestionar cuando comparte contexto. Tokyo explora cómo reunir procesos aislados en un producto comprensible.",
      workTitle: "Un sistema que puedes explorar.", workIntro: "En lugar de explicarlo con decenas de pantallas, esta muestra interactiva permite recorrer el dashboard, las empresas, el inventario y las órdenes de trabajo.",
      decisions: [
        { title: "Conservar el contexto", text: "Conectar clientes, inventario y actividad sin reconstruir la información entre herramientas." },
        { title: "Acciones predecibles", text: "Reutilizar navegación, tablas y patrones en todo el producto." },
        { title: "Diseñar para crecer", text: "Mantener una estructura modular sin complicar el aprendizaje de la interfaz." },
      ], closing: "Un producto más capaz también debe sentirse simple.", note: "Exploración de producto y diseño, sin métricas de rendimiento inventadas.",
    },
    ecommerce: {
      category: "E-commerce / experiencia digital", title: "E-Commerce", subtitle: "Del descubrimiento a la compra.",
      role: "Diseño de experiencia + implementación", approach: "Shopify / merchandising / UX", context: "Si no encuentran un producto, no pueden comprarlo.",
      contextBody: "Un catálogo comercial amplio genera decisiones, preguntas y fricción. Este trabajo busca facilitar el descubrimiento, la evaluación y la compra mediante información más clara y promociones conectadas.",
      workTitle: "Tres momentos. Un recorrido de compra.", workIntro: "Desde la primera promoción hasta el detalle de producto, la experiencia debe hablar el mismo lenguaje.",
      decisions: [
        { title: "Facilitar el descubrimiento", text: "Hacer fáciles de explorar las categorías, la búsqueda y los productos." },
        { title: "Responder dudas", text: "Dar claridad a disponibilidad, aplicaciones e información técnica útil." },
        { title: "Conectar la campaña", text: "Mantener el mensaje promocional desde la landing hasta el pedido." },
      ], closing: "Más fácil encontrar. Más fácil entender. Más fácil comprar.", note: "Ejemplos reales de trabajo en Shopify, sin resultados de conversión no verificados.",
      images: [
        { src: "/ecommerce/home.png", alt: "Página inicial de la tienda de Corporate Facility Supply", title: "Atraer", description: "Una landing conecta la campaña con el catálogo." },
        { src: "/ecommerce/collection.png", alt: "Colección de productos en Shopify", title: "Descubrir", description: "Explorar y comparar productos sin fricción." },
        { src: "/ecommerce/product.png", alt: "Detalle del producto en Shopify", title: "Decidir", description: "La información clara permite comprar con más confianza." },
      ],
    },
    identidad: {
      category: "Cultura / medios inmersivos", title: "Identidad.CO", subtitle: "Una cultura que puedes experimentar.",
      role: "Narrativa digital + experiencia", approach: "Web / investigación cultural / interacción", context: "¿Cómo convertir una historia en experiencia?",
      contextBody: "El café es parte de la cultura, el paisaje y la identidad de Colombia. Identidad.CO explora cómo la investigación y los medios interactivos pueden volver esa historia más tangible.",
      workTitle: "Del origen a la interacción.", workIntro: "El proyecto conecta una experiencia web, tarjetas interactivas e investigación visual sobre el café y la identidad colombiana.",
      decisions: [
        { title: "Partir de la cultura", text: "Usar el café colombiano para abrir una conversación más amplia sobre identidad." },
        { title: "Invitar a explorar", text: "Ir más allá de una página estática mediante tarjetas visuales interactivas." },
        { title: "Visualizar la investigación", text: "Convertir el contexto cultural en una infografía que pueda recorrerse independientemente." },
      ], closing: "Una historia se recuerda más cuando participamos en ella.", note: "Concepto exploratorio de web y medios inmersivos; no se presenta como un producto VR lanzado.",
    },
  },
  fr: {
    tokyo: {
      category: "Design produit / développement", title: "Project Tokyo", subtitle: "Un système. Une façon plus claire de travailler.",
      role: "Design produit + développement", approach: "Systèmes d’entreprise / UX / UI", context: "La complexité n'a pas à être compliquée.",
      contextBody: "Les données clients, les stocks, les ventes et les opérations sont plus simples à gérer dans un contexte partagé. Tokyo explore comment réunir des processus isolés dans un produit compréhensible.",
      workTitle: "Un système à explorer.", workIntro: "Cet aperçu interactif permet de parcourir le tableau de bord, les entreprises, les stocks et les ordres de travail sans multiplier les écrans explicatifs.",
      decisions: [
        { title: "Conserver le contexte", text: "Relier clients, stocks et activités sans reconstruire l'information d'un outil à l'autre." },
        { title: "Des actions prévisibles", text: "Réutiliser la navigation, les tableaux et les interactions dans tout le produit." },
        { title: "Prévoir l'évolution", text: "Garder une structure modulaire sans compliquer l'apprentissage de l'interface." },
      ], closing: "Un produit plus puissant doit rester simple.", note: "Exploration de produit et de design, sans résultats chiffrés inventés.",
    },
    ecommerce: {
      category: "E-commerce / expérience numérique", title: "E-Commerce", subtitle: "De la découverte à l'achat.",
      role: "Design d'expérience + réalisation", approach: "Shopify / merchandising / UX", context: "On ne peut pas acheter ce qu'on ne trouve pas.",
      contextBody: "Un vaste catalogue commercial entraîne des choix et des hésitations. Ce travail vise une découverte, une évaluation et un achat plus simples grâce à une information claire et des promotions cohérentes.",
      workTitle: "Trois moments. Un parcours d'achat.", workIntro: "De la première promotion à la fiche produit, l'expérience doit rester cohérente.",
      decisions: [
        { title: "Faciliter la découverte", text: "Rendre les catégories, la recherche et les produits faciles à parcourir." },
        { title: "Répondre aux questions", text: "Clarifier la disponibilité, les usages et les informations techniques." },
        { title: "Relier la campagne", text: "Assurer la continuité du message promotionnel jusqu'à la commande." },
      ], closing: "Plus facile à trouver. À comprendre. À acheter.", note: "Exemples réels de travail sur Shopify, sans résultats de conversion non vérifiés.",
      images: [
        { src: "/ecommerce/home.png", alt: "Page d’accueil de la boutique Corporate Facility Supply", title: "Attirer", description: "Une page d'accueil relie la campagne au catalogue." },
        { src: "/ecommerce/collection.png", alt: "Collection de produits Shopify", title: "Découvrir", description: "Explorer et comparer les produits sans friction." },
        { src: "/ecommerce/product.png", alt: "Fiche produit Shopify", title: "Décider", description: "Une information claire aide à acheter en confiance." },
      ],
    },
    identidad: {
      category: "Culture / médias immersifs", title: "Identidad.CO", subtitle: "Une culture à vivre.",
      role: "Narration numérique + expérience", approach: "Web / recherche culturelle / interaction", context: "Comment transformer une histoire en expérience ?",
      contextBody: "Le café fait partie de la culture, des paysages et de l'identité colombienne. Identidad.CO explore comment la recherche et les médias interactifs peuvent donner vie à cette histoire.",
      workTitle: "Des origines à l'interaction.", workIntro: "Le projet réunit une expérience web, des cartes interactives et une recherche visuelle sur le café et l'identité colombienne.",
      decisions: [
        { title: "Partir de la culture", text: "Utiliser le café colombien comme point d'entrée vers un récit plus large sur l'identité." },
        { title: "Inviter à explorer", text: "Dépasser une page statique avec des cartes visuelles interactives." },
        { title: "Visualiser la recherche", text: "Traduire le contexte culturel dans une infographie que l'on peut parcourir librement." },
      ], closing: "Une histoire marque davantage quand on y participe.", note: "Concept exploratoire web et médias immersifs, pas un produit VR commercialisé.",
    },
  },
};

const sequence: ProjectId[] = ["tokyo", "ecommerce", "identidad"];
const pathByProject: Record<ProjectId, string> = {
  tokyo: "/work/tokyo", ecommerce: "/work/ecommerce", identidad: "/work/niwa?enter=1",
};
const heroImage: Record<ProjectId, { src: string; alt: string }> = {
  tokyo: { src: "/tokyo/home-dashboard.png", alt: "Project Tokyo product dashboard" },
  ecommerce: { src: "/ecommerce/home.png", alt: "Corporate Facility Supply e-commerce experience" },
  identidad: { src: "/identidad/hero-market.png", alt: "Colombian coffee market visual scene for Identidad.CO" },
};

function CaseStudyInner({ project }: { project: ProjectId }) {
  const { locale, setLocale } = useLanguage();
  const words = content[locale][project];
  const labels = shared[locale];
  const nextId = sequence[(sequence.indexOf(project) + 1) % sequence.length];
  const [navigating, setNavigating] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const navigateWithCurtain = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.preventDefault();
    if (navigating) return;
    setNavigating(true);
    timer.current = setTimeout(() => router.push(href), 1620);
  };

  return (
    <main className={`${styles.case} ${styles[project]}`} id="top" data-case-study={project}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <Link href="/" className={styles.brand} onClick={(e) => navigateWithCurtain(e, "/")}>S<span className={styles.brandDot}>.</span> <span>Sebastián Yopasá</span></Link>
          <div className={styles.headerRight}>
            <label htmlFor="case-language" className={styles.srOnly}>Language / Idioma / Langue</label>
            <select id="case-language" className={styles.languageSelect} value={locale} onChange={(e) => setLocale(e.target.value as Locale)}>
              <option value="en">EN</option><option value="fr">FR</option><option value="es">ES</option>
            </select>
            <Link className={styles.back} aria-label={labels.back} href="/#work" onClick={(e) => navigateWithCurtain(e, "/#work")}><span aria-hidden="true">←</span><span className={styles.backText}>{labels.back}</span></Link>
          </div>
        </header>

        <section className={styles.hero} aria-labelledby="case-title">
          <div className={styles.overline}><span>{String(sequence.indexOf(project) + 1).padStart(2, "0")} / {words.category}</span><span>{words.approach}</span></div>
          <h1 id="case-title">{project === "tokyo" ? <>Project <span>Tokyo.</span></> : project === "identidad" ? <>Identidad<span>.CO</span></> : <>E-<span>Commerce.</span></>}</h1>
          <div className={styles.heroFooter}><h2>{words.subtitle}</h2><p>{words.contextBody.split(". ")[0]}.</p></div>
        </section>

        <div className={styles.visual} aria-label={heroImage[project].alt}>
          <div className={styles.visualOrb} aria-hidden="true" />
          <div className={styles.screen}>
            <Image src={heroImage[project].src} alt={heroImage[project].alt} fill priority sizes="(max-width: 800px) 100vw, 1100px" className={styles.screenImage} />
          </div>
          <span className={styles.visualIndex} aria-hidden="true">SY / {String(sequence.indexOf(project) + 1).padStart(2, "0")}</span>
        </div>

        <section className={styles.challenge}>
          <div className={styles.sectionAside}><span>{labels.context}</span></div>
          <div className={styles.challengeBody}>
            <h2>{words.context}</h2>
            <p>{words.contextBody}</p>
            <div className={styles.roleLine}><span>{words.role}</span><span>{words.approach}</span></div>
          </div>
        </section>

        <section className={styles.work} id="experience">
          <div className={styles.workHead}><div><span className={styles.eyebrow}>{labels.view}</span><h2>{words.workTitle}</h2></div><p>{words.workIntro}</p></div>
          {project === "tokyo" && (
            <div className={styles.demoWrap}><TokyoDemo /><p className={styles.caption}>{labels.sample}</p></div>
          )}
          {project === "ecommerce" && (
            <div className={styles.commerceGallery}>
              {words.images?.map((image, i) => <article className={`${styles.commerceItem} ${i === 0 ? styles.commerceWide : ""}`} key={image.src}>
                <div className={styles.commerceImage}><Image src={image.src} alt={image.alt} fill sizes={i === 0 ? "(max-width: 800px) 100vw, 1000px" : "(max-width: 800px) 100vw, 550px"} className={styles.commerceImageElement} /></div>
                <div className={styles.commerceCaption}><h3>{image.title}</h3><p>{image.description}</p></div>
              </article>)}
            </div>
          )}
          {project === "identidad" && (
            <div className={styles.identidadExperience}><h3 className={styles.srOnly}>{labels.explore}</h3><IdentidadCardDeck locale={locale} />
              <details className={styles.infographicDetails}>
                <summary>{labels.infographicDetails}<span aria-hidden="true">↗</span></summary>
                <div className={styles.infographicBody}><p>{labels.infographic}</p><iframe loading="lazy" title="Identidad.CO research infographic" src="/identidad/infographic.pdf#toolbar=0" /><a href="/identidad/infographic.pdf" target="_blank" rel="noreferrer">{labels.openInfographic} ↗</a></div>
              </details>
            </div>
          )}
        </section>

        <section className={styles.decisions}>
          <div className={styles.sectionAside}><span>{labels.decisions}</span></div>
          <div className={styles.decisionsRows}>{words.decisions.map((decision, i) => (
            <article className={styles.decision} key={decision.title}>
              <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span><h3>{decision.title}</h3><p>{decision.text}</p>
            </article>
          ))}</div>
        </section>

        <section className={styles.closing}>
          <p className={styles.closingStatement}>{words.closing}</p>
          <p className={styles.note}>{words.note}</p>
        </section>

        <section className={styles.next}>
          <p>{labels.nextLabel} / {labels.next}</p>
          <Link href={pathByProject[nextId]} onClick={(e) => navigateWithCurtain(e, pathByProject[nextId])}>{content[locale][nextId].title}<span aria-hidden="true">↗</span></Link>
        </section>
        <footer className={styles.footer}><span>© 2026 Sebastián Yopasá</span><a href="#top">↑ {labels.backTop}</a></footer>
      </div>
      {navigating && createPortal(<div className={styles.transition} aria-hidden="true"><div className={styles.curtainCoral}/><div className={styles.curtainBlue}/></div>, document.body)}
    </main>
  );
}

export default function CaseStudy({ project }: { project: ProjectId }) {
  return <LanguageProvider><CaseStudyInner project={project}/></LanguageProvider>;
}
