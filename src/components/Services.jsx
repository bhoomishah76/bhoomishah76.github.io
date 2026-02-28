import React from 'react';
import { Zap, ShieldCheck, Layout } from 'lucide-react';

const whyChooseMe = [
  {
    num: '01',
    text: 'Direct communication and 100% project ownership from start to finish.'
  },
  {
    num: '02',
    text: 'Proven track record with 50+ live apps across App Store and Play Store.'
  },
  {
    num: '03',
    text: 'Deep fintech expertise — Razorpay, Paytm, HDFC & more, integrated securely.'
  }
];

export default function Services({ services }) {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-black text-sky uppercase tracking-[0.3em] mb-4 block">How I Help Clients</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-navy uppercase leading-tight mb-6">
              Specialized<br />Solutions.
            </h2>
            <p className="text-lg text-text-muted mb-10 font-medium leading-relaxed">
              I don't just build apps — I create business drivers with a focus on high retention and technical excellence.
            </p>

            <div className="space-y-4">
              {services.map((s, i) => (
                <div key={i} className="flex gap-5 p-5 rounded-2xl hover:bg-white hover:shadow-xl transition-all group border border-transparent hover:border-border-subtle">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-sky-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-black text-navy mb-1 uppercase tracking-tight">{s.title}</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 hidden lg:block" />

          {/* Right Column — Why Choose Me */}
          <div className="lg:col-span-6">
            <div
              className="p-8 md:p-12 border border-white/10 rounded-[32px] relative overflow-hidden shadow-2xl text-white"
              style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <span className="text-xs font-black text-sky uppercase tracking-[0.3em] mb-8 block">Why Choose Me?</span>

                <div className="space-y-6">
                  {whyChooseMe.map((item, i) => (
                    <div key={i} className="flex gap-5 items-start border-b border-white/10 pb-6 last:border-0 last:pb-0">
                      <div className="text-4xl font-black leading-none shrink-0" style={{ color: 'rgba(255,255,255,0.2)' }}>{item.num}</div>
                      <p className="text-base text-white font-semibold leading-relaxed pt-1">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-bold text-white/80 uppercase tracking-wider">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
