type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  href: string;
  visual: "dashboard" | "commerce" | "concept";
};

export default function ProjectCard({
  number,
  title,
  category,
  description,
  href,
  visual,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-info">
        <div className="project-topline">
          <span>{number}</span>
          <span>{category}</span>
        </div>

        <div className="project-copy">
          <h3>{title}</h3>
          <p>{description}</p>

          <a href={href} className="project-link">
            Explore project
            <span>↗</span>
          </a>
        </div>
      </div>

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
              <span>NIWA</span>
              <p>Objects for modern living.</p>
            </div>

            <div className="concept-circle" />
          </div>
        )}
      </div>
    </article>
  );
}