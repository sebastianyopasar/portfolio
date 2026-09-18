import Link from "next/link";
import Reveal from "@/components/Reveal";
import TokyoDemo from "@/components/TokyoDemo";

const principles = [
  {
    number: "01",
    title: "Keep context",
    description:
      "Connect customer, sales, inventory and operational information instead of rebuilding context across separate tools.",
  },
  {
    number: "02",
    title: "Reduce steps",
    description:
      "Make frequent actions direct and predictable so the system supports the work instead of adding more work.",
  },
  {
    number: "03",
    title: "Scale clearly",
    description:
      "Use shared product patterns so new workflows can be added without making the experience harder to understand.",
  },
];

const evolution = [
  {
    number: "01",
    title: "Define the structure",
    description:
      "Map how companies, contacts, products, inventory, sales and service activity connect.",
  },
  {
    number: "02",
    title: "Build modular systems",
    description:
      "Turn each domain into reusable patterns that work independently while remaining part of one product.",
  },
  {
    number: "03",
    title: "Scale with clarity",
    description:
      "Build a foundation that can support new workflows and business contexts while staying familiar to users.",
  },
];

const created = [
  "Connected business workspace",
  "Modular CRM + inventory structure",
  "Reusable product architecture",
  "Scalable operational foundation",
];

export default function TokyoPage() {
  return (
    <main className="tokyo-page">
      <div className="site-container">
        {/* NAVIGATION */}
        <nav className="case-nav">
          <Link href="/" className="brand">
            Sebastián Yopasá
          </Link>

          <Link href="/#work" className="case-back">
            ← Back to work
          </Link>
        </nav>

        {/* ======================================================
            HERO
        ====================================================== */}
        <section className="tokyo-hero">
          <div className="tokyo-eyebrow">
            <span>Project Tokyo</span>
            <span>Product Design · UX/UI · Development</span>
          </div>

          <Reveal>
            <div className="tokyo-hero-layout">
              <h1>
                PROJECT
                <span>TOKYO</span>
              </h1>

              <div className="tokyo-hero-copy">
                <span className="tokyo-square" />

                <p>
                  A connected business platform designed to make complex
                  operational workflows easier to understand, use and scale.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="tokyo-meta">
            <div>
              <span>Role</span>
              <strong>Product Design + Development</strong>
            </div>

            <div>
              <span>Focus</span>
              <strong>Business Systems</strong>
            </div>

            <div>
              <span>Platform</span>
              <strong>Web Application</strong>
            </div>

            <div>
              <span>Core idea</span>
              <strong>Complexity → Clarity</strong>
            </div>
          </div>
        </section>

        {/* ======================================================
            INTERACTIVE PRODUCT DEMO
        ====================================================== */}
        <Reveal>
          <TokyoDemo />
        </Reveal>

        {/* ======================================================
            01 — PRODUCT QUESTION
        ====================================================== */}
        <section className="tokyo-product-question-section">
          <div className="tokyo-section-label">
            <span>01</span>
            <span>Product Question</span>
          </div>

          <div className="tokyo-question-grid">
            <Reveal>
              <h2>
                How can business teams work in one connected system
                <span> without increasing complexity?</span>
              </h2>
            </Reveal>

            <Reveal delay={90}>
              <div className="tokyo-question-copy">
                <p className="tokyo-lead">
                  Work becomes harder when context is fragmented across tools,
                  screens and disconnected processes.
                </p>

                <p>
                  Tokyo brings CRM, inventory, sales and operations into one
                  product experience: structured underneath, but simple for the
                  people using it every day.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="tokyo-principles">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 65}>
                <article className="tokyo-principle">
                  <span>{principle.number}</span>

                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ======================================================
            02 — SYSTEM
        ====================================================== */}
        <section className="tokyo-system-section">
          <div className="tokyo-system-inner">
            <div className="tokyo-section-label tokyo-section-label-dark">
              <span>02</span>
              <span>System</span>
            </div>

            <div className="tokyo-system-grid">
              <Reveal>
                <div className="tokyo-system-copy">
                  <h2>
                    Simple on the surface.
                    <span> Structured underneath.</span>
                  </h2>

                  <p>
                    Reusable product patterns sit on top of a structured
                    technical foundation, allowing Tokyo to grow without
                    redesigning the experience every time a new workflow is
                    introduced.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={90}>
                <div className="tokyo-stack">
                  <div>
                    <span>Interface</span>
                    <strong>Next.js + React</strong>
                  </div>

                  <i>↓</i>

                  <div>
                    <span>Product logic</span>
                    <strong>TypeScript</strong>
                  </div>

                  <i>↓</i>

                  <div>
                    <span>Data layer</span>
                    <strong>Repositories</strong>
                  </div>

                  <i>↓</i>

                  <div>
                    <span>Backend</span>
                    <strong>Supabase</strong>
                  </div>

                  <i>↓</i>

                  <div>
                    <span>Foundation</span>
                    <strong>PostgreSQL</strong>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ======================================================
            03 — EVOLUTION + RESULT
        ====================================================== */}
        <section className="tokyo-evolution-section">
          <div className="tokyo-section-label">
            <span>03</span>
            <span>Evolution + Result</span>
          </div>

          <div className="tokyo-evolution-heading">
            <Reveal>
              <h2>
                From fragmented workflows to
                <span> one operational workspace.</span>
              </h2>
            </Reveal>

            <Reveal delay={90}>
              <p>
                Tokyo evolved incrementally. Each new domain established
                patterns that could be reused by the next, allowing the product
                to grow while keeping the experience familiar.
              </p>
            </Reveal>
          </div>

          {/* EVOLUTION */}
          <div className="tokyo-evolution-grid">
            {evolution.map((step, index) => (
              <Reveal key={step.number} delay={index * 65}>
                <article>
                  <span>{step.number}</span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* RESULT */}
          <Reveal>
            <div className="tokyo-created-block">
              <div className="tokyo-created-heading">
                <span>What we created</span>

                <h3>
                  A clearer way to manage complex business operations.
                </h3>
              </div>

              <div className="tokyo-created-grid">
                {created.map((item, index) => (
                  <article key={item}>
                    <span>0{index + 1}</span>

                    <strong>{item}</strong>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          {/* PROJECT PRINCIPLE */}
          <Reveal>
            <div className="tokyo-principle-final">
              <span>Project principle</span>

              <p>
                Build systems that <strong>reduce friction</strong>, support
                growth and <strong>stay easy to use.</strong>
              </p>
            </div>
          </Reveal>
        </section>

        {/* ======================================================
            NEXT PROJECT
        ====================================================== */}
        <section className="case-next tokyo-next">
          <p>Next project</p>

          <Link href="/work/ecommerce">
            E-Commerce
            <span>↗</span>
          </Link>
        </section>
      </div>
    </main>
  );
}