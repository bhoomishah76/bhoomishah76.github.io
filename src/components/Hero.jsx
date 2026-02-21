import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight, Zap } from 'lucide-react';

export default function Hero({ stats, HeroImage }) {
  return (
    <section id="home" className="section-padding min-h-[90vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-center lg:text-left">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-light text-primary border border-sky/20 rounded-full mb-8">
              <Sparkles size={14} />
              <span className="text-[10px] font-black tracking-widest uppercase">Senior React Native Developer</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-6 leading-tight text-navy">
              Building <br />
              <span className="text-gradient">Seamless Apps</span>.
            </h1>

            <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
              Specializing in high-performance cross-platform development with over
              <span className="text-primary font-bold"> 5 years</span> of expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a href="#projects" className="btn-primary flex items-center gap-2 justify-center">View Portfolio <ChevronRight size={18} /></a>
              <a href="#contact" className="btn-secondary">Let's Connect</a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl">
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <h4 className="text-3xl font-black text-navy">{stat.value}</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[450px]">
              <div className="absolute inset-0 bg-primary/10 rounded-[40px] rotate-6 group-hover:rotate-3 transition-transform duration-500" />
              <div className="absolute inset-0 bg-sky/10 rounded-[40px] -rotate-6 group-hover:-rotate-3 transition-transform duration-500" />

              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[40px] border-8 border-white shadow-2xl bg-white">
                <img src={HeroImage} alt="Bhoomi Shah" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-60 pointer-events-none" />
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }} className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-border-subtle hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-light rounded-full flex items-center justify-center text-primary">
                    <Zap size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-text-muted tracking-widest">Available for</p>
                    <p className="text-sm font-bold text-navy">New Opportunities</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
