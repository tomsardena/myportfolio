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
        className="fixed inset-0 z-[9990] flex items-center justify-center overflow-y-auto bg-black/95 backdrop-blur-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} Case Study`}
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl min-h-screen my-auto bg-[#09090b] border-x border-white/10 px-[var(--page-padding)] py-12 flex flex-col justify-between"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between pb-6 mb-12 border-b border-white/10 bg-[#09090b]/90 backdrop-blur-md">
            <div className="flex items-center gap-4 editorial-meta text-[#8e8e99]">
              <span className="text-[#d4a373] font-semibold">{project.number}</span>
              <span className="text-white/20">/</span>
              <span>{project.subtitle}</span>
              <span className="text-white/20 hidden sm:inline">&middot;</span>
              <span className="text-[#f5f5f7] hidden sm:inline">{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="editorial-link text-[#f5f5f7] hover:text-[#d4a373] transition-colors"
            >
              <span>Close &times;</span>
            </button>
          </div>

          {/* Project Title Header */}
          <div className="mb-12">
            <span className="editorial-meta text-[#d4a373] block mb-3">
              {project.role} &middot; {project.year}
            </span>
            <h1 className="display-project text-[#f5f5f7] uppercase mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="body-large text-[#8e8e99] max-w-2xl font-light">
              {project.description}
            </p>
          </div>

          {/* Hero Media Plate */}
          <div className="relative aspect-video w-full rounded overflow-hidden border border-white/10 mb-16 bg-[#101014]">
            <Image
              src={project.image}
              alt={`${project.title} featured plate`}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent opacity-60" />
          </div>

          {/* Unboxed Technology Separators */}
          <div className="flex flex-wrap gap-4 mb-16 pb-8 border-b border-white/10 editorial-meta text-[#8e8e99]">
            {project.technologies.map((tech, idx) => (
              <span key={tech}>
                {tech} {idx < project.technologies.length - 1 ? '·' : ''}
              </span>
            ))}
          </div>

          {/* Structured Chapters */}
          <div className="flex flex-col gap-16 mb-20 divide-y divide-white/[0.08]">
            {/* Chapter 01: INTRO */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="editorial-meta text-[#d4a373] block">01 &middot; Context</span>
                <h3 className="text-xl font-semibold text-white mt-1">Project Introduction</h3>
              </div>
              <div className="md:col-span-8 body-base text-[#8e8e99] font-light leading-relaxed">
                {project.caseStudy.intro}
              </div>
            </div>

            {/* Chapter 02: THE CHALLENGE */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="editorial-meta text-[#d4a373] block">02 &middot; Complexity</span>
                <h3 className="text-xl font-semibold text-white mt-1">The Challenge</h3>
              </div>
              <div className="md:col-span-8 body-base text-[#8e8e99] font-light leading-relaxed">
                {project.caseStudy.challenge}
              </div>
            </div>

            {/* Chapter 03: THE IDEA */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="editorial-meta text-[#d4a373] block">03 &middot; Concept</span>
                <h3 className="text-xl font-semibold text-white mt-1">The Idea</h3>
              </div>
              <div className="md:col-span-8 body-base text-[#8e8e99] font-light leading-relaxed">
                {project.caseStudy.idea}
              </div>
            </div>

            {/* Chapter 04: THE PROCESS */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="editorial-meta text-[#d4a373] block">04 &middot; Iteration</span>
                <h3 className="text-xl font-semibold text-white mt-1">The Process</h3>
              </div>
              <div className="md:col-span-8 body-base text-[#8e8e99] font-light leading-relaxed">
                {project.caseStudy.process}
              </div>
            </div>

            {/* Chapter 05: THE BUILD */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="editorial-meta text-[#d4a373] block">05 &middot; Architecture</span>
                <h3 className="text-xl font-semibold text-white mt-1">The Build</h3>
              </div>
              <div className="md:col-span-8 body-base text-[#8e8e99] font-light leading-relaxed">
                {project.caseStudy.build}
              </div>
            </div>

            {/* Chapter 06: THE RESULT */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="editorial-meta text-[#d4a373] block">06 &middot; Milestones</span>
                <h3 className="text-xl font-semibold text-white mt-1">The Result</h3>
              </div>
              <div className="md:col-span-8 body-base text-[#8e8e99] font-light leading-relaxed">
                {project.caseStudy.result}
              </div>
            </div>
          </div>

          {/* Chapter 07: VISUAL GALLERY */}
          <div className="mb-20">
            <span className="editorial-meta text-[#d4a373] block mb-6">
              07 &middot; Visual Gallery
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.caseStudy.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-video rounded overflow-hidden border border-white/10 bg-[#101014] group"
                >
                  <Image
                    src={img}
                    alt={`${project.title} gallery plate ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 editorial-meta text-white/80 bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                    Plate 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter 08: NEXT PROJECT */}
          <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={onClose}
              className="editorial-link text-[#8e8e99] hover:text-white"
            >
              &larr; Return to Selected Works
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="editorial-link group text-[#f5f5f7] hover:text-[#d4a373]"
            >
              <span>Next Feature: {nextProject.title}</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
