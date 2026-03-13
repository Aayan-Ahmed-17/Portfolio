import { skills } from '../../data/content';

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">02 — Skills</div>
        <h2 className="section-title reveal">
          What I bring
          <br />
          to the table.
        </h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card reveal" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-desc">{skill.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
