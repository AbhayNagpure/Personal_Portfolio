import { MessageCircle, Mail, ArrowRight, Send } from 'lucide-react';

export default function Contact() {
  return (
    <main className="w-full p-8 md:p-16 relative flex flex-col items-center justify-center">

      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
        
        {/* Left Side: Contact Info */}
        <div className="flex-1 flex flex-col text-left justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
            Let's Work <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Together</span>
          </h1>
          
          <p className="text-slate-300/90 mb-12 text-sm md:text-base leading-relaxed font-light max-w-md">
            Got a project in mind? Whether it's a landing page, a full web app, or just a chat — I'm always open. Reach out directly or fill in the form below.
          </p>

          <div className="flex flex-col gap-4">
            {/* WhatsApp Card */}
            <a href="https://wa.me/919343150241" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-6 bg-[#0a1120] border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#151c2f] text-cyan-400 rounded-full flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform shadow-inner">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">WhatsApp</h3>
                  <p className="text-slate-200 font-medium">+91 9343150241</p>
                </div>
              </div>
              <ArrowRight className="text-cyan-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={20} />
            </a>

            {/* Email Card */}
            <a href="mailto:abhaynagpure99@gmail.com" className="group flex items-center justify-between p-6 bg-[#0a1120] border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#151c2f] text-cyan-400 rounded-full flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform shadow-inner">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Email</h3>
                  <p className="text-slate-200 font-medium">abhaynagpure99@gmail.com</p>
                </div>
              </div>
              <ArrowRight className="text-cyan-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={20} />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1 w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          <form className="w-full max-w-md bg-[#0a1120] border border-white/5 rounded-[2rem] p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-cyan-500/20 transition-colors">
            {/* Subtle glow inside form */}
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-cyan-500/5 blur-[50px] rounded-full group-hover:bg-cyan-500/10 transition-colors"></div>

            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Send a message</h3>
            
            <div className="flex flex-col gap-6 relative z-10">
              <div>
                <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2 ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-[#151c2f] border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors text-sm"
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2 ml-1">Your Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-[#151c2f] border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors text-sm"
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-[#151c2f] border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none text-sm"
                ></textarea>
              </div>

              <button type="button" className="w-full mt-4 bg-cyan-500 hover:bg-cyan-400 text-[#050511] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                <Send size={18} />
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
}
