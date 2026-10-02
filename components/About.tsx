import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      className="about-section home-station"
      id="about"
    >
      <Reveal>
        <header className="station-intro">
          <div className="station-intro-meta">
            <span>
              05 / About
            </span>

            <span>
              Design · Technology · Business
            </span>
          </div>

          <div className="station-intro-main">
            <h2>
              Different disciplines.
              <br />
              <span>
                One connected approach.
              </span>
            </h2>

            <p>
              My background lets me look
              beyond the interface and
              understand how user
              experience, implementation
              and business goals connect.
            </p>
          </div>
        </header>
      </Reveal>

      <div className="about-compact-layout">
        <Reveal>
          <h2 className="about-compact-title">
            I work between{" "}
            <span>design</span>,
            <br />
            technology
            <br />
            and{" "}
            <span>business.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="about-compact-copy">
            <p className="about-lead">
              I&apos;m Sebastián, a UX/UI
              designer focused on creating
              useful, intuitive and visually
              clear digital experiences.
            </p>

            <p>
              My work combines UX/UI, web
              development, e-commerce and
              digital strategy — allowing me
              to approach projects from both
              the user experience and
              technical sides.
            </p>

            <p>
              I&apos;m especially interested
              in understanding complex
              processes and turning them into
              experiences that feel simpler,
              clearer and easier to use.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="about-meta-strip">
        <div>
          <span>
            01 / Location
          </span>

          <strong>
            Ontario, Canada
          </strong>
        </div>

        <div>
          <span>
            02 / Focus
          </span>

          <strong>
            UX/UI Design
          </strong>
        </div>

        <div>
          <span>
            03 / Work
          </span>

          <strong>
            Design + Development
          </strong>
        </div>

        <div>
          <span>
            04 / Status
          </span>

          <strong className="about-status">
            <i />
            Open to opportunities
          </strong>
        </div>
      </div>
    </section>
  );
}