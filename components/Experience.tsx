const experience = [
  {
    period: "2025 — Present",
    company:
      "Corporate Facility Supply",
    role:
      "Digital / UX / E-Commerce",
    description:
      "Digital campaigns, e-commerce experiences, CRM, website optimization and internal business systems.",
  },

  {
    period: "Independent",
    company:
      "Digital Experience Development",
    role:
      "UX/UI + Development",
    description:
      "Designing and building interfaces and digital experiences from research and concept through implementation.",
  },

  {
    period: "Ongoing",
    company:
      "Project Tokyo",
    role:
      "UX/UI Designer + Developer",
    description:
      "Designing and building a connected CRM, inventory and business operations platform from the ground up.",
  },
];

export default function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-heading">
        <span>
          Selected experience
        </span>

        <h2>
          Working across
          <br />
          disciplines.
        </h2>
      </div>

      <div className="experience-list">
        {experience.map((item) => (
          <article
            className="experience-row"
            key={item.company}
          >
            <span className="experience-period">
              {item.period}
            </span>

            <div>
              <strong>
                {item.company}
              </strong>

              <span>
                {item.role}
              </span>
            </div>

            <p>
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}