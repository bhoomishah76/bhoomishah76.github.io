import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-xs font-black text-sky uppercase tracking-[0.4em] mb-6 block">Ready to start?</span>

        <h2 className="text-5xl sm:text-7xl md:text-8xl font-heading font-black mb-8 text-navy uppercase tracking-tighter leading-tight">
          Let's Build <br />
          <span className="text-gradient">Something.</span>
        </h2>

        <p className="text-lg md:text-2xl text-text-muted mb-14 font-medium max-w-2xl mx-auto leading-relaxed">
          Available for freelance projects and full-time senior engineering opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 max-w-3xl mx-auto text-left">
          <a
            href="mailto:sbhoomi765@gmail.com"
            className="card-premium h-28 md:h-36 px-8 flex items-center gap-6 justify-start group hover:bg-bg-soft transition-all duration-300 border-2 hover:border-primary/20"
          >
            <div className="w-14 h-14 shrink-0 bg-primary/10 rounded-2xl text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
              <Mail size={24} />
            </div>
            <div className="flex flex-col justify-center overflow-hidden min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted mb-1 leading-none">Email Me</p>
              <p className="text-base font-black text-navy group-hover:text-primary transition-colors truncate">sbhoomi765@gmail.com</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/bhoomishah21"
            target="_blank"
            rel="noreferrer"
            className="card-premium h-28 md:h-36 px-8 flex items-center gap-6 justify-start group hover:bg-bg-soft transition-all duration-300 border-2 hover:border-[#0077b5]/20"
          >
            <div className="w-14 h-14 shrink-0 bg-[#0077b5]/10 rounded-2xl text-[#0077b5] flex items-center justify-center group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-300 shadow-sm">
              <Linkedin size={24} />
            </div>
            <div className="flex flex-col justify-center overflow-hidden min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted mb-1 leading-none">LinkedIn</p>
              <p className="text-base font-black text-navy group-hover:text-[#0077b5] transition-colors truncate">Bhoomi Shah</p>
            </div>
          </a>
        </div>

        <div className="flex justify-center px-4">
          <a
            href="mailto:sbhoomi765@gmail.com"
            className="btn-primary whitespace-nowrap"
            style={{ padding: '18px 40px', borderRadius: '50px', fontSize: '15px' }}
          >
            Start a Project Now
          </a>
        </div>
      </div>
    </section>
  );
}
