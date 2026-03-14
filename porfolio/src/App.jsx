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
}

export default App;
