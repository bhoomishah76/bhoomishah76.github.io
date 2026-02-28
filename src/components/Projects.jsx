import React from 'react';
import { motion } from 'framer-motion';
import { Play, Zap, ShoppingCart, ShieldCheck, Layout, Award, Target } from 'lucide-react';

export default function Projects({ mainProject, otherProjects }) {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-navy mb-4">Featured Work</h2>
          <div className="w-16 h-1 bg-sky mx-auto rounded-full" />
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-premium p-8 md:p-16 mb-20 relative overflow-hidden group border-2 border-primary/5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full -mr-40 -mt-40 blur-[100px]" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="flex items-center gap-2 text-[10px] font-black text-sky uppercase tracking-[0.4em] mb-6"><div className="w-10 h-[1px] bg-sky" /> Featured Case Study</span>
              <h3 className="text-6xl md:text-8xl font-black mb-8 italic tracking-tighter text-navy">{mainProject.title}</h3>
              <p className="text-xl text-text-muted mb-12 leading-relaxed font-medium border-l-4 border-sky pl-6">{mainProject.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                {mainProject.features.map((f, i) => (
                  <div key={i} className="group/item">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-sky group-hover/item:scale-110 transition-transform">{f.icon}</div>
                      <h5 className="font-extrabold text-navy text-sm uppercase tracking-wider">{f.title}</h5>
                    </div>
                    <p className="text-[12px] text-text-muted leading-snug font-medium line-clamp-2">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="bg-navy rounded-[40px] aspect-[9/16] max-w-[320px] mx-auto overflow-hidden border-[12px] border-navy shadow-[0_0_50px_rgba(0,0,0,0.15)] relative group-hover:scale-[1.02] transition-transform duration-700">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-sky/20 flex flex-col items-center justify-center p-8 text-center">
                  <img src={mainProject.image} alt={mainProject.title} className="w-48 h-48 object-contain mb-8 filter drop-shadow-2xl" />
                  <span className="text-white/80 font-black uppercase tracking-[0.3em] text-[12px]">{mainProject.title}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer group/play">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover/play:scale-110 transition-all">
                    <Play fill="#fff" className="text-white ml-1" />
                  </div>
                </div>
              </div>
              {/* Floating Status Badges */}
              <div className="absolute -right-4 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-border-subtle hidden xl:block">
                <p className="text-[10px] font-black text-sky uppercase mb-1">Live Tracking</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-lg font-black text-navy text-nowrap">Rider: Active</p>
                </div>
              </div>
              <div className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-border-subtle hidden xl:block">
                <p className="text-[10px] font-black text-sky uppercase mb-1">Status</p>
                <p className="text-lg font-black text-navy text-nowrap">Real-time Sync</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((p, i) => (
            <div key={i} className="card-premium p-10 flex flex-col">
              <div className="w-14 h-14 bg-sky-light rounded-2xl flex items-center justify-center mb-10 text-primary">{p.icon}</div>
              <h3 className="text-2xl font-black mb-4">{p.title}</h3>
              <p className="text-sm text-text-muted mb-10 leading-relaxed line-clamp-2">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">{p.tags.map(t => <span key={t} className="px-3 py-1 bg-bg-soft rounded-md text-[9px] font-bold text-navy uppercase tracking-wider">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
