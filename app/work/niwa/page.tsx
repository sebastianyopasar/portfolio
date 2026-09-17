import Link from "next/link";

export default function NiwaCaseStudy() {
  return (
    <main className="niwa-page">
      <div className="site-container">

        <header className="case-nav niwa-nav">
          <Link href="/" className="brand">
            Sebastián Yopasá
          </Link>

          <Link href="/#work" className="case-back">
            ← Back to work
          </Link>
        </header>

        {/* INTRO */}

        <section className="niwa-intro">
          <div className="niwa-eyebrow">
            <span>03 / Independent Concept</span>
            <span>Brand / UX / UI / Development</span>
          </div>

          <h1>NIWA</h1>

          <div className="niwa-intro-bottom">
            <p>
              A digital brand concept exploring how visual identity,
              interaction and front-end development can become one
              cohesive experience.
            </p>

            <span>Objects for modern living.</span>
          </div>
        </section>

        {/* EXPERIENCE */}

        <section className="niwa-experience">
          <nav className="niwa-store-nav">
            <strong>NIWA</strong>

            <div>
              <span>Objects</span>
              <span>Journal</span>
              <span>About</span>
              <span>Bag (0)</span>
            </div>
          </nav>

          <div className="niwa-store-hero">
            <div className="niwa-product-scene">
              <div className="niwa-sun" />
              <div className="niwa-vase niwa-vase-large" />
              <div className="niwa-vase niwa-vase-small" />
              <div className="niwa-floor" />
            </div>

            <div className="niwa-store-copy">
              <span>Collection 01</span>

              <h2>
                Quiet objects
                <br />
                for everyday spaces.
              </h2>

              <p>
                A collection shaped around simplicity, material and
                thoughtful living.
              </p>

              <button>Explore objects ↗</button>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}

        <section className="case-section niwa-case-section">
          <div className="case-section-number">01</div>

          <div className="case-section-content">
            <p className="case-section-label">The Concept</p>

            <h2>
              What happens when the brand and the interface are designed
              together?
            </h2>

            <div className="case-text-columns">
              <p>
                NIWA began as an exercise in creating a digital identity
                without separating branding from the product experience.
              </p>

              <p>
                Typography, spacing, product presentation, interaction and
                responsive behavior are treated as parts of the same system.
              </p>
            </div>
          </div>
        </section>

        {/* IDENTITY */}

        <section className="niwa-identity">
          <div className="niwa-identity-title">
            <span>02 / Visual Direction</span>
            <h2>NIWA</h2>
          </div>

          <div className="niwa-palette">
            <div>
              <span>Warm White</span>
              <small>#F1EEE5</small>
            </div>

            <div>
              <span>Clay</span>
              <small>#B66F4D</small>
            </div>

            <div>
              <span>Garden</span>
              <small>#35463B</small>
            </div>

            <div>
              <span>Ink</span>
              <small>#161616</small>
            </div>
          </div>
        </section>

        {/* PRODUCT GRID */}

        <section className="case-section niwa-case-section">
          <div className="case-section-number">03</div>

          <div className="case-section-content">
            <p className="case-section-label">Digital Experience</p>

            <h2>
              A flexible visual system built around the product.
            </h2>

            <div className="niwa-product-grid">
              <article>
                <div className="niwa-object-card card-one">
                  <div className="mini-object object-tall" />
                </div>

                <div className="niwa-product-info">
                  <span>01 / Kanso Vase</span>
                  <span>$120</span>
                </div>
              </article>

              <article>
                <div className="niwa-object-card card-two">
                  <div className="mini-object object-round" />
                </div>

                <div className="niwa-product-info">
                  <span>02 / Sora Vessel</span>
                  <span>$95</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* DEVELOPMENT */}

        <section className="case-section niwa-case-section">
          <div className="case-section-number">04</div>

          <div className="case-section-content">
            <p className="case-section-label">Front-End</p>

            <h2>
              The visual concept becomes a working responsive interface.
            </h2>

            <p className="case-large-text">
              Rather than stopping at a static mockup, the concept is
              translated into reusable components, responsive layouts and
              working interactions in the browser.
            </p>

            <div className="tech-grid">
              <span>Next.js</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>Responsive Design</span>
              <span>CSS</span>
              <span>Interaction Design</span>
            </div>
          </div>
        </section>

        {/* END */}

        <section className="niwa-ending">
          <span>End of selected work</span>

          <h2>
            Different problems.
            <br />
            Different solutions.
          </h2>

          <Link href="/#about">
            About me <span>↓</span>
          </Link>
        </section>

      </div>
    </main>
  );
}