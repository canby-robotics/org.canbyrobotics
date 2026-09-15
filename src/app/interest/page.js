import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

import styles from "./page.module.css";

export const metadata = {
  title: "Join the Interest List | Canby Robotics",
  description:
    "Share your interest in joining the next Canby Robotics FIRST LEGO League Challenge team.",
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
              Join the Canby Robotics interest list
            </h1>
            <div className={styles.intro}>
              <p>
                Canby Robotics forms one team of up to eight students in grades
                4–8. Meetings are Mondays from 4:30–6:00 p.m. at the Canby
                Public Library Maker Lab. Participation is free, beginners are
                welcome, and all robotics materials and devices are provided.
              </p>
              <p>
                Because the team works together through a full FIRST® LEGO®
                League Challenge season, we do not add new participants after
                meetings begin. Submitting this form expresses interest in the
                next available team and does not guarantee placement.
              </p>
            </div>
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
