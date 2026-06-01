export default function Hero() {
  return (
    <main className="w-full bg-[#0b1121] border border-white/5 rounded-[2rem] p-8 md:p-16 relative overflow-hidden flex flex-col items-center text-center shadow-[0_0_30px_rgba(0,0,0,0.5)] min-h-[600px] justify-center">
      
      {/* Top glowing background effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Profile Image */}
      <div className="relative mb-6 group">
        {/* Outer glow */}
        <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full scale-110 transition-transform group-hover:scale-125"></div>
        {/* Image Container */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-cyan-500/30 overflow-hidden relative z-10 bg-[#151c2f]">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Abhay" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
        Hi, I'm <span className="text-cyan-400">Abhay</span>
      </h1>
      
      <h2 className="text-lg md:text-xl text-slate-300 font-medium mb-6">
        I'm a <span className="text-cyan-400">UI/UX Designer</span>
        <span className="text-cyan-400 animate-pulse">|</span>
      </h2>

      <p className="max-w-lg text-slate-400 mb-10 text-sm md:text-base leading-relaxed">
        I create beautiful, responsive web experiences using modern technologies.
        Passionate about clean code and user-centered design.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-3 rounded-full bg-cyan-500 text-[#050511] font-semibold hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer">
          View My Work
        </button>
        <button className="px-8 py-3 rounded-full border border-slate-600 text-white font-semibold hover:border-slate-400 hover:bg-white/5 transition-all cursor-pointer">
          Download CV
        </button>
      </div>
      
    </main>
  );
}
