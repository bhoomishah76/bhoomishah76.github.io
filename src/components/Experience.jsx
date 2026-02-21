import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience({ experiences }) {
  return (
    <section id="experience" className="section-padding bg-bg-soft relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[20rem] font-black text-navy/5 select-none pointer-events-none -mr-40 -mt-20 leading-none">EXP</div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-20">
          <span className="text-xs font-black text-sky uppercase tracking-[0.3em] mb-4 block">Professional Timeline</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase leading-tight">Career <br /> Progression.</h2>
        </div>

        <div className="relative border-l-2 border-border-subtle ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="mb-16 relative pl-8">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                <span className="text-xs font-black text-sky uppercase tracking-widest">{exp.period}</span>
                <h3 className="text-2xl font-black text-navy">{exp.company}</h3>
              </div>

              <h4 className="text-lg font-bold text-primary/80 mb-4 italic flex items-center gap-2"><Briefcase size={16} /> {exp.role}</h4>
              <p className="text-text-muted mb-6 leading-relaxed text-lg max-w-2xl font-medium">{exp.desc}</p>

              <div className="flex flex-wrap gap-2">{exp.skills.map(s => (<span key={s} className="px-4 py-1.5 bg-white border border-border-subtle rounded-full text-[10px] font-bold uppercase tracking-wider text-navy shadow-sm hover:border-sky hover:text-sky transition-all cursor-default">{s}</span>))}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
