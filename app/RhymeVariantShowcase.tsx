"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { ContainerTextFlip } from "@/components/ui/modern-animated-multi-words";
import { Component as RotatingText } from "@/components/ui/rotating-text";
import { RhymeHeroShader } from "./RhymeHeroShaders";
import { RhymeScrollEffects } from "./RhymeScrollEffects";

const sessions = [
  {
    label: "Guitar room",
    title: "Learn the song from the person who plays it.",
    detail: "Artists and talented music lovers can host small teaching sessions for guitar, vocals, writing, and live performance.",
    image: "/media/rhyme-session-learn.png",
  },
  {
    label: "Beat lab",
    title: "Watch a beat become a record.",
    detail: "Producers can break down drums, samples, arrangements, and mix choices while followers ask questions in real time.",
    image: "/media/rhyme-session-dj.png",
  },
  {
    label: "DJ trend room",
    title: "DJs can turn taste into movement.",
    detail: "DJs can connect with fans, test transitions, build trends, and invite a selected room into the energy behind a set.",
    image: "/media/rhyme-session-watch.png",
  },
];

const fanBentoCards = [
  {
    title: "Instant live alerts",
    detail: "Fans know the moment a verified artist goes live and can jump straight into the room.",
    className: "is-large",
    image: "/media/rhyme-bento-live-alert.png",
  },
  {
    title: "Upcoming lessons",
    detail: "Creators can schedule guitar, production, and music sessions so followers can plan to join.",
    className: "is-wide",
    image: "/media/rhyme-bento-upcoming-lesson.png",
  },
  {
    title: "Connect now",
    detail: "DJ rooms make it easy for fans to enter before the live moment moves on.",
    className: "is-wide",
    image: "/media/rhyme-bento-connect-now.png",
  },
];

const faq = [
  ["Is RHYME only for famous artists?", "No. RHYME is for established artists, DJs, producers, music teachers, and talented music lovers who can teach or create music-related sessions."],
  ["How are live rooms different from going live?", "Rooms are intentionally limited. The creator can see selected people in the live call, answer questions, and make the session feel closer than a public livestream."],
  ["How do creators get paid?", "Verified creators can charge small session fees, earn from subscribers who join premium rooms, and receive platform payouts from RHYME."],
  ["Is the app mobile only?", "The goal is phone and PC access, so listeners can stream casually and still join deeper learning sessions when they want a bigger screen."],
];

function HeroVariant() {
  return (
    <section className="rhyme-hero-switch rhyme-hero-prism" aria-labelledby="rhyme-hero-title">
      <RhymeHeroShader kind="wave" className="rhyme-webgl-shader" />
      <div className="rhyme-prism-content">
        <p className="upgrade-kicker">A music home built around motion</p>
        <h1 id="rhyme-hero-title">Build your music circle.</h1>
        <p>
          More than streaming, this direction gives RHYME a full WebGL-style
          stage for live rooms, creator lessons, fan circles, and launch energy.
        </p>
        <div className="upgrade-actions">
          <Link className="upgrade-primary" href="/reserve">
            Reserve your username <b>+</b>
          </Link>
          <Link className="upgrade-secondary" href="/reserve?type=creator">
            Open creator access
          </Link>
        </div>
      </div>
    </section>
  );
}

export function RhymeVariantShowcase() {
  return (
    <main className="upgrade-page upgrade-pulse pulse-home rhyme-theme-page rhyme-theme-prism">
      <RhymeScrollEffects />
      <div className="upgrade-grain" aria-hidden="true" />

      <nav className="upgrade-nav pulse-home-nav" aria-label="RHYME">
        <Link className="upgrade-wordmark" href="/">
          <Image src="/media/rhyme-prism-clef.png" alt="" width={28} height={28} />
          RHYME
        </Link>
        <span>{"Stream \u00b7 Learn \u00b7 Connect"}</span>
        <Link className="upgrade-nav-action" href="/reserve">
          Reserve your username
        </Link>
      </nav>

      <HeroVariant />

      <section className="rhyme-21st-copy-stage" data-reveal>
        <div>
          <p className="upgrade-kicker">Creator access</p>
          <h2>
            Music rooms that feel{" "}
            <ContainerTextFlip
              words={["phenomenal", "personal", "electric", "close"]}
              interval={2600}
              animationDuration={650}
              variant="primary"
              className="rhyme-21st-inline-flip"
              textClassName="rhyme-21st-inline-flip-text"
            />
          </h2>
        </div>
        <p>
          RHYME makes streaming feel alive: the same page can hold songs, lessons,
          creator sessions, paid fan access, and selected live calls where music
          lovers can actually be seen.
        </p>
      </section>

      <section className="pulse-sessions" data-reveal>
        <div>
          <p className="upgrade-kicker">Exclusive live sessions</p>
          <h2>
            Every session is a small{" "}
            <RotatingText
              words={["room", "lesson", "studio", "circle"]}
              mode="blur"
              interval={2300}
              className="rhyme-21st-session-rotate"
            />
            , not a crowded livestream.
          </h2>
        </div>
        <div className="pulse-session-stack">
          {sessions.map((session) => (
            <article key={session.title}>
              <Image src={session.image} alt="" fill sizes="(min-width: 981px) 54vw, 100vw" />
              <span>{session.label}</span>
              <h3>{session.title}</h3>
              <p>{session.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rhyme-fan-bento rhyme-fan-bento-images" data-reveal>
        <div className="rhyme-bento-grid">
          {fanBentoCards.map((card) => (
            <article className={card.className} key={card.title}>
              <Image src={card.image} alt="" fill sizes="(min-width: 981px) 31vw, 100vw" />
              <h3>{card.title}</h3>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pulse-faq pulse-faq-lamp-section" data-reveal>
        <LampContainer className="pulse-faq-lamp">
          <motion.p
            className="upgrade-kicker"
            initial={{ opacity: 0.45, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            Launch clarity
          </motion.p>
          <motion.h2
            initial={{ opacity: 0.5, y: 88 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          >
            What RHYME <br /> is becoming.
          </motion.h2>
        </LampContainer>
        <div className="pulse-faq-list">
          {faq.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<b>+</b></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="pulse-final" data-reveal>
        <Image src="/media/rhyme-prism-clef.png" alt="RHYME prism clef" width={1024} height={1024} />
        <p className="upgrade-kicker">Private pre-launch / 2026</p>
        <h2 className="rhyme-reveal-title">Start with the name your fans will know.</h2>
        <Link className="upgrade-primary" href="/reserve">
          Reserve your username <b>+</b>
        </Link>
        <small>No price has been announced yet. Reservations activate once RHYME&apos;s launch systems are connected.</small>
      </section>
    </main>
  );
}
