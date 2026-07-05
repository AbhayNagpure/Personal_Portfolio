import { Server, Layout, Wrench, Brain } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const allIcons = [
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', style: 'border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.3)]' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', style: 'border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.3)]' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', style: 'border-green-400/30 shadow-[0_0_20px_rgba(74,222,128,0.3)]' },
  { name: 'Express', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', style: 'border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.3)]', invert: true },
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', style: 'border-yellow-400/30 shadow-[0_0_20px_rgba(250,204,21,0.3)]' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', style: 'border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]' },
  { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', style: 'border-blue-600/30 shadow-[0_0_20px_rgba(37,99,235,0.3)]' },
  { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', style: 'border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.3)]' },
  { name: 'Tailwind', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', style: 'border-cyan-400/30 shadow-[0_0_20px_rgba(56,189,248,0.3)]' },
  { name: 'Vite', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg', style: 'border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.3)]' },
  { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', style: 'border-orange-600/30 shadow-[0_0_20px_rgba(234,88,12,0.3)]' },
  { name: 'VS Code', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', style: 'border-blue-400/30 shadow-[0_0_20px_rgba(96,165,250,0.3)]' },
  { name: 'Figma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', style: 'border-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.3)]' },
  { name: 'Postman', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', style: 'border-orange-400/30 shadow-[0_0_20px_rgba(251,146,60,0.3)]' },
];

const skillProgress = [
  { name: 'Frontend', percent: 70, icon: Layout },
  { name: 'Backend', percent: 87, icon: Server },
  { name: 'System Design', percent: 30, icon: Wrench },
  { name: 'AI/ML', percent: 15, icon: Brain },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Drop and bounce in ONLY when scrolled into view
    gsap.fromTo('.bouncing-icon', 
      { y: -300, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 2, 
        ease: "bounce.out", 
        stagger: {
          each: 0.1,
          from: "random"
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Triggers when top of container hits 80% down the viewport
          toggleActions: "play none none none"
        },
        onComplete: () => {
          // Continuous floating animation after drop
          gsap.to('.bouncing-icon', {
            y: -15,
            duration: 1.5,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            stagger: {
              each: 0.2,
              from: "random"
            }
          });
        }
      }
    );

    // Progress bar fill animation
    gsap.from('.progress-fill-anim', {
      width: '0%',
      duration: 1.5,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });
  }, { scope: containerRef });

  return (
    <main className="w-full p-8 pt-24 md:p-16 relative flex flex-col items-center justify-center">

      {/* Constrained container for perfect center alignment */}
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 relative z-10">
        
        {/* Left side: Skills Progress */}
        <div className="flex-1 w-full flex flex-col justify-center text-left z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
            My <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Skills</span>
          </h1>
          
          <p className="text-slate-300/80 mb-10 text-sm md:text-base leading-relaxed max-w-lg font-light">
            I'm an intermediate web developer focused on building modern, highly scalable applications. I specialize in crafting robust backend architectures while delivering seamless frontend user experiences, and I'm actively expanding my toolkit into system design and AI integrations.
          </p>

          <div className="w-full space-y-6">
            {skillProgress.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="w-full group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#0a1120] border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                        <Icon size={18} className="text-cyan-400" />
                      </div>
                      <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                    </div>
                    <span className="text-sm font-bold text-cyan-400">{skill.percent}%</span>
                  </div>
                  <div className="w-full bg-[#0a1120] rounded-full h-2 overflow-hidden border border-white/5 relative shadow-inner">
                    <div 
                      className="progress-fill-anim bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side: Crazy Systematic Icons */}
        <div ref={containerRef} className="flex-1 flex justify-center items-center relative w-full mt-24 lg:mt-0">
          {/* Subtle glow behind icons */}
          <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full scale-110 pointer-events-none"></div>
          
          <div className="w-full max-w-lg relative z-10 p-4">
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pb-12">
              {allIcons.map((icon, i) => (
                <div 
                  key={i} 
                  className={`bouncing-icon flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#0a1120] border ${icon.style} rounded-2xl flex items-center justify-center hover:scale-125 hover:z-50 transition-transform duration-300 cursor-pointer group`}
                  style={{
                    transform: `translateY(${i % 2 === 0 ? '0px' : '30px'})` // Staggered layout
                  }}
                >
                  <img src={icon.url} className={`w-10 h-10 sm:w-12 sm:h-12 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all ${icon.invert ? 'invert' : ''}`} alt={icon.name} title={icon.name} />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
