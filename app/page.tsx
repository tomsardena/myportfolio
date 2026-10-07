'use client';

import React, { useSyncExternalStore } from 'react';
import CustomCursor from '@/src/components/CustomCursor';
import Navigation from '@/src/components/Navigation';
import OpeningSequence from '@/src/components/OpeningSequence';
import HeroScene from '@/src/components/HeroScene';
import VisionSection from '@/src/components/VisionSection';
import SelectedWork from '@/src/components/SelectedWork';
import CapabilitiesMatrix from '@/src/components/CapabilitiesMatrix';
import SelectedArchive from '@/src/components/SelectedArchive';
import ContactSection from '@/src/components/ContactSection';
import Footer from '@/src/components/Footer';

function subscribeIntro(callback: () => void) {
  window.addEventListener('intro_state_change', callback);
  return () => window.removeEventListener('intro_state_change', callback);
}

function getIntroSnapshot() {
  return !sessionStorage.getItem('aurelius_intro_seen');
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

  const handleCompleteIntro = () => {
    sessionStorage.setItem('aurelius_intro_seen', 'true');
    window.dispatchEvent(new Event('intro_state_change'));
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem('aurelius_intro_seen');
    window.dispatchEvent(new Event('intro_state_change'));
  };

  return (
    <main className="relative min-h-screen bg-[#070709] text-[#f5f5f7] overflow-x-hidden">
      {/* Custom magnetic desktop cursor */}
      <CustomCursor />

      {/* Cinematic opening sequence */}
      {showIntro && <OpeningSequence onComplete={handleCompleteIntro} />}

      {/* Persistent top bar adhering to Top Bar Contract */}
      <Navigation
        onOpenContact={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Scene 1: The Immersive WebGL Hero */}
      <HeroScene />

      {/* Scene 2: The Editorial Vision & Manifesto */}
      <VisionSection />

      {/* Scene 3: Feature Presentations (Selected Works) */}
      <SelectedWork />

      {/* Scene 4: Architectural Capabilities & Inspector */}
      <CapabilitiesMatrix />

      {/* Scene 5: Laboratory Artifacts & Research */}
      <SelectedArchive />

      {/* Scene 6: The Final Scene (Contact & Commission Dialogue) */}
      <ContactSection />

      {/* Scene 7: Minimalist Footer */}
      <Footer onReplayIntro={handleReplayIntro} />
    </main>
  );
}
