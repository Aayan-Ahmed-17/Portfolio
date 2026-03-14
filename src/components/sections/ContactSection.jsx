import { contactLinks } from '../../data/content';

export function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-label">05 — Contact</div>
        <div className="contact-grid">
          <div className="contact-text reveal">
            <div className="big">
              Let's build
              <br />
              something <span className="accent">real.</span>
            </div>
            <p>
              I'm actively looking for junior Python developer roles. If you're building something
              interesting and need someone who learns fast, thinks deeply, and ships code — let's talk.
            </p>
            <a href="mailto:your@email.com" className="btn-primary">
              Send me an email
            </a>
          </div>

          <div className="contact-links reveal">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="contact-link"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <div>
                  <div className="contact-link-label">{link.label}</div>
                  <div className="contact-link-value">{link.value}</div>
                </div>
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}