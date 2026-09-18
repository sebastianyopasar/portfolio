export default function About() {
  return (
    <section
      className="about-section"
      id="about"
    >
      <div className="about-heading">
        <span>About / 04</span>

        <p>
          Design thinking,
          <br />
          technical execution.
        </p>
      </div>

      <div className="about-compact-layout">
        <h2 className="about-compact-title">
          I work between{" "}
          <span>design</span>,
          <br />
          technology
          <br />
          and <span>business.</span>
        </h2>

        <div className="about-compact-copy">
          <p className="about-lead">
            I&apos;m Sebastián, a digital
            professional focused on creating useful,
            intuitive and visually clear digital
            experiences.
          </p>

          <p>
            My work combines UX/UI, web development,
            e-commerce and digital strategy —
            allowing me to approach a project from
            both the user experience and technical
            sides.
          </p>

          <p>
            I&apos;m especially interested in turning
            complex processes into products that feel
            simple to use.
          </p>
        </div>
      </div>

      <div className="about-meta-strip">
        <div>
          <span>01 / Location</span>
          <strong>
            Ontario, Canada
          </strong>
        </div>

        <div>
          <span>02 / Focus</span>
          <strong>
            Digital Products
          </strong>
        </div>

        <div>
          <span>03 / Work</span>
          <strong>
            UX/UI + Development
          </strong>
        </div>

        <div>
          <span>04 / Status</span>

          <strong className="about-status">
            <i />
            Open to opportunities
          </strong>
        </div>
      </div>
    </section>
  );
}