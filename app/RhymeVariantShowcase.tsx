"use client";

import { useState } from "react";
import Link from "next/link";
import { RhymeHeroShader } from "./RhymeHeroShaders";
import { RhymeScrollEffects } from "./RhymeScrollEffects";

const heroVariants = [
  { id: "aurora", label: "Aurora Blur", themeClass: "rhyme-theme-aurora" },
  { id: "wave", label: "Shader Animation", themeClass: "rhyme-theme-wave" },
  { id: "prism", label: "WebGL Shader", themeClass: "rhyme-theme-prism", recommended: true },
] as const;

type HeroVariantId = (typeof heroVariants)[number]["id"];

const sessions = [
  {
    label: "Guitar room",
    title: "Learn the song from the person who plays it.",
    detail: "Artists and talented music lovers can host small teaching sessions for guitar, vocals, writing, and live performance.",
    video: "/media/rhyme-1.mp4",
  },
  {
    label: "Beat lab",
    title: "Watch a beat become a record.",
    detail: "Producers can break down drums, samples, arrangements, and mix choices while followers ask questions in real time.",
    video: "/media/rhyme-2.mp4",
  },
  {
    label: "DJ trend room",
    title: "DJs can turn taste into movement.",
    detail: "DJs can connect with fans, test transitions, build trends, and invite a selected room into the energy behind a set.",
    video: "/media/rhyme-3.mp4",
  },
];

const steps = [
  ["Stream", "Listen to songs from various artists with the everyday ease people expect from a modern music app."],
  ["Learn", "Join creator-led sessions to learn music skills: guitar, production, DJing, songwriting, and more."],
  ["Connect", "Enter limited live rooms where artists can see and speak with selected fans, not just broadcast at them."],
];

const creatorPaths = [
  ["Paid sessions", "Verified artists, DJs, producers, and teachers can charge a small fee for premium live rooms."],
  ["Subscription share", "RHYME can pay creators from platform subscriptions as their audience streams, learns, and returns."],
  ["Fan growth", "Creator pages become a home for songs, sessions, teaching, live calls, and trend-building."],
];

const faq = [
  ["Is RHYME only for famous artists?", "No. RHYME is for established artists, DJs, producers, music teachers, and talented music lovers who can teach or create music-related sessions."],
  ["How are live rooms different from going live?", "Rooms are intentionally limited. The creator can see selected people in the live call, answer questions, and make the session feel closer than a public livestream."],
  ["How do creators get paid?", "Verified creators can charge small session fees, earn from subscribers who join premium rooms, and receive platform payouts from RHYME."],
  ["Is the app mobile only?", "The goal is phone and PC access, so listeners can stream casually and still join deeper learning sessions when they want a bigger screen."],
];

function HeroVariant({ activeVariant }: { activeVariant: HeroVariantId }) {
  if (activeVariant === "wave") {
    return (
      <section className="rhyme-hero-switch rhyme-hero-wave" aria-labelledby="rhyme-hero-title">
        <RhymeHeroShader kind="ripple" className="rhyme-ripple-shader" />
        <div className="rhyme-wave-field" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="rhyme-wave-content">
          <p className="upgrade-kicker">Selected creator rooms are opening</p>
          <h1 id="rhyme-hero-title">Stream. Learn. Connect.</h1>
          <p>
            RHYME turns music into a closer exchange: press play, study the craft,
            then step into intimate sessions with artists, DJs, producers, and
            teachers who can see the room.
          </p>
          <div className="upgrade-actions">
            <Link className="upgrade-primary" href="/reserve">
              Reserve your username <b>+</b>
            </Link>
            <Link className="upgrade-secondary" href="/reserve?type=creator">
              Join as a creator
            </Link>
          </div>
        </div>
        <div className="rhyme-wave-status" aria-label="RHYME launch status">
          <span>Live room signal</span>
          <strong>24</strong>
          <small>selected fans per premium beat lab</small>
        </div>
      </section>
    );
  }

  if (activeVariant === "prism") {
    return (
      <section className="rhyme-hero-switch rhyme-hero-prism" aria-labelledby="rhyme-hero-title">
        <RhymeHeroShader kind="wave" className="rhyme-webgl-shader" />
        <div className="rhyme-prism-grid" aria-hidden="true" />
        <div className="rhyme-prism-object" aria-hidden="true">
          <span className="rhyme-prism-ring rhyme-prism-ring-one" />
          <span className="rhyme-prism-ring rhyme-prism-ring-two" />
          <span className="rhyme-prism-ring rhyme-prism-ring-three" />
          <img src="/media/rhyme-prism-clef.png" alt="" />
        </div>
        <div className="rhyme-prism-content">
          <p className="upgrade-kicker">A music home with a visible mark</p>
          <h1 id="rhyme-hero-title">Build your music circle.</h1>
          <p>
            More than streaming, this direction gives RHYME one memorable mark
            at the center of the motion, glow, and launch energy.
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

  return (
    <section className="rhyme-hero-switch rhyme-hero-aurora" aria-labelledby="rhyme-hero-title">
      <div className="rhyme-aurora-field" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="rhyme-aurora-content">
        <p className="upgrade-kicker">Streaming plus music school plus fan rooms</p>
        <h1 id="rhyme-hero-title">More than streaming.</h1>
        <p>
          RHYME is where listening turns into learning. Stream songs from artists
          you love, then move into small live rooms where the people behind the
          sound teach, create, and connect.
        </p>
        <div className="upgrade-actions">
          <Link className="upgrade-primary" href="/reserve">
            Reserve your username <b>+</b>
          </Link>
          <Link className="upgrade-secondary" href="/reserve?type=creator">
            Join as a creator
          </Link>
        </div>
      </div>
      <div className="rhyme-aurora-panel" aria-label="RHYME product preview">
        <span>Now forming</span>
        <strong>Beat lab</strong>
        <p>Creator-led sessions with streaming, teaching, and selected live calls.</p>
      </div>
    </section>
  );
}

export function RhymeVariantShowcase() {
  const [activeVariant, setActiveVariant] = useState<HeroVariantId>("prism");
  const activeTheme = heroVariants.find((variant) => variant.id === activeVariant) ?? heroVariants[0];

  return (
    <main className={`upgrade-page upgrade-pulse pulse-home rhyme-theme-page ${activeTheme.themeClass}`}>
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

      <HeroVariant activeVariant={activeVariant} />

      <div className="upgrade-switcher" aria-label="Hero theme selector">
        {heroVariants.map((variant, index) => (
          <button
            key={variant.id}
            type="button"
            className={variant.id === activeVariant ? "is-active" : undefined}
            onClick={() => setActiveVariant(variant.id)}
            aria-pressed={variant.id === activeVariant}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {variant.label}
            {"recommended" in variant && variant.recommended ? <b>Best fit</b> : null}
          </button>
        ))}
      </div>

      <section className="pulse-product" data-reveal>
        <div>
          <p className="upgrade-kicker">The product idea</p>
          <h2>Spotify-like listening, with a school and stage built in.</h2>
        </div>
        <p>
          RHYME starts with music streaming, then adds the layer listeners do not
          get from normal platforms: direct access to how music is made. A fan can
          listen to a track, join a guitar lesson from the artist, watch a producer
          build a beat, or enter a DJ room that helps create the next trend.
        </p>
      </section>

      <section className="pulse-sessions" data-reveal>
        <div>
          <p className="upgrade-kicker">Exclusive live sessions</p>
          <h2>Every session is a small room, not a crowded livestream.</h2>
        </div>
        <div className="pulse-session-stack">
          {sessions.map((session) => (
            <article key={session.title}>
              <video src={session.video} autoPlay muted loop playsInline />
              <span>{session.label}</span>
              <h3>{session.title}</h3>
              <p>{session.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pulse-grid pulse-feature-grid" data-reveal>
        {[
          ["Listeners", "Stream songs, follow creators, learn music skills, and get closer to the people behind the sound."],
          ["Artists", "Release music, host intimate live calls, teach followers, and build a paying community."],
          ["DJs", "Connect with fans, test sets, start trends, and bring selected listeners inside the room."],
          ["Teachers", "Turn talent into mobile and PC sessions for guitar, production, vocals, songwriting, and more."],
        ].map(([title, detail], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
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

      <section className="pulse-economy" data-reveal>
        <div>
          <p className="upgrade-kicker">Two ways to earn</p>
          <h2>Creators get paid by the room and by the platform.</h2>
          <p>
            RHYME can work with a subscription like Spotify, while verified
            creators can also charge small fees for special live sessions. That
            gives creators a reason to teach, show up, and build stronger fan
            relationships.
          </p>
          <Link className="upgrade-primary" href="/reserve?type=creator">
            Reserve a creator name <b>+</b>
          </Link>
        </div>
        <div className="pulse-earning-list">
          {creatorPaths.map(([title, detail], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pulse-access" data-reveal>
        <video src="/media/rhyme-2.mp4" autoPlay muted loop playsInline />
        <div>
          <p className="upgrade-kicker">Verified creator rooms</p>
          <h2>Small enough for the artist to actually see who is there.</h2>
          <p>
            Public livestreams can feel distant. RHYME rooms are designed for
            selected fans, paid access when appropriate, and real interaction:
            questions, feedback, learning, and face-to-face presence.
          </p>
        </div>
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
        <h2>Start with the name your fans will know.</h2>
        <Link className="upgrade-primary" href="/reserve">
          Reserve your username <b>+</b>
        </Link>
        <small>No price has been announced yet. Reservations activate once RHYME&apos;s launch systems are connected.</small>
      </section>
    </main>
  );
}
