'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCaseStudy, PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { audioEngine } from '@/src/lib/audioManager';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onSelectProject: (p: ProjectCaseStudy) => void;
}

export default function CaseStudyModal({
  project,
  onClose,
  onSelectProject,
}: CaseStudyModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      audioEngine.playChime(580, 0.05);
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
        className="fixed inset-0 z-[9990] flex items-center justify-center overflow-y-auto bg-black/85 backdrop-blur-xl"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} Case Study`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl min-h-screen my-auto bg-[#09090c] border-x border-white/10 shadow-2xl p-6 sm:p-12 md:p-16 flex flex-col justify-between"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between pb-6 mb-8 border-b border-white/10 bg-[#09090c]/90 backdrop-blur-md">
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-[#e59b4c] font-semibold">{project.number}</span>
              <span className="text-white/20">/</span>
              <span className="text-[#9c9ca8] uppercase tracking-wider">{project.category}</span>
              <span className="text-white/20 hidden sm:inline">&middot;</span>
              <span className="text-[#f5f5f7] hidden sm:inline">{project.year}</span>
            </div>

            <button
              onClick={() => {
                audioEngine.playClick();
                onClose();
              }}
              className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/15 hover:border-[#e59b4c] bg-white/5 hover:bg-[#e59b4c]/10 text-xs font-mono text-[#f5f5f7] hover:text-[#e59b4c] transition-all"
              data-cursor="CLOSE"
            >
              <span className="uppercase tracking-wider">Close Archive</span>
              <span className="text-sm leading-none">&times;</span>
            </button>
          </div>

          {/* Hero Header Presentation */}
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#e59b4c] mb-3">
              {project.clientOrRole} &middot; {project.duration}
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f5f5f7] uppercase mb-6">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-[#9c9ca8] font-light max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Featured Visual Container */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/15 mb-16 bg-[#0f0f13]">
            <Image
              src={project.heroImage}
              alt={`${project.title} featured visualization`}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white/70">
              <span>CANVAS RESOLUTION: 3840 &times; 2160 PBR NATIVE</span>
              <span className="hidden sm:inline">GPU MEMORY BUDGET: &lt; 28MB</span>
            </div>
          </div>

          {/* Key Metrics Band */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 px-6 mb-16 rounded-lg bg-[#0f0f13] border border-white/10">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-1.5">
                <span className="text-xs font-mono text-[#9c9ca8] uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="text-3xl sm:text-4xl font-bold text-[#e59b4c] tabular-nums tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs text-[#9c9ca8] leading-normal">{metric.description}</span>
              </div>
            ))}
          </div>

          {/* Editorial Content Breakdown: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16">
            <div className="md:col-span-7 flex flex-col gap-10">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#e59b4c] mb-3">
                  01 / Project Overview
                </h3>
                <p className="text-base text-[#9c9ca8] leading-relaxed font-light">
                  {project.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#e59b4c] mb-3">
                  02 / The Technical Challenge
                </h3>
                <p className="text-base text-[#9c9ca8] leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#e59b4c] mb-3">
                  03 / Architectural Solution
                </h3>
                <p className="text-base text-[#9c9ca8] leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Right Column: Technical Specifications */}
            <div className="md:col-span-5 flex flex-col gap-8 p-6 md:p-8 rounded-lg bg-[#0f0f13]/60 border border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#9c9ca8]">
                  Technology Stack
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.architecture.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#f5f5f7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9c9ca8]">
                  Performance Benchmark
                </span>
                <p className="mt-2 text-xs font-mono text-[#e59b4c]">
                  {project.architecture.performance}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9c9ca8]">
                  Architectural Highlights
                </span>
                <ul className="mt-3 flex flex-col gap-2.5 text-xs text-[#9c9ca8]">
                  {project.architecture.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#e59b4c] mt-0.5">&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Visual Gallery */}
          <div className="mb-20">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#e59b4c] mb-6">
              Production Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-[#0f0f13] group"
                >
                  <Image
                    src={img}
                    alt={`${project.title} gallery asset ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/80 bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                    View Angle 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer & Next Case Study Navigation */}
          <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => {
                audioEngine.playClick();
                onClose();
              }}
              className="text-xs font-mono uppercase tracking-wider text-[#9c9ca8] hover:text-white transition-colors"
            >
              &larr; Return to Selected Works
            </button>

            <button
              onClick={() => {
                audioEngine.playClick();
                onSelectProject(nextProject);
              }}
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-[#e59b4c] hover:text-black border border-white/15 text-xs font-mono uppercase tracking-wider transition-all duration-300"
              data-cursor="NEXT"
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
