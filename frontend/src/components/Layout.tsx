import { Home, User, Briefcase, FolderOpen, Type, Mail } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#050511] flex items-center justify-center p-4 md:p-8">
      {/* Main Container */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-6 h-full items-start">
        
        {/* Navigation Sidebar */}
        <nav className="bg-[#0b1121] border border-white/5 rounded-full px-4 py-8 flex md:flex-col gap-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20 sticky top-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `p-3 rounded-full transition-all ${isActive ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`
            }
          >
            <Home size={20} />
          </NavLink>
          {/* Note: In the image, 'Languages' icon is Type, maybe 'About' was User. Let's map them to 5 pages as requested: Hero, Skills, Projects, Education, Contact. */}
          {/* So: / -> Home, /skills -> Briefcase, /projects -> FolderOpen, /education -> User, /contact -> Mail. Let's adjust slightly. */}
          
          <NavLink 
            to="/skills" 
            className={({ isActive }) => 
              `p-3 rounded-full transition-all ${isActive ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`
            }
          >
            <Briefcase size={20} />
          </NavLink>
          
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `p-3 rounded-full transition-all ${isActive ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`
            }
          >
            <FolderOpen size={20} />
          </NavLink>
          
          <NavLink 
            to="/education" 
            className={({ isActive }) => 
              `p-3 rounded-full transition-all ${isActive ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`
            }
          >
            <User size={20} />
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `p-3 rounded-full transition-all ${isActive ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`
            }
          >
            <Mail size={20} />
          </NavLink>
        </nav>

        {/* Dynamic Main Content Area rendered by React Router */}
        <div className="flex-1 w-full relative">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
