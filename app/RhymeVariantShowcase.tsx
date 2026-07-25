"use client";

import Link from "next/link";
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

const steps = [
  ["Stream", "Listen to songs from various artists with the everyday ease people expect from a modern music app."],
  ["Learn", "Join creator-led sessions to learn music skills: guitar, production, DJing, songwriting, and more."],
  ["Connect", "Enter limited live rooms where artists can see and speak with selected fans, not just broadcast at them."],
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
          <img src="/media/rhyme-prism-clef.png" alt="" />
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
              <img src={session.image} alt="" />
              <span>{session.label}</span>
              <h3>{session.title}</h3>
              <p>{session.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pulse-grid pulse-feature-grid" data-reveal>
        {[
          ["Listeners", "Stream songs, follow creators, learn music skills, and get closer to the people behind the sound.", "slide"],
          ["Artists", "Release music, host intimate live calls, teach followers, and build a paying community.", "fade"],
          ["DJs", "Connect with fans, test sets, start trends, and bring selected listeners inside the room.", "flip"],
          ["Teachers", "Turn talent into mobile and PC sessions for guitar, production, vocals, songwriting, and more.", "drop"],
        ].map(([title, detail, mode], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h2>
              <RotatingText
                words={[title, title === "DJs" ? "Selectors" : "Creators"]}
                mode={mode as "slide" | "fade" | "flip" | "drop"}
                interval={2800 + index * 260}
                className="rhyme-21st-card-rotate"
              />
            </h2>
            <p>{detail}</p>
          </article>
        ))}
      </section>

      <section className="pulse-path" data-reveal>
        {steps.map(([title, detail], index) => (
          <div key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <p>{detail}</p>
          </div>
        ))}
      </section>

      <section className="pulse-faq" data-reveal>
        <div>
          <p className="upgrade-kicker">Launch clarity</p>
          <h2>What RHYME is becoming.</h2>
        </div>
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
        <img src="/media/rhyme-prism-clef.png" alt="RHYME prism clef" />
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
