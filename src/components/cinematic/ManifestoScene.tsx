'use client';

import React, { useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { gsap, ScrollTrigger, isReducedMotion } from '@/src/lib/animations';

export default function ManifestoScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const phrase1Ref = useRef<HTMLHeadingElement>(null);
  const phrase2Ref = useRef<HTMLHeadingElement>(null);
  const phrase3Ref = useRef<HTMLHeadingElement>(null);
  const supportingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      // Phrase 1 enters with horizontal slide and scale
      tl.fromTo(
        phrase1Ref.current,
        { opacity: 0.15, x: -60, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, ease: 'power2.out' },
        0
      );

      // Phrase 2 expands into central dominance
      tl.fromTo(
        phrase2Ref.current,
        { opacity: 0.1, scale: 0.9, y: 40 },
        { opacity: 1, scale: 1, y: 0, ease: 'power2.out' },
        0.35
      );

      // Phrase 3 locks in
      tl.fromTo(
        phrase3Ref.current,
        { opacity: 0.1, scale: 0.92, y: 40 },
        { opacity: 1, scale: 1, y: 0, ease: 'power2.out' },
        0.7
      );

      // Supporting narrative unmasks
      tl.fromTo(
        supportingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: 'power1.out' },
        0.85
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="story" ref={containerRef} className="relative h-[260vh] w-full bg-[#09090b] border-t border-white/[0.06]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between px-[var(--page-padding)] py-12">
        {/* Editorial Subtitle */}
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between editorial-meta text-[#8e8e99] pb-4 border-b border-white/[0.06]">
          <span className="text-[#d4a373]">Manifesto</span>
          <span className="hidden sm:inline text-[#52525c]">&mdash;</span>
          <span>Core Creative Ethos</span>
        </div>

        {/* Monumental Pinned Typographic Statements */}
        <div className="w-full max-w-[1440px] mx-auto my-auto flex flex-col gap-2 sm:gap-4">
          <h2
            ref={phrase1Ref}
            className="display-statement text-[#8e8e99] uppercase tracking-tight will-change-transform"
          >
            {PORTFOLIO_DATA.creator.manifesto.line1}
          </h2>

          <h2
            ref={phrase2Ref}
            className="display-statement text-[#f5f5f7] uppercase tracking-tight will-change-transform"
          >
            {PORTFOLIO_DATA.creator.manifesto.line2}
          </h2>

          <h2
            ref={phrase3Ref}
            className="display-statement text-[#f5f5f7] uppercase tracking-tight will-change-transform"
          >
            {PORTFOLIO_DATA.creator.manifesto.line3}
          </h2>

          {/* Supporting Philosophy */}
          <div
            ref={supportingRef}
            className="mt-8 pt-8 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-12 gap-8 items-start will-change-transform"
          >
            <div className="md:col-span-4 editorial-meta text-[#8e8e99]">
              Perspective
            </div>
            <div className="md:col-span-8">
              <p className="body-large text-[#8e8e99] font-light max-w-2xl leading-relaxed">
                {PORTFOLIO_DATA.creator.manifesto.supportingText}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Baseline */}
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between editorial-meta text-[#52525c] pt-2 border-t border-white/[0.06]">
          <span>Interactive Narrative Direction</span>
          <span className="hidden sm:inline">60 FPS Smooth Scroll</span>
        </div>
      </div>
    </div>
  );
}
