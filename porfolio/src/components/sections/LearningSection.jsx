import { Fragment } from 'react';
import { journey } from '../../data/content';

export function LearningSection() {
  return (
    <section id="learning">
      <div className="container">
        <div className="section-label">04 — Journey</div>
        <h2 className="section-title reveal">
          Where I've been.
          <br />
          Where I'm going.
        </h2>

        <div className="learning-track">
          <div className="track-line">
            {journey.map((_, index) => (
              <Fragment key={`dot-${index}`}>
                <div className={`track-dot ${index >= 3 ? 'dim' : ''}`.trim()} />
                {index < journey.length - 1 ? <div className="track-connector" /> : null}
              </Fragment>
            ))}
          </div>

          <div>
            {journey.map((item, index) => (
              <div className="track-item reveal" key={item.title}>
                <div className={`track-label ${index >= 3 ? 'dim' : ''}`.trim()}>{item.label}</div>
                <div className="track-title">{item.title}</div>
                <div className="track-desc">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
