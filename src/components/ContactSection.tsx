'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { audioEngine } from '@/src/lib/audioManager';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    timeline: 'Q3 / 2026',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.creator.email);
    setCopied(true);
    audioEngine.playChime(740, 0.05);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    audioEngine.playChime(660, 0.06);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full py-28 md:py-44 px-6 md:px-12 border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Marker */}
        <div className="flex items-center justify-between text-xs font-mono text-[#575764] mb-16">
          <div className="flex items-center gap-3">
            <span className="text-[#e59b4c]">05</span>
            <span className="text-white/20">/</span>
            <span className="uppercase tracking-widest text-[#9c9ca8]">Final Sequence &middot; Dialogue</span>
          </div>
          <span className="uppercase tracking-widest text-[11px] text-emerald-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Accepting Inquiries
          </span>
        </div>

        {/* Cinematic Final Statement */}
        <div className="max-w-5xl mb-24 md:mb-32">
          <p className="text-xs md:text-sm font-mono uppercase tracking-[0.25em] text-[#e59b4c] mb-6">
            Initiate Collaboration
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#f5f5f7] uppercase leading-[0.92]">
            Let&apos;s build
            <br />
            something worth
            <br />
            <span className="text-shimmer">remembering.</span>
          </h2>
        </div>

        {/* 2-Column Split: Direct Channels & Interactive Commission Dispatch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Direct Inquiries, Email, and Social Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9c9ca8] block mb-3">
                Direct Electronic Mail
              </span>
              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => audioEngine.playHover()}
                className="group flex flex-col items-start gap-1 text-left focus-visible:outline-none"
                data-cursor="COPY"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-medium text-[#f5f5f7] group-hover:text-[#e59b4c] transition-colors break-all">
                  {PORTFOLIO_DATA.creator.email}
                </span>
                <span className="text-xs font-mono text-[#575764] group-hover:text-[#9c9ca8] flex items-center gap-2 mt-1">
                  <span>{copied ? 'Copied to clipboard' : 'Click to copy email address'}</span>
                  <span className="text-[#e59b4c]">{copied ? '✓' : '⧉'}</span>
                </span>
              </button>
            </div>

            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9c9ca8] block mb-4">
                Verified Social Handles &amp; Profiles
              </span>
              <div className="flex flex-col divide-y divide-white/[0.06]">
                {PORTFOLIO_DATA.socials.map((soc) => (
                  <a
                    key={soc.label}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => audioEngine.playHover()}
                    className="py-3 flex items-center justify-between text-sm group"
                  >
                    <span className="text-[#f5f5f7] group-hover:text-[#e59b4c] transition-colors font-medium">
                      {soc.label}
                    </span>
                    <span className="font-mono text-xs text-[#575764] group-hover:text-[#9c9ca8] flex items-center gap-1.5 transition-colors">
                      <span>{soc.handle}</span>
                      <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[10px]">
                        &nearr;
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Studio Hours Note */}
            <div className="p-6 rounded-lg bg-[#0f0f13] border border-white/10 text-xs font-mono text-[#9c9ca8]">
              <div className="flex items-center justify-between text-[#f5f5f7] font-semibold mb-2">
                <span>ATELIER HOURS</span>
                <span>CET (UTC+1)</span>
              </div>
              <p className="leading-relaxed">
                Client correspondence reviewed twice daily. For urgent commercial opportunities, include
                expected project timeline and budget constraints in your opening brief.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Composer */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded-xl bg-[#0f0f13] border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10 text-xs font-mono">
              <span className="uppercase text-[#f5f5f7] tracking-wider">Commission Dispatch</span>
              <span className="text-[#575764]">Encrypted Channel</span>
            </div>

            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center gap-4">
                <span className="w-12 h-12 rounded-full border border-[#e59b4c] flex items-center justify-center text-[#e59b4c] text-xl">
                  &check;
                </span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                  Dispatch Recorded
                </h3>
                <p className="text-sm text-[#9c9ca8] max-w-md font-light leading-relaxed">
                  Thank you, {formState.name || 'colleague'}. Your inquiry has been routed directly to
                  Aurelius Vane. You will receive a bespoke response within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-mono uppercase tracking-widest text-[#e59b4c] hover:underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#9c9ca8] mb-2">
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Rostova / Studio 9"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder-white/20 focus:border-[#e59b4c] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#9c9ca8] mb-2">
                      Direct Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="elena@studio9.ch"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder-white/20 focus:border-[#e59b4c] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9c9ca8] mb-2">
                    Project Target Window
                  </label>
                  <select
                    value={formState.timeline}
                    onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#070709] border border-white/10 text-sm text-white focus:border-[#e59b4c] focus:outline-none transition-colors"
                  >
                    <option value="Q3 / 2026">Q3 2026 (Immediate Commission)</option>
                    <option value="Q4 / 2026">Q4 2026 (Autumn Flagship)</option>
                    <option value="2027">2027 Strategic Retainer</option>
                    <option value="Advisory">Executive / Advisory Session</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9c9ca8] mb-2">
                    Project Objective &amp; Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your creative vision, architectural requirements, or technical challenges..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder-white/20 focus:border-[#e59b4c] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#575764]">
                    Protected under mutual NDA confidentiality.
                  </span>
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#f5f5f7] hover:bg-[#e59b4c] text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e59b4c]"
                    data-cursor="DISPATCH"
                  >
                    Transmit Inquiry &rarr;
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
