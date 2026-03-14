import { aboutStats } from '../../data/content';

export function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-label">01 — About</div>
        <div className="about-grid">
          <div className="about-text reveal">
            <h2 className="section-title">
              Curious by nature.
              <br />
              Builder by practice.
            </h2>
            <p>
              I'm a fresher Python developer currently in my 3rd semester of BS Computing & Business at{' '}
              <strong>Mohammed Ali Jinnah University (MAJU)</strong>, expected to graduate in Fall 2028.
            </p>
            <p>
              What sets me apart is how I learn: I don't read documentation passively — I{' '}
              <strong>build projects until concepts click.</strong> Every skill I list here was earned through
              code I actually wrote and problems I actually solved.
            </p>
            <p>
              I ask the right questions. I trace problems to their root. And I'm not afraid to say "I don't
              know yet" — because that just means I haven't built it yet. Currently on a focused path toward{' '}
              <strong>AI engineering and agentic AI systems.</strong>
            </p>
          </div>

          <div className="about-stats reveal">
            {aboutStats.map((item) => (
              <div className="stat-card" key={item.label}>
                <div className="stat-number">{item.number}</div>
                <div className="stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
