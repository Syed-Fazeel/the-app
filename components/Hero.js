
export default function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/videos/hero.mp4" type="video/mp4" />
        {/* Fallback poster/image */}
      </video>

      <div className="hero-overlay"  />

      <div className="container hero-inner grid">
        <div className="hero-copy">
          <h1>
            We are a <span className="hero-accent">Software Development</span> Company
          </h1>
          <p className="lead">We are your trusted development partner with just one goal in focus to build products that generate a lasting, profitable impact.</p>
          <div className="cta-row">
            {/* <a className="btn primary" href="#contact">Let's Discuss Your Idea</a> */}
          </div>
        </div>
      </div>

    </section>
  )
}
