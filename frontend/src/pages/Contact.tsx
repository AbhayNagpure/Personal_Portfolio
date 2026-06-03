import { MessageCircle, Mail, ArrowRight, Send, User, Code, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useGSAP(() => {
    gsap.fromTo('.contact-anim', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  const contactLinks = [
    { name: 'WhatsApp', value: '+91 9343150241', link: 'https://wa.me/919343150241', icon: MessageCircle, color: 'text-green-400', bg: 'bg-green-500/10', borderHover: 'hover:border-green-500/30' },
    { name: 'Email', value: 'abhaynagpure99@gmail.com', link: 'mailto:abhaynagpure99@gmail.com', icon: Mail, color: 'text-cyan-400', bg: 'bg-cyan-500/10', borderHover: 'hover:border-cyan-500/30' },
    { name: 'LinkedIn', value: 'Abhay Nagpure', link: 'https://linkedin.com/in/abhaynagpure', icon: User, color: 'text-blue-400', bg: 'bg-blue-500/10', borderHover: 'hover:border-blue-500/30' },
    { name: 'GitHub', value: '@AbhayNagpure', link: 'https://github.com/AbhayNagpure', icon: Code, color: 'text-slate-200', bg: 'bg-slate-500/10', borderHover: 'hover:border-slate-500/30' },
  ];

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // These variables should be placed in a .env file
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS credentials are missing. Please add them to your .env file.");
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setSubmitStatus('success');
          formRef.current?.reset();
          
          setTimeout(() => {
            setSubmitStatus('idle');
          }, 3000);
      }, (error) => {
          console.error(error.text);
          setSubmitStatus('error');
          
          setTimeout(() => {
            setSubmitStatus('idle');
          }, 3000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <main ref={containerRef} className="w-full p-8 pt-24 md:p-16 relative flex flex-col items-center justify-center">

      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
        
        {/* Left Side: Contact Info */}
        <div className="flex-1 flex flex-col text-left justify-center">
          <h1 className="contact-anim text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
            Have an Idea? <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Let's Ship It.</span>
          </h1>
          
          <p className="contact-anim text-slate-300/90 mb-10 text-sm md:text-base leading-relaxed font-light max-w-md">
            Got a project in mind? Whether it's a landing page, a full web app, or just a chat — I'm always open. Reach out directly or fill in the form below.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <a key={idx} href={contact.link} target="_blank" rel="noreferrer" className={`contact-anim group flex flex-col p-5 bg-[#0a1120] border border-white/5 rounded-2xl ${contact.borderHover} transition-all duration-300 shadow-lg hover:-translate-y-1`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 ${contact.bg} ${contact.color} rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:-rotate-3`}>
                      <Icon size={20} />
                    </div>
                    <ArrowRight className={`${contact.color} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`} size={18} />
                  </div>
                  <div>
                    <h3 className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">{contact.name}</h3>
                    <p className="text-sm text-slate-200 font-medium truncate">{contact.value}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1 w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          <form ref={formRef} onSubmit={sendEmail} className="contact-anim w-full max-w-md bg-[#0a1120] border border-white/5 rounded-[2rem] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-500">
            {/* Subtle glow inside form */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-colors duration-500 pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Send a message</h3>
            
            <div className="flex flex-col gap-5 relative z-10">
              <div>
                <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2 ml-1">Your Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  placeholder="Alex Carter" 
                  required
                  className="w-full bg-[#050511] border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-[#151c2f] transition-all text-sm shadow-inner"
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2 ml-1">Your Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  placeholder="alex@example.com" 
                  required
                  className="w-full bg-[#050511] border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-[#151c2f] transition-all text-sm shadow-inner"
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  placeholder="Tell me about your project..." 
                  required
                  className="w-full bg-[#050511] border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-[#151c2f] transition-all resize-none text-sm shadow-inner"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full mt-2 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-1 ${
                  submitStatus === 'success' ? 'bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.3)]' :
                  submitStatus === 'error' ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.3)]' :
                  'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]'
                } ${isSubmitting ? 'opacity-70 cursor-not-allowed transform-none' : ''}`}
              >
                {isSubmitting ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : submitStatus === 'success' ? (
                  <><CheckCircle2 size={18} /> Message Sent!</>
                ) : submitStatus === 'error' ? (
                  <><XCircle size={18} /> Failed. Try Again.</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
}
