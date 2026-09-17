const experience = [
  {
    period: "2025 — Present",
    company: "Corporate Facility Supply",
    role: "Marketing / Digital",
    description:
      "Digital campaigns, e-commerce, CRM, web experiences and internal business systems.",
  },
  {
    period: "Independent",
    company: "Digital Product Development",
    role: "UX/UI + Development",
    description:
      "Designing and building digital products, interfaces and web experiences from concept to implementation.",
  },
  {
    period: "Ongoing",
    company: "Project Tokyo",
    role: "Product Designer + Developer",
    description:
      "Building a connected CRM, inventory and business operations platform from the ground up.",
  },
];

export default function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-heading">
        <span>Experience</span>

        <h2>
          Working across
          <br />
          disciplines.
        </h2>
      </div>

      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-row" key={item.company}>
            <span className="experience-period">{item.period}</span>

            <div>
              <strong>{item.company}</strong>
              <span>{item.role}</span>
            </div>

            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}