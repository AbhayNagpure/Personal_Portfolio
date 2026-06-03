import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return;

    // Use gsap quickTo for better performance
    const xToCursor = gsap.quickTo(cursorRef.current, 'x', { duration: 0.1, ease: 'power3' });
    const yToCursor = gsap.quickTo(cursorRef.current, 'y', { duration: 0.1, ease: 'power3' });
    
    const xToFollower = gsap.quickTo(followerRef.current, 'x', { duration: 0.3, ease: 'power3' });
    const yToFollower = gsap.quickTo(followerRef.current, 'y', { duration: 0.3, ease: 'power3' });

    const onMouseMove = (e: MouseEvent) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Add hover effects for a tags and buttons
    const interactiveElements = document.querySelectorAll('a, button');
    
    const onMouseEnter = () => {
      gsap.to(cursorRef.current, { scale: 1.5, backgroundColor: 'rgba(6,182,212,1)', duration: 0.3 });
      gsap.to(followerRef.current, { scale: 1.5, borderColor: 'rgba(6,182,212,0)', duration: 0.3 });
    };
    
    const onMouseLeave = () => {
      gsap.to(cursorRef.current, { scale: 1, backgroundColor: 'rgba(6,182,212,1)', duration: 0.3 });
      gsap.to(followerRef.current, { scale: 1, borderColor: 'rgba(6,182,212,0.5)', duration: 0.3 });
    };

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[110] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-400/50 rounded-full pointer-events-none z-[109] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-colors"
      />
    </>
  );
}
