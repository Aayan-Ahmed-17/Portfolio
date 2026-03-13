<<<<<<< HEAD
import { useEffect } from 'react';
import './App.css';
import { markup } from './markup';

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    reveals.forEach((el) => observer.observe(el));

    document.querySelectorAll('.skills-grid, .projects-grid, .about-stats').forEach((grid) => {
      grid.querySelectorAll('.reveal').forEach((card, i) => {
        card.style.transitionDelay = `${i * 60}ms`;
      });
    });

    return () => observer.disconnect();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
=======
import './App.css';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { HeroSection } from './components/sections/HeroSection';
import { LearningSection } from './components/sections/LearningSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { Divider } from './components/layout/Divider';
import { Footer } from './components/layout/Footer';
import { NavBar } from './components/layout/NavBar';
import { useRevealAnimation } from './hooks/useRevealAnimation';

function App() {
  useRevealAnimation();

  return (
    <>
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <NavBar />
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <LearningSection />
      <Divider />
      <ContactSection />
      <Footer />
    </>
  );
>>>>>>> uzlgpw-codex/update-tech-stack-to-react-or-next
}

export default App;
