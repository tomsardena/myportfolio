'use client';

import React, { useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { gsap, ScrollTrigger, isReducedMotion } from '@/src/lib/animations';

export default function ManifestoScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const line3Ref = useRef<HTMLHeadingElement>(null);
  const textBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Staggered cinematic text reveal
      tl.fromTo(
        line1Ref.current,
        { opacity: 0.2, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        0
      );

      tl.fromTo(
        line2Ref.current,
        { opacity: 0.1, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        0.5
      );

      tl.fromTo(
        line3Ref.current,
        { opacity: 0.1, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        1.0
      );

      tl.fromTo(
        textBodyRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power1.out' },
        1.3
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative w-full h-screen bg-[#08080a] flex items-center justify-center px-6 md:px-12 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col justify-between h-full py-20">
        {/* Scene Index */}
        <div className="flex items-center justify-between text-xs font-mono text-[#71717a] pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="text-[#d8b08c]">Scene 02</span>
            <span>&middot;</span>
            <span className="uppercase tracking-widest text-[#a1a1aa]">Personal Statement &amp; Ethos</span>
          </div>
          <span className="hidden sm:inline uppercase tracking-widest text-[11px]">Editorial Manifesto</span>
        </div>

        {/* Monumental Progressive Text Reveals */}
        <div className="my-auto max-w-5xl flex flex-col gap-2 sm:gap-4">
          <h2
            ref={line1Ref}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#a1a1aa] uppercase select-none transition-opacity"
          >
            {PORTFOLIO_DATA.creator.manifesto.line1}
          </h2>

          <h2
            ref={line2Ref}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#f4f4f6] uppercase select-none transition-opacity"
          >
            {PORTFOLIO_DATA.creator.manifesto.line2}
          </h2>

          <h2
            ref={line3Ref}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#d8b08c] uppercase select-none transition-opacity"
          >
            {PORTFOLIO_DATA.creator.manifesto.line3}
          </h2>

          <div
            ref={textBodyRef}
            className="mt-8 pt-8 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          >
            <div className="md:col-span-4 text-xs font-mono text-[#a1a1aa] uppercase tracking-widest">
              Core Creative Philosophy
            </div>
            <div className="md:col-span-8">
              <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed max-w-2xl">
                {PORTFOLIO_DATA.creator.manifesto.supportingText}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom telemetry footer */}
        <div className="flex items-center justify-between text-xs font-mono text-[#71717a] pt-4 border-t border-white/[0.06]">
          <span>THE BROWSER AS A CINEMATIC MEDIUM</span>
          <span className="hidden sm:inline">60 FPS CAMERA CHOREOGRAPHY</span>
        </div>
      </div>
    </section>
  );
}
