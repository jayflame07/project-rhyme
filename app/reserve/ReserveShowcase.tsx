import Link from "next/link";
import Image from "next/image";
import { ReserveForm } from "./ReserveForm";

type JoinIntent = "fan" | "creator";

const reserveBuild = {
  id: "lesson",
  label: "Lesson Drop",
  kicker: "Creator learning",
  title: "Reserve your",
  accent: "music identity.",
  copy: "A warmer creator-school direction for guitar lessons, producer sessions, and the people who want to teach music on RHYME.",
  proof: ["Lessons", "Sessions", "Followers"],
  image: "/media/rhyme-prism-clef-transparent.png",
};

export function ReserveShowcase({ initialIntent }: { initialIntent: JoinIntent }) {
  const active = reserveBuild;

  return (
    <main className={`reserve-variant-page reserve-${active.id}`}>
      <div className="reserve-variant-noise" aria-hidden="true" />
      <nav className="reserve-variant-nav" aria-label="RHYME reserve">
        <Link className="reserve-variant-wordmark" href="/">
          <Image src="/media/rhyme-prism-clef.png" alt="" width={36} height={36} />
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
          <Image src={active.image} alt="" fill sizes="(min-width: 1181px) 18vw, 100vw" priority />
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
    </main>
  );
}
