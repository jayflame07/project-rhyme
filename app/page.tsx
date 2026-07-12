"use client";

export default function Home() {
  return (
    <main className="site variation-2">
      <div className="film" aria-hidden="true" />
      <div className="ambient" aria-hidden="true">
        <video className="visual visual-a" src="/media/rhyme-3.mp4" autoPlay muted loop playsInline />
        <video className="visual visual-b" src="/media/rhyme-4.mp4" autoPlay muted loop playsInline />
        <video className="visual visual-prism" src="/media/rhyme-2.mp4" autoPlay muted loop playsInline />
      </div>
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Rhyme home">RHYME<span>®</span></a>
        <div className="nav-links"><a href="#sessions">Sessions</a><a href="#artists">Artists</a><a href="#join">Join</a></div>
        <button className="menu" aria-label="Open menu"><i /><i /></button>
      </nav>
      <section className="hero" id="top">
        <div className="eyebrow"><span /> An intimate music community</div>
        <div className="hero-grid">
          <div className="headline-wrap">
            <h1>Closer to<br /><em>the music.</em></h1>
            <p className="intro">Learn from the artists shaping culture. Enter private live sessions. Support the work you love.</p>
            <a className="cta" href="#join"><span>Enter RHYME</span><b>↗</b></a>
          </div>
          <div className="mark-stage" aria-label="RHYME treble clef trademark">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="clef">𝄞</div><span className="trade">RHYME TRADEMARK · 2026</span>
          </div>
        </div>
        <div className="hero-foot"><span>REYKJAVÍK — WORLDWIDE</span><span>SCROLL TO LISTEN ↓</span><span>EST. MMXXVI</span></div>
      </section>
      <section className="sessions" id="sessions">
        <p className="section-kicker">Selected live sessions</p>
        <div className="session-row">
          <article><span>01</span><h2>The room<br />between notes</h2><p>Live · Reykjavík</p></article>
          <article><span>02</span><h2>Inside<br />the chorus</h2><p>Masterclass · London</p></article>
          <article><span>03</span><h2>After dark<br />with Ada</h2><p>Listening room · Paris</p></article>
        </div>
      </section>
      <section className="manifesto" id="artists"><p>For the ones who don’t just play music.</p><h2>They <em>live</em> inside it.</h2></section>
      <section className="artist-economy">
        <div className="economy-copy">
          <p className="section-kicker">Artist-first, by design</p>
          <h2>Every seat<br />supports the stage.</h2>
        </div>
        <div className="economy-note">
          <strong>Artists earn from every room they open.</strong>
          <p>Sessions, workshops, and limited releases connect artists directly with the listeners who care most—without flattening the work into content.</p>
          <span>DIRECT SUPPORT · CLEAR VALUE · DEEPER CONNECTION</span>
        </div>
      </section>
      <section className="how-it-works">
        <p className="section-kicker">How RHYME works</p>
        <div className="steps">
          <article><b>01</b><h3>Find your frequency</h3><p>Follow the artists, genres, and creative practices that move you.</p></article>
          <article><b>02</b><h3>Enter the room</h3><p>Join intimate live sessions, studio visits, and honest conversations.</p></article>
          <article><b>03</b><h3>Move it forward</h3><p>Learn, contribute, and directly support the people making the music.</p></article>
        </div>
      </section>
      <section className="join" id="join">
        <span>Membership opens soon</span><h2>Your front row<br />starts here.</h2>
        <form onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="YOUR EMAIL ADDRESS" required /><button type="submit">Request access ↗</button></form>
        <small>Free to join. Always artist-first.</small>
      </section>
    </main>
  );
}
