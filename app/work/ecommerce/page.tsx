import Link from "next/link";
import Reveal from "@/components/Reveal";

const construction = [
  {
    number: "01",
    title: "Product data",
    text: "Build a clear foundation with SKU, pricing, category, size and product attributes.",
  },
  {
    number: "02",
    title: "Content",
    text: "Turn technical information into product descriptions, applications and useful customer-facing content.",
  },
  {
    number: "03",
    title: "Trust",
    text: "Support buying decisions with documentation, availability, reviews and value-focused tools.",
  },
  {
    number: "04",
    title: "Search",
    text: "Structure product information so customers and search platforms can understand what is being sold.",
  },
];

const promotionFlow = [
  "Campaign",
  "Homepage",
  "Collection",
  "Product",
  "Order",
  "Tracking",
];

export default function EcommercePage() {
  return (
    <main className="ecom-page">
      <div className="site-container">
        {/* =====================================================
            NAVIGATION
        ====================================================== */}

        <nav className="case-nav">
          <Link href="/" className="brand">
            Sebastián Yopasá
          </Link>

          <Link href="/#work" className="case-back">
            ← Back to work
          </Link>
        </nav>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="ecom-hero">
          <div className="ecom-eyebrow">
            <span>E-Commerce</span>
            <span>Shopify · UX · Conversion · SEO</span>
          </div>

          <Reveal>
            <div className="ecom-hero-layout">
              <h1>
                E-
                <span>COMMERCE</span>
              </h1>

              <div className="ecom-hero-copy">
                <i />

                <p>
                  Designing the complete path from product construction and
                  discovery to conversion, promotion and search visibility.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="ecom-meta">
            <div>
              <span>Platform</span>
              <strong>Shopify</strong>
            </div>

            <div>
              <span>Focus</span>
              <strong>Product Experience</strong>
            </div>

            <div>
              <span>Commercial</span>
              <strong>Conversion + Promotions</strong>
            </div>

            <div>
              <span>Discovery</span>
              <strong>SEO + Google</strong>
            </div>
          </div>
        </section>

        {/* =====================================================
            01 — PRODUCT CONSTRUCTION
        ====================================================== */}

        <section className="ecom-section">
          <div className="ecom-section-label">
            <span>01</span>
            <span>Product Construction</span>
          </div>

          <div className="ecom-heading-grid">
            <Reveal>
              <h2>
                A product is more than
                <span> a product page.</span>
              </h2>
            </Reveal>

            <Reveal delay={90}>
              <div className="ecom-section-copy">
                <p className="ecom-lead">
                  Strong product experiences begin before a customer reaches the
                  storefront.
                </p>

                <p>
                  Product data, merchandising, technical information and search
                  structure all contribute to how easily a product can be found,
                  understood and purchased.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="ecom-construction-grid">
            {construction.map((item, index) => (
              <Reveal key={item.number} delay={index * 65}>
                <article>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* =====================================================
            02 — DISCOVERY + CONVERSION
        ====================================================== */}

        <section className="ecom-section ecom-discovery-section">
          <div className="ecom-section-label">
            <span>02</span>
            <span>Discovery + Conversion</span>
          </div>

          <Reveal>
            <div className="ecom-wide-heading">
              <h2>
                Make products easier to find.
                <span> Then easier to choose.</span>
              </h2>
            </div>
          </Reveal>

          <div className="ecom-proof-block">
            <Reveal>
              <div className="ecom-proof-image">
                <img
                  src="/ecommerce/collection.png"
                  alt="Shopify collection page showing product filters, sorting and commercial product cards."
                />
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="ecom-proof-copy">
                <span>Product Discovery</span>

                <h3>Reduce the distance between intent and the right product.</h3>

                <p>
                  Search, categories, filters, visual product signals and quick
                  purchase actions help customers narrow a large catalog into a
                  relevant set of choices.
                </p>

                <div className="ecom-chip-list">
                  <span>Search</span>
                  <span>Categories</span>
                  <span>Availability</span>
                  <span>Price</span>
                  <span>Sorting</span>
                  <span>Product labels</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="ecom-proof-block ecom-proof-reverse">
            <Reveal>
              <div className="ecom-proof-copy">
                <span>Conversion</span>

                <h3>Remove uncertainty before asking for the sale.</h3>

                <p>
                  The product page answers the questions that can prevent a
                  purchase: What is it? Is it available? How is it used? Is
                  technical documentation available? Is the value clear?
                </p>

                <div className="ecom-chip-list">
                  <span>Product media</span>
                  <span>Quantity</span>
                  <span>Availability</span>
                  <span>SDS</span>
                  <span>Reviews</span>
                  <span>Cost-in-use</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="ecom-proof-image">
                <img
                  src="/ecommerce/product.png"
                  alt="Shopify product detail page showing product photography, add to cart, pickup availability, technical information and customer reviews."
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            03 — PROMOTIONS
        ====================================================== */}

        <section className="ecom-section">
          <div className="ecom-section-label">
            <span>03</span>
            <span>Promotions</span>
          </div>

          <div className="ecom-heading-grid">
            <Reveal>
              <h2>
                A campaign should connect
                <span> every customer touchpoint.</span>
              </h2>
            </Reveal>

            <Reveal delay={90}>
              <div className="ecom-section-copy">
                <p className="ecom-lead">
                  Promotions are more effective when the message continues
                  throughout the buying journey.
                </p>

                <p>
                  Homepage messaging, campaign collections, product pricing,
                  promotional codes and order tracking should behave as one
                  connected commercial experience.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="ecom-promo-layout">
            <Reveal>
              <div className="ecom-promo-image">
                <img
                  src="/ecommerce/home.png"
                  alt="Corporate Facility Supply Shopify homepage showing seasonal promotional messaging and product discovery."
                />
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="ecom-promo-system">
                <span className="ecom-promo-kicker">Campaign System</span>

                <div className="ecom-promo-flow">
                  {promotionFlow.map((item, index) => (
                    <div key={item}>
                      <span>0{index + 1}</span>
                      <strong>{item}</strong>

                      {index < promotionFlow.length - 1 && <i>↓</i>}
                    </div>
                  ))}
                </div>

                <div className="ecom-campaign-card">
                  <div>
                    <span>Campaign</span>
                    <strong>Fall Specials</strong>
                  </div>

                  <div>
                    <span>Code</span>
                    <strong>FALLCFS2026</strong>
                  </div>

                  <div>
                    <span>Journey</span>
                    <strong>Message → Purchase</strong>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            04 — SEO + GOOGLE
        ====================================================== */}

        <section className="ecom-seo-section">
          <div className="ecom-seo-inner">
            <div className="ecom-section-label ecom-section-label-dark">
              <span>04</span>
              <span>SEO + Google</span>
            </div>

            <Reveal>
              <div className="ecom-seo-heading">
                <h2>
                  Build for people.
                  <span> Structure for discovery.</span>
                </h2>

                <p>
                  Product information can be structured so both customers and
                  search platforms understand what is being offered.
                </p>
              </div>
            </Reveal>

            <div className="ecom-seo-flow">
              <Reveal>
                <article className="ecom-seo-card">
                  <span>01 / Shopify</span>
                  <h3>Product information</h3>

                  <div className="ecom-seo-fields">
                    <div>
                      <small>Product</small>
                      <strong>Lemon Neutral - 4L</strong>
                    </div>

                    <div>
                      <small>Category</small>
                      <strong>Cleaners</strong>
                    </div>

                    <div>
                      <small>Price</small>
                      <strong>$20.68</strong>
                    </div>

                    <div>
                      <small>Content</small>
                      <strong>Description + applications</strong>
                    </div>
                  </div>
                </article>
              </Reveal>

              <div className="ecom-seo-arrow">→</div>

              <Reveal delay={80}>
                <article className="ecom-seo-card">
                  <span>02 / Search Structure</span>
                  <h3>SEO metadata</h3>

                  <div className="ecom-seo-fields">
                    <div>
                      <small>Title</small>
                      <strong>Lemon Neutral 4L | No-Rinse Cleaner</strong>
                    </div>

                    <div>
                      <small>URL</small>
                      <strong>/products/lemon-neutral-4l</strong>
                    </div>

                    <div>
                      <small>Image</small>
                      <strong>Descriptive alt text</strong>
                    </div>

                    <div>
                      <small>Description</small>
                      <strong>Relevant product intent</strong>
                    </div>
                  </div>
                </article>
              </Reveal>

              <div className="ecom-seo-arrow">→</div>

              <Reveal delay={160}>
                <article className="ecom-google-card">
                  <span>03 / Google</span>

                  <div className="ecom-google-result">
                    <small>Corporate Facility Supply</small>

                    <h3>Lemon Neutral 4L | No-Rinse Cleaner</h3>

                    <p>
                      Commercial neutral pH cleaner for daily maintenance of
                      floors, walls and washable surfaces.
                    </p>

                    <strong>$20.68 · In stock</strong>
                  </div>
                </article>
              </Reveal>
            </div>

            <Reveal>
              <div className="ecom-measurement">
                <span>Measurement loop</span>

                <div>
                  <strong>Discovery</strong>
                  <i>→</i>
                  <strong>Product View</strong>
                  <i>→</i>
                  <strong>Add to Cart</strong>
                  <i>→</i>
                  <strong>Checkout</strong>
                  <i>→</i>
                  <strong>Purchase</strong>
                </div>

                <small>
                  Shopify · GA4 · Search Console · Google commerce surfaces
                </small>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            PROJECT PRINCIPLE
        ====================================================== */}

        <section className="ecom-principle-section">
          <Reveal>
            <div className="ecom-principle">
              <span>Project principle</span>

              <p>
                Make products <strong>easier to find</strong>, easier to
                understand and <strong>easier to buy.</strong>
              </p>
            </div>
          </Reveal>
        </section>

        {/* =====================================================
            NEXT PROJECT
        ====================================================== */}

        <section className="case-next ecom-next">
          <p>Next project</p>

          <Link href="/work/niwa?enter=1">
            Identidad.CO
            <span>↗</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
