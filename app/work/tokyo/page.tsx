import Link from "next/link";

export default function TokyoCaseStudy() {
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
            <span>01 / Project Tokyo</span>
            <span>Digital Product / 2026</span>
          </div>

          <h1>Project Tokyo</h1>

          <div className="case-introduction">
            <p className="case-lead">
              Designing and developing a connected business platform from the
              ground up.
            </p>

            <p>
              Project Tokyo explores how CRM, inventory, sales, operations and
              business activity can live inside one intuitive digital
              workspace.
            </p>
          </div>
        </section>

        {/* PROJECT INFO */}

        <section className="case-meta">
          <div>
            <span>Role</span>
            <p>Product Design<br />UX / UI<br />Development</p>
          </div>

          <div>
            <span>Technology</span>
            <p>Next.js<br />TypeScript<br />Supabase</p>
          </div>

          <div>
            <span>Focus</span>
            <p>CRM<br />Inventory<br />Business Operations</p>
          </div>

          <div>
            <span>Status</span>
            <p>Active Development</p>
          </div>
        </section>

        {/* PRODUCT VISUAL */}

        <section className="case-product-visual">
          <div className="case-interface">
            <aside className="case-interface-sidebar">
              <strong>TOKYO</strong>

              <span>Dashboard</span>
              <span>Companies</span>
              <span>Contacts</span>
              <span>Deals</span>
              <span>Products</span>
              <span>Inventory</span>
              <span>Work Orders</span>
            </aside>

            <div className="case-interface-main">
              <div className="interface-title">
                <div>
                  <small>DASHBOARD</small>
                  <h3>Good morning.</h3>
                </div>

                <span />
              </div>

              <div className="interface-stats">
                <div>
                  <small>OPEN DEALS</small>
                  <strong>24</strong>
                </div>

                <div>
                  <small>ACTIVE ORDERS</small>
                  <strong>18</strong>
                </div>

                <div>
                  <small>WORK ORDERS</small>
                  <strong>07</strong>
                </div>
              </div>

              <div className="interface-content">
                <div />
                <div />
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
            <p className="case-section-label">The Challenge</p>

            <h2>
              Business information often lives across disconnected systems.
            </h2>

            <div className="case-text-columns">
              <p>
                CRM information, inventory, sales activity, operational
                records and customer history can easily become fragmented
                across different tools.
              </p>

              <p>
                The objective was to explore how these workflows could become
                part of one coherent product without making the experience
                overwhelming.
              </p>
            </div>
          </div>
        </section>

        {/* IDEA */}

        <section className="case-section">
          <div className="case-section-number">
            02
          </div>

          <div className="case-section-content">
            <p className="case-section-label">The Idea</p>

            <h2>
              One workspace. One timeline. One source of business context.
            </h2>

            <p className="case-large-text">
              Project Tokyo is designed around a simple principle: important
              business information should be easy to find, understand and act
              on.
            </p>
          </div>
        </section>

        {/* PRODUCT SYSTEM */}

        <section className="case-section">
          <div className="case-section-number">
            03
          </div>

          <div className="case-section-content">
            <p className="case-section-label">The Product</p>

            <h2>A modular business operating system.</h2>

            <div className="module-grid">
              <div>
                <span>01</span>
                <strong>Companies</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Contacts</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Deals</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Quotes</strong>
              </div>

              <div>
                <span>05</span>
                <strong>Products</strong>
              </div>

              <div>
                <span>06</span>
                <strong>Inventory</strong>
              </div>

              <div>
                <span>07</span>
                <strong>Warehouses</strong>
              </div>

              <div>
                <span>08</span>
                <strong>Work Orders</strong>
              </div>
            </div>
          </div>
        </section>

        {/* DEVELOPMENT */}

        <section className="case-section case-development">
          <div className="case-section-number">
            04
          </div>

          <div className="case-section-content">
            <p className="case-section-label">Development</p>

            <h2>Designed as a product. Built as a real application.</h2>

            <div className="tech-grid">
              <span>Next.js</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>Supabase</span>
              <span>PostgreSQL</span>
              <span>Realtime</span>
            </div>
          </div>
        </section>

        {/* NEXT */}

        <section className="case-next">
          <p>Next project</p>

          <Link href="/work/ecommerce">
            E-Commerce Experience <span>→</span>
          </Link>
        </section>

      </div>
    </main>
  );
}