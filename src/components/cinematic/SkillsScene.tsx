'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, CraftPillar } from '@/src/data/portfolioData';

export default function SkillsScene() {
  const [activePillar, setActivePillar] = useState<CraftPillar>(
    PORTFOLIO_DATA.craftPillars[0]
  );

  return (
    <section id="craft" className="relative w-full py-32 px-[var(--page-padding)] border-t border-white/[0.06] bg-[#09090b]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20 pb-8 border-b border-white/[0.06]">
          <div>
            <span className="editorial-meta text-[#d4a373] block mb-2">Capabilities</span>
            <h2 className="display-section text-[#f5f5f7] uppercase tracking-tight">
              Disciplines &amp; Craft.
            </h2>
          </div>

          <div className="text-right">
            <span className="editorial-meta text-[#8e8e99] block">
              Architectural System
            </span>
          </div>
        </div>

        {/* 2-Column Split: Pillar List & Inspector Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Pillar List */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-white/[0.06]">
            {PORTFOLIO_DATA.craftPillars.map((pillar) => {
              const isActive = activePillar.id === pillar.id;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar)}
                  className={`group py-8 px-4 cursor-pointer transition-all duration-300 rounded ${
                    isActive
                      ? 'bg-white/[0.03] pl-6'
                      : 'hover:bg-white/[0.015] hover:pl-6'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <span
                        className={`editorial-meta transition-colors mt-1 ${
                          isActive ? 'text-[#d4a373]' : 'text-[#52525c] group-hover:text-white'
                        }`}
                      >
                        {pillar.number}
                      </span>
                      <div>
                        <h3
                          className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                            isActive
                              ? 'text-white'
                              : 'text-[#8e8e99] group-hover:text-white'
                          }`}
                        >
                          {pillar.title}
                        </h3>
                        <p className="mt-2 body-base text-[#8e8e99] font-light max-w-md">
                          {pillar.tagline}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`editorial-meta transition-transform duration-300 mt-2 ${
                        isActive
                          ? 'text-[#d4a373] translate-x-1'
                          : 'text-[#52525c] group-hover:translate-x-1'
                      }`}
                    >
                      &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Inspector Plate */}
          <div className="lg:col-span-6 sticky top-28 p-8 md:p-12 rounded bg-[#101014] border border-white/10 shadow-2xl flex flex-col gap-8">
            <div className="flex items-center justify-between pb-6 border-b border-white/10 editorial-meta">
              <span className="text-[#f5f5f7]">Discipline &middot; {activePillar.number}</span>
              <span className="text-[#d4a373]">Production Focus</span>
            </div>

            {/* Title & Tagline */}
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                {activePillar.title}
              </h4>
              <p className="editorial-meta text-[#d4a373]">
                {activePillar.tagline}
              </p>
            </div>

            {/* Core Domains */}
            <div>
              <span className="editorial-meta text-[#8e8e99] block mb-3">
                Core Domains
              </span>
              <div className="flex flex-wrap gap-2">
                {activePillar.disciplines.map((d) => (
                  <span
                    key={d}
                    className="editorial-meta px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[#f5f5f7]"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Philosophy Statement */}
            <div className="pt-4 border-t border-white/10">
              <span className="editorial-meta text-[#8e8e99] block mb-2">
                Approach
              </span>
              <p className="body-base text-[#8e8e99] font-light leading-relaxed">
                {activePillar.statement}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
