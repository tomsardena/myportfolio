'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';

interface FooterProps {
  onReplayIntro: () => void;
}

export default function CinematicFooter({ onReplayIntro }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#08080a] py-16 px-6 md:px-12 text-xs font-mono text-[#71717a]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Creator Name & Copyright */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-[#f4f4f6]">
            <span className="font-semibold text-sm tracking-tight uppercase">
              {PORTFOLIO_DATA.creator.name}
            </span>
            <span className="text-[#71717a]">&middot;</span>
            <span className="text-xs text-[#a1a1aa]">{PORTFOLIO_DATA.creator.role}</span>
          </div>
          <p className="text-[#71717a]">
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.creator.name}. All rights reserved.
          </p>
        </div>

        {/* Center: Replay Title Sequence */}
        <div className="flex items-center gap-6 text-[#a1a1aa]">
          <button
            onClick={onReplayIntro}
            className="hover:text-[#d8b08c] transition-colors uppercase tracking-wider"
          >
            Replay Title Sequence
          </button>
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[#a1a1aa] hover:text-[#f4f4f6] transition-colors uppercase tracking-widest"
          >
            <span>Back to Top</span>
            <span className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#d8b08c] transition-colors">
              &uarr;
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
