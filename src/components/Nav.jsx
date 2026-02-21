import React, { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-[90] glass-nav px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white">
            <Code size={18} />
          </div>
          <span className="font-heading font-black text-xl tracking-tight uppercase">Bhoomi Shah</span>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {['home', 'experience', 'projects', 'skills'].map((item) => (
            <a key={item} href={`#${item}`} className="text-[12px] font-bold uppercase tracking-wider text-text-muted hover:text-primary transition-colors">
              {item}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '12px' }}>Contact</a>
        </div>

        <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[85] bg-white flex flex-col items-center justify-center gap-10">
          {['home', 'experience', 'projects', 'skills'].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setIsMenuOpen(false)} className="text-4xl font-black uppercase tracking-tighter">{item}</a>
          ))}
        </div>
      )}
    </>
  );
}
