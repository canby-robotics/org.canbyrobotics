"use client";

import { Button } from "@primer-brand/Button/Button.js";
import { Card } from "@primer-brand/Card/Card.js";
import { Heading } from "@primer-brand/Heading/Heading.js";
import { Link as BrandLink } from "@primer-brand/Link/Link.js";
import { Text } from "@primer-brand/Text/Text.js";
import Link from "next/link";

import { SeasonModule } from "@/components/SeasonModule";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

import styles from "./page.module.css";

const palette = [
  {
    className: "swatchInk",
    name: "Ink",
    role: "Text, rules, dark surfaces",
    value: "#1B2A34",
  },
  {
    className: "swatchEnergy",
    name: "Energy",
    role: "Strong surfaces and highlights",
    value: "#FAC80A",
  },
  {
    className: "swatchSignal",
    name: "Signal",
    role: "Subtle surfaces and accents",
    value: "#68C3E2",
  },
  {
    className: "swatchAction",
    name: "Action",
    role: "Primary actions, links, focus",
    value: "#901F76",
  },
  {
    className: "swatchPartWhite",
    name: "Part white",
    role: "Neutral surfaces and reverse text",
    value: "#F4F4F4",
  },
  {
    className: "swatchStructural",
    name: "Structural gray",
    role: "Muted text and secondary detail",
    value: "#646464",
  },
];

const contrasts = [
  {
    className: "contrastEnergy",
    label: "Ink on Energy",
    ratio: "9.34:1",
  },
  {
    className: "contrastSignal",
    label: "Ink on Signal",
    ratio: "7.35:1",
  },
  {
    className: "contrastAction",
    label: "Part white on Action",
    ratio: "7.22:1",
  },
  {
    className: "contrastCanvas",
    label: "Structural gray on white",
    ratio: "5.92:1",
  },
];

const componentCards = [
  {
    description:
      "Use a white foundation and let the bright colors mark meaningful structure.",
    label: "Foundation",
    title: "Keep the canvas calm",
  },
  {
    description:
      "Use azure for informational surfaces and yellow for high-energy callouts.",
    label: "Hierarchy",
    title: "Give each color a job",
  },
  {
    description:
      "Use magenta for primary action instead of spreading it across every surface.",
    label: "Interaction",
    title: "Reserve action color",
  },
];

function classes(...names) {
  return names.filter(Boolean).join(" ");
}

export function BuildBrightReference() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} id="main-content" tabIndex={-1}>
        <section className={styles.intro}>
          <div className={styles.frame}>
            <Link className={styles.backLink} href="/">
              Back to the public site
            </Link>
            <span className={styles.labLabel}>
              Canby Robotics design system
            </span>
            <h1>Build Bright reference.</h1>
            <p>
              Build Bright is the year-round Canby Robotics identity: a calm
              white and ink foundation energized by yellow, azure, and
              magenta. Official season branding stays inside its own module.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="palette-heading"
          className={styles.paletteSection}
        >
          <div className={styles.frame}>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionIndex}>01 / Core palette</span>
              <Heading as="h2" id="palette-heading" size="2">
                A small palette with explicit roles.
              </Heading>
              <Text as="p" variant="muted">
                These project-owned tokens are inspired by colors found in the
                SPIKE Prime kit. They are not official LEGO web-brand colors.
              </Text>
            </div>

            <div className={styles.paletteGrid}>
              {palette.map((token) => (
                <article className={styles.paletteCard} key={token.name}>
                  <div
                    aria-hidden="true"
                    className={classes(styles.swatch, styles[token.className])}
                  />
                  <div className={styles.paletteMeta}>
                    <div>
                      <h3>{token.name}</h3>
                      <p>{token.role}</p>
                    </div>
                    <code>{token.value}</code>
                  </div>
                </article>
              ))}
            </div>

            <div aria-label="Accessible color pairings" className={styles.contrastGrid}>
              {contrasts.map((contrast) => (
                <div
                  className={classes(
                    styles.contrastCard,
                    styles[contrast.className],
                  )}
                  key={contrast.label}
                >
                  <span>{contrast.label}</span>
                  <strong>{contrast.ratio}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="components-heading"
          className={styles.componentsSection}
        >
          <div className={styles.frame}>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionIndex}>
                02 / Component behavior
              </span>
              <Heading as="h2" id="components-heading" size="2">
                Bright color supports the structure.
              </Heading>
              <Text as="p" variant="muted">
                Buttons, links, connected cards, and strong surfaces all
                consume semantic roles rather than raw palette values.
              </Text>
            </div>

            <div className={styles.componentDemo}>
              <div className={styles.demoCopy}>
                <span className={styles.eyebrow}>
                  Year-round team identity
                </span>
                <Heading as="h3" className={styles.demoHeading} size="2">
                  Build boldly.
                  <br />
                  Learn together.
                </Heading>
                <Text as="p" className={styles.demoLead} variant="muted">
                  Use color to make the learning path easier to scan, not to
                  decorate every available surface.
                </Text>
                <div className={styles.demoActions}>
                  <Button as="a" href="/interest" size="large" variant="primary">
                    Primary action
                  </Button>
                  <Button as="a" href="#reference-season" size="large" variant="secondary">
                    Secondary action
                  </Button>
                </div>
                <BrandLink href="/interest">Text-link treatment</BrandLink>
              </div>

              <div aria-hidden="true" className={styles.signalBoard}>
                <div className={classes(styles.signalCell, styles.signalEnergy)}>
                  <span>01</span>
                  Imagine
                </div>
                <div className={classes(styles.signalCell, styles.signalSignal)}>
                  <span>02</span>
                  Build
                </div>
                <div className={classes(styles.signalCell, styles.signalAction)}>
                  <span>03</span>
                  Code
                </div>
                <div className={classes(styles.signalCell, styles.signalInk)}>
                  <span>04</span>
                  Iterate
                </div>
              </div>
            </div>

            <div className={styles.cardGrid}>
              {componentCards.map((card) => (
                <div className={styles.cardCell} key={card.title}>
                  <Card
                    backgroundColor="none"
                    className={styles.card}
                    ctaText="View the interest form"
                    disableAnimation
                    fullWidth
                    href="/interest"
                    variant="minimal"
                  >
                    <Card.Label>{card.label}</Card.Label>
                    <Card.Heading as="h3">{card.title}</Card.Heading>
                    <Card.Description>{card.description}</Card.Description>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SeasonModule
          id="reference-season"
          linkHref="/interest"
          linkLabel="View the interest form"
        />

        <aside className={styles.researchNote}>
          <div className={styles.frame}>
            <div>
              <span className={styles.sectionIndex}>Source boundary</span>
              <h2>Inspired by the kit, owned by Canby Robotics.</h2>
            </div>
            <div className={styles.researchCopy}>
              <p>
                The starting HEX values come from the LDraw rendering
                reference for colors found in the 45678-1 inventory. They are
                visual approximations for this project, not official LEGO
                web-brand values.
              </p>
              <div className={styles.sourceLinks}>
                <a
                  href="https://education.lego.com/en-us/products/lego-education-spike-prime-set/45678/"
                  rel="noreferrer"
                  target="_blank"
                >
                  LEGO Education product
                </a>
                <a
                  href="https://brickset.com/inventories/45678-1"
                  rel="noreferrer"
                  target="_blank"
                >
                  Set inventory
                </a>
                <a
                  href="https://library.ldraw.org/library/official/LDConfig.ldr"
                  rel="noreferrer"
                  target="_blank"
                >
                  LDraw color reference
                </a>
              </div>
            </div>
          </div>
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}
