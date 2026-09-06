"use client";

import { Button } from "@primer-brand/Button/Button.js";
import { Card } from "@primer-brand/Card/Card.js";
import { CTABanner } from "@primer-brand/CTABanner/CTABanner.js";
import { Grid } from "@primer-brand/Grid/Grid.js";
import { Heading } from "@primer-brand/Heading/Heading.js";
import { Text } from "@primer-brand/Text/Text.js";

import {
  ConnectedGrid,
  ConnectedGridCell,
} from "@/design-system/ConnectedGrid";
import { GridSection } from "@/design-system/GridSection";

import styles from "@/app/page.module.css";
import { SeasonModule } from "./SeasonModule";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const featurePreviews = [
  {
    label: "Placeholder copy 01",
    title: "Learn by exploring",
    description:
      "Replace with the club's learning model, age range, and the skills students can expect to practice.",
  },
  {
    label: "Placeholder copy 02",
    title: "Build with a team",
    description:
      "Replace with an accurate description of team structure, meeting cadence, and available mentor support.",
  },
  {
    label: "Placeholder copy 03",
    title: "Share the result",
    description:
      "Replace with verified details about events, competitions, demonstrations, or community showcases.",
  },
];

export function HomePagePreview() {
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
            <div className={styles.heroSplit}>
              <section
                aria-labelledby="home-hero-heading"
                className={styles.heroCopy}
              >
                <span className={styles.placeholderLabel}>
                  Design preview · placeholder copy
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
                  Replace this introduction with Canby Robotics&apos; approved
                  mission and a concise invitation for students, families, and
                  mentors.
                </Text>
                <div className={styles.heroActions}>
                  <Button as="a" href="#about" size="large" variant="primary">
                    Explore the preview
                  </Button>
                  <Button
                    as="a"
                    href="#season"
                    size="large"
                    variant="secondary"
                  >
                    Current season
                  </Button>
                </div>
              </section>
              <div aria-hidden="true" className={styles.heroSignal}>
                <div
                  className={`${styles.heroSignalCell} ${styles.signalStrong}`}
                >
                  <span>01</span>
                  Imagine
                </div>
                <div
                  className={`${styles.heroSignalCell} ${styles.signalAccent}`}
                >
                  <span>02</span>
                  Build
                </div>
                <div
                  className={`${styles.heroSignalCell} ${styles.signalAction}`}
                >
                  <span>03</span>
                  Code
                </div>
                <div
                  className={`${styles.heroSignalCell} ${styles.signalInk}`}
                >
                  <span>04</span>
                  Iterate
                </div>
              </div>
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
              <span className={styles.placeholderLabel}>Placeholder copy</span>
              <Heading as="h2" size="2" textWrap="balance">
                A place to turn curiosity into something real.
              </Heading>
              <Text
                as="p"
                className={styles.introBody}
                size="300"
                variant="muted"
              >
                Replace this section with a verified overview of who Canby
                Robotics serves, what participants create, and how the program
                supports learning through collaboration.
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
              <span className={styles.placeholderLabel}>Placeholder copy</span>
              <Heading as="h2" size="3" textWrap="balance">
                One connected path from first idea to final build.
              </Heading>
            </div>
          </div>
          <ConnectedGrid>
            {featurePreviews.map((feature) => (
              <ConnectedGridCell
                className={styles.featureCell}
                key={feature.title}
              >
                <Card
                  backgroundColor="none"
                  className={styles.featureCard}
                  ctaText="Preview this pathway"
                  disableAnimation
                  fullWidth
                  href="#join"
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
            Interested in Canby Robotics?
          </CTABanner.Heading>
          <CTABanner.Description>
            Use the interest form to tell us you would like to learn more about
            joining the club.
          </CTABanner.Description>
          <CTABanner.ButtonGroup>
            <Button as="a" href="/interest" size="large" variant="primary">
              View the interest form
            </Button>
          </CTABanner.ButtonGroup>
        </CTABanner>
      </main>
      <SiteFooter />
    </>
  );
}
