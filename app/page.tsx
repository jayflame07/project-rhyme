import Link from "next/link";
import { RhymeScrollEffects } from "./RhymeScrollEffects";

const rooms = [
  { number: "01", name: "The Listening Room", line: "Hear the record\nbefore the noise.", detail: "Deep listening, new releases, and the stories inside the sound.", video: "/media/rhyme-1.mp4" },
  { number: "02", name: "The Process Room", line: "Watch the work\nbecome the work.", detail: "Small, live sessions with the artists, DJs, and producers making it happen.", video: "/media/rhyme-2.mp4" },
  { number: "03", name: "The People Room", line: "Less audience.\nMore presence.", detail: "A community built around curiosity, conversation, and real music culture.", video: "/media/rhyme-3.mp4" },
];

export default function Home() {
  return (
    <main className="rhyme-atmosphere">
      <RhymeScrollEffects />
      <div className="rhyme-noise" aria-hidden="true" />

      <header className="rhyme-nav">
        <Link className="rhyme-logo" href="#top"><img src="/media/rhyme-prism-clef.png" alt="" />RHYME</Link>
        <p>Music, nearer.</p>
        <Link className="rhyme-nav-link" href="/reserve">Reserve your name <span>+</span></Link>
      </header>

      <section className="rhyme-hero" id="top">
        <div className="rhyme-hero-meta" aria-hidden="true"><span>001</span><span>PRE-LAUNCH / 2026</span></div>
        <div className="rhyme-orb rhyme-orb-one"><video src="/media/rhyme-1.mp4" autoPlay muted loop playsInline /></div>
        <div className="rhyme-orb rhyme-orb-two"><video src="/media/rhyme-4.mp4" autoPlay muted loop playsInline /></div>
        <div className="rhyme-logo-stage"><img src="/media/rhyme-prism-clef.png" alt="RHYME prism clef" /></div>
        <div className="rhyme-hero-copy" data-reveal>
          <p>Stream / Learn / Belong</p>
          <h1>Closer<br />to the<br /><em>music.</em></h1>
        </div>
        <div className="rhyme-hero-bottom"><span>Scroll to enter</span><span>RHYME is a new place for music culture.</span></div>
      </section>

      <section className="rhyme-thesis" data-reveal>
        <p className="rhyme-eyebrow">( The point )</p>
        <h2>Music is not a feed.<br />It is a <em>place</em> to stay.</h2>
        <div><p>RHYME brings listening, learning, and community into one living experience. It is built for the moment after you press play: the questions, the details, and the people who care enough to remain.</p><Link href="/reserve">Enter RHYME <span>↗</span></Link></div>
      </section>

      <section className="rhyme-rooms" aria-label="RHYME rooms">
        <div className="rhyme-rooms-sticky">
          <p className="rhyme-rooms-count">( 03 )</p>
          {rooms.map((room, index) => (
            <article className={`rhyme-room rhyme-room-${index + 1}`} key={room.number}>
              <div className="rhyme-room-media"><video src={room.video} autoPlay muted loop playsInline /></div>
              <div className="rhyme-room-label"><span>{room.number}</span><span>{room.name}</span></div>
              <h3>{room.line.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
              <p>{room.detail}</p>
            </article>
          ))}
          <p className="rhyme-rooms-scroll">Keep moving <b>↓</b></p>
        </div>
      </section>

      <section className="rhyme-session-statement" data-reveal>
        <div className="rhyme-session-video"><video src="/media/rhyme-4.mp4" autoPlay muted loop playsInline /></div>
        <div className="rhyme-session-copy"><p className="rhyme-eyebrow">( The sessions )</p><h2>Closer than<br />a <em>livestream.</em></h2><p>Verified artists, DJs, producers, and music teachers host small live rooms for the people who want to see the creative process in real time.</p><Link href="/reserve?type=creator">I make music <span>↗</span></Link></div>
      </section>

      <section className="rhyme-marquee" aria-label="RHYME values"><div><span>LISTEN DEEPER</span><i>✦</i><span>LEARN CLOSER</span><i>✦</i><span>SHOW UP</span><i>✦</i><span>LISTEN DEEPER</span><i>✦</i></div></section>

      <section className="rhyme-creator" data-reveal>
        <p className="rhyme-eyebrow">( For the people making it )</p>
        <h2>Make the work.<br />Find your <em>people.</em></h2>
        <div className="rhyme-creator-grid"><p>RHYME gives creators two ways to grow: direct income from the rooms they open, and additional payments from the music and community they build.</p><ul><li><span>01</span>Artists</li><li><span>02</span>DJs</li><li><span>03</span>Producers</li><li><span>04</span>Music teachers</li></ul></div>
      </section>

      <section className="rhyme-final" data-reveal>
        <video className="rhyme-final-video" src="/media/rhyme-2.mp4" autoPlay muted loop playsInline />
        <div><p>Private pre-launch / 2026</p><h2>Start<br />with your<br /><em>name.</em></h2><Link href="/reserve">Reserve your username <span>↗</span></Link><small>No membership price has been announced. Reservations activate once RHYME&apos;s launch systems are connected.</small></div>
      </section>

      <footer className="rhyme-footer"><span>RHYME</span><span>Stream. Learn. Belong.</span><span>© 2026</span></footer>
    </main>
  );
}
