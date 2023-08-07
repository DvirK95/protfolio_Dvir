import { useState, useEffect } from 'react';

function useNavigation() {
  const [activeLink, setActiveLink] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'about', 'resume', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) {
          console.warn(`Element with ID '${section}' not found.`);
          return false;
        }
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      });
      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activeLink };
}

export default useNavigation;
