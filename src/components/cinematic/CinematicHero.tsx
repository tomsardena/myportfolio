'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { gsap, ScrollTrigger, isReducedMotion } from '@/src/lib/animations';

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyFrameRef = useRef<HTMLDivElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const apertureRef = useRef<HTMLDivElement>(null);
  const titleLayerRef = useRef<HTMLDivElement>(null);
  const metaLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Camera choreographic timeline tied to the sticky 280vh scroll track
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      // Layer 1: Background atmosphere moves through depth
      tl.to(
        bgLayerRef.current,
        {
          scale: 1.35,
          yPercent: 12,
          filter: 'brightness(0.65) contrast(1.15)',
          ease: 'none',
        },
        0
      );

      // Layer 2: Aperture frame expands to unlock full viewport
      tl.to(
        apertureRef.current,
        {
          scale: 1.1,
          opacity: 0.2,
          ease: 'power1.inOut',
        },
        0.2
      );

      // Layer 3: Typography separates from the image and flies forward/upward
      tl.to(
        titleLayerRef.current,
        {
          yPercent: -45,
          scale: 1.06,
          opacity: 0,
          ease: 'power1.in',
        },
        0
      );

      tl.to(
        metaLayerRef.current,
        {
          opacity: 0,
          y: -20,
          ease: 'power1.in',
        },
        0.1
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
    <div ref={containerRef} className="relative h-[280vh] w-full bg-[#09090b]">
      {/* Sticky Camera Viewport */}
      <div
        ref={stickyFrameRef}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between px-[var(--page-padding)] py-10"
      >
        {/* Layer 1: Background Atmosphere */}
        <div
          ref={bgLayerRef}
          className="absolute inset-0 w-full h-full will-change-transform scale-100 origin-center pointer-events-none z-0"
        >
          <Image
            src="/images/project_lumina_chronicles_1791386245032.jpg"
            alt="Cinematic architectural visual atmosphere"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60 filter contrast-110 brightness-90"
            referrerPolicy="no-referrer"
          />
          {/* Subtle directional vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/35 to-[#09090b]/80" />
        </div>

        {/* Layer 2: Mid-ground Aperture Depth Layer */}
        <div
          ref={apertureRef}
          className="absolute inset-0 pointer-events-none z-[1] border-[1px] border-white/[0.04] m-6 md:m-12 opacity-60 transition-opacity"
        />

        {/* Top Header Row / Kicker */}
        <div
          ref={metaLayerRef}
          className="relative z-10 w-full max-w-[1440px] mx-auto flex items-center justify-between editorial-meta text-[#8e8e99] pt-12 pb-4 border-b border-white/[0.06]"
        >
          <span className="text-[#d4a373]">{PORTFOLIO_DATA.creator.name}</span>
          <span className="hidden sm:inline text-[#52525c]">&mdash;</span>
          <span>{PORTFOLIO_DATA.creator.role}</span>
          <span className="hidden md:inline text-[#8e8e99]">{PORTFOLIO_DATA.creator.availability}</span>
        </div>

        {/* Layer 3: Monumental Typography */}
        <div
          ref={titleLayerRef}
          className="relative z-10 w-full max-w-[1440px] mx-auto my-auto will-change-transform"
        >
          <div className="max-w-5xl">
            <h1 className="display-hero text-[#f5f5f7] select-none tracking-tight">
              Building
              <br />
              <span className="text-[#8e8e99]">Digital</span>
              <br />
              <span className="text-[#f5f5f7]">Experiences.</span>
            </h1>

            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <p className="body-large text-[#8e8e99] max-w-xl font-light">
                  {PORTFOLIO_DATA.creator.heroSubstatement}
                </p>
              </div>

              <div className="md:col-span-4 flex items-center md:justify-end gap-6">
                <button onClick={scrollToWorks} className="editorial-link group">
                  <span>Explore Work</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">&rarr;</span>
                </button>

                <button onClick={scrollToStory} className="editorial-link group text-[#8e8e99]">
                  <span>Story</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Prompt */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex items-center justify-between editorial-meta text-[#52525c] pb-2 border-t border-white/[0.06]">
          <span>Scroll to direct the camera</span>
          <span className="text-[#8e8e99]">&darr;</span>
        </div>
      </div>
    </div>
  );
}
