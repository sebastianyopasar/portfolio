export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-intro">
        <p className="hero-label">Digital Product Designer & Developer</p>
        <p className="hero-number">Portfolio / 2026</p>
      </div>

      <div className="hero-main">
        <h1 className="hero-title">
          <span>I DESIGN</span>
          <span>DIGITAL</span>
          <span>PRODUCTS.</span>
        </h1>

        <div className="hero-message">
          <span className="accent-marker" />

          <p>
            And I build them.
            <span>
              Creating intuitive digital experiences that connect design,
              technology and business.
            </span>
          </p>
        </div>
      </div>

      <div className="hero-footer">
        <div className="capabilities">
          <span>UX / UI</span>
          <span>Development</span>
          <span>E-Commerce</span>
        </div>

        <a href="#work" className="scroll-link">
          Selected work
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}