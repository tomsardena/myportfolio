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
    <footer className="w-full border-t border-white/[0.06] bg-[#09090b] py-16 px-[var(--page-padding)] editorial-meta text-[#52525c]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Creator Name & Copyright */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-[#f5f5f7]">
            <span className="font-semibold">{PORTFOLIO_DATA.creator.name}</span>
            <span>&middot;</span>
            <span className="text-[#8e8e99]">{PORTFOLIO_DATA.creator.role}</span>
          </div>
          <p className="text-[#52525c]">
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.creator.name}. All rights reserved.
          </p>
        </div>

        {/* Center: Replay Intro */}
        <div className="flex items-center gap-6 text-[#8e8e99]">
          <button
            onClick={onReplayIntro}
            className="hover:text-[#d4a373] transition-colors"
          >
            Replay Title Sequence
          </button>
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="editorial-link group text-[#8e8e99] hover:text-[#f5f5f7]"
          >
            <span>Back to Top</span>
            <span className="group-hover:-translate-y-1 transition-transform">&uarr;</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
