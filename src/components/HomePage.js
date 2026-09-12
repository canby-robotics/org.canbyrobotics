"use client";

import { Button } from "@primer-brand/Button/Button.js";
import { Card } from "@primer-brand/Card/Card.js";
import { CTABanner } from "@primer-brand/CTABanner/CTABanner.js";
import { Grid } from "@primer-brand/Grid/Grid.js";
import { Heading } from "@primer-brand/Heading/Heading.js";
import { Text } from "@primer-brand/Text/Text.js";

import { BuildLoop } from "@/design-system/BuildLoop";
import {
  ConnectedGrid,
  ConnectedGridCell,
} from "@/design-system/ConnectedGrid";
import { GridSection } from "@/design-system/GridSection";

import styles from "@/app/page.module.css";
import { SeasonModule } from "./SeasonModule";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const programHighlights = [
  {
    label: "Robot game",
    title: "Build, code, and test",
    description:
      "Students design and program a LEGO® robot, develop mission strategies, and improve their work through hands-on testing.",
  },
  {
    label: "Innovation project",
    title: "Investigate and invent",
    description:
      "The team researches a biodiversity challenge, creates a possible solution, and strengthens the idea by gathering feedback.",
  },
  {
    label: "Core Values",
    title: "Grow as a team",
    description:
      "Students practice curiosity, inclusion, teamwork, and confident communication as they prepare to share their work at an ORTOP event.",
  },
];

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main
        className={styles.main}
        id="main-content"
        tabIndex={-1}
      >
        <div id="top">
          <GridSection
            as="div"
            contentClassName={styles.hero}
            divider="bottom"
            padding="none"
          >
            <div className={styles.heroLayout}>
              <section
                aria-labelledby="home-hero-heading"
                className={styles.heroCopy}
              >
                <span className={styles.heroEyebrow}>
                  Community team · Grades 4–8
                </span>
                <Heading
                  as="h1"
                  className={styles.heroHeading}
                  id="home-hero-heading"
                  size="1"
                >
                  Build boldly.
                  <br />
                  Learn together.
                </Heading>
                <Text
                  as="p"
                  className={styles.heroDescription}
                  size="300"
                  variant="muted"
                >
                  Canby Robotics is a welcoming, community-led FIRST® LEGO®
                  League Challenge team. Students build, code, and solve
                  problems together while growing their curiosity, confidence,
                  and teamwork.
                </Text>
                <div className={styles.heroActions}>
                  <Button
                    as="a"
                    href="/interest"
                    size="large"
                    variant="primary"
                  >
                    Join the interest list
                  </Button>
                  <Button
                    as="a"
                    href="#program"
                    size="large"
                    variant="secondary"
                  >
                    See how it works
                  </Button>
                </div>
              </section>
              <BuildLoop />
            </div>
          </GridSection>
        </div>

        <GridSection divider="bottom" id="about" padding="spacious">
          <Grid
            className={styles.introGrid}
            enableGutters={false}
            rowGap="default"
          >
            <Grid.Column span={{ xsmall: 12, large: 4 }}>
              <p className={styles.sectionIndex}>01 / About</p>
            </Grid.Column>
            <Grid.Column
              className={styles.introCopy}
              span={{ xsmall: 12, large: 8 }}
            >
              <Heading as="h2" size="2" textWrap="balance">
                A local team built for curious problem-solvers.
              </Heading>
              <Text
                as="p"
                className={styles.introBody}
                size="300"
                variant="muted"
              >
                Canby Robotics began with local parents looking for a way to
                bring LEGO® robotics to their kids. In partnership with the{" "}
                <a className={styles.inlineLink} href="https://ortop.org/">
                  Oregon Robotics Tournament &amp; Outreach Program
                </a>{" "}
                and the Canby Public Library Maker Lab, we give students a
                welcoming place to experiment, collaborate, and turn ideas into
                working solutions.
              </Text>
            </Grid.Column>
          </Grid>
        </GridSection>

        <GridSection
          contentClassName={styles.featureSection}
          divider="bottom"
          id="program"
          padding="none"
          tone="subtle"
        >
          <div className={styles.featureIntro}>
            <p className={styles.sectionIndex}>02 / Program</p>
            <div className={styles.featureIntroCopy}>
              <Heading as="h2" size="3" textWrap="balance">
                Build a robot. Solve a problem. Grow as a team.
              </Heading>
              <Text
                as="p"
                className={styles.featureIntroBody}
                size="300"
                variant="muted"
              >
                The team meets Mondays from 4:30–6:00 p.m. at the Canby Public
                Library Maker Lab. Using the FIRST LEGO League Engineering
                Notebook, students work from introductory lessons toward a
                robot game, an innovation project, and an event presentation.
                Participation is free, all equipment is provided, and no prior
                robotics or coding experience is required.
              </Text>
            </div>
          </div>
          <ConnectedGrid>
            {programHighlights.map((feature) => (
              <ConnectedGridCell
                className={styles.featureCell}
                key={feature.title}
              >
                <Card
                  backgroundColor="none"
                  className={styles.featureCard}
                  ctaText="Join the interest list"
                  disableAnimation
                  fullWidth
                  href="/interest"
                  variant="minimal"
                >
                  <Card.Label>{feature.label}</Card.Label>
                  <Card.Heading as="h3">{feature.title}</Card.Heading>
                  <Card.Description>{feature.description}</Card.Description>
                </Card>
              </ConnectedGridCell>
            ))}
          </ConnectedGrid>
        </GridSection>

        <SeasonModule />

        <CTABanner
          align="center"
          className={styles.cta}
          hasGridLines
          id="join"
        >
          <CTABanner.Heading as="h2">
            Interested in the next Canby Robotics team?
          </CTABanner.Heading>
          <CTABanner.Description>
            We form one dedicated team of up to eight students in grades 4–8
            and do not add new participants after the season begins. Submit the
            interest form to be considered for the next available team.
          </CTABanner.Description>
          <CTABanner.ButtonGroup>
            <Button as="a" href="/interest" size="large" variant="primary">
              Join the interest list
            </Button>
          </CTABanner.ButtonGroup>
        </CTABanner>
      </main>
      <SiteFooter />
    </>
  );
}
