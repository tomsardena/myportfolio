'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [phase, setPhase] = useState<number>(0);

  const handleFinish = useCallback(() => {
    sessionStorage.setItem('portfolio_intro_seen', 'true');
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400); // Intro subtitle
    const t2 = setTimeout(() => setPhase(2), 1100); // Main Name reveal
    const t3 = setTimeout(() => setPhase(3), 2000); // Role/Statement
    const t4 = setTimeout(() => handleFinish(), 3200); // Seamless dissolve into Hero

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-[10000] bg-[#08080a] flex flex-col justify-between p-8 md:p-16 select-none cursor-default"
      >
        {/* Top Header Row with Skip Trigger */}
        <div className="flex items-center justify-between text-xs font-mono text-[#71717a]">
          <span className="tracking-[0.2em] uppercase text-[11px] opacity-60">Scene 00 &middot; Opening Title</span>
          <button
            onClick={handleFinish}
            className="group flex items-center gap-2 text-[#a1a1aa] hover:text-[#f4f4f6] transition-colors uppercase tracking-widest text-[11px]"
          >
            <span>Skip Intro</span>
            <span className="px-1.5 py-0.5 rounded border border-white/10 group-hover:border-white/30 text-[10px]">
              ESC
            </span>
          </button>
        </div>

        {/* Cinematic Title Presentation */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center my-auto">
          {/* Subtitle kicker */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <p className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase text-[#a1a1aa]">
              A Digital Presentation
            </p>
          </motion.div>

          {/* Large Title Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: phase >= 2 ? 1 : 0, scale: phase >= 2 ? 1 : 0.96 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-[#f4f4f6] uppercase">
              {PORTFOLIO_DATA.creator.name}
            </h1>
          </motion.div>

          {/* Positioning statement */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: phase >= 3 ? 1 : 0, y: phase >= 3 ? 0 : 15 }}
            transition={{ duration: 0.8 }}
            className="mt-6"
          >
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#d8b08c]">
              {PORTFOLIO_DATA.creator.role}
            </p>
          </motion.div>
        </div>

        {/* Bottom subtle progress line */}
        <div className="max-w-xs mx-auto w-full">
          <div className="w-full h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.0, ease: 'linear' }}
              className="h-full bg-[#d8b08c]"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
