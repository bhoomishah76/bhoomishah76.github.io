import React from 'react';
import { Zap, ShieldCheck, Layout } from 'lucide-react';

export default function Services({ services }) {
  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-black text-sky uppercase tracking-[0.3em] mb-4 block">How I Help Clients</span>
            <h2 className="text-5xl md:text-6xl font-heading font-black text-navy uppercase leading-tight mb-8">Specialized Solutions.</h2>
            <p className="text-xl text-text-muted mb-12 font-medium">I don't just build apps; I create business drivers with a focus on high retention and technical excellence.</p>

            <div className="space-y-6">
              {services.map((s, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all group border border-transparent hover:border-border-subtle">
                  <div className="w-14 h-14 rounded-2xl bg-sky-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">{s.icon}</div>
                  <div>
                    <h4 className="text-lg font-black text-navy mb-1 uppercase tracking-tight">{s.title}</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1" />

          <div className="lg:col-span-6">
            <div className="card-premium p-12 bg-navy relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="relative z-10">
                <span className="text-xs font-black text-sky uppercase tracking-[0.3em] mb-8 block">Why Choose Me?</span>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="text-6xl font-black text-sky-light/20">01</div>
                    <p className="text-lg text-white font-medium">Direct communication and 100% project ownership from start to finish.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
