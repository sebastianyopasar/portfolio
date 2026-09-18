type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  focus: string;
  href: string;
  visual: "dashboard" | "commerce" | "concept";
};

export default function ProjectCard({
  number,
  title,
  category,
  description,
  focus,
  href,
  visual,
}: ProjectCardProps) {
  return (
    <article
      className="project-card"
      data-project={visual}
    >
      <div className={`project-visual project-visual-${visual}`}>
        {visual === "dashboard" && (
          <div className="dashboard-mockup">
            <div className="mock-sidebar">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="mock-dashboard">
              <div className="mock-header">
                <span />
                <span />
              </div>

              <div className="mock-stats">
                <span />
                <span />
                <span />
              </div>

              <div className="mock-content">
                <div />
                <div />
              </div>
            </div>
          </div>
        )}

        {visual === "commerce" && (
          <div className="commerce-mockup">
            <div className="commerce-header">
              <span>STORE</span>

              <div>
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className="commerce-products">
              <div>
                <span />
                <p>Product 01</p>
              </div>

              <div>
                <span />
                <p>Product 02</p>
              </div>

              <div>
                <span />
                <p>Product 03</p>
              </div>
            </div>
          </div>
        )}

        {visual === "concept" && (
          <div className="concept-mockup">
            <div className="concept-number">03</div>

            <div className="concept-center">
              <span>IDENTIDAD.CO</span>
              <p>Culture · Story · Technology</p>
            </div>

            <div className="concept-circle" />
          </div>
        )}
      </div>

      <div className="project-info">
        <div className="project-topline">
          <span>{number}</span>
          <span>{category}</span>
        </div>

        <div className="project-copy">
          <p className="project-focus">
            <span>Focus</span>
            {focus}
          </p>

          <h3>{title}</h3>

          <p className="project-description">
            {description}
          </p>

          <a href={href} className="project-link">
            Explore project
            <span>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}