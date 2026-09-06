import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

import styles from "./page.module.css";

export const metadata = {
  title: "Interest Form | Canby Robotics",
  description: "Share your interest in joining Canby Robotics.",
};

export default function InterestPage() {
  return (
    <>
      <SiteHeader />
      <main
        className={styles.main}
        id="main-content"
        tabIndex={-1}
      >
        <section
          aria-labelledby="interest-heading"
          className={styles.section}
        >
          <div className={styles.inner}>
            <h1 className={styles.heading} id="interest-heading">
              Canby Robotics interest form
            </h1>
            <div className={styles.formFrame}>
              <iframe
                className={styles.form}
                src="https://docs.google.com/forms/d/e/1FAIpQLScfhGYRGpfyMPmAAi5aN2db8yrvRZxshgBoiZ-nLWkRL1zIgg/viewform?embedded=true"
                title="Canby Robotics club interest form"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
