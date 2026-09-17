import Link from "next/link";

export default function EcommerceCaseStudy() {
  return (
    <main className="case-study">
      <div className="site-container">

        {/* NAVIGATION */}

        <header className="case-nav">
          <Link href="/" className="brand">
            Sebastián Yopasá
          </Link>

          <Link href="/#work" className="case-back">
            ← Back to work
          </Link>
        </header>

        {/* HERO */}

        <section className="case-hero">
          <div className="case-eyebrow">
            <span>02 / E-Commerce Experience</span>
            <span>Digital Commerce / UX / UI</span>
          </div>

          <h1>E-Commerce</h1>

          <div className="case-introduction">
            <p className="case-lead">
              Designing commerce experiences that make products easier to
              discover, understand and buy.
            </p>

            <p>
              This project explores the relationship between visual design,
              product organization, promotions, usability and conversion
              across modern e-commerce experiences.
            </p>
          </div>
        </section>

        {/* META */}

        <section className="case-meta">
          <div>
            <span>Role</span>
            <p>
              UX / UI
              <br />
              Digital Marketing
              <br />
              E-Commerce
            </p>
          </div>

          <div>
            <span>Platforms</span>
            <p>
              Shopify
              <br />
              Web
              <br />
              Mobile
            </p>
          </div>

          <div>
            <span>Focus</span>
            <p>
              Conversion
              <br />
              Product Discovery
              <br />
              Promotions
            </p>
          </div>

          <div>
            <span>Approach</span>
            <p>
              Business + Design
            </p>
          </div>
        </section>

        {/* VISUAL */}

        <section className="ecommerce-case-visual">
          <div className="ecommerce-browser">

            <div className="ecommerce-browser-bar">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="browser-address">
                store.example.com
              </div>
            </div>

            <div className="store-nav">
              <strong>STUDIO</strong>

              <div>
                <span>New</span>
                <span>Shop</span>
                <span>Collections</span>
                <span>Search</span>
              </div>
            </div>

            <div className="store-hero">
              <div className="store-hero-copy">
                <span>NEW COLLECTION / 2026</span>

                <h2>
                  Designed for
                  <br />
                  everyday living.
                </h2>

                <button>Explore collection</button>
              </div>

              <div className="store-hero-image">
                <div className="product-object object-one" />
                <div className="product-object object-two" />
              </div>
            </div>

            <div className="store-products">
              <div>
                <div className="store-product-image product-a" />
                <span>Object 01</span>
                <small>$120</small>
              </div>

              <div>
                <div className="store-product-image product-b" />
                <span>Object 02</span>
                <small>$85</small>
              </div>

              <div>
                <div className="store-product-image product-c" />
                <span>Object 03</span>
                <small>$160</small>
              </div>
            </div>

          </div>
        </section>

        {/* CHALLENGE */}

        <section className="case-section">
          <div className="case-section-number">
            01
          </div>

          <div className="case-section-content">
            <p className="case-section-label">
              The Challenge
            </p>

            <h2>
              E-commerce is not only about displaying products.
            </h2>

            <div className="case-text-columns">
              <p>
                Customers need to understand what is being sold, how products
                differ and why an offer is relevant without unnecessary
                friction.
              </p>

              <p>
                Navigation, hierarchy, imagery, promotions and product
                information all influence the shopping experience before a
                customer ever reaches checkout.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}

        <section className="case-section">
          <div className="case-section-number">
            02
          </div>

          <div className="case-section-content">
            <p className="case-section-label">
              The Experience
            </p>

            <h2>
              Reduce friction between discovery and decision.
            </h2>

            <p className="case-large-text">
              The experience is designed around clear product hierarchy,
              understandable promotions and simple paths between browsing,
              comparing and purchasing.
            </p>
          </div>
        </section>

        {/* SYSTEM */}

        <section className="case-section">
          <div className="case-section-number">
            03
          </div>

          <div className="case-section-content">
            <p className="case-section-label">
              Commerce System
            </p>

            <h2>
              A consistent experience across the customer journey.
            </h2>

            <div className="module-grid">
              <div>
                <span>01</span>
                <strong>Navigation</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Collections</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Product Discovery</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Product Pages</strong>
              </div>

              <div>
                <span>05</span>
                <strong>Promotions</strong>
              </div>

              <div>
                <span>06</span>
                <strong>Merchandising</strong>
              </div>

              <div>
                <span>07</span>
                <strong>Mobile UX</strong>
              </div>

              <div>
                <span>08</span>
                <strong>Conversion</strong>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS THINKING */}

        <section className="case-section">
          <div className="case-section-number">
            04
          </div>

          <div className="case-section-content">
            <p className="case-section-label">
              Business Thinking
            </p>

            <h2>
              Design decisions should support both the customer and the business.
            </h2>

            <div className="case-text-columns">
              <p>
                Promotions need enough visibility to influence purchasing
                behavior without making the experience feel confusing or
                overly aggressive.
              </p>

              <p>
                Product structure and merchandising can make large catalogs
                easier to navigate while supporting campaigns, collections and
                commercial priorities.
              </p>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}

        <section className="case-section">
          <div className="case-section-number">
            05
          </div>

          <div className="case-section-content">
            <p className="case-section-label">
              Capabilities
            </p>

            <h2>
              Where design, commerce and digital strategy meet.
            </h2>

            <div className="tech-grid">
              <span>Shopify</span>
              <span>UX / UI</span>
              <span>Product Management</span>
              <span>Promotions</span>
              <span>Analytics</span>
              <span>Digital Marketing</span>
            </div>
          </div>
        </section>

        {/* NEXT */}

        <section className="case-next">
          <p>Next project</p>

          <Link href="/work/niwa">
            NIWA <span>→</span>
          </Link>
        </section>

      </div>
    </main>
  );
}