import { Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');

  // Simple intersection observer logic to highlight active section in sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const getLinkClass = (id: string) => {
    return `p-3 rounded-full transition-all duration-300 ${
      activeSection === id 
        ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
        : 'text-slate-400 hover:text-white hover:bg-white/5'
    }`;
  };

  return (
    <nav className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 bg-[#0b1121]/90 backdrop-blur-md border border-cyan-500/30 rounded-full px-3 py-6 flex flex-col gap-6 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-500 z-50">
      <a href="#hero" className={getLinkClass('hero')} title="Home">
        <Home size={20} />
      </a>
      <a href="#skills" className={getLinkClass('skills')} title="Skills">
        <Briefcase size={20} />
      </a>
      <a href="#projects" className={getLinkClass('projects')} title="Projects">
        <FolderOpen size={20} />
      </a>
      <a href="#about" className={getLinkClass('about')} title="About Me">
        <User size={20} />
      </a>
      <a href="#contact" className={getLinkClass('contact')} title="Contact">
        <Mail size={20} />
      </a>
    </nav>
  );
}
