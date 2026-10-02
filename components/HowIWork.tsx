"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const processSteps = [
  {
    number: "01",
    title: "Identify",
    description:
      "Understand the problem before designing the solution. I look at users, context, business needs, constraints and existing friction.",
    focus:
      "Users · Context · Constraints · Friction",
  },
  {
    number: "02",
    title: "Propose",
    description:
      "Turn what I learned into possible directions, priorities and hypotheses that can be discussed before committing to execution.",
    focus:
      "Direction · Priorities · Opportunities",
  },
  {
    number: "03",
    title: "Prototype",
    description:
      "Make ideas tangible through flows, wireframes and interactive prototypes so the experience can be understood before it is fully built.",
    focus:
      "Flows · Hierarchy · Interaction",
  },
  {
    number: "04",
    title: "Evaluate",
    description:
      "Test assumptions and identify usability problems, confusing interactions or gaps in the proposed solution.",
    focus:
      "Usability · Logic · Assumptions",
  },
  {
    number: "05",
    title: "Refine",
    description:
      "Use feedback and findings to simplify the experience, resolve edge cases and improve clarity before launch.",
    focus:
      "Clarity · Feedback · Edge Cases",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Bring the solution into a real environment through implementation, quality assurance and attention to the details that shape the final experience.",
    focus:
      "Execution · QA · Implementation",
  },
  {
    number: "07",
    title: "Iterate",
    description:
      "A launch is not the end. Real usage creates new information, so I use what we learn to continue improving the product.",
    focus:
      "Usage · Learning · Improvement",
  },
];

export default function HowIWork() {
  const [activeStep, setActiveStep] =
    useState(0);

  const active =
    processSteps[activeStep];

  return (
    <section
      className="process-station"
      id="process"
    >
      <div className="process-station-inner">
        <Reveal>
          <header className="process-heading">
            <div className="process-heading-meta">
              <span>
                03 / How I Work
              </span>

              <span>
                Iterative by design
              </span>
            </div>

            <div className="process-heading-main">
              <h2>
                Design isn&apos;t
                <br />
                <span>
                  a straight line.
                </span>
              </h2>

              <p>
                My process moves between
                understanding, testing,
                building and learning. Each
                step informs the next — and
                sometimes sends us back to
                an earlier one.
              </p>
            </div>
          </header>
        </Reveal>

        <Reveal delay={100}>
          <div className="process-map">
            {processSteps.map(
              (step, index) => (
                <button
                  type="button"
                  key={step.number}
                  className={
                    index === activeStep
                      ? "process-step active"
                      : "process-step"
                  }
                  onMouseEnter={() =>
                    setActiveStep(index)
                  }
                  onFocus={() =>
                    setActiveStep(index)
                  }
                  onClick={() =>
                    setActiveStep(index)
                  }
                >
                  <span className="process-step-dot" />

                  <small>
                    {step.number}
                  </small>

                  <strong>
                    {step.title}
                  </strong>
                </button>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div
            className="process-detail"
            key={active.number}
          >
            <span className="process-detail-number">
              {active.number}
            </span>

            <div className="process-detail-title">
              <small>
                Current stage
              </small>

              <h3>
                {active.title}
              </h3>
            </div>

            <p>
              {active.description}
            </p>

            <div className="process-detail-focus">
              <span>
                I&apos;m looking at
              </span>

              <strong>
                {active.focus}
              </strong>
            </div>
          </div>
        </Reveal>

        <div className="process-loop">
          <span>07</span>

          <i>↺</i>

          <p>
            Learn from the result.
            <br />
            Return when necessary.
          </p>
        </div>
      </div>
    </section>
  );
}