import React from 'react';
import { motion } from 'framer-motion';
import { Zap as ZapIcon } from 'lucide-react';

export default function Skills({ skillCategories }) {
  return (
    <section id="skills" className="section-padding bg-bg-soft">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-black text-sky uppercase tracking-[0.3em] mb-4 block text-center">Technical Proficiency</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-navy text-center mb-16">Mastered <br /><span className="text-gradient">Technologies</span>.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-3xl border border-border-subtle shadow-sm">
              <h3 className="text-lg font-black uppercase tracking-widest text-navy mb-8 pb-4 border-b border-border-subtle flex items-center justify-between">{cat.title}<ZapIcon size={16} className="text-sky" /></h3>
              <div className="grid grid-cols-1 gap-4">{cat.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-bg-soft flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-sky-light transition-all">{item.icon}</div>
                  <span className="text-sm font-bold text-text-muted group-hover:text-navy transition-colors">{item.name}</span>
                </div>
              ))}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
