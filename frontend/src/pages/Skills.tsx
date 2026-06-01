export default function Skills() {
  return (
    <main className="w-full bg-[#0b1121] border border-white/5 rounded-[2rem] p-8 md:p-16 relative overflow-hidden flex flex-col items-center text-center shadow-[0_0_30px_rgba(0,0,0,0.5)] min-h-[600px] justify-center">
      
      {/* Top glowing background effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
        My <span className="text-cyan-400">Skills</span>
      </h1>
      
      <p className="max-w-lg text-slate-400 mb-10 text-sm md:text-base leading-relaxed">
        Coming soon! We will build out this section with the beautiful progress bars and icons.
      </p>
      
    </main>
  );
}
