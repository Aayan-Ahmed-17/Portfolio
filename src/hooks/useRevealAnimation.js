import { useEffect } from 'react';

export function useRevealAnimation() {
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
}
