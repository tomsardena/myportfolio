'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA, ProjectCaseStudy } from '@/src/data/portfolioData';
import CaseStudyView from './CaseStudyView';
import { gsap, ScrollTrigger, isReducedMotion } from '@/src/lib/animations';

export default function ProjectShowcase() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectCaseStudy | null>(null);

  const p1 = PORTFOLIO_DATA.projects[0];
  const p2 = PORTFOLIO_DATA.projects[1];
  const p3 = PORTFOLIO_DATA.projects[2];
  const p4 = PORTFOLIO_DATA.projects[3];

  // Refs for different compositions
  const sectionRef = useRef<HTMLDivElement>(null);
  const p1ImageRef = useRef<HTMLDivElement>(null);
  const p2ImageRef = useRef<HTMLDivElement>(null);
  const p3StickyRef = useRef<HTMLDivElement>(null);
  const p3FrameRef = useRef<HTMLDivElement>(null);
  const p4ImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // P1: Panoramic media scale
      if (p1ImageRef.current) {
        gsap.fromTo(
          p1ImageRef.current,
          { scale: 1.05 },
          {
            scale: 1.18,
            ease: 'none',
            scrollTrigger: {
              trigger: p1ImageRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }

      // P2: Independent vertical parallax for the offset portrait image
      if (p2ImageRef.current) {
        gsap.fromTo(
          p2ImageRef.current,
          { yPercent: 12 },
          {
            yPercent: -12,
            ease: 'none',
            scrollTrigger: {
              trigger: p2ImageRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }

      // P3: Frame-to-bleed expansion
      if (p3StickyRef.current && p3FrameRef.current) {
        gsap.fromTo(
          p3FrameRef.current,
          { width: '75vw', height: '65vh', borderRadius: '8px' },
          {
            width: '100vw',
            height: '100vh',
            borderRadius: '0px',
            ease: 'none',
            scrollTrigger: {
              trigger: p3StickyRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1,
            },
          }
        );
      }

      // P4: Diagonal scale & slide
      if (p4ImageRef.current) {
        gsap.fromTo(
          p4ImageRef.current,
          { scale: 1.02, xPercent: -3 },
          {
            scale: 1.1,
            xPercent: 3,
            ease: 'none',
            scrollTrigger: {
              trigger: p4ImageRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="works" ref={sectionRef} className="relative w-full bg-[#09090b]">
      {/* Section Anchor Header */}
      <div className="max-w-[1440px] mx-auto px-[var(--page-padding)] pt-32 pb-16 border-b border-white/[0.06] flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <span className="editorial-meta text-[#d4a373] block mb-2">Selected Works</span>
          <h2 className="display-section text-[#f5f5f7] uppercase tracking-tight">
            Featured Projects.
          </h2>
        </div>

        <div className="text-right">
          <span className="editorial-meta text-[#8e8e99] block">
            Four Unique Compositions
          </span>
        </div>
      </div>

      {/* =========================================================================
          PROJECT 01: Panoramic Full-Bleed Cinema with Title Crossing
         ========================================================================= */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden border-b border-white/[0.06] py-20 px-[var(--page-padding)]">
        {/* Background Visual Plate */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div ref={p1ImageRef} className="relative w-full h-full will-change-transform">
            <Image
              src={p1.image}
              alt={p1.title}
              fill
              sizes="100vw"
              className="object-cover opacity-60 filter contrast-110 brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-[#09090b]/80" />
          </div>
        </div>

        {/* Content crossing the visual */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto flex flex-col justify-between min-h-[70vh]">
          {/* Metadata kicker */}
          <div className="editorial-meta text-[#8e8e99] flex items-center justify-between pb-4 border-b border-white/10">
            <span>01 &middot; {p1.subtitle}</span>
            <span>{p1.year}</span>
          </div>

          {/* Huge Title Crossing */}
          <div className="my-auto py-12 max-w-4xl">
            <h3
              onClick={() => setActiveCaseStudy(p1)}
              className="display-project text-[#f5f5f7] hover:text-[#d4a373] transition-colors cursor-pointer select-none"
            >
              {p1.title}
            </h3>

            <p className="mt-6 body-large text-[#8e8e99] max-w-xl font-light">
              {p1.description}
            </p>

            <div className="mt-8 flex items-center gap-6">
              <button
                onClick={() => setActiveCaseStudy(p1)}
                className="editorial-link group"
              >
                <span>Inspect Case Study</span>
                <span className="group-hover:translate-x-1.5 transition-transform">&rarr;</span>
              </button>

              <div className="hidden sm:flex items-center gap-2 editorial-meta text-[#52525c]">
                {p1.technologies.slice(0, 3).map((t, i) => (
                  <span key={t}>
                    {t} {i < 2 ? '·' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="editorial-meta text-[#52525c] pt-4 border-t border-white/10">
            <span>Composition 01 &mdash; Panoramic Bleed</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PROJECT 02: Independent Split Composition with Offset Parallax
         ========================================================================= */}
      <div className="relative w-full min-h-screen py-32 px-[var(--page-padding)] border-b border-white/[0.06] flex items-center">
        <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Anchored Typography */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="editorial-meta text-[#8e8e99] pb-4 border-b border-white/10 mb-8 flex justify-between">
              <span>02 &middot; {p2.subtitle}</span>
              <span>{p2.year}</span>
            </div>

            <h3
              onClick={() => setActiveCaseStudy(p2)}
              className="display-project text-[#f5f5f7] hover:text-[#d4a373] transition-colors cursor-pointer"
            >
              {p2.title}
            </h3>

            <p className="mt-6 body-large text-[#8e8e99] font-light max-w-lg">
              {p2.description}
            </p>

            {/* Unboxed Metadata List */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3 editorial-meta text-[#8e8e99]">
              {p2.technologies.map((t, idx) => (
                <span key={t}>
                  {t} {idx < p2.technologies.length - 1 ? '·' : ''}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={() => setActiveCaseStudy(p2)}
                className="editorial-link group"
              >
                <span>Inspect Case Study</span>
                <span className="group-hover:translate-x-1.5 transition-transform">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Right Column: Independent Portrait Visual with Parallax */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              ref={p2ImageRef}
              onClick={() => setActiveCaseStudy(p2)}
              className="relative w-full max-w-lg aspect-[4/5] rounded overflow-hidden border border-white/10 cursor-pointer group shadow-2xl"
            >
              <Image
                src={p2.image}
                alt={p2.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PROJECT 03: Frame-to-Bleed Viewport Expansion
         ========================================================================= */}
      <div ref={p3StickyRef} className="relative h-[220vh] w-full border-b border-white/[0.06]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center p-6">
          <div
            ref={p3FrameRef}
            onClick={() => setActiveCaseStudy(p3)}
            className="relative overflow-hidden cursor-pointer group shadow-2xl border border-white/10 flex items-center justify-center"
          >
            <Image
              src={p3.image}
              alt={p3.title}
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent" />

            {/* Overlaid Title */}
            <div className="absolute bottom-12 left-8 right-8 max-w-[1440px] mx-auto z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <span className="editorial-meta text-[#d4a373] block mb-2">03 &middot; Frame Expansion</span>
                <h3 className="display-project text-white uppercase">
                  {p3.title}
                </h3>
                <p className="mt-2 body-base text-[#8e8e99] max-w-md font-light">
                  {p3.description}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCaseStudy(p3);
                }}
                className="editorial-link text-white group whitespace-nowrap"
              >
                <span>Inspect Case Study</span>
                <span className="group-hover:translate-x-1.5 transition-transform">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PROJECT 04: Diagonal Staggered Composition
         ========================================================================= */}
      <div className="relative w-full min-h-screen py-32 px-[var(--page-padding)] border-b border-white/[0.06] flex items-center">
        <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-12">
          {/* Top Diagonal Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="editorial-meta text-[#8e8e99] block mb-2">04 &middot; {p4.subtitle}</span>
              <h3
                onClick={() => setActiveCaseStudy(p4)}
                className="display-project text-[#f5f5f7] hover:text-[#d4a373] transition-colors cursor-pointer"
              >
                {p4.title}
              </h3>
            </div>

            <button
              onClick={() => setActiveCaseStudy(p4)}
              className="editorial-link group"
            >
              <span>Inspect Case Study</span>
              <span className="group-hover:translate-x-1.5 transition-transform">&rarr;</span>
            </button>
          </div>

          {/* Staggered Visual Plate */}
          <div
            onClick={() => setActiveCaseStudy(p4)}
            className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded overflow-hidden border border-white/10 cursor-pointer group"
          >
            <div ref={p4ImageRef} className="relative w-full h-full will-change-transform">
              <Image
                src={p4.image}
                alt={p4.title}
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent opacity-40" />
            </div>
          </div>

          {/* Bottom Narrative Description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-4">
            <div className="md:col-span-4 editorial-meta text-[#8e8e99]">
              Architecture &amp; Data
            </div>
            <div className="md:col-span-8 body-large text-[#8e8e99] font-light">
              {p4.description}
            </div>
          </div>
        </div>
      </div>

      {/* Structured Case Study Modal View */}
      <CaseStudyView
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onSelectProject={(p) => setActiveCaseStudy(p)}
      />
    </section>
  );
}
