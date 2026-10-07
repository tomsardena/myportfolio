'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA, ProjectCaseStudy } from '@/src/data/portfolioData';
import CaseStudyView from './CaseStudyView';
import { gsap, ScrollTrigger, isReducedMotion } from '@/src/lib/animations';

export default function ProjectShowcase() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // For each project scene, animate image scale & typography parallax
      const projectScenes = gsap.utils.toArray<HTMLElement>('.project-scene');

      projectScenes.forEach((scene) => {
        const image = scene.querySelector('.project-media');
        const content = scene.querySelector('.project-content');

        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.05, yPercent: 4 },
            {
              scale: 1.18,
              yPercent: -6,
              ease: 'none',
              scrollTrigger: {
                trigger: scene,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            }
          );
        }

        if (content) {
          gsap.fromTo(
            content,
            { opacity: 0.8, y: 30 },
            {
              opacity: 1,
              y: -20,
              ease: 'none',
              scrollTrigger: {
                trigger: scene,
                start: 'top 80%',
                end: 'bottom 40%',
                scrub: 1,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="works" ref={containerRef} className="relative w-full bg-[#08080a]">
      {/* Section Header Anchor */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-28 pb-12 border-b border-white/[0.06] flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 text-xs font-mono text-[#71717a] mb-3">
            <span className="text-[#d8b08c]">Scene 03</span>
            <span>&middot;</span>
            <span className="uppercase tracking-widest text-[#a1a1aa]">Film Feature Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f4f4f6] uppercase">
            Selected
            <br />
            <span className="text-[#d8b08c]">Works.</span>
          </h2>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-widest block">
            Camera-Driven Case Studies
          </span>
          <span className="text-xs font-mono text-[#71717a] mt-1 block">
            Click any feature to inspect architectural breakdown
          </span>
        </div>
      </div>

      {/* Each Project is Its Own Cinematic Full-Screen Scene */}
      <div className="flex flex-col">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <div
            key={project.id}
            className="project-scene relative w-full min-h-[92vh] flex items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden border-b border-white/[0.08]"
          >
            {/* Visual Media Plate */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="project-media relative w-full h-full will-change-transform">
                <Image
                  src={project.image}
                  alt={`${project.title} backdrop`}
                  fill
                  sizes="100vw"
                  className="object-cover opacity-45 filter contrast-110 brightness-75"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/60 to-[#08080a]/70" />
              </div>
            </div>

            {/* Overlaid Editorial Content */}
            <div className="project-content relative z-10 max-w-[1440px] w-full mx-auto flex flex-col justify-between py-12 h-full">
              {/* Scene Number & Metadata Kicker */}
              <div className="flex items-center justify-between text-xs font-mono text-[#a1a1aa] pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-[#d8b08c] font-semibold">ACT 0{idx + 1}</span>
                  <span>&mdash;</span>
                  <span className="text-[#f4f4f6] uppercase tracking-wider">{project.category}</span>
                </div>
                <span>{project.year} &middot; {project.role}</span>
              </div>

              {/* Central Title & Narrative Presentation */}
              <div className="my-auto max-w-4xl py-12">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d8b08c] block mb-3">
                  {project.subtitle}
                </span>

                <h3
                  onClick={() => setActiveCaseStudy(project)}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#f4f4f6] uppercase cursor-pointer hover:text-[#d8b08c] transition-colors duration-300"
                >
                  {project.title}
                </h3>

                <p className="mt-6 text-base sm:text-lg md:text-xl text-[#a1a1aa] font-light leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded bg-black/60 border border-white/10 text-[#f4f4f6]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Case Study Trigger */}
                <div className="mt-10">
                  <button
                    onClick={() => setActiveCaseStudy(project)}
                    className="group px-7 py-3.5 rounded-full bg-[#f4f4f6] hover:bg-[#d8b08c] text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-3"
                  >
                    <span>Read Full Case Study</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </button>
                </div>
              </div>

              {/* Bottom Scene Indicator */}
              <div className="flex items-center justify-between text-xs font-mono text-[#71717a] pt-4 border-t border-white/10">
                <span>CINEMATIC ARCHIVE SPECIFICATION</span>
                <span className="hidden sm:inline">0{idx + 1} / 0{PORTFOLIO_DATA.projects.length}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal View */}
      <CaseStudyView
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onSelectProject={(p) => setActiveCaseStudy(p)}
      />
    </section>
  );
}
