import { projects } from '../../data/content';

export function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">03 — Projects</div>
        <h2 className="section-title reveal">Built, not just learned.</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.number}>
              <div>
                <div className="project-number">{project.number}</div>
                <div className="project-name">{project.name}</div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className={`tag ${tag.highlight ? 'highlight' : ''}`.trim()} key={`${project.number}-${tag.label}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-live-link"
                  aria-label={`View live project for ${project.name} (opens in a new tab)`}
                >
                  View Live Project <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="project-arrow">↗</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}