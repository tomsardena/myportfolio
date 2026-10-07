'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { audioEngine } from '@/src/lib/audioManager';

interface OpeningSequenceProps {
  onComplete: () => void;
}

export default function OpeningSequence({ onComplete }: OpeningSequenceProps) {
  const [stage, setStage] = useState<number>(0);
  const [progress, setProgress] = useState(0);

  const finish = useCallback(() => {
    sessionStorage.setItem('aurelius_intro_seen', 'true');
    audioEngine.playChime(620, 0.04);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 40);

    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1300);
    const timer3 = setTimeout(() => setStage(3), 2000);
    const finishTimer = setTimeout(() => {
      finish();
    }, 2500);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        finish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(finishTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [finish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-[10000] bg-[#070709] flex flex-col justify-between p-8 md:p-16 select-none"
      >
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between text-xs font-mono text-[#575764]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e59b4c] animate-ping" />
            <span className="tracking-widest uppercase">Initializing Canvas Environment</span>
          </div>
          <button
            onClick={finish}
            className="group flex items-center gap-2 text-[#9c9ca8] hover:text-[#e59b4c] transition-colors uppercase tracking-wider text-[11px]"
          >
            <span>Skip Sequence</span>
            <span className="px-1.5 py-0.5 rounded border border-white/10 group-hover:border-[#e59b4c]/50 text-[10px]">
              ESC
            </span>
          </button>
        </div>

        {/* Central Title Animation */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-[#f5f5f7] uppercase">
              Aurelius Vane
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 15 }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <p className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.25em] text-[#e59b4c]">
              Creative Direction &middot; Technical Architecture
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 2 ? 0.7 : 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 max-w-md text-xs sm:text-sm text-[#9c9ca8] leading-relaxed font-light"
          >
            Composing digital realities at the intersection of cinematic art and real-time graphics.
          </motion.div>
        </div>

        {/* Bottom Loading Progress Bar */}
        <div className="flex flex-col gap-2 max-w-sm mx-auto w-full">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#575764]">
            <span>LOADING ARCHIVE</span>
            <span>{Math.min(100, Math.round(progress))}%</span>
          </div>
          <div className="w-full h-[2px] bg-white/10 overflow-hidden rounded-full">
            <motion.div
              style={{ width: `${Math.min(100, progress)}%` }}
              className="h-full bg-[#e59b4c] transition-all duration-75"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
