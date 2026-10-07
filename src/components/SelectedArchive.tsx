'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { audioEngine } from '@/src/lib/audioManager';

export default function SelectedArchive() {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems =
    filter === 'all'
      ? PORTFOLIO_DATA.archive
      : PORTFOLIO_DATA.archive.filter((item) =>
          item.focus.toLowerCase().includes(filter.toLowerCase())
        );

  const filters = [
    { label: 'All Artifacts', value: 'all' },
    { label: 'Shaders & WebGL', value: 'shader' },
    { label: 'Creative Direction', value: 'direction' },
    { label: 'Research & Audio', value: 'audio' },
  ];

  const handleFilterClick = (val: string) => {
    audioEngine.playClick();
    setFilter(val);
  };

  return (
    <section id="archive" className="relative w-full py-28 md:py-40 px-6 md:px-12 border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#575764] mb-3">
              <span className="text-[#e59b4c]">04</span>
              <span className="text-white/20">/</span>
              <span className="uppercase tracking-widest text-[#9c9ca8]">Laboratory Index</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f5f5f7] uppercase leading-[0.95]">
              Artifacts &amp;
              <br />
              <span className="text-shimmer">Research.</span>
            </h2>
          </div>

          {/* Interactive filter controls (functional segmented buttons adhering to Zero-Pill spec) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0f0f13] border border-white/10 rounded-lg">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => handleFilterClick(f.value)}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                  filter === f.value
                    ? 'bg-white/10 text-[#f5f5f7] border border-white/20 shadow-sm'
                    : 'text-[#9c9ca8] hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono text-[#575764] uppercase tracking-wider">
                <th className="py-4 px-4 font-normal">Year</th>
                <th className="py-4 px-4 font-normal">Publication / Artifact</th>
                <th className="py-4 px-4 font-normal hidden sm:table-cell">Discipline Focus</th>
                <th className="py-4 px-4 font-normal hidden md:table-cell">Classification</th>
                <th className="py-4 px-4 font-normal text-right">Access</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-sm">
              {filteredItems.map((item, idx) => (
                <tr
                  key={idx}
                  onMouseEnter={() => audioEngine.playHover()}
                  className="group hover:bg-white/[0.02] transition-colors cursor-pointer"
                  data-cursor="READ"
                >
                  <td className="py-5 px-4 font-mono text-xs text-[#575764] group-hover:text-[#e59b4c] tabular-nums transition-colors">
                    {item.year}
                  </td>
                  <td className="py-5 px-4 font-medium text-[#f5f5f7] group-hover:text-white transition-colors">
                    {item.title}
                  </td>
                  <td className="py-5 px-4 font-mono text-xs text-[#9c9ca8] hidden sm:table-cell">
                    {item.focus}
                  </td>
                  <td className="py-5 px-4 font-mono text-xs text-[#575764] hidden md:table-cell">
                    {item.type}
                  </td>
                  <td className="py-5 px-4 text-right">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#e59b4c] group-hover:text-white transition-colors">
                      <span>{item.linkText}</span>
                      <span className="text-[10px] group-hover:translate-x-0.5 transition-transform">
                        &rarr;
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
