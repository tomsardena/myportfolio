'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, CapabilityItem } from '@/src/data/portfolioData';
import { audioEngine } from '@/src/lib/audioManager';

export default function CapabilitiesMatrix() {
  const [activeCapability, setActiveCapability] = useState<CapabilityItem>(
    PORTFOLIO_DATA.capabilities[0]
  );

  const handleSelect = (cap: CapabilityItem) => {
    audioEngine.playClick();
    setActiveCapability(cap);
  };

  return (
    <section id="capabilities" className="relative w-full py-28 md:py-40 px-6 md:px-12 border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#575764] mb-3">
              <span className="text-[#e59b4c]">03</span>
              <span className="text-white/20">/</span>
              <span className="uppercase tracking-widest text-[#9c9ca8]">Discipline Matrix</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f5f5f7] uppercase leading-[0.95]">
              Architectural
              <br />
              <span className="text-shimmer">Capabilities.</span>
            </h2>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-[#9c9ca8] uppercase tracking-widest block">
              Systemized Engineering &amp; Direction
            </span>
            <span className="text-xs font-mono text-[#575764] mt-1 block">
              Select a discipline to inspect production methodology
            </span>
          </div>
        </div>

        {/* Interactive Capability System: 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Capability List */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-white/[0.08]">
            {PORTFOLIO_DATA.capabilities.map((cap) => {
              const isActive = activeCapability.id === cap.id;
              return (
                <div
                  key={cap.id}
                  onClick={() => handleSelect(cap)}
                  onMouseEnter={() => audioEngine.playHover()}
                  className={`group py-8 px-4 cursor-pointer transition-all duration-300 rounded-lg ${
                    isActive
                      ? 'bg-white/[0.04] pl-6'
                      : 'hover:bg-white/[0.02] hover:pl-6'
                  }`}
                  data-cursor="SELECT"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <span
                        className={`text-xs font-mono transition-colors ${
                          isActive ? 'text-[#e59b4c]' : 'text-[#575764] group-hover:text-white'
                        }`}
                      >
                        {cap.number}
                      </span>
                      <div>
                        <h3
                          className={`text-xl sm:text-2xl font-semibold tracking-tight transition-colors ${
                            isActive
                              ? 'text-white'
                              : 'text-[#9c9ca8] group-hover:text-white'
                          }`}
                        >
                          {cap.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-[#9c9ca8] font-light leading-relaxed max-w-md">
                          {cap.description}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-mono transition-transform duration-300 mt-1 ${
                        isActive
                          ? 'text-[#e59b4c] translate-x-1'
                          : 'text-[#575764] group-hover:translate-x-1'
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
          <div className="lg:col-span-6 sticky top-28 p-8 md:p-12 rounded-xl bg-[#0f0f13] border border-white/10 shadow-2xl flex flex-col gap-8">
            <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#e59b4c]" />
                <span className="uppercase text-[#f5f5f7]">
                  Discipline Inspector &middot; {activeCapability.number}
                </span>
              </div>
              <span className="text-[#575764] uppercase tracking-wider">Methodology</span>
            </div>

            {/* Title & Philosophy Quote */}
            <div>
              <h4 className="text-2xl font-bold tracking-tight text-white mb-4">
                {activeCapability.title}
              </h4>
              <blockquote className="border-l-2 border-[#e59b4c] pl-4 text-sm text-[#f5f5f7] italic font-light leading-relaxed">
                &ldquo;{activeCapability.quote}&rdquo;
              </blockquote>
            </div>

            {/* Core Disciplines */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9c9ca8] block mb-3">
                Core Domains
              </span>
              <div className="flex flex-wrap gap-2">
                {activeCapability.disciplines.map((d) => (
                  <span
                    key={d}
                    className="text-xs font-mono px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[#f5f5f7]"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Deliverables */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9c9ca8] block mb-3">
                Tangible Deliverables
              </span>
              <ul className="flex flex-col gap-2.5 text-xs font-mono text-[#9c9ca8]">
                {activeCapability.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-[#e59b4c] text-[10px]">&check;</span>
                    <span className="text-[#f5f5f7]">{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In-depth Methodology */}
            <div className="pt-4 border-t border-white/10 text-xs text-[#9c9ca8] leading-relaxed font-light">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9c9ca8] block mb-2">
                Engineering Approach
              </span>
              {activeCapability.methodology}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
