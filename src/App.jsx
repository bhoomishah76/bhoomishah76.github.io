import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Github, Linkedin, Mail, Code, Briefcase, ExternalLink, Menu, X,
  Smartphone, ShoppingCart, ShieldCheck, Award, Target, Globe, Play,
  ChevronRight, Sparkles, Layout, Zap, SmartphoneNfc, AppWindow
} from 'lucide-react';
import './App.css';
import HeroImage from './hero-image.jpg';
import LamilanoBrand from './assets/lamilano_brand.png';
import LevaralIcon from './assets/levaral_icon.png';
import FreezelandIcon from './assets/freezeland_icon.png';
import OChickenIcon from './assets/ochicken_icon.png';
import RajPavbhajiIcon from './assets/rajpavbhaji_icon.png';
import SizeZeroIcon from './assets/sizezero_icon.png';
import App72Icon from './assets/app72_icon.png';
import App75Icon from './assets/app75_icon.png';
import LondonYardIcon from './assets/londonyard_icon.png';
import MatukiIcon from './assets/matuki_icon.png';
import MehulsIcon from './assets/mehuls_icon.png';
import NarayanbhaiIcon from './assets/narayanbhai_icon.png';
import OliveIcon from './assets/olive_icon.png';
import SamsPizzaIcon from './assets/samspizza_icon.png';
import SantushtiIcon from './assets/santushti_icon.png';
import SarazaIcon from './assets/saraza_icon.png';
import SonaliIcon from './assets/sonali_icon.png';
import TeaVillaIcon from './assets/teavilla_icon.png';
import TgtIcon from './assets/tgt_icon.png';
import DonerIcon from './assets/doner_icon.png';
import ImperialIcon from './assets/imperial_icon.png';
import WolfPuckIcon from './assets/wolfpuck_icon.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const stats = [
    { label: "Live Apps", value: "50+" },
    { label: "Years Exp.", value: "5+" },
    { label: "App Store", value: "Live" },
    { label: "Play Store", value: "Live" }
  ];

  const experiences = [
    {
      company: "Orderloop, Rajkot",
      role: "React Native Developer",
      period: "2025 - Present",
      desc: "Leading mobile innovation for enterprise-grade food-tech solutions. Focused on high-performance ordering systems and real-time delivery tracking architecture.",
      skills: ["Enterprise Arc", "Real-time Sync", "Optimization"]
    },
    {
      company: "Codetown Technologies, Udaipur",
      role: "React Native Developer",
      period: "2024 - 2025",
      desc: "Architected sophisticated UI architectures and integrated complex third-party fintech services for global client requirements.",
      skills: ["UI Systems", "API Security", "Agile Delivery"]
    },
    {
      company: "Codeal Infoway, Rajkot",
      role: "Sr. React Native Developer",
      period: "2021 - 2024",
      desc: "Strategic lead for mobile growth. Spearheaded development of 10+ high-traffic applications and mentored a team of developers.",
      skills: ["Team Leadership", "App Deployment", "Security"]
    }
  ];

  const mainProject = {
    title: "La Milano Pizzeria",
    category: "High-Scale E-Commerce",
    desc: "A flagship mobile commerce platform engineered with advanced React Native architecture. This project integrates core retail flows like secure payments, membership loyalty, and gamified user engagement.",
    tags: ["React Native", "Paytm UPI", "Redux Toolkit", "Size Matters"],
    image: LamilanoBrand,
    features: [
      { icon: <Zap size={18} />, title: "SplashScreen", text: "Custom branded onboarding with optimized loading." },
      { icon: <ShoppingCart size={18} />, title: "Cart Functionality", text: "Complete end-to-end cart management and optimization." },
      { icon: <ShieldCheck size={18} />, title: "Paytm UPI", text: "Deep-linked secure payment gateway integration." },
      { icon: <Layout size={18} />, title: "Offer Screen UI", text: "Dynamic promotional layouts with personalized rewards." },
      { icon: <Award size={18} />, title: "Gamification", text: "Interactive Spin Wheel and Scratch Card modules." },
      { icon: <Target size={18} />, title: "Size Matters", text: "Pixel-perfect responsive styling across all devices." }
    ]
  };

  const otherProjects = [
    {
      title: "London Yard Pizza",
      desc: "Premium pizza retail platform with advanced order customization and real-time delivery logistics.",
      tags: ["Pizza Tech", "Logistics", "UI"],
      icon: <img src={LondonYardIcon} alt="London Yard Pizza" className="w-12 h-12 object-contain" />
    },
    {
      title: "Sam's Pizza",
      desc: "High-scale e-commerce platform for Sam's Pizza, featuring loyalty rewards and optimized checkout flows.",
      tags: ["E-Commerce", "Loyalty", "Scale"],
      icon: <img src={SamsPizzaIcon} alt="Sam's Pizza" className="w-12 h-12 object-contain" />
    },
    {
      title: "Santushti Shakes",
      desc: "Specialized beverage platform with dynamic category management and real-time inventory tracking.",
      tags: ["Beverage", "Inventory", "Real-time"],
      icon: <img src={SantushtiIcon} alt="Santushti Shakes" className="w-12 h-12 object-contain" />
    },
    {
      title: "The Grand Thakar",
      desc: "Premium restaurant application for traditional hospitality, featuring table booking and festive offer management.",
      tags: ["Hospitality", "Booking", "CRM"],
      icon: <img src={TgtIcon} alt="The Grand Thakar" className="w-12 h-12 object-contain" />
    },
    {
      title: "The Imperial Palace",
      desc: "Luxury hotel and dining app with integrated room service and premium concierge features.",
      tags: ["Luxury", "Concierge", "Fintech"],
      icon: <img src={ImperialIcon} alt="The Imperial Palace" className="w-12 h-12 object-contain" />
    },
    {
      title: "Saraza",
      desc: "High-end dining platform with advanced reservation logic and loyalty program integration.",
      tags: ["Dining", "Reservation", "Loyalty"],
      icon: <img src={SarazaIcon} alt="Saraza" className="w-12 h-12 object-contain" />
    },
    {
      title: "Matuki Restaurant",
      desc: "Traditional cuisine ordering app with local delivery optimization and secure payment gateways.",
      tags: ["Traditional", "Local", "Secure"],
      icon: <img src={MatukiIcon} alt="Matuki Restaurant" className="w-12 h-12 object-contain" />
    },
    {
      title: "Mehul's Kitchen",
      desc: "Family-owned restaurant app featuring daily special management and personalized user profiles.",
      tags: ["Family Dining", "Special Offers", "CRM"],
      icon: <img src={MehulsIcon} alt="Mehul's Kitchen" className="w-12 h-12 object-contain" />
    },
    {
      title: "Narayanbhai Bhelwala",
      desc: "Iconic street food platform with high-volume order processing and real-time prep tracking.",
      tags: ["Street Food", "High Velocity", "Tracking"],
      icon: <img src={NarayanbhaiIcon} alt="Narayanbhai Bhelwala" className="w-12 h-12 object-contain" />
    },
    {
      title: "Olive",
      desc: "Sophisticated Mediterranean dining app with curated menu selections and premium rewards.",
      tags: ["Dining", "Curated", "UX"],
      icon: <img src={OliveIcon} alt="Olive" className="w-12 h-12 object-contain" />
    },
    {
      title: "Sonali Restaurant",
      desc: "Multi-cuisine ordering platform with optimized delivery logistics and feedback management.",
      tags: ["Multi-cuisine", "Feedback", "Logistics"],
      icon: <img src={SonaliIcon} alt="Sonali Restaurant" className="w-12 h-12 object-contain" />
    },
    {
      title: "New Freezeland",
      desc: "Premium dessert and ice cream ordering platform with optimized delivery logistics and real-time inventory sync.",
      tags: ["React Native", "Logistics", "Inventory"],
      icon: <img src={FreezelandIcon} alt="New Freezeland" className="w-12 h-12 object-contain" />
    },
    {
      title: "O' Chicken",
      desc: "Specialized retail application for poultry products with dynamic inventory management and regional delivery support.",
      tags: ["Retail", "Inventory", "Regional"],
      icon: <img src={OChickenIcon} alt="O' Chicken" className="w-12 h-12 object-contain" />
    },
    {
      title: "Raj Pavbhaji",
      desc: "High-traffic fast food platform featuring high-scale order processing and advanced real-time tracking systems.",
      tags: ["Fast Food", "Scale", "Tracking"],
      icon: <img src={RajPavbhajiIcon} alt="Raj Pavbhaji" className="w-12 h-12 object-contain" />
    },
    {
      title: "Size Zero",
      desc: "Modern health-focused food delivery app with calorie tracking and personalized meal navigation systems.",
      tags: ["Health", "UI Architecture", "Navigation"],
      icon: <img src={SizeZeroIcon} alt="Size Zero" className="w-12 h-12 object-contain" />
    }
  ];

  const skillCategories = [
    {
      title: "Core Expertise",
      items: [
        { name: "React Native", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Redux Toolkit", icon: "⚡" },
        { name: "React Navigation", icon: "🗺️" }
      ]
    },
    {
      title: "Fintech & Integrations",
      items: [
        { name: "Razorpay", icon: "💳" },
        { name: "Paytm SDK", icon: "💰" },
        { name: "CCAvenue / HDFC", icon: "🏦" },
        { name: "Firebase", icon: "🔥" }
      ]
    },
    {
      title: "Delivery & Performance",
      items: [
        { name: "Native Modules", icon: "⚙️" },
        { name: "Performance Opt.", icon: "🚀" },
        { name: "App Store / Play Store", icon: "📱" },
        { name: "CI/CD Pipeline", icon: "📦" }
      ]
    }
  ];


  const services = [
    {
      title: "Mobile Architecture",
      desc: "Building scalable, high-performance apps from the ground up using React Native.",
      icon: <Layout className="text-sky" size={28} />
    },
    {
      title: "Fintech Integration",
      desc: "Secure payment gateway implementation (Razorpay, Paytm, HDFC) with robust fallback handling.",
      icon: <ShieldCheck className="text-sky" size={28} />
    },
    {
      title: "Performance Tuning",
      desc: "Optimizing existing applications for fluid 60FPS animations and lightning-fast load times.",
      icon: <Zap className="text-sky" size={28} />
    }
  ];

  return (
    <div className="min-h-screen text-navy relative">
      <div className="bg-mesh" />

      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left" style={{ scaleX }} />

      {/* Navigation */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[85] bg-white flex flex-col items-center justify-center gap-10">
          {['home', 'experience', 'projects', 'skills'].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setIsMenuOpen(false)} className="text-4xl font-black uppercase tracking-tighter">{item}</a>
          ))}
          <X className="absolute top-10 right-10 text-primary" size={32} onClick={() => setIsMenuOpen(false)} />
        </motion.div>
      )}

      {/* Hero Section */}
      <section id="home" className="section-padding min-h-[90vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-center lg:text-left">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
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
                <span className="text-primary font-bold"> 5 years</span> of expertise in food-tech and fintech solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a href="#projects" className="btn-primary flex items-center gap-2 justify-center">
                  View Portfolio <ChevronRight size={18} />
                </a>
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

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative group w-full max-w-[450px]">
                {/* Decorative background elements */}
                <div className="absolute inset-0 bg-primary/10 rounded-[40px] rotate-6 group-hover:rotate-3 transition-transform duration-500" />
                <div className="absolute inset-0 bg-sky/10 rounded-[40px] -rotate-6 group-hover:-rotate-3 transition-transform duration-500" />

                <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[40px] border-8 border-white shadow-2xl bg-white">
                  <img
                    src={HeroImage}
                    alt="Bhoomi Shah"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
                  />

                  {/* Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-border-subtle hidden md:block"
                >
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

      {/* Experience */}
      <section id="experience" className="section-padding bg-bg-soft relative overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-0 right-0 text-[20rem] font-black text-navy/5 select-none pointer-events-none -mr-40 -mt-20 leading-none">
          EXP
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-20">
            <span className="text-xs font-black text-sky uppercase tracking-[0.3em] mb-4 block">Professional Timeline</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase leading-tight">Career <br /> Progression.</h2>
          </div>

          <div className="relative border-l-2 border-border-subtle ml-4 md:ml-0 md:pl-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="mb-16 relative pl-8"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                  <span className="text-xs font-black text-sky uppercase tracking-widest">{exp.period}</span>
                  <h3 className="text-2xl font-black text-navy">{exp.company}</h3>
                </div>

                <h4 className="text-lg font-bold text-primary/80 mb-4 italic flex items-center gap-2">
                  <Briefcase size={16} /> {exp.role}
                </h4>

                <p className="text-text-muted mb-6 leading-relaxed text-lg max-w-2xl font-medium">{exp.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(s => (
                    <span key={s} className="px-4 py-1.5 bg-white border border-border-subtle rounded-full text-[10px] font-bold uppercase tracking-wider text-navy shadow-sm hover:border-sky hover:text-sky transition-all cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Project: Lamilano */}
      <section id="projects" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-navy mb-4">Featured Work</h2>
            <div className="w-16 h-1 bg-sky mx-auto rounded-full" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium p-8 md:p-16 mb-20 relative overflow-hidden group border-2 border-primary/5"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full -mr-40 -mt-40 blur-[100px] group-hover:bg-primary/10 transition-all duration-700" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <span className="flex items-center gap-2 text-[10px] font-black text-sky uppercase tracking-[0.4em] mb-6">
                  <div className="w-10 h-[1px] bg-sky" /> Featured Case Study
                </span>
                <h3 className="text-6xl md:text-8xl font-black mb-8 italic tracking-tighter text-navy">{mainProject.title}</h3>
                <p className="text-xl text-text-muted mb-12 leading-relaxed font-medium border-l-4 border-sky pl-6">
                  {mainProject.desc}
                </p>
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
              <div className="relative">
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
                {/* Dynamic Floating Labels */}
                <div className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-border-subtle hidden xl:block animate-float">
                  <p className="text-[10px] font-black text-sky uppercase mb-1">Response Time</p>
                  <p className="text-xl font-black text-navy">0.2s</p>
                </div>
                <div className="absolute -left-12 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-border-subtle hidden xl:block animate-float" style={{ animationDelay: '1s' }}>
                  <p className="text-[10px] font-black text-sky uppercase mb-1">Smoothness</p>
                  <p className="text-xl font-black text-navy">60 FPS</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((p, i) => (
              <div key={i} className="card-premium p-10 flex flex-col">
                <div className="w-14 h-14 bg-sky-light rounded-2xl flex items-center justify-center mb-10 text-primary">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{p.title}</h3>
                <p className="text-sm text-text-muted mb-10 leading-relaxed line-clamp-2">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map(t => <span key={t} className="px-3 py-1 bg-bg-soft rounded-md text-[9px] font-bold text-navy uppercase tracking-wider">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-padding bg-bg-soft" >
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <span className="text-xs font-black text-sky uppercase tracking-[0.3em] mb-4 block text-center">Technical Proficiency</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-navy text-center mb-16">Mastered <br /><span className="text-gradient">Technologies</span>.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-border-subtle shadow-sm"
              >
                <h3 className="text-lg font-black uppercase tracking-widest text-navy mb-8 pb-4 border-b border-border-subtle flex items-center justify-between">
                  {cat.title}
                  <Zap size={16} className="text-sky" />
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-bg-soft flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-sky-light transition-all">
                        {item.icon}
                      </div>
                      <span className="text-sm font-bold text-text-muted group-hover:text-navy transition-colors">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Services */}
      <section className="section-padding relative" >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-black text-sky uppercase tracking-[0.3em] mb-4 block">How I Help Clients</span>
              <h2 className="text-5xl md:text-6xl font-heading font-black text-navy uppercase leading-tight mb-8">Specialized Solutions.</h2>
              <p className="text-xl text-text-muted mb-12 font-medium">I don't just build apps; I create business drivers with a focus on high retention and technical excellence.</p>

              <div className="space-y-6">
                {services.map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex gap-6 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all group border border-transparent hover:border-border-subtle"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-sky-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-navy mb-1 uppercase tracking-tight">{s.title}</h4>
                      <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
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
                    <div className="flex gap-6 border-t border-white/10 pt-8">
                      <div className="text-6xl font-black text-sky-light/20">02</div>
                      <p className="text-lg text-white font-medium">Zero technical debt with clean, scalable, and fully documented codebases.</p>
                    </div>
                    <div className="flex gap-6 border-t border-white/10 pt-8">
                      <div className="text-6xl font-black text-sky-light/20">03</div>
                      <p className="text-lg text-white font-medium">Expertise in both Food-Tech and Fintech—handling complex payment systems is my specialty.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding relative overflow-hidden" >
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

      <footer className="py-12 border-t border-border-subtle text-center text-text-muted/60">
        <p className="text-[10px] font-black uppercase tracking-[0.3em]">&copy; {new Date().getFullYear()} Bhoomi Shah / Sr. React Native Developer</p>
      </footer>
    </div>
  );
};

// Helper components
const Users = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

export default App;
