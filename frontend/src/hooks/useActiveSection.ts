import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[], rootMargin = '-30% 0px -50% 0px'): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'hero');

  useEffect(() => {
    const handleScroll = () => {
      // If at the very top of page
      if (window.scrollY < 100) {
        setActiveSection('hero');
        return;
      }

      // If at the very bottom of page, highlight contact
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
        setActiveSection('contact');
        return;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin,
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
}
