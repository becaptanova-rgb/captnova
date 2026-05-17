'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import AboutSection from '@/components/sections/AboutSection';
import PainSection from '@/components/sections/PainSection';
import TransformSection from '@/components/sections/TransformSection';
import ProgramsOverview from '@/components/sections/ProgramsOverview';
import FounderSection from '@/components/sections/FounderSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';
import LeadCaptureSection from '@/components/sections/LeadCaptureSection';
import CtaSection from '@/components/sections/CtaSection';

export default function HomePageClient() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <PainSection />
      <TransformSection />
      <ProgramsOverview />
      <FounderSection />
      <TestimonialsSection />
      <FaqSection />
      <LeadCaptureSection />
      <CtaSection />
    </>
  );
}
