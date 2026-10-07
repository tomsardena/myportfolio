'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { gsap, ScrollTrigger, isReducedMotion } from '@/src/lib/animations';

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Cinematic Camera Zoom Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Camera flies inward: background scales, text recedes into depth
      tl.to(
        bgImageRef.current,
        {
          scale: 1.25,
          yPercent: 8,
          ease: 'none',
        },
        0
      );

      tl.to(
        textContentRef.current,
        {
          yPercent: -20,
          opacity: 0,
          scale: 0.95,
          ease: 'power1.inOut',
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToWorks = () => {
    const el = document.getElementById('works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStory = () => {
    const el = document.getElementById('story');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#08080a] flex items-center justify-center"
    >
      {/* Visual Environment / Cinematic Background Plate */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-full will-change-transform scale-100 origin-center pointer-events-none"
      >
        <Image
          src="/images/project_lumina_chronicles_1791386245032.jpg"
          alt="Atmospheric architectural environment"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35 filter brightness-75 contrast-125 grayscale"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-[#08080a] opacity-90" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#08080a]/50 to-[#08080a]" />
      </div>

      {/* Hero Content Layer */}
      <div
        ref={textContentRef}
        className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 flex flex-col justify-between h-full pt-32 pb-12 will-change-transform"
      >
        {/* Top Kicker */}
        <div className="flex items-center justify-between text-xs font-mono text-[#a1a1aa] pb-4 border-b border-white/[0.06]">
          <span className="uppercase tracking-[0.25em] text-[#d8b08c]">
            {PORTFOLIO_DATA.creator.role}
          </span>
          <span className="hidden sm:inline uppercase tracking-widest text-[#71717a]">
            {PORTFOLIO_DATA.creator.location} &middot; {PORTFOLIO_DATA.creator.availability}
          </span>
        </div>

        {/* Central Asymmetrical Monumental Typography */}
        <div className="my-auto max-w-5xl">
          <p className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-[#a1a1aa] mb-4">
            Scene 01 &middot; Portfolio of {PORTFOLIO_DATA.creator.name}
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[#f4f4f6] uppercase leading-[0.92] select-none">
            Building
            <br />
            <span className="text-[#a1a1aa]">Digital</span>
            <br />
            <span className="text-[#d8b08c]">Experiences.</span>
          </h1>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] font-light leading-relaxed max-w-xl">
                {PORTFOLIO_DATA.creator.heroSubstatement}
              </p>
            </div>

            <div className="md:col-span-4 flex flex-wrap gap-4 items-center md:justify-end">
              <button
                onClick={scrollToWorks}
                className="px-6 py-3.5 rounded-full bg-[#f4f4f6] hover:bg-[#d8b08c] text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300"
              >
                Explore Works &rarr;
              </button>

              <button
                onClick={scrollToStory}
                className="px-6 py-3.5 rounded-full border border-white/15 hover:border-white/35 bg-white/[0.02] text-[#f4f4f6] font-medium text-xs uppercase tracking-widest transition-all duration-300"
              >
                Read Story
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Prompt */}
        <div className="flex items-center justify-between text-xs font-mono text-[#71717a] pt-4 border-t border-white/[0.06]">
          <span className="uppercase tracking-widest text-[11px]">
            Scroll controls camera progression
          </span>

          <button
            onClick={scrollToWorks}
            className="flex items-center gap-3 text-[#a1a1aa] hover:text-[#f4f4f6] transition-colors uppercase tracking-widest text-[11px]"
          >
            <span>Scroll Down</span>
            <span className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
              <span className="w-1 h-1 bg-[#d8b08c] rounded-full animate-bounce" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
