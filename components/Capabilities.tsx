const capabilities = [
  {
    number: "01",
    title: "UX / UI",
    summary:
      "Designing intuitive digital experiences.",
    items: [
      "User Experience",
      "Interface Design",
      "Information Architecture",
      "Responsive Design",
      "Prototyping",
    ],
  },

  {
    number: "02",
    title: "Development",
    summary:
      "Turning product concepts into working interfaces.",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "HTML / CSS",
      "Supabase",
    ],
  },

  {
    number: "03",
    title: "E-Commerce",
    summary:
      "Connecting customer experience with commercial goals.",
    items: [
      "Shopify",
      "Product Experience",
      "Promotions",
      "Conversion",
      "Digital Merchandising",
    ],
  },

  {
    number: "04",
    title: "Digital",
    summary:
      "Understanding the business behind the interface.",
    items: [
      "Digital Marketing",
      "Analytics",
      "CRM",
      "Content",
      "Business Systems",
    ],
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities-section">
      <div className="capabilities-heading">
        <span>Capabilities</span>
        <span>What I work with</span>
      </div>

      {/* DESKTOP */}

      <div className="capabilities-accordion">
        {capabilities.map((capability) => (
          <details
            className="capability-accordion-item"
            key={capability.number}
          >
            <summary>
              <span className="capability-number">
                {capability.number}
              </span>

              <h3>
                {capability.title}
              </h3>

              <p>
                {capability.summary}
              </p>

              <span className="capability-toggle">
                +
              </span>
            </summary>

            <div className="capability-accordion-content">
              <div />

              <div className="capability-accordion-list">
                {capability.items.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>

      {/* MOBILE / TABLET */}

      <div className="capabilities-mobile-grid">
        {capabilities.map((capability) => (
          <article
            className="capability"
            key={capability.number}
          >
            <div className="capability-title">
              <span>
                {capability.number}
              </span>

              <h3>
                {capability.title}
              </h3>
            </div>

            <div className="capability-list">
              {capability.items.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}