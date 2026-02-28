import React, { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';

const navLinks = ['home', 'experience', 'projects', 'skills', 'services'];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-[90] glass-nav px-6 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white">
            <Code size={18} />
          </div>
          <span className="font-heading font-black text-xl tracking-tight uppercase text-navy">Bhoomi Shah</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-[12px] font-bold uppercase tracking-wider text-navy/70 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '12px' }}>
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[85] bg-white flex flex-col items-center justify-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-black uppercase tracking-tighter text-navy hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="btn-primary mt-4"
            style={{ padding: '16px 48px', fontSize: '16px', borderRadius: '50px' }}
          >
            Contact Me
          </a>
        </div>
      )}
    </>
  );
}
