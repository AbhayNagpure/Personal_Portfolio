import Sidebar from './components/Sidebar';
import Cursor from './components/Cursor';
import Hero from './pages/Hero';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-[#050511] text-white min-h-screen relative w-full cursor-none md:cursor-auto">
      <Cursor />

      {/* Fixed Background Glows */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Fixed Left Sidebar */}
      <Sidebar />

      {/* Main Scrolling Content */}
      <main className="w-full flex flex-col">
        
        <section id="hero" className="w-full min-h-screen flex items-center justify-center">
          <Hero />
        </section>
        
        <section id="skills" className="w-full min-h-screen flex items-center justify-center">
          <Skills />
        </section>
        
        <section id="projects" className="w-full min-h-screen flex items-center justify-center">
          <Projects />
        </section>
        
        <section id="about" className="w-full min-h-screen flex items-center justify-center">
          <About />
        </section>
        
        <section id="contact" className="w-full min-h-screen flex items-center justify-center">
          <Contact />
        </section>

      </main>
    </div>
  );
}

export default App;
