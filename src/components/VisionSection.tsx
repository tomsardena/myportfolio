'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { audioEngine } from '@/src/lib/audioManager';

export default function VisionSection() {
  return (
    <section id="vision" className="relative w-full py-28 md:py-40 px-6 md:px-12 border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between text-xs font-mono text-[#575764] mb-16">
          <div className="flex items-center gap-3">
            <span className="text-[#e59b4c]">01</span>
            <span className="text-white/20">/</span>
            <span className="uppercase tracking-widest text-[#9c9ca8]">Editorial Manifesto &middot; Perspective</span>
          </div>
          <span className="hidden sm:inline uppercase tracking-widest text-[11px]">Philosophy &amp; Discipline</span>
        </div>

        {/* The Bold Editorial Statement */}
        <div className="max-w-5xl mb-24 md:mb-32">
          <p className="text-xs md:text-sm font-mono uppercase tracking-[0.25em] text-[#e59b4c] mb-6">
            The Fundamental Thesis
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#f5f5f7] uppercase leading-[1.05]">
            I don&apos;t just assemble interfaces.
            <br />
            <span className="text-[#9c9ca8]">I direct cinematic</span>
            <br />
            <span className="text-shimmer">digital environments.</span>
          </h2>
        </div>

        {/* Narrative Grid: Split Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Portrait & Studio Spec */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-[#0f0f13] border border-white/10 group">
              <Image
                src={PORTFOLIO_DATA.creator.portraitImage}
                alt="Aurelius Vane portrait, Creative Director and Technical Architect"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs font-mono">
                <div>
                  <p className="text-white font-semibold tracking-wide uppercase">Aurelius Vane</p>
                  <p className="text-[#9c9ca8] text-[11px] mt-0.5">Stockholm Studio Atelier</p>
                </div>
                <span className="text-[#e59b4c] text-[10px] tracking-widest uppercase border border-[#e59b4c]/30 px-2 py-0.5 rounded">
                  Director
                </span>
              </div>
            </div>

            {/* Studio Coordinates & Quick Metadata */}
            <div className="border border-white/10 rounded-lg p-6 bg-[#0f0f13]/40 flex flex-col gap-4 text-xs font-mono">
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-[#9c9ca8]">Operating Base</span>
                <span className="text-[#f5f5f7]">Stockholm &middot; London &middot; Global</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-[#9c9ca8]">Primary Focus</span>
                <span className="text-[#f5f5f7]">Creative Direction / WebGL</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#9c9ca8]">Commission Capacity</span>
                <span className="text-emerald-400">2 Clients per Quarter</span>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            {/* Thesis 01 */}
            <div className="flex flex-col gap-4 pb-10 border-b border-white/10">
              <div className="flex items-center gap-3 text-xs font-mono text-[#e59b4c]">
                <span>01.1</span>
                <span className="text-white/20">&mdash;</span>
                <span className="uppercase tracking-widest text-[#f5f5f7]">The Camera Paradigm</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#f5f5f7]">
                A browser viewport is a dynamic lens, not a piece of static paper.
              </h3>
              <p className="text-base text-[#9c9ca8] leading-relaxed font-light">
                Modern web production has succumbed to template monotony: predictable 3-column card grids,
                pastel gradients, and interchangeable SaaS layouts that lack soul. I treat every project as an
                art-directed feature film where scrolling is camera motion, typography carries narrative weight,
                and micro-interactions convey physical tangibility.
              </p>
            </div>

            {/* Thesis 02 */}
            <div className="flex flex-col gap-4 pb-10 border-b border-white/10">
              <div className="flex items-center gap-3 text-xs font-mono text-[#e59b4c]">
                <span>01.2</span>
                <span className="text-white/20">&mdash;</span>
                <span className="uppercase tracking-widest text-[#f5f5f7]">The 16-Millisecond Standard</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#f5f5f7]">
                Visual grandeur is worthless without relentless technical discipline.
              </h3>
              <p className="text-base text-[#9c9ca8] leading-relaxed font-light">
                Many creative sites compromise performance in pursuit of visual effects, producing stuttering
                scroll pipelines and overheated processors. True luxury engineering means calculating custom
                GLSL shaders on the GPU, streamlining draw calls, and honoring the 60fps frame budget so the
                experience feels as effortless on a mobile phone as it does on a studio workstation.
              </p>
            </div>

            {/* Thesis 03: The Process */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-xs font-mono text-[#e59b4c]">
                <span>01.3</span>
                <span className="text-white/20">&mdash;</span>
                <span className="uppercase tracking-widest text-[#f5f5f7]">Art Direction Meets System Architecture</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#f5f5f7]">
                Bridging the chasm between design studios and engineering houses.
              </h3>
              <p className="text-base text-[#9c9ca8] leading-relaxed font-light">
                Too often, creative directors cannot speak GLSL or React state architecture, while software
                engineers lack typographic sensitivity and visual hierarchy. Working at the exact intersection of both
                domains guarantees that creative intent is never lost in translation.
              </p>

              <div className="pt-6">
                <a
                  href="#contact"
                  onClick={() => audioEngine.playClick()}
                  className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#e59b4c] hover:text-white transition-colors group"
                >
                  <span>Request Atelier Capability Deck</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
