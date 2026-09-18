import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  focus: string;
  href: string;
  visual: "dashboard" | "commerce" | "concept";

  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
};

export default function ProjectCard({
  number,
  title,
  category,
  description,
  focus,
  href,
  visual,
  imageSrc,
  imageAlt,
  imageLabel,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="project-card"
      data-project={visual}
      aria-label={`Explore ${title}`}
    >
      {/* REAL PROJECT IMAGE */}

      <div className="project-visual project-visual-real">
        <div className="project-image-frame">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            className="project-card-image"
          />
        </div>

        <span className="project-image-label">
          {imageLabel}
        </span>
      </div>

      {/* PROJECT INFORMATION */}

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

          <span className="project-link">
            Explore project
            <span>↗</span>
          </span>
        </div>
      </div>
    </Link>
  );
}