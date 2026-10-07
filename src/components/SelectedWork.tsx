'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA, ProjectCaseStudy } from '@/src/data/portfolioData';
import CaseStudyModal from './CaseStudyModal';
import { audioEngine } from '@/src/lib/audioManager';

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const openCaseStudy = (project: ProjectCaseStudy) => {
    audioEngine.playClick();
    setSelectedProject(project);
  };

  const lumina = PORTFOLIO_DATA.projects[0];
  const kinetic = PORTFOLIO_DATA.projects[1];
  const solis = PORTFOLIO_DATA.projects[2];
  const neoterra = PORTFOLIO_DATA.projects[3];

  return (
    <section id="selected-works" className="relative w-full py-28 md:py-40 px-6 md:px-12 border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-24 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#575764] mb-3">
              <span className="text-[#e59b4c]">02</span>
              <span className="text-white/20">/</span>
              <span className="uppercase tracking-widest text-[#9c9ca8]">Feature Showcase</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f5f5f7] uppercase leading-[0.95]">
              Selected
              <br />
              <span className="text-shimmer">Works.</span>
            </h2>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-[#9c9ca8] uppercase tracking-widest block">
              Curated Commissions 2024 &ndash; 2026
            </span>
            <span className="text-xs font-mono text-[#575764] mt-1 block">
              Click any feature for full architectural dissection
            </span>
          </div>
        </div>

        {/* =========================================================================
            FEATURE 01: LUMINA CHRONICLES (Full-Bleed Panoramic Cinematic Cinema)
           ========================================================================= */}
        <div className="mb-32 md:mb-48">
          <div className="flex items-center justify-between text-xs font-mono text-[#575764] pb-4 mb-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <span className="text-[#e59b4c] font-semibold">01</span>
              <span>&mdash;</span>
              <span className="text-[#f5f5f7] uppercase tracking-wider">{lumina.category}</span>
            </div>
            <span>{lumina.year} &middot; COMMISSION</span>
          </div>

          <div
            onClick={() => openCaseStudy(lumina)}
            onMouseEnter={() => audioEngine.playHover()}
            className="group relative w-full rounded-xl overflow-hidden border border-white/10 bg-[#0f0f13] cursor-pointer"
            data-cursor="EXPAND"
          >
            {/* Main Visual */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
              <Image
                src={lumina.heroImage}
                alt="Lumina Chronicles cinematic still"
                fill
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/40 to-transparent" />
            </div>

            {/* Overlaid Editorial Content */}
            <div className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-between pointer-events-none">
              <div className="flex items-center justify-between text-xs font-mono text-white/70">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                  REAL-TIME GLSL RAYMARCHING
                </span>
                <span className="hidden sm:inline bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                  SUB-16MS FRAME BUDGET
                </span>
              </div>

              <div className="max-w-3xl">
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase mb-4 transition-transform duration-300 group-hover:translate-x-2">
                  {lumina.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/80 font-light max-w-xl mb-6">
                  {lumina.tagline}
                </p>

                <div className="flex items-center gap-4 pointer-events-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openCaseStudy(lumina);
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#e59b4c] text-black font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    View Case Study &rarr;
                  </button>
                  <span className="text-xs font-mono text-white/60 hidden sm:inline">
                    {lumina.duration} &middot; {lumina.clientOrRole}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FEATURE 02: KINETIC VORTEX (Asymmetric Split Screen Audio-Reactive)
           ========================================================================= */}
        <div className="mb-32 md:mb-48">
          <div className="flex items-center justify-between text-xs font-mono text-[#575764] pb-4 mb-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <span className="text-[#e59b4c] font-semibold">02</span>
              <span>&mdash;</span>
              <span className="text-[#f5f5f7] uppercase tracking-wider">{kinetic.category}</span>
            </div>
            <span>{kinetic.year} &middot; EXPERIMENTAL</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Container */}
            <div
              onClick={() => openCaseStudy(kinetic)}
              onMouseEnter={() => audioEngine.playHover()}
              className="lg:col-span-7 group relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#0f0f13] cursor-pointer"
              data-cursor="INSPECT"
            >
              <Image
                src={kinetic.heroImage}
                alt="Kinetic Vortex audio-reactive simulation visual"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 text-xs font-mono text-white/80 bg-black/60 px-3 py-1 rounded backdrop-blur">
                150,000 GPGPU PARTICLES &middot; WEB AUDIO REACTIVE
              </div>
            </div>

            {/* Editorial Metadata & Narrative */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#e59b4c] mb-2">
                  Computational Art Installation
                </p>
                <h3
                  onClick={() => openCaseStudy(kinetic)}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f5f7] uppercase cursor-pointer hover:text-[#e59b4c] transition-colors"
                >
                  {kinetic.title}
                </h3>
              </div>

              <p className="text-base text-[#9c9ca8] leading-relaxed font-light">
                {kinetic.overview}
              </p>

              {/* Technical Stack Tags */}
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {kinetic.architecture.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f5f5f7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics highlight */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
                <div>
                  <span className="text-[#575764] block">SIMULATION DEPTH</span>
                  <span className="text-xl font-bold text-[#e59b4c] tabular-nums">150,000</span>
                  <span className="text-[#9c9ca8] text-[11px] block">GPU float points</span>
                </div>
                <div>
                  <span className="text-[#575764] block">DRAW OVERHEAD</span>
                  <span className="text-xl font-bold text-[#e59b4c] tabular-nums">4.2 ms</span>
                  <span className="text-[#9c9ca8] text-[11px] block">Per-frame latency</span>
                </div>
              </div>

              <div>
                <button
                  onClick={() => openCaseStudy(kinetic)}
                  className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#e59b4c] hover:text-white transition-colors"
                >
                  <span>Deconstruct Architecture</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FEATURE 03: SOLIS ATELIER (Luxury Swiss Horology Inverted Split)
           ========================================================================= */}
        <div className="mb-32 md:mb-48">
          <div className="flex items-center justify-between text-xs font-mono text-[#575764] pb-4 mb-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <span className="text-[#e59b4c] font-semibold">03</span>
              <span>&mdash;</span>
              <span className="text-[#f5f5f7] uppercase tracking-wider">{solis.category}</span>
            </div>
            <span>{solis.year} &middot; COMMISSION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Editorial Metadata on Left */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#e59b4c] mb-2">
                  Haute Horlogerie 3D Digital Flagship
                </p>
                <h3
                  onClick={() => openCaseStudy(solis)}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f5f7] uppercase cursor-pointer hover:text-[#e59b4c] transition-colors"
                >
                  {solis.title}
                </h3>
              </div>

              <p className="text-base text-[#9c9ca8] leading-relaxed font-light">
                {solis.overview}
              </p>

              {/* Technical Stack Tags */}
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {solis.architecture.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f5f5f7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics highlight */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
                <div>
                  <span className="text-[#575764] block">COMPRESSION RATIO</span>
                  <span className="text-xl font-bold text-[#e59b4c] tabular-nums">2.8 MB</span>
                  <span className="text-[#9c9ca8] text-[11px] block">Compressed from 48MB CAD</span>
                </div>
                <div>
                  <span className="text-[#575764] block">VIP CONVERSIONS</span>
                  <span className="text-xl font-bold text-[#e59b4c] tabular-nums">+142%</span>
                  <span className="text-[#9c9ca8] text-[11px] block">Private appointments</span>
                </div>
              </div>

              <div>
                <button
                  onClick={() => openCaseStudy(solis)}
                  className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#e59b4c] hover:text-white transition-colors"
                >
                  <span>Examine Horology Case Study</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>

            {/* Visual Container on Right */}
            <div
              onClick={() => openCaseStudy(solis)}
              onMouseEnter={() => audioEngine.playHover()}
              className="lg:col-span-7 order-1 lg:order-2 group relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#0f0f13] cursor-pointer"
              data-cursor="INSPECT"
            >
              <Image
                src={solis.heroImage}
                alt="Solis Atelier luxury skeleton watch mechanism macro photography"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 right-6 text-xs font-mono text-white/80 bg-black/60 px-3 py-1 rounded backdrop-blur">
                318-COMPONENT REAL-TIME EXPLODED VIEW &middot; DRACO MESH
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FEATURE 04: NEO-TERRA (Scientific Planetary Satellite Topography)
           ========================================================================= */}
        <div className="mb-16">
          <div className="flex items-center justify-between text-xs font-mono text-[#575764] pb-4 mb-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <span className="text-[#e59b4c] font-semibold">04</span>
              <span>&mdash;</span>
              <span className="text-[#f5f5f7] uppercase tracking-wider">{neoterra.category}</span>
            </div>
            <span>{neoterra.year} &middot; RESEARCH LAB</span>
          </div>

          <div
            onClick={() => openCaseStudy(neoterra)}
            onMouseEnter={() => audioEngine.playHover()}
            className="group relative w-full rounded-xl overflow-hidden border border-white/10 bg-[#0f0f13] cursor-pointer"
            data-cursor="EXPAND"
          >
            {/* Visual */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
              <Image
                src={neoterra.heroImage}
                alt="Neo-Terra planetary topography satellite view"
                fill
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/40 to-transparent" />
            </div>

            {/* Overlaid Data HUD */}
            <div className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-between pointer-events-none">
              <div className="flex items-center justify-between text-xs font-mono text-white/70">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                  NASA LANDSAT &middot; SENTINEL-2 GEO-RASTER
                </span>
                <span className="hidden sm:inline bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                  GPU VERTEX DISPLACEMENT
                </span>
              </div>

              <div className="max-w-3xl">
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase mb-4 transition-transform duration-300 group-hover:translate-x-2">
                  {neoterra.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/80 font-light max-w-xl mb-6">
                  {neoterra.tagline}
                </p>

                <div className="flex items-center gap-4 pointer-events-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openCaseStudy(neoterra);
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#e59b4c] text-black font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    Examine Research Platform &rarr;
                  </button>
                  <span className="text-xs font-mono text-white/60 hidden sm:inline">
                    {neoterra.duration} &middot; {neoterra.clientOrRole}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Fullscreen Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </section>
  );
}
