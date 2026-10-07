type ProjectVisualProps = {
  visual:
    | "dashboard"
    | "commerce"
    | "concept";
};

export default function ProjectVisual({
  visual,
}: ProjectVisualProps) {
  if (visual === "dashboard") {
    return (
      <div
        className="project-art project-art-tokyo"
        aria-hidden="true"
      >
        <span className="project-art-kicker">
          Connected system
        </span>

        <div className="tokyo-connection tokyo-connection-horizontal" />
        <div className="tokyo-connection tokyo-connection-vertical" />

        <div className="tokyo-module tokyo-module-crm">
          <small>CRM</small>

          <i />
          <i />
        </div>

        <div className="tokyo-module tokyo-module-sales">
          <small>SALES</small>

          <strong>↗</strong>
        </div>

        <div className="tokyo-module tokyo-module-stock">
          <small>STOCK</small>

          <div>
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="tokyo-module tokyo-module-ops">
          <small>OPS</small>

          <strong>03</strong>
        </div>

        <div className="tokyo-core">
          <small>
            One workspace
          </small>

          <strong>
            TOKYO
          </strong>
        </div>
      </div>
    );
  }

  if (visual === "commerce") {
    return (
      <div
        className="project-art project-art-commerce"
        aria-hidden="true"
      >
        <span className="project-art-kicker">
          Commerce flow
        </span>

        <div className="commerce-product commerce-product-one">
          <i />

          <span>
            01
          </span>
        </div>

        <div className="commerce-product commerce-product-two">
          <i />

          <span>
            02
          </span>
        </div>

        <div className="commerce-product commerce-product-three">
          <i />

          <span>
            03
          </span>
        </div>

        <div className="commerce-bag">
          <div className="commerce-bag-handle" />

          <strong>
            S
          </strong>

          <small>
            SHOPIFY
          </small>
        </div>

        <span className="commerce-discover">
          Discover
        </span>

        <span className="commerce-convert">
          Convert
        </span>

        <span className="commerce-arrow">
          →
        </span>
      </div>
    );
  }

  return (
    <div
      className="project-art project-art-coffee"
      aria-hidden="true"
    >
      <span className="project-art-kicker">
        From origin
      </span>

      <div className="coffee-sun" />

      <div className="coffee-ground">
        <i />
        <i />
        <i />
      </div>

      <div className="coffee-seed" />

      <div className="coffee-plant">
        <div className="coffee-stem" />

        <div className="coffee-leaf coffee-leaf-left-one" />
        <div className="coffee-leaf coffee-leaf-right-one" />

        <div className="coffee-leaf coffee-leaf-left-two" />
        <div className="coffee-leaf coffee-leaf-right-two" />

        <div className="coffee-berry coffee-berry-one" />
        <div className="coffee-berry coffee-berry-two" />
      </div>

      <span className="coffee-growth-label">
        Seed → Story
      </span>
    </div>
  );
}