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
        <a className="wordmark" href="#top" aria-label="RHYME home">RHYME</a>
        <div className="nav-links"><a href="#platform">Platform</a><a href="#sessions">Live sessions</a><a href="#creators">For creators</a><a href="#membership">Membership</a></div>
        <a className="nav-cta" href="/reserve">Reserve your name</a>
        <details className="mobile-nav"><summary aria-label="Open navigation"><i /><i /></summary><div><a href="#platform">Platform</a><a href="#sessions">Live sessions</a><a href="#creators">For creators</a><a href="#membership">Membership</a><a href="/reserve">Reserve your name</a></div></details>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> Stream &middot; Learn &middot; Connect</div>
        <div className="hero-grid">
          <div className="headline-wrap">
            <h1>More than<br /><em>music.</em></h1>
            <p className="intro">RHYME brings music streaming, real music education, and a closer fan community into one membership. Listen to the work, learn from the people behind it, and step into intimate live rooms.</p>
            <div className="hero-actions"><a className="cta" href="/reserve"><span>Reserve your username</span><b>{"\u2197"}</b></a><a className="text-link" href="#platform">Discover RHYME <span>{"\u2193"}</span></a></div>
            <p className="access-note">Monthly membership includes streaming, learning content, and community access. Limited live sessions are optional and use creator-set entry prices.</p>
          </div>
          <div className="mark-stage" aria-label="RHYME treble clef mark"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="clef">{"\uD834\uDD1E"}</div><span className="trade">RHYME MARK &middot; EST. 2026</span></div>
        </div>
        <div className="hero-foot"><span>LISTEN &middot; LEARN &middot; CREATE &middot; BELONG</span><span>BUILT AROUND MUSIC</span><span>PRE-LAUNCH</span></div>
      </section>

      <section className="platform" id="platform">
        <div className="section-heading"><p className="section-kicker">One place for music</p><h2>Listen deeper.<br />Learn closer.<br /><em>Belong to it.</em></h2><p>RHYME connects every side of music in one experience.</p></div>
        <div className="pillar-grid">
          <article><span>01 / STREAM</span><h3>Music to live with</h3><p>Discover and stream music from the creators shaping the sound and culture around you.</p></article>
          <article><span>02 / LEARN</span><h3>Knowledge from the source</h3><p>Access learning content from artists, DJs, producers, and music teachers who know the craft firsthand.</p></article>
          <article><span>03 / CONNECT</span><h3>More than an audience</h3><p>Join a community built for shared listening, creative learning, and real interaction between fans and creators.</p></article>
        </div>
      </section>

      <section className="sessions" id="sessions">
        <div className="sessions-intro"><div><p className="section-kicker">Exclusive live sessions</p><h2>Closer than a livestream.<br /><em>More personal than a class.</em></h2></div><p>Verified creators host limited-capacity sessions for a small number of fans. Inside the room, they can see the people attending, speak with them, share their process, and teach in real time.</p></div>
        <div className="session-row">
          <article><span>ARTIST ROOM</span><h3>Inside<br />the song</h3><p>Writing, performance, and the story behind the record.</p><small>Limited seats &middot; Live conversation</small></article>
          <article><span>PRODUCER LAB</span><h3>Build<br />the sound</h3><p>Watch a track take shape and ask questions as it happens.</p><small>Creator-led &middot; Real-time learning</small></article>
          <article><span>DJ SESSION</span><h3>Read<br />the room</h3><p>Selection, transitions, energy, and the thinking behind a set.</p><small>Creator-set entry &middot; Direct access</small></article>
        </div>
        <div className="session-facts"><span>LIMITED CAPACITY</span><span>LIVE INTERACTION</span><span>CREATOR-LED LEARNING</span><span>CREATOR-SET ENTRY</span></div>
      </section>

      <section className="access" id="membership">
        <div className="section-heading compact"><p className="section-kicker">Simple access</p><h2>One membership.<br /><em>Live moments when you want them.</em></h2></div>
        <div className="access-grid">
          <article className="access-card membership-card"><span>MONTHLY</span><h3>RHYME membership</h3><p>Your subscription unlocks the core RHYME experience.</p><ul><li>Music streaming</li><li>Learning content</li><li>RHYME community access</li></ul><a href="/reserve">Reserve your username <b>{"\u2197"}</b></a></article>
          <article className="access-card session-card"><span>OPTIONAL</span><h3>Exclusive live sessions</h3><p>Choose the limited live experiences that matter to you and pay their clearly displayed creator-set entry price.</p><ul><li>Small live rooms</li><li>Direct creator interaction</li><li>Music education and creative insight</li></ul><a href="#sessions">Explore the format <b>{"\u2193"}</b></a></article>
        </div>
        <p className="pricing-clarity">No price has been announced yet. Membership and every optional session price will be shown clearly before payment.</p>
      </section>

      <section className="creator-economy" id="creators">
        <div className="economy-copy"><p className="section-kicker">Built for creators</p><h2>Two ways to earn.<br /><em>One place to grow.</em></h2><p>RHYME helps music creators earn beyond traditional streaming while building a closer relationship with the people who value their work.</p><a className="outline-link" href="/reserve?type=creator">Join the creator list {"\u2197"}</a></div>
        <div className="earning-paths"><article><b>01</b><span>DIRECT FROM FANS</span><h3>Earn from the rooms you open.</h3><p>Choose an affordable entry price for exclusive live sessions and earn through the fans who join.</p></article><article><b>02</b><span>THROUGH RHYME</span><h3>Earn as your work grows.</h3><p>Receive payments from RHYME based on your content, streams, engagement, and community growth.</p></article></div>
      </section>

      <section className="verified"><div><p className="section-kicker">Verified hosts</p><h2>Led by people who<br />make and teach music.</h2><p>Exclusive session hosting is for verified music creators and educators.</p></div><ul><li><span>01</span>Artists</li><li><span>02</span>DJs</li><li><span>03</span>Producers</li><li><span>04</span>Music teachers</li></ul></section>

      <section className="how-it-works">
        <div className="section-heading compact"><p className="section-kicker">How RHYME works</p><h2>One platform.<br /><em>Two journeys.</em></h2></div>
        <div className="journey-grid">
          <div className="journey"><span>FOR FANS</span><ol><li><b>01</b><div><h3>Join RHYME</h3><p>Subscribe for music, learning content, and the community.</p></div></li><li><b>02</b><div><h3>Listen and learn</h3><p>Stream music and explore educational content from creators.</p></div></li><li><b>03</b><div><h3>Enter the room</h3><p>Choose an optional live session and join at its creator-set price.</p></div></li></ol></div>
          <div className="journey"><span>FOR CREATORS</span><ol><li><b>01</b><div><h3>Get verified</h3><p>Join as an eligible artist, DJ, producer, or music teacher.</p></div></li><li><b>02</b><div><h3>Create and connect</h3><p>Share music, teach, grow a community, and host limited sessions.</p></div></li><li><b>03</b><div><h3>Earn in two ways</h3><p>Receive direct session income and RHYME creator payments.</p></div></li></ol></div>
        </div>
      </section>

      <section className="manifesto"><p>The RHYME community</p><h2>Where listening<br />becomes <em>belonging.</em></h2><span>More understanding. More human connection. More meaningful support for music.</span></section>

      <section className="faq" id="faq">
        <div><p className="section-kicker">The essentials</p><h2>Before you<br />step inside.</h2></div>
        <div className="faq-list">
          <details><summary>What does membership include?<b>+</b></summary><p>A monthly RHYME subscription gives you access to music streaming, learning content, and the RHYME community.</p></details>
          <details><summary>Do live sessions cost extra?<b>+</b></summary><p>Exclusive live sessions are optional and have a separate entry price chosen by the creator. You pay only for the sessions you decide to join.</p></details>
          <details><summary>What makes the sessions different?<b>+</b></summary><p>Rooms are intentionally small, allowing creators to see, speak with, and teach the people attending in real time.</p></details>
          <details><summary>Who can host?<b>+</b></summary><p>Verified artists, DJs, producers, and music teachers can host exclusive sessions on RHYME.</p></details>
          <details><summary>How do creators earn?<b>+</b></summary><p>Creators earn directly through fan payments for live sessions and through RHYME payments based on content, streams, engagement, and community growth.</p></details>
        </div>
      </section>

      <section className="join" id="join"><span>Pre-launch access</span><h2>Claim your name.<br />Join the first wave.</h2><p>Reserve the username you want to use across the RHYME community.</p><div className="join-actions"><a className="cta" href="/reserve"><span>Reserve your username</span><b>{"\u2197"}</b></a><a className="text-link" href="/reserve?type=creator">I am a creator <span>{"\u2197"}</span></a></div><small>RHYME is in private pre-launch. Reservations will be confirmed by email before public launch.</small></section>

      <footer><a className="wordmark" href="#top">RHYME</a><p>Stream. Learn. Connect.</p><div><a href="#platform">Platform</a><a href="#sessions">Live sessions</a><a href="#creators">For creators</a><a href="/reserve">Reserve username</a></div><small>&copy; 2026 RHYME. Music brings us closer.</small></footer>
    </main>
  );
}
