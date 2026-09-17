import ProjectCard from "./ProjectCard";

export default function SelectedWork() {
  return (
    <section className="selected-work" id="work">
      <div className="section-heading">
        <p>Selected Work</p>

        <p>
          A selection of digital products combining design, development and
          business thinking.
        </p>
      </div>

      <div className="projects-list">
        <ProjectCard
          number="01"
          title="Project Tokyo"
          category="Digital Product · UX/UI · Development"
          description="A connected business platform designed to bring CRM, inventory, sales and operations into one intuitive workspace."
          href="/work/tokyo"
          visual="dashboard"
        />

        <ProjectCard
          number="02"
          title="E-Commerce Experience"
          category="Shopify · UX/UI · Conversion"
          description="Designing digital commerce experiences focused on product discovery, promotions, usability and conversion."
          href="/work/ecommerce"
          visual="commerce"
        />

        <ProjectCard
          number="03"
          title="NIWA"
          category="Concept · Brand · Web Development"
          description="A digital brand and commerce concept exploring visual direction, responsive design and front-end development."
          href="/work/niwa"
          visual="concept"
        />
      </div>
    </section>
  );
}