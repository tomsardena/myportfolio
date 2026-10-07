'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, CraftPillar } from '@/src/data/portfolioData';

export default function SkillsScene() {
  const [activePillar, setActivePillar] = useState<CraftPillar>(
    PORTFOLIO_DATA.craftPillars[0]
  );

  return (
    <section id="craft" className="relative w-full py-28 md:py-40 px-6 md:px-12 border-t border-white/[0.06] bg-[#08080a]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20 pb-8 border-b border-white/[0.06]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#71717a] mb-3">
              <span className="text-[#d8b08c]">Scene 04</span>
              <span>&middot;</span>
              <span className="uppercase tracking-widest text-[#a1a1aa]">Capabilities &amp; Craft</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f4f4f6] uppercase">
              Creative
              <br />
              <span className="text-[#d8b08c]">Disciplines.</span>
            </h2>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-widest block">
              Architectural System
            </span>
            <span className="text-xs font-mono text-[#71717a] mt-1 block">
              Select a discipline to inspect production standards
            </span>
          </div>
        </div>

        {/* 2-Column Split: Pillar List & Interactive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Pillar List */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-white/[0.06]">
            {PORTFOLIO_DATA.craftPillars.map((pillar) => {
              const isActive = activePillar.id === pillar.id;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar)}
                  className={`group py-8 px-4 cursor-pointer transition-all duration-300 rounded-lg ${
                    isActive
                      ? 'bg-white/[0.04] pl-6'
                      : 'hover:bg-white/[0.02] hover:pl-6'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <span
                        className={`text-xs font-mono transition-colors ${
                          isActive ? 'text-[#d8b08c]' : 'text-[#71717a] group-hover:text-white'
                        }`}
                      >
                        {pillar.number}
                      </span>
                      <div>
                        <h3
                          className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                            isActive
                              ? 'text-white'
                              : 'text-[#a1a1aa] group-hover:text-white'
                          }`}
                        >
                          {pillar.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-[#71717a] font-light leading-relaxed max-w-md">
                          {pillar.tagline}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-mono transition-transform duration-300 mt-1 ${
                        isActive
                          ? 'text-[#d8b08c] translate-x-1'
                          : 'text-[#71717a] group-hover:translate-x-1'
                      }`}
                    >
                      &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Architectural Inspector Window */}
          <div className="lg:col-span-6 sticky top-28 p-8 md:p-12 rounded-xl bg-[#0e0e12] border border-white/10 shadow-2xl flex flex-col gap-8">
            <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#d8b08c]" />
                <span className="uppercase text-[#f4f4f6]">
                  Discipline Focus &middot; {activePillar.number}
                </span>
              </div>
              <span className="text-[#71717a] uppercase tracking-wider">Engineering Spec</span>
            </div>

            {/* Title & Tagline */}
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                {activePillar.title}
              </h4>
              <p className="text-sm font-mono text-[#d8b08c]">
                {activePillar.tagline}
              </p>
            </div>

            {/* Core Disciplines List */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#a1a1aa] block mb-3">
                Core Domains
              </span>
              <div className="flex flex-wrap gap-2">
                {activePillar.disciplines.map((d) => (
                  <span
                    key={d}
                    className="text-xs font-mono px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[#f4f4f6]"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Philosophy Statement */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#a1a1aa] block mb-2">
                Technical Philosophy
              </span>
              <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
                {activePillar.statement}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
