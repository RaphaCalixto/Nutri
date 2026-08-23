import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import TargetAudience from './components/TargetAudience';
import Methodology from './components/Methodology';
import Specialties from './components/Specialties';
import Testimonials from './components/Testimonials';
import AboutBio from './components/AboutBio';
import FaqSection from './components/FaqSection';
import LocationSection from './components/LocationSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import WhatsappWidget from './components/WhatsappWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col font-sans relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ValueProposition />
        <TargetAudience />
        <Methodology />
        <Specialties />
        <Testimonials />
        <AboutBio />
        <FaqSection />
        <LocationSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappWidget />
    </div>
  );
}
