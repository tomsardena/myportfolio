'use client';

import React, { useEffect, useSyncExternalStore } from 'react';
import CinematicCursor from '@/src/components/cinematic/CinematicCursor';
import CinematicNavigation from '@/src/components/cinematic/CinematicNavigation';
import CinematicIntro from '@/src/components/cinematic/CinematicIntro';
import CinematicHero from '@/src/components/cinematic/CinematicHero';
import ManifestoScene from '@/src/components/cinematic/ManifestoScene';
import ProjectShowcase from '@/src/components/cinematic/ProjectShowcase';
import SkillsScene from '@/src/components/cinematic/SkillsScene';
import ContactScene from '@/src/components/cinematic/ContactScene';
import CinematicFooter from '@/src/components/cinematic/CinematicFooter';
import { initSmoothScroll, destroySmoothScroll } from '@/src/lib/smoothScroll';

function subscribeIntro(callback: () => void) {
  window.addEventListener('intro_state_change', callback);
  return () => window.removeEventListener('intro_state_change', callback);
}

function getIntroSnapshot() {
  return !sessionStorage.getItem('portfolio_intro_seen');
}

function getServerIntroSnapshot() {
  return false;
}

export default function Home() {
  const showIntro = useSyncExternalStore(
    subscribeIntro,
    getIntroSnapshot,
    getServerIntroSnapshot
  );

  useEffect(() => {
    // Initialize Lenis smooth scroll and synchronise with GSAP
    initSmoothScroll();
    return () => {
      destroySmoothScroll();
    };
  }, []);

  const handleCompleteIntro = () => {
    sessionStorage.setItem('portfolio_intro_seen', 'true');
    window.dispatchEvent(new Event('intro_state_change'));
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem('portfolio_intro_seen');
    window.dispatchEvent(new Event('intro_state_change'));
  };

  return (
    <main className="relative min-h-screen bg-[#08080a] text-[#f4f4f6] overflow-x-hidden selection:bg-[#d8b08c] selection:text-black">
      {/* Subtle luxury magnetic cursor for desktop */}
      <CinematicCursor />

      {/* Act 00: The Opening Title Sequence */}
      {showIntro && <CinematicIntro onComplete={handleCompleteIntro} />}

      {/* Floating Minimal Navigation */}
      <CinematicNavigation
        onContactClick={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Scene 01: The Camera-Zoom Hero */}
      <CinematicHero />

      {/* Scene 02: The Personal Statement & Progressive Reveal */}
      <ManifestoScene />

      {/* Scene 03: Feature Presentations (Each project as its own cinematic scene) */}
      <ProjectShowcase />

      {/* Scene 04: Capabilities Matrix (Interactive Craft Systems) */}
      <SkillsScene />

      {/* Scene 05: The Final Act (Dialogue & Contact) */}
      <ContactScene />

      {/* Minimalist Editorial Footer */}
      <CinematicFooter onReplayIntro={handleReplayIntro} />
    </main>
  );
}
