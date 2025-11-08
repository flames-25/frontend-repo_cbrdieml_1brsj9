import { useEffect, useState } from 'react';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'backdrop-blur bg-white/60 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-slate-900">
          <Rocket className="h-5 w-5 text-indigo-600" />
          <span className="font-semibold">MyPortfolio</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="mailto:you@example.com" aria-label="Email" className="p-2 rounded-full hover:bg-slate-100">
            <Mail className="h-5 w-5 text-slate-700" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full hover:bg-slate-100">
            <Github className="h-5 w-5 text-slate-700" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-slate-100">
            <Linkedin className="h-5 w-5 text-slate-700" />
          </a>
        </div>
      </div>
    </header>
  );
}
