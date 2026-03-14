export function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="status-badge">
          <div className="status-dot" />
          Open to Junior Python Roles
        </div>

        <div className="hero-eyebrow">Available for hire · Karachi, Pakistan</div>

        <h1 className="hero-name">
          Soft<span className="accent">Ware</span>
          <br />
          <span className="dim">Developer.</span>
        </h1>

        <p className="hero-title">
          Junior Python Developer &nbsp;·&nbsp;
          <span>BS Computing & Business @ MAJU</span>
        </p>

        <p className="hero-desc">
          I don't just learn syntax — I learn by <strong>building real things.</strong> From REST APIs to web
          scrapers, I approach every concept with deep curiosity and practical execution. Currently diving
          into <strong>AI agents & agentic workflows.</strong>
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}