import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-xs font-black text-sky uppercase tracking-[0.4em] mb-8 block">Ready to start?</span>
        <h2 className="text-6xl md:text-9xl font-heading font-black mb-12 text-navy uppercase tracking-tighter leading-[0.85]">Let's Build <br /> <span className="text-gradient">Something.</span></h2>
        <p className="text-2xl text-text-muted mb-20 font-medium max-w-2xl mx-auto">Available for freelance projects and full-time senior engineering opportunities.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto px-4 text-left">
          <a href="mailto:sbhoomi765@gmail.com" className="card-premium h-32 md:h-40 px-10 flex items-center gap-8 justify-start group hover:bg-bg-soft transition-all duration-300 border-2 hover:border-primary/20">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-primary/10 rounded-2xl text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm shadow-primary/5 group-hover:shadow-primary/20">
              <Mail size={28} className="md:w-8 md:h-8" />
            </div>
            <div className="flex flex-col justify-center overflow-hidden">
              <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-text-muted mb-1 leading-none">Email Me</p>
              <p className="text-base md:text-xl font-black text-navy group-hover:text-primary transition-colors truncate">sbhoomi765@gmail.com</p>
            </div>
          </a>
          <a href="https://linkedin.com/in/bhoomishah21" target="_blank" rel="noreferrer" className="card-premium h-32 md:h-40 px-10 flex items-center gap-8 justify-start group hover:bg-bg-soft transition-all duration-300 border-2 hover:border-[#0077b5]/20">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-[#0077b5]/10 rounded-2xl text-[#0077b5] flex items-center justify-center group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-300 shadow-sm shadow-[#0077b5]/5 group-hover:shadow-[#0077b5]/20">
              <Linkedin size={28} className="md:w-8 md:h-8" />
            </div>
            <div className="flex flex-col justify-center overflow-hidden">
              <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-text-muted mb-1 leading-none">LinkedIn</p>
              <p className="text-base md:text-xl font-black text-navy group-hover:text-[#0077b5] transition-colors truncate">Bhoomi Shah</p>
            </div>
          </a>
        </div>

        <a href="mailto:sbhoomi765@gmail.com" className="btn-primary group relative overflow-hidden" style={{ padding: '24px 80px', borderRadius: '100px', fontSize: '18px' }}>
          <span className="relative z-10">Start a Project Now</span>
        </a>
      </div>
    </section>
  );
}
