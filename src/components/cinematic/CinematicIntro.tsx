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
    const t1 = setTimeout(() => setPhase(1), 350); // Intro subtitle
    const t2 = setTimeout(() => setPhase(2), 1000); // Main Name reveal
    const t3 = setTimeout(() => setPhase(3), 1800); // Role/Statement
    const t4 = setTimeout(() => handleFinish(), 2900); // Seamless dissolve into Hero

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
        exit={{ opacity: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-[10000] bg-[#09090b] flex flex-col justify-between px-[var(--page-padding)] py-12 select-none cursor-default"
      >
        {/* Top Header Row with Skip Trigger */}
        <div className="flex items-center justify-between editorial-meta text-[#52525c]">
          <span>Presentation</span>
          <button
            onClick={handleFinish}
            className="group flex items-center gap-2 text-[#8e8e99] hover:text-[#f5f5f7] transition-colors"
          >
            <span>Skip Intro</span>
            <span className="px-1.5 py-0.5 rounded border border-white/10 group-hover:border-white/30 text-[10px]">
              ESC
            </span>
          </button>
        </div>

        {/* Title Sequence */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center my-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4"
          >
            <p className="editorial-meta text-[#8e8e99]">
              Portfolio Of
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: phase >= 2 ? 1 : 0, scale: phase >= 2 ? 1 : 0.97 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className="display-hero text-[#f5f5f7] uppercase tracking-tight">
              {PORTFOLIO_DATA.creator.name}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: phase >= 3 ? 1 : 0, y: phase >= 3 ? 0 : 15 }}
            transition={{ duration: 0.7 }}
            className="mt-6"
          >
            <p className="editorial-meta text-[#d4a373]">
              {PORTFOLIO_DATA.creator.role}
            </p>
          </motion.div>
        </div>

        {/* Minimal Progress Line */}
        <div className="max-w-xs mx-auto w-full">
          <div className="w-full h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.8, ease: 'linear' }}
              className="h-full bg-[#d4a373]"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
