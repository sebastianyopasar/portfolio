import styles from "@/app/work/niwa/identidad.module.css";

export default function InfographicPanel() {
  return (
    <section className={styles.infographicSection}>
      <div className={styles.sectionLabel}>
        <span>03</span>
        <span>Research Infographic</span>
      </div>

      <div className={styles.infographicHeader}>
        <div>
          <span className={styles.sectionMiniTitle}>Scrollable Preview</span>
          <h3>A large-format infographic contained inside a compact frame.</h3>
        </div>

        <p>
          Instead of opening the infographic at full length, this section keeps
          it inside a controlled viewport so users can scroll through it without
          the page becoming excessively long.
        </p>
      </div>

      <div className={styles.infographicFrame}>
        <iframe
          src="/identidad/infographic.pdf#toolbar=0&navpanes=0&scrollbar=1"
          title="Identidad.CO infographic"
          className={styles.infographicIframe}
        />
      </div>

      <div className={styles.infographicActions}>
        <a
          href="/identidad/infographic.pdf"
          target="_blank"
          rel="noreferrer"
          className={styles.secondaryButton}
        >
          Open full infographic ↗
        </a>
      </div>
    </section>
  );
}