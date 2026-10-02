import Reveal from "./Reveal";

type StationTransitionProps = {
  current: string;
  next: string;
  href: string;
  tone?: "blue" | "tomato" | "dark";
};

export default function StationTransition({
  current,
  next,
  href,
  tone = "blue",
}: StationTransitionProps) {
  return (
    <section
      className={`station-transition station-transition-${tone}`}
      aria-label={`Continue to ${next}`}
    >
      <Reveal>
        <a
          href={href}
          className="station-transition-inner"
        >
          <span className="station-transition-current">
            {current}
          </span>

          <span className="station-transition-line">
            <i />
          </span>

          <span className="station-transition-next">
            <small>Next station</small>

            <strong>
              {next}
            </strong>

            <span>↓</span>
          </span>
        </a>
      </Reveal>
    </section>
  );
}