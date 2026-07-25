import type { Metadata } from "next";
import Link from "next/link";
import { ReserveForm } from "./ReserveForm";

export const metadata: Metadata = {
  title: "Reserve your RHYME username",
  description: "Choose the username you want to use in the RHYME music community before public launch.",
};

export default async function ReservePage({ searchParams }: { searchParams?: Promise<{ type?: string }> }) {
  const params = await searchParams;
  const initialIntent = params?.type === "creator" ? "creator" : "fan";

  return (
    <main className="site reserve-site">
      <div className="film" aria-hidden="true" />
      <div className="reserve-aura" aria-hidden="true"><span className="reserve-clef">{"\uD834\uDD1E"}</span></div>
      <nav className="nav reserve-nav"><Link className="wordmark" href="/">RHYME</Link><Link className="back-link" href="/">{"\u2190"} Back to the platform</Link></nav>
      <section className="reserve-layout">
        <div className="reserve-copy">
          <p className="section-kicker">Pre-launch identity</p>
          <h1>Claim the name<br /><em>you will be known by.</em></h1>
          <p>Your RHYME username is how fans, artists, teachers, DJs, and producers will find you across the community. Choose it now and confirm it through your email.</p>
          <div className="reserve-steps"><article><b>01</b><span><strong>Choose your name</strong>Pick a unique community username.</span></article><article><b>02</b><span><strong>Confirm your email</strong>Open the secure link we send you.</span></article><article><b>03</b><span><strong>Keep it for launch</strong>Your confirmed name is held for your RHYME account.</span></article></div>
        </div>
        <div className="reserve-panel"><span className="panel-label">USERNAME RESERVATION</span><ReserveForm initialIntent={initialIntent} /></div>
      </section>
    </main>
  );
}
