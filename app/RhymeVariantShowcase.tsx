"use client";

import Link from "next/link";
import { RhymeScrollEffects } from "./RhymeScrollEffects";

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

export function RhymeVariantShowcase() {
  return (
    <main className="upgrade-page upgrade-pulse pulse-home">
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

      <section className="pulse-hero pulse-home-hero">
        <div className="pulse-copy" data-reveal>
          <p className="upgrade-kicker">Streaming plus music school plus fan rooms</p>
          <h1>More than streaming.</h1>
          <p>
            RHYME is a music app for people who do more than press play. Stream
            songs from artists you love, then step into limited live sessions
            where artists, DJs, producers, teachers, and talented music lovers
            teach, create, and connect with their followers.
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
        <div className="pulse-board pulse-home-board" aria-label="RHYME app preview">
          <article className="pulse-logo-stage" aria-label="Animated RHYME logo aura">
            <div className="pulse-aura-ring pulse-aura-ring-one" aria-hidden="true" />
            <div className="pulse-aura-ring pulse-aura-ring-two" aria-hidden="true" />
            <div className="pulse-aura-ring pulse-aura-ring-three" aria-hidden="true" />
            <img src="/media/rhyme-prism-clef.png" alt="RHYME prism logo" />
            <span>Live soon</span>
            <h2>Beat session opens to 24 fans</h2>
          </article>
          <article>
            <span>App model</span>
            <strong>3-in-1</strong>
            <p>Streaming, learning sessions, and closer fan connection in one place.</p>
          </article>
          <article>
            <span>Creator access</span>
            <p>Verified accounts can host premium rooms with a small join fee.</p>
          </article>
          <article>
            <span>Fan experience</span>
            <p>Follow artists, stream music, learn skills, and join selected live calls.</p>
          </article>
        </div>
      </section>

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
