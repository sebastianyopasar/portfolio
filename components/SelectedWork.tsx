import ProjectCard from "./ProjectCard";

export default function SelectedWork() {
  return (
    <section
      className="selected-work"
      id="work"
    >
      <div className="section-heading">
        <p>Selected Work / 03</p>

        <p>
          Three different projects demonstrating
          product thinking, commercial UX and
          immersive digital storytelling.
        </p>
      </div>

      <div className="projects-list">
        <ProjectCard
          number="01"
          title="Project Tokyo"
          category="UX/UI · Development"
          focus="Complex Product Systems"
          description="A connected business platform bringing CRM, inventory, sales and operations into one intuitive workspace."
          href="/work/tokyo"
          visual="dashboard"
        />

        <ProjectCard
          number="02"
          title="E-Commerce"
          category="Shopify · Conversion"
          focus="Commerce Experience"
          description="Digital commerce experiences focused on product discovery, promotions, usability and conversion."
          href="/work/ecommerce"
          visual="commerce"
        />

        <ProjectCard
          number="03"
          title="Identidad.CO"
          category="VR · Web · Culture"
          focus="Immersive Storytelling"
          description="A web and VR concept exploring Colombian identity through coffee, culture and interactive digital media."
          href="/work/niwa?enter=1"
          visual="concept"
        />
      </div>
    </section>
  );
}