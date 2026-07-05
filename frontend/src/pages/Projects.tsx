import { useRef } from 'react';
import { ExternalLink, Code, Video, MessageSquare, Database } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const colors = {
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', button: 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border-emerald-500/30' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20', button: 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/30' },
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', button: 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/30' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20', button: 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border-purple-500/30' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', button: 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border-blue-500/30' }
};

type ColorKey = keyof typeof colors;

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  badge,
  icon: Icon,
  color,
  github,
  live,
  client,
  inProgress
}: { 
  title: string, 
  description: string, 
  tags: string[], 
  badge: string,
  icon: any,
  color: ColorKey,
  github: string,
  live: string,
  client?: string,
  inProgress?: boolean
}) => {
  const colorStyle = colors[color];

  return (
    <div 
      className="project-card-anim group relative bg-[#0a1120] rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col h-full
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0"
    >
      <div className="p-5 py-6 flex-1 flex flex-col relative z-20 justify-between h-full">
        
        <div>
          <div className="flex justify-between items-start mb-4">
            {/* Icon */}
            <div className={`w-10 h-10 rounded-xl ${colorStyle.bg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
              <Icon className={colorStyle.text} size={20} />
            </div>

            {/* Badge */}
            <span className={`${colorStyle.bg} ${colorStyle.border} ${colorStyle.text} border text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full h-fit`}>
              {badge}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 transition-colors flex items-center gap-2 flex-wrap">
            {title}
            {inProgress && (
              <span className={`text-[9px] px-2 py-0.5 rounded-full ${colorStyle.bg} border ${colorStyle.border} ${colorStyle.text} font-bold uppercase tracking-wider`}>
                In Progress
              </span>
            )}
          </h3>

          {client && (
            <p className="text-xs font-medium mb-2 italic" style={{ color: `var(--color-${color}-400)` }}>
              <span className="text-slate-400 not-italic">Delivered to &rarr;</span> <span className={colorStyle.text}>{client}</span>
            </p>
          )}
          
          <p className="text-slate-400/80 text-sm mb-5 leading-relaxed font-light line-clamp-2">
            {description}
          </p>
        </div>

        <div className="mt-auto">
          {/* Tags */}
          <div className="mb-3">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-1.5">Tech Stack Used</p>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, i) => (
                <span key={i} className="text-[11px] font-medium bg-white/5 text-slate-300 px-2.5 py-1 rounded-md border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Links / Buttons */}
          <div className="flex gap-2 w-full border-t border-white/5 pt-3">
            {github ? (
              <a href={github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-all duration-300 border border-white/5 hover:border-white/20">
                <Code size={14} />
                <span>Code</span>
              </a>
            ) : (
              <button disabled className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-white/5 text-slate-600 text-xs font-medium border border-white/5 cursor-not-allowed">
                <Code size={14} />
                <span>Private Code</span>
              </button>
            )}

            {live ? (
              <a href={live} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 border ${colorStyle.button}`}>
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            ) : (
              <button disabled className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-white/5 text-slate-600 text-xs font-medium border border-white/5 cursor-not-allowed">
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);

  const projects: {
    title: string;
    description: string;
    tags: string[];
    badge: string;
    icon: any;
    color: ColorKey;
    github: string;
    live: string;
    client?: string;
    inProgress?: boolean;
  }[] = [
    {
      title: "Crafter-Productions",
      description: "A premium, cinematic portfolio for high-end wedding videography. Features scroll-driven storytelling and GSAP animations.",
      tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GSAP"],
      badge: "CLIENT WORK",
      icon: Video,
      color: "amber",
      github: "",
      live: "https://crafterproductions.in",
      client: "Ritik Bakte"
    },
    {
      title: "ChatHive",
      description: "A scalable full-stack messaging platform with low-latency bi-directional communication using WebSockets and Socket.io.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Cloudinary", "Resend"],
      badge: "REAL-TIME",
      icon: MessageSquare,
      color: "emerald",
      github: "https://github.com/AbhayNagpure/ChatHive",
      live: "https://chatify-two-puce.vercel.app/"
    },
    {
      title: "MobileCareTech (MCT)",
      description: "A production-ready MERN application integrating a Gemini API AI assistant with Hindi/Hinglish voice input to automate customer assistance.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "JWT", "OAuth", "Gemini API"],
      badge: "FREELANCE",
      icon: Database,
      color: "blue",
      github: "https://github.com/AbhayNagpure/MobileCareTech",
      live: "https://mobilecaretech.in",
      client: "Freelance Client"
    },
    {
      title: "Product Store",
      description: "An inventory management system with full CRUD capabilities. Built with a robust backend for seamless product management.",
      tags: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      badge: "FULL STACK",
      icon: Database,
      color: "purple",
      github: "https://github.com/AbhayNagpure/product-store-app",
      live: "" 
    }
  ];

  useGSAP(() => {
    // Header animation
    gsap.fromTo('.projects-header-anim',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    // Project cards initial stagger animation
    gsap.fromTo('.project-card-anim', 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.5, 
        ease: 'power3.out', 
        clearProps: "all"
      }
    );
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="w-full p-6 pb-24 md:p-12 md:pb-28 lg:p-16 lg:pl-28 xl:pl-32 relative flex flex-col items-center justify-center min-h-[100dvh]">

      {/* Constrained container for perfect center alignment */}
      <div className="max-w-6xl w-full mx-auto flex flex-col relative z-10 min-h-[80vh]">
        
        {/* Header */}
        <div className="w-full text-left mb-10 projects-header-anim">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-2">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white drop-shadow-md">
                <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Projects</span>
              </h1>
              <p className="text-slate-300/80 text-sm md:text-base max-w-xl font-light">
                A collection of my recent projects
              </p>
            </div>
          </div>
        </div>
        
        {/* Grid container for projects in a neon tub */}
        <div className="w-full flex-1 relative pb-8 mt-4 p-4 md:p-6 lg:p-8 pt-0 md:pt-0">
          
          {/* Neon Tub Borders */}
          <div className="absolute inset-0 border-l-[3px] border-r-[3px] border-b-[3px] border-cyan-400/60 rounded-b-[2.5rem] pointer-events-none drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] z-0"></div>
          
          {/* Subtle tub inner ambient lighting */}
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-cyan-500/10 to-transparent blur-[40px] pointer-events-none rounded-b-[2.5rem] z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6 w-full text-left relative z-10 -mt-4 lg:-mt-8">
            {projects.map((proj, idx) => (
               <ProjectCard key={`${proj.title}-${idx}`} {...proj} />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
