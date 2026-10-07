'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { audioEngine } from '@/src/lib/audioManager';

interface FooterProps {
  onReplayIntro: () => void;
}

export default function Footer({ onReplayIntro }: FooterProps) {
  const scrollToTop = () => {
    audioEngine.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#070709] py-16 px-6 md:px-12 text-xs font-mono text-[#575764]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-[#f5f5f7]">
            <span className="font-semibold text-sm tracking-tight uppercase">
              {PORTFOLIO_DATA.creator.name}
            </span>
            <span className="text-[#575764]">&middot;</span>
            <span className="text-xs text-[#9c9ca8]">{PORTFOLIO_DATA.creator.title}</span>
          </div>
          <p className="text-[#575764]">
            &copy; {new Date().getFullYear()} Aurelius Vane. All rights reserved. Directed &amp; engineered
            in Stockholm.
          </p>
        </div>

        {/* Center: Replay Intro & Quick Actions */}
        <div className="flex items-center gap-6 text-[#9c9ca8]">
          <button
            onClick={() => {
              audioEngine.playClick();
              onReplayIntro();
            }}
            className="hover:text-[#e59b4c] transition-colors uppercase tracking-wider"
          >
            Replay Title Sequence
          </button>
          <span>&middot;</span>
          <a
            href="mailto:aurelius.vane.creative@gmail.com"
            className="hover:text-[#e59b4c] transition-colors uppercase tracking-wider"
          >
            PGP Key
          </a>
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[#9c9ca8] hover:text-[#f5f5f7] transition-colors uppercase tracking-widest"
            data-cursor="TOP"
          >
            <span>Back to Zenith</span>
            <span className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#e59b4c] transition-colors">
              &uarr;
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
