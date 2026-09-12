import styles from "./BuildLoop.module.css";

const steps = [
  { className: "imagine", label: "Imagine", number: "01" },
  { className: "build", label: "Build", number: "02" },
  { className: "code", label: "Code", number: "03" },
  { className: "iterate", label: "Iterate", number: "04" },
];

function classes(...names) {
  return names.filter(Boolean).join(" ");
}

export function BuildLoop({ className, label = "Build loop" }) {
  return (
    <div className={classes(styles.loop, className)}>
      <p className={styles.label}>{label}</p>
      <ol aria-label={label} className={styles.steps}>
        {steps.map((step) => (
          <li
            className={classes(styles.step, styles[step.className])}
            key={step.label}
          >
            <span aria-hidden="true" className={styles.number}>
              {step.number}
            </span>
            <strong className={styles.name}>{step.label}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}
