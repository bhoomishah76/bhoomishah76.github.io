import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './App.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

import data, { HeroImageSrc } from './data';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  React.useEffect(() => {
    // Simulating "Always Allow" permissions as requested
    console.log("%c System: All permissions granted (Always Allow) ", "background: #1e40af; color: #fff; padding: 2px 5px; border-radius: 3px;");
  }, []);

  return (
    <div className="min-h-screen text-navy relative">
      <div className="bg-mesh" />

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left" style={{ scaleX }} />

      <Nav />

      <main>
        <Hero stats={data.stats} HeroImage={HeroImageSrc} />
        <Experience experiences={data.experiences} />
        <Projects mainProject={data.mainProject} otherProjects={data.otherProjects} />
        <Skills skillCategories={data.skillCategories} />
        <Services services={data.services} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
