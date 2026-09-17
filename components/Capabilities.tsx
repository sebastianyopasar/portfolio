const capabilities = [
  {
    number: "01",
    title: "UX / UI",
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

      <div className="capabilities-grid">
        {capabilities.map((capability) => (
          <article className="capability" key={capability.number}>
            <div className="capability-title">
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
            </div>

            <div className="capability-list">
              {capability.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}