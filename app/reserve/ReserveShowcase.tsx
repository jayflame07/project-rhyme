"use client";

import Link from "next/link";
import { useState } from "react";
import { ReserveForm } from "./ReserveForm";

type JoinIntent = "fan" | "creator";

const reserveVariations = [
  {
    id: "prism",
    label: "Prism Claim",
    kicker: "Pre-launch identity",
    title: "Claim the name",
    accent: "your fans remember.",
    copy: "A cinematic username claim page with RHYME's prism glow, built for the first people who want their name locked before launch.",
    proof: ["Fan-ready handle", "Email confirmation", "Creator access"],
    image: "/media/rhyme-bento-live-alert.png",
  },
  {
    id: "backstage",
    label: "Backstage Pass",
    kicker: "Private access",
    title: "Step behind",
    accent: "the music.",
    copy: "A darker backstage direction for fans and creators who want early access before RHYME opens the main stage.",
    proof: ["Invite energy", "Premium rooms", "Early identity"],
    image: "/media/rhyme-session-learn.png",
  },
  {
    id: "signal",
    label: "Live Signal",
    kicker: "Live connection",
    title: "Own the name",
    accent: "they see live.",
    copy: "A notification-led direction that makes the username feel connected to live alerts, rooms, and fan recognition.",
    proof: ["Live alerts", "Room access", "Verified profiles"],
    image: "/media/rhyme-bento-connect-now.png",
  },
  {
    id: "lesson",
    label: "Lesson Drop",
    kicker: "Creator learning",
    title: "Reserve your",
    accent: "music identity.",
    copy: "A warmer creator-school direction for guitar lessons, producer sessions, and the people who want to teach music on RHYME.",
    proof: ["Lessons", "Sessions", "Followers"],
    image: "/media/rhyme-bento-upcoming-lesson.png",
  },
  {
    id: "mono",
    label: "Black Label",
    kicker: "Reserved list",
    title: "Make the name",
    accent: "official.",
    copy: "A clean black-label page with minimal distraction, more luxury spacing, and the reservation form treated like a private card.",
    proof: ["Simple", "Premium", "Direct"],
    image: "/media/rhyme-prism-clef.png",
  },
];

export function ReserveShowcase({ initialIntent }: { initialIntent: JoinIntent }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = reserveVariations[activeIndex];

  return (
    <main className={`reserve-variant-page reserve-${active.id}`}>
      <div className="reserve-variant-noise" aria-hidden="true" />
      <nav className="reserve-variant-nav" aria-label="RHYME reserve">
        <Link className="reserve-variant-wordmark" href="/">
          <img src="/media/rhyme-prism-clef.png" alt="" />
          RHYME
        </Link>
        <span>{active.label}</span>
        <Link className="reserve-variant-back" href="/">
          Back to platform
        </Link>
      </nav>

      <section className="reserve-variant-layout">
        <div className="reserve-variant-copy">
          <p className="reserve-variant-kicker">{active.kicker}</p>
          <h1>
            {active.title}
            <em>{active.accent}</em>
          </h1>
          <p>{active.copy}</p>
          <div className="reserve-variant-proof">
            {active.proof.map((item, index) => (
              <article key={item}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>{item}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="reserve-variant-media" aria-label={`${active.label} preview`}>
          <img src={active.image} alt="" />
          <div>
            <span>RHYME preview</span>
            <strong>@yourname</strong>
            <p>Reserved before public launch</p>
          </div>
        </aside>

        <div className="reserve-variant-panel">
          <span className="panel-label">USERNAME RESERVATION</span>
          <ReserveForm initialIntent={initialIntent} />
        </div>
      </section>

      <div className="reserve-variant-switcher" aria-label="Reserve page variations">
        {reserveVariations.map((variation, index) => (
          <button
            className={index === activeIndex ? "active" : ""}
            type="button"
            key={variation.id}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {variation.label}
          </button>
        ))}
      </div>
    </main>
  );
}
