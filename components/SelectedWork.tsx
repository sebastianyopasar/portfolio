import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function SelectedWork() {
  return (
    <section
      className="selected-work home-station"
      id="work"
    >
      <Reveal>
        <header className="station-intro">
          <div className="station-intro-meta">
            <span>
              02 / Selected Work
            </span>

            <span>
              Three projects · Three contexts
            </span>
          </div>

          <div className="station-intro-main">
            <h2>
              Three projects.
              <br />
              <span>
                Three different
                kinds of problems.
              </span>
            </h2>

            <p>
              From complex business
              systems to commerce and
              immersive storytelling,
              each project required a
              different way of thinking,
              designing and building.
            </p>
          </div>
        </header>
      </Reveal>

      <div className="projects-list">
        <Reveal
          className="project-reveal"
          delay={0}
        >
          <ProjectCard
            number="01"
            title="Project Tokyo"
            category="UX/UI · Development"
            focus="Complex Product Systems"
            description="A connected business platform bringing CRM, inventory, sales and operations into one intuitive workspace."
            href="/work/tokyo"
            visual="dashboard"
            imageSrc="/tokyo/home-dashboard.png"
            imageAlt="Project Tokyo operational dashboard interface"
            imageLabel="Live Product"
          />
        </Reveal>

        <Reveal
          className="project-reveal"
          delay={90}
        >
          <ProjectCard
            number="02"
            title="E-Commerce"
            category="Shopify · Conversion"
            focus="Commerce Experience"
            description="Digital commerce experiences focused on product discovery, promotions, usability and conversion."
            href="/work/ecommerce"
            visual="commerce"
            imageSrc="/ecommerce/home.png"
            imageAlt="Shopify product collection showing product discovery, filtering and merchandising"
            imageLabel="Shopify Experience"
          />
        </Reveal>

        <Reveal
          className="project-reveal"
          delay={180}
        >
          <ProjectCard
            number="03"
            title="Identidad.CO"
            category="VR · Web · Culture"
            focus="Immersive Storytelling"
            description="An immersive web and VR experience exploring Colombian identity through coffee, culture and digital storytelling."
            href="/work/niwa?enter=1"
            visual="concept"
            imageSrc="/identidad/identidad-co.png"
            imageAlt="Colombian coffee landscape representing the Identidad.CO cultural experience"
            imageLabel="Immersive Experience"
          />
        </Reveal>
      </div>
    </section>
  );
}