import { GraduationCap, Code2, Dumbbell, Brain, Palette } from 'lucide-react';

export default function About() {
  return (
    <main className="w-full p-8 pt-24 md:p-16 relative flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20 relative z-10">
        
        {/* Left: About Text */}
        <div className="flex-1 w-full flex flex-col justify-center text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
            About <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Me</span>
          </h1>
          
          <div className="space-y-4 mb-10">
            <p className="text-slate-300/90 text-sm md:text-base leading-relaxed font-light">
              I'm an <span className="text-cyan-400 font-medium">Engineering Physics undergrad at IIT (ISM) Dhanbad</span> and a freelance Full-Stack Developer building production-ready scalable web solutions. I'm also a competitive programming enthusiast with a <span className="text-cyan-400 font-medium">1246 rating (Pupil) on Codeforces</span> (350+ problems solved).
            </p>
            <p className="text-slate-300/90 text-sm md:text-base leading-relaxed font-light">
              When I'm not coding, you'll find me at the gym, contributing to <span className="text-cyan-400 font-medium">FotoFreaks (our college Photography Club)</span>, or just recharging on my own. I do my best thinking in solitude.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 bg-[#0a1120] p-4 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors">
              <Code2 className="text-cyan-400" size={24} />
              <span className="text-sm font-medium text-slate-200">MERN-Stack Developer</span>
            </div>
            <div className="flex items-center gap-4 bg-[#0a1120] p-4 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors">
              <Palette className="text-cyan-400" size={24} />
              <span className="text-sm font-medium text-slate-200">UI/UX & Clean Code</span>
            </div>
            <div className="flex items-center gap-4 bg-[#0a1120] p-4 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors">
              <Brain className="text-cyan-400" size={24} />
              <span className="text-sm font-medium text-slate-200">Deep Thinker</span>
            </div>
            <div className="flex items-center gap-4 bg-[#0a1120] p-4 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors">
              <Dumbbell className="text-cyan-400" size={24} />
              <span className="text-sm font-medium text-slate-200">Gym & Fitness</span>
            </div>
          </div>
        </div>

        {/* Right: Separate Education Card */}
        <div className="flex-1 flex justify-center lg:justify-end items-center w-full mt-8 lg:mt-0">
          <div className="w-full max-w-sm bg-[#0a1120] border border-cyan-500/20 rounded-[2rem] p-8 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
            {/* Glow inside card */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/20 blur-[50px] rounded-full group-hover:bg-cyan-500/30 transition-colors"></div>
            
            <div className="bg-[#151c2f] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/5 shadow-lg relative z-10 group-hover:scale-110 transition-transform">
              <GraduationCap className="text-cyan-400" size={32} />
            </div>
            
            <h2 className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold mb-2 relative z-10">Education</h2>
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">IIT (ISM) Dhanbad</h3>
            <p className="text-slate-300 font-medium mb-2 relative z-10">B.Tech in Engineering Physics</p>
            
            
            <div className="w-full h-px bg-gradient-to-r from-cyan-500/50 to-transparent my-6 relative z-10"></div>
            
            <p className="text-slate-400 text-xs leading-relaxed relative z-10 font-light">
              Currently pursuing my Bachelor of Technology degree. Balancing rigorous academics with my passion for full-stack development, competitive programming, and AI/ML.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
