import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [typedName, setTypedName] = useState('');
  const [typedRole, setTypedRole] = useState('');

  const fullName = "Abhay";
  const fullRole = "MERN Stack Developer";

  useEffect(() => {
    let roleTimeout: ReturnType<typeof setTimeout>;

    // Start typing name after initial load
    const nameTimeout = setTimeout(() => {
      let n = 0;
      const nameInterval = setInterval(() => {
        n++;
        setTypedName(fullName.slice(0, n));
        if (n === fullName.length) {
          clearInterval(nameInterval);
          
          // Wait a bit, then start role
          roleTimeout = setTimeout(() => {
            let r = 0;
            const roleInterval = setInterval(() => {
              r++;
              setTypedRole(fullRole.slice(0, r));
              if (r === fullRole.length) {
                clearInterval(roleInterval);
              }
            }, 50); // Role typing speed (moderate)
          }, 400);
        }
      }, 100); // Name typing speed (moderate)
    }, 500);

    return () => {
      clearTimeout(nameTimeout);
      clearTimeout(roleTimeout);
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline(); 

    // Image reveal
    tl.fromTo('.hero-img', 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.5)' }
    );

    // Text masked reveal
    tl.fromTo('.hero-text-mask > *', 
      { y: '150%' },
      { y: '0%', duration: 0.8, stagger: 0.15, ease: 'power4.out' },
      "-=0.5"
    );
    
    // Subtext fade in
    tl.fromTo('.hero-subtext',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      "-=0.5"
    );

    // Buttons
    tl.fromTo('.hero-btn',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
      "-=0.5"
    );
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="w-full p-6 pb-24 md:p-12 md:pb-28 lg:p-16 lg:pl-28 xl:pl-32 relative flex flex-col items-center text-center justify-center min-h-[100dvh]">

      {/* Profile Image */}
      <div className="relative z-10 mb-8 group mt-12 md:mt-0 hero-img">
        <div className="absolute inset-0 bg-cyan-400 rounded-full blur-[20px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#111827] border-2 border-cyan-500/30 overflow-hidden flex items-center justify-center relative shadow-[0_0_30px_rgba(6,182,212,0.3)]">
          <div className="text-cyan-400 font-bold text-4xl">A</div>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center max-w-6xl w-full mx-auto text-center">
        
        {/* Title with Masked Reveal for prefix, typing for name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white drop-shadow-lg flex flex-wrap justify-center gap-x-3 md:gap-x-4">
          <div className="overflow-hidden hero-text-mask pb-2">
            <span className="inline-block">Hi,</span>
          </div>
          <div className="overflow-hidden hero-text-mask pb-2">
            <span className="inline-block">I'm</span>
          </div>
          <div className="pb-2 pt-2 -mt-2">
            <span className="inline-block text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]">
              {typedName}
              <span 
                className={`text-white ml-1 ${typedName.length === fullName.length ? 'opacity-0 hidden' : 'animate-pulse inline-block'}`}
                style={{ animationDuration: '700ms' }}
              >|</span>
              <span className="opacity-0">{fullName.slice(typedName.length)}</span>
            </span>
          </div>
        </h1>
        
        <div className="mb-8 pb-2 h-8 md:h-10 flex items-center justify-center">
          <h2 className="inline-block text-xl md:text-2xl text-slate-300 font-medium">
            {typedRole}
            <span 
              className={`text-cyan-400 ml-[2px] font-light ${typedName.length === fullName.length ? 'animate-pulse opacity-100' : 'opacity-0'}`}
              style={{ animationDuration: '700ms' }}
            >|</span>
            <span className="opacity-0">{fullRole.slice(typedRole.length)}</span>
          </h2>
        </div>

        <p className="hero-subtext max-w-xl text-center text-blue-100/70 mb-8 md:mb-12 text-base md:text-lg leading-relaxed font-light">
          I create beautiful, responsive web experiences using modern technologies.
          Passionate about clean code and user-centered design.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center relative z-20">
          <a href="#projects" className="hero-btn px-8 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#050511] font-bold transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-center inline-block">
            View My Work
          </a>
          
          <a href="/Abhay_Nagpure_Resume.pdf" download="Abhay_Nagpure_Resume.pdf" className="hero-btn px-8 py-3.5 rounded-full bg-transparent border border-white/20 hover:border-cyan-400 text-white hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] text-center inline-block">
            Download Resume
          </a>
        </div>
      </div>
      
    </main>
  );
}
