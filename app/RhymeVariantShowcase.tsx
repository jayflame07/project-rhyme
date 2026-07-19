"use client";

import Link from "next/link";
import { useState } from "react";
import { RhymeScrollEffects } from "./RhymeScrollEffects";

type VariantId = "studio" | "pulse" | "circle";

const variants: Array<{ id: VariantId; label: string; source: string }> = [
  {
    id: "studio",
    label: "Studio Rooms",
    source: "21st: Music Portfolio + Neon Onyx + Magic Portfolio",
  },
  {
    id: "pulse",
    label: "Pulse Grid",
    source: "21st: NeonFlow UI + Neon Magenta + Vertex",
  },
  {
    id: "circle",
    label: "Clover Circle",
    source: "21st: Portfolio Gallery + Neon Clover + Folio",
  },
];

const rooms = [
  {
    title: "Listening Room",
    detail: "Album-first listening with artist notes, guest context, and the story behind the sound.",
    video: "/media/rhyme-1.mp4",
  },
  {
    title: "Process Room",
    detail: "Exclusive live sessions where verified artists, DJs, producers, and teachers open the work.",
    video: "/media/rhyme-2.mp4",
  },
  {
    title: "People Room",
    detail: "Small circles built around questions, taste, practice, and the listeners who keep showing up.",
    video: "/media/rhyme-3.mp4",
  },
];

const metrics = [
  ["03", "core rooms"],
  ["1:1", "artist presence"],
  ["2026", "private launch"],
];

export function RhymeVariantShowcase() {
  const [active, setActive] = useState<VariantId>("studio");
  const current = variants.find((variant) => variant.id === active) ?? variants[0];

  return (
    <main className={`upgrade-page upgrade-${active}`}>
      <RhymeScrollEffects />
      <div className="upgrade-grain" aria-hidden="true" />
      <nav className="upgrade-nav" aria-label="RHYME">
        <Link className="upgrade-wordmark" href="/">
          <img src="/media/rhyme-prism-clef.png" alt="" />
          RHYME
        </Link>
        <span>{"Stream \u00b7 Learn \u00b7 Connect"}</span>
        <Link className="upgrade-nav-action" href="/reserve">
          Reserve your username
        </Link>
      </nav>
      <div className="upgrade-switcher" aria-label="Choose RHYME page variation">
        {variants.map((variant, index) => (
          <button
            aria-pressed={variant.id === active}
            className={variant.id === active ? "is-active" : ""}
            key={variant.id}
            onClick={() => setActive(variant.id)}
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {variant.label}
          </button>
        ))}
      </div>
      <p className="upgrade-source">{current.source}</p>
      {active === "studio" && <StudioVariant />}
      {active === "pulse" && <PulseVariant />}
      {active === "circle" && <CircleVariant />}
    </main>
  );
}

function StudioVariant() {
  return (
    <>
      <section className="studio-hero" id="top">
        <div className="studio-copy" data-reveal>
          <p className="upgrade-kicker">Private pre-launch / Music, nearer</p>
          <h1>
            More than
            <span> streaming.</span>
          </h1>
          <p>
            RHYME is a place to stay close to the music: the track, the process,
            the room, and the people who care enough to listen past the first play.
          </p>
          <div className="upgrade-actions">
            <Link className="upgrade-primary" href="/reserve">
              Reserve your username <b>+</b>
            </Link>
            <Link className="upgrade-secondary" href="/reserve?type=creator">
              I make music
            </Link>
          </div>
        </div>
        <div className="studio-stage" aria-label="RHYME music rooms">
          <video src="/media/rhyme-4.mp4" autoPlay muted loop playsInline />
          <img src="/media/rhyme-prism-clef.png" alt="" />
          <div>
            <span>LIVE</span>
            <strong>Exclusive live sessions</strong>
          </div>
        </div>
        <div className="studio-metrics">
          {metrics.map(([value, label]) => (
            <span key={label}>
              <b>{value}</b>
              {label}
            </span>
          ))}
        </div>
      </section>
      <section className="studio-rooms" data-reveal>
        {rooms.map((room, index) => (
          <article key={room.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <video src={room.video} autoPlay muted loop playsInline />
            <h2>{room.title}</h2>
            <p>{room.detail}</p>
          </article>
        ))}
      </section>
      <section className="studio-earn" data-reveal>
        <p className="upgrade-kicker">Two ways to earn</p>
        <h2>Open the room. Keep the relationship.</h2>
        <p>
          Creators can earn from hosted sessions and from the community around the
          music they make, teach, test, and release.
        </p>
        <small>No price has been announced yet. Username reservations activate when launch systems are connected.</small>
      </section>
    </>
  );
}

function PulseVariant() {
  return (
    <>
      <section className="pulse-hero">
        <div className="pulse-copy" data-reveal>
          <p className="upgrade-kicker">RHYME signal desk</p>
          <h1>
            The night moves through the room.
          </h1>
          <p>
            A modular landing direction for RHYME: vivid, fast, and built around
            sessions that feel alive before the user even signs up.
          </p>
          <Link className="upgrade-primary" href="/reserve">
            Reserve your username <b>+</b>
          </Link>
        </div>
        <div className="pulse-board" aria-label="RHYME session dashboard">
          <article className="pulse-now">
            <video src="/media/rhyme-1.mp4" autoPlay muted loop playsInline />
            <span>Tonight</span>
            <h2>Producer room opens in 14 min</h2>
          </article>
          <article>
            <span>Signal</span>
            <strong>84%</strong>
            <p>Listener presence across small rooms.</p>
          </article>
          <article>
            <span>Drop notes</span>
            <p>Ask the artist what changed between demo three and the final mix.</p>
          </article>
          <article>
            <span>Creator lane</span>
            <p>Artists, DJs, producers, and teachers can host, teach, and earn.</p>
          </article>
        </div>
      </section>
      <section className="pulse-grid" data-reveal>
        {["Stream deeper", "Learn in public", "Connect in small rooms", "Build your name"].map((item, index) => (
          <article key={item}>
            <span>0{index + 1}</span>
            <h2>{item}</h2>
            <p>{index === 3 ? "Reserve the username people will use to find you at launch." : "Each path brings the artist, listener, and process closer together."}</p>
          </article>
        ))}
      </section>
      <section className="pulse-closing" data-reveal>
        <video src="/media/rhyme-2.mp4" autoPlay muted loop playsInline />
        <div>
          <p className="upgrade-kicker">Two ways to earn</p>
          <h2>Session income. Community gravity.</h2>
          <Link className="upgrade-secondary" href="/reserve?type=creator">
            Start as a creator
          </Link>
        </div>
      </section>
    </>
  );
}

function CircleVariant() {
  return (
    <>
      <section className="circle-hero">
        <div className="circle-media" aria-hidden="true">
          {rooms.map((room) => (
            <video key={room.title} src={room.video} autoPlay muted loop playsInline />
          ))}
        </div>
        <div className="circle-copy" data-reveal>
          <p className="upgrade-kicker">A softer room for serious listeners</p>
          <h1>
            Come closer to what the song is made of.
          </h1>
          <p>
            RHYME gathers listening, learning, artist-led rooms, and identity into
            a calm community page that feels open without becoming ordinary.
          </p>
          <div className="upgrade-actions">
            <Link className="upgrade-primary" href="/reserve">
              Reserve your username <b>+</b>
            </Link>
            <Link className="upgrade-secondary" href="#circle-steps">
              See the path
            </Link>
          </div>
        </div>
      </section>
      <section className="circle-steps" id="circle-steps" data-reveal>
        {["Pick your room", "Meet the process", "Keep your name"].map((step, index) => (
          <article key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{step}</h2>
            <p>{index === 2 ? "Your RHYME username becomes the anchor for launch." : "Follow the music through sessions, notes, and community conversation."}</p>
          </article>
        ))}
      </section>
      <section className="circle-final" data-reveal>
        <img src="/media/rhyme-prism-clef.png" alt="RHYME prism clef" />
        <div>
          <p className="upgrade-kicker">Private pre-launch</p>
          <h2>Start with the name they will know.</h2>
          <Link className="upgrade-primary" href="/reserve">
            Reserve your username <b>+</b>
          </Link>
        </div>
      </section>
    </>
  );
}
