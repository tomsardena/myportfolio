'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCaseStudy, PORTFOLIO_DATA } from '@/src/data/portfolioData';

interface CaseStudyViewProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onSelectProject: (p: ProjectCaseStudy) => void;
}

export default function CaseStudyView({
  project,
  onClose,
  onSelectProject,
}: CaseStudyViewProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Find next project in sequence
  const currentIndex = PORTFOLIO_DATA.projects.findIndex((p) => p.id === project.id);
  const nextProject =
    PORTFOLIO_DATA.projects[(currentIndex + 1) % PORTFOLIO_DATA.projects.length];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[9990] flex items-center justify-center overflow-y-auto bg-black/90 backdrop-blur-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} Case Study`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl min-h-screen my-auto bg-[#0a0a0d] border-x border-white/10 p-6 sm:p-12 md:p-16 flex flex-col justify-between"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between pb-6 mb-12 border-b border-white/10 bg-[#0a0a0d]/90 backdrop-blur-md">
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-[#d8b08c] font-semibold">{project.number}</span>
              <span className="text-white/20">/</span>
              <span className="text-[#a1a1aa] uppercase tracking-wider">{project.category}</span>
              <span className="text-white/20 hidden sm:inline">&middot;</span>
              <span className="text-[#f4f4f6] hidden sm:inline">{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/15 hover:border-[#d8b08c] bg-white/5 hover:bg-[#d8b08c]/10 text-xs font-mono text-[#f4f4f6] hover:text-[#d8b08c] transition-all"
            >
              <span className="uppercase tracking-wider">Close Case Study</span>
              <span className="text-base leading-none">&times;</span>
            </button>
          </div>

          {/* Project Title Header */}
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#d8b08c] mb-3">
              {project.role} &middot; {project.year}
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f4f4f6] uppercase mb-6">
              {project.title}
            </h1>
            <p className="text-lg sm:text-2xl text-[#a1a1aa] font-light max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Hero Media Plate */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/15 mb-16 bg-[#111116]">
            <Image
              src={project.image}
              alt={`${project.title} hero visualization`}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-transparent to-transparent opacity-60" />
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 mb-16 pb-8 border-b border-white/10">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[#f4f4f6]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Structured Cinematic Chapters */}
          <div className="flex flex-col gap-16 mb-20 divide-y divide-white/[0.08]">
            {/* Chapter 01: INTRO */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d8b08c] block">
                  01 &middot; Introduction
                </span>
                <h3 className="text-xl font-semibold text-white mt-2">Project Vision</h3>
              </div>
              <div className="md:col-span-8 text-base text-[#a1a1aa] font-light leading-relaxed">
                {project.caseStudy.intro}
              </div>
            </div>

            {/* Chapter 02: THE CHALLENGE */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d8b08c] block">
                  02 &middot; The Challenge
                </span>
                <h3 className="text-xl font-semibold text-white mt-2">Core Complexity</h3>
              </div>
              <div className="md:col-span-8 text-base text-[#a1a1aa] font-light leading-relaxed">
                {project.caseStudy.challenge}
              </div>
            </div>

            {/* Chapter 03: THE IDEA */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d8b08c] block">
                  03 &middot; The Idea
                </span>
                <h3 className="text-xl font-semibold text-white mt-2">Conceptual Solution</h3>
              </div>
              <div className="md:col-span-8 text-base text-[#a1a1aa] font-light leading-relaxed">
                {project.caseStudy.idea}
              </div>
            </div>

            {/* Chapter 04: THE PROCESS */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d8b08c] block">
                  04 &middot; The Process
                </span>
                <h3 className="text-xl font-semibold text-white mt-2">Iterative Execution</h3>
              </div>
              <div className="md:col-span-8 text-base text-[#a1a1aa] font-light leading-relaxed">
                {project.caseStudy.process}
              </div>
            </div>

            {/* Chapter 05: THE BUILD */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d8b08c] block">
                  05 &middot; The Build
                </span>
                <h3 className="text-xl font-semibold text-white mt-2">Technical Implementation</h3>
              </div>
              <div className="md:col-span-8 text-base text-[#a1a1aa] font-light leading-relaxed">
                {project.caseStudy.build}
              </div>
            </div>

            {/* Chapter 06: THE RESULT */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d8b08c] block">
                  06 &middot; The Result
                </span>
                <h3 className="text-xl font-semibold text-white mt-2">Outcome &amp; Impact</h3>
              </div>
              <div className="md:col-span-8 text-base text-[#a1a1aa] font-light leading-relaxed">
                {project.caseStudy.result}
              </div>
            </div>
          </div>

          {/* Chapter 07: VISUAL GALLERY */}
          <div className="mb-20">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#d8b08c] mb-6">
              07 &middot; Visual Production Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.caseStudy.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-[#111116] group"
                >
                  <Image
                    src={img}
                    alt={`${project.title} asset ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/80 bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                    Visual Composition 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter 08: NEXT PROJECT */}
          <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={onClose}
              className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa] hover:text-white transition-colors"
            >
              &larr; Return to Showcase
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#f4f4f6] hover:bg-[#d8b08c] text-black text-xs font-mono uppercase tracking-wider transition-all duration-300 font-semibold"
            >
              <span>Next Film: {nextProject.title}</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
