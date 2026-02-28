import React from 'react';
import { Zap, ShoppingCart, ShieldCheck, Layout, Award, Target } from 'lucide-react';

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

export const HeroImageSrc = HeroImage;

export const stats = [
  { label: 'Live Apps', value: '50+' },
  { label: 'Years Exp.', value: '5+' },
  { label: 'App Store', value: 'Live' },
  { label: 'Play Store', value: 'Live' }
];

export const experiences = [
  {
    company: 'Orderloop, Rajkot',
    role: 'React Native Developer',
    period: '2025 - Present',
    desc: 'Leading mobile innovation for enterprise-grade food-tech solutions. Focused on high-performance ordering systems and real-time delivery tracking architecture.',
    skills: ['Enterprise Arc', 'Real-time Sync', 'Optimization']
  },
  {
    company: 'Codetown Technologies, Udaipur',
    role: 'React Native Developer',
    period: '2024 - 2025',
    desc: 'Architected sophisticated UI architectures and integrated complex third-party fintech services for global client requirements.',
    skills: ['UI Systems', 'API Security', 'Agile Delivery']
  },
  {
    company: 'Codeal Infoway, Rajkot',
    role: 'Sr. React Native Developer',
    period: '2021 - 2024',
    desc: 'Strategic lead for mobile growth. Spearheaded development of 10+ high-traffic applications and mentored a team of developers.',
    skills: ['Team Leadership', 'App Deployment', 'Security']
  }
];

export const mainProject = {
  title: 'La Milano Pizzeria',
  category: 'High-Scale E-Commerce',
  desc: 'A flagship mobile commerce platform engineered with advanced React Native architecture. This project integrates core retail flows like secure payments, membership loyalty, and gamified user engagement.',
  tags: ['React Native', 'Paytm UPI', 'Redux Toolkit', 'Size Matters'],
  image: LamilanoBrand,
  features: [
    { icon: <Zap size={18} />, title: 'SplashScreen', text: 'Custom branded onboarding with optimized loading.' },
    { icon: <Target size={18} />, title: 'Live Rider Tracking', text: 'Real-time logistics with automated location updates.' },
    { icon: <ShieldCheck size={18} />, title: 'Paytm UPI', text: 'Deep-linked secure payment gateway integration.' },
    { icon: <Layout size={18} />, title: 'Offer Screen UI', text: 'Dynamic promotional layouts with personalized rewards.' },
    { icon: <Award size={18} />, title: 'Gamification', text: 'Interactive Spin Wheel and Scratch Card modules.' },
    { icon: <ShoppingCart size={18} />, title: 'Cart Flow', text: 'Optimized end-to-end checkout and basket management.' }
  ]
};

export const otherProjects = [
  { title: 'London Yard Pizza', desc: 'Premium pizza retail platform with advanced order customization and real-time delivery logistics.', tags: ['Pizza Tech', 'Logistics', 'UI'], icon: <img src={LondonYardIcon} alt='London Yard Pizza' className='w-12 h-12 object-contain' /> },
  { title: "Sam's Pizza", desc: "High-scale e-commerce platform for Sam's Pizza, featuring loyalty rewards and optimized checkout flows.", tags: ['E-Commerce', 'Loyalty', 'Scale'], icon: <img src={SamsPizzaIcon} alt="Sam's Pizza" className='w-12 h-12 object-contain' /> },
  { title: 'Santushti Shakes', desc: 'Specialized beverage platform with dynamic category management and real-time inventory tracking.', tags: ['Beverage', 'Inventory', 'Real-time'], icon: <img src={SantushtiIcon} alt='Santushti Shakes' className='w-12 h-12 object-contain' /> },
  { title: 'The Grand Thakar', desc: 'Premium restaurant application for traditional hospitality, featuring table booking and festive offer management.', tags: ['Hospitality', 'Booking', 'CRM'], icon: <img src={TgtIcon} alt='The Grand Thakar' className='w-12 h-12 object-contain' /> },
  { title: 'The Imperial Palace', desc: 'Luxury hotel and dining app with integrated room service and premium concierge features.', tags: ['Luxury', 'Concierge', 'Fintech'], icon: <img src={ImperialIcon} alt='The Imperial Palace' className='w-12 h-12 object-contain' /> },
  { title: 'Saraza', desc: 'High-end dining platform with advanced reservation logic and loyalty program integration.', tags: ['Dining', 'Reservation', 'Loyalty'], icon: <img src={SarazaIcon} alt='Saraza' className='w-12 h-12 object-contain' /> },
  { title: 'Matuki Restaurant', desc: 'Traditional cuisine ordering app with local delivery optimization and secure payment gateways.', tags: ['Traditional', 'Local', 'Secure'], icon: <img src={MatukiIcon} alt='Matuki Restaurant' className='w-12 h-12 object-contain' /> },
  { title: "Mehul's Kitchen", desc: 'Family-owned restaurant app featuring daily special management and personalized user profiles.', tags: ['Family Dining', 'Special Offers', 'CRM'], icon: <img src={MehulsIcon} alt="Mehul's Kitchen" className='w-12 h-12 object-contain' /> },
  { title: 'Narayanbhai Bhelwala', desc: 'Iconic street food platform with high-volume order processing and real-time prep tracking.', tags: ['Street Food', 'High Velocity', 'Tracking'], icon: <img src={NarayanbhaiIcon} alt='Narayanbhai' className='w-12 h-12 object-contain' /> },
  { title: 'Olive', desc: 'Sophisticated Mediterranean dining app with curated menu selections and premium rewards.', tags: ['Dining', 'Curated', 'UX'], icon: <img src={OliveIcon} alt='Olive' className='w-12 h-12 object-contain' /> },
  { title: 'Sonali Restaurant', desc: 'Multi-cuisine ordering platform with optimized delivery logistics and feedback management.', tags: ['Multi-cuisine', 'Feedback', 'Logistics'], icon: <img src={SonaliIcon} alt='Sonali' className='w-12 h-12 object-contain' /> },
  { title: 'New Freezeland', desc: 'Premium dessert and ice cream ordering platform with optimized delivery logistics and real-time inventory sync.', tags: ['React Native', 'Logistics', 'Inventory'], icon: <img src={FreezelandIcon} alt='Freezeland' className='w-12 h-12 object-contain' /> },
  { title: "O' Chicken", desc: 'Specialized retail application for poultry products with dynamic inventory management and regional delivery support.', tags: ['Retail', 'Inventory', 'Regional'], icon: <img src={OChickenIcon} alt="O' Chicken" className='w-12 h-12 object-contain' /> },
  { title: 'Raj Pavbhaji', desc: 'High-traffic fast food platform featuring high-scale order processing and advanced real-time tracking systems.', tags: ['Fast Food', 'Scale', 'Tracking'], icon: <img src={RajPavbhajiIcon} alt='Raj Pavbhaji' className='w-12 h-12 object-contain' /> },
  { title: 'Size Zero', desc: 'Modern health-focused food delivery app with calorie tracking and personalized meal navigation systems.', tags: ['Health', 'UI Architecture', 'Navigation'], icon: <img src={SizeZeroIcon} alt='Size Zero' className='w-12 h-12 object-contain' /> }
];

export const skillCategories = [
  {
    title: 'Core Expertise',
    items: [
      { name: 'React Native', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Redux Toolkit', icon: '⚡' },
      { name: 'React Navigation', icon: '🗺️' }
    ]
  },
  {
    title: 'Fintech & Integrations',
    items: [
      { name: 'Razorpay', icon: '💳' },
      { name: 'Paytm SDK', icon: '💰' },
      { name: 'CCAvenue / HDFC', icon: '🏦' },
      { name: 'Firebase', icon: '🔥' }
    ]
  },
  {
    title: 'Delivery & Performance',
    items: [
      { name: 'Native Modules', icon: '⚙️' },
      { name: 'Performance Opt.', icon: '🚀' },
      { name: 'App Store / Play Store', icon: '📱' },
      { name: 'CI/CD Pipeline', icon: '📦' }
    ]
  }
];

export const services = [
  { title: 'Mobile Architecture', desc: 'Building scalable, high-performance apps from the ground up using React Native.', icon: <Layout className="text-sky" size={28} /> },
  { title: 'Fintech Integration', desc: 'Secure payment gateway implementation (Razorpay, Paytm, HDFC) with robust fallback handling.', icon: <ShieldCheck className="text-sky" size={28} /> },
  { title: 'Performance Tuning', desc: 'Optimizing existing applications for fluid 60FPS animations and lightning-fast load times.', icon: <Zap className="text-sky" size={28} /> }
];

export default {
  stats,
  experiences,
  mainProject,
  otherProjects,
  skillCategories,
  services,
  HeroImageSrc
};
