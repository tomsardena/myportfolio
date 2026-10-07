'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';

export default function ContactScene() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.creator.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full py-28 md:py-44 px-6 md:px-12 border-t border-white/[0.06] bg-[#08080a]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Marker */}
        <div className="flex items-center justify-between text-xs font-mono text-[#71717a] mb-16">
          <div className="flex items-center gap-3">
            <span className="text-[#d8b08c]">Scene 05</span>
            <span>&middot;</span>
            <span className="uppercase tracking-widest text-[#a1a1aa]">The Final Act &middot; Dialogue</span>
          </div>
          <span className="uppercase tracking-widest text-[11px] text-[#d8b08c]">
            {PORTFOLIO_DATA.creator.availability}
          </span>
        </div>

        {/* Cinematic Final Monumental Statement */}
        <div className="max-w-5xl mb-24 md:mb-32">
          <p className="text-xs md:text-sm font-mono uppercase tracking-[0.25em] text-[#d8b08c] mb-6">
            Initiate Collaboration
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#f4f4f6] uppercase leading-[0.92]">
            Let&apos;s build
            <br />
            something worth
            <br />
            <span className="text-[#d8b08c]">remembering.</span>
          </h2>
        </div>

        {/* 2-Column Split: Direct Channels & Message Dispatch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Direct Email & Social Links */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#a1a1aa] block mb-3">
                Direct Contact
              </span>
              <button
                onClick={handleCopyEmail}
                className="group flex flex-col items-start gap-1 text-left focus-visible:outline-none"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-medium text-[#f4f4f6] group-hover:text-[#d8b08c] transition-colors break-all">
                  {PORTFOLIO_DATA.creator.email}
                </span>
                <span className="text-xs font-mono text-[#71717a] group-hover:text-[#a1a1aa] flex items-center gap-2 mt-1">
                  <span>{copied ? 'Copied to clipboard' : 'Click to copy email address'}</span>
                  <span className="text-[#d8b08c]">{copied ? '✓' : '⧉'}</span>
                </span>
              </button>
            </div>

            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#a1a1aa] block mb-4">
                Social &amp; Professional Profiles
              </span>
              <div className="flex flex-col divide-y divide-white/[0.06]">
                {PORTFOLIO_DATA.socials.map((soc) => (
                  <a
                    key={soc.label}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 flex items-center justify-between text-sm group"
                  >
                    <span className="text-[#f4f4f6] group-hover:text-[#d8b08c] transition-colors font-medium">
                      {soc.label}
                    </span>
                    <span className="font-mono text-xs text-[#71717a] group-hover:text-[#a1a1aa] flex items-center gap-1.5 transition-colors">
                      <span>{soc.handle}</span>
                      <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[10px]">
                        &nearr;
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Location placeholder note */}
            <div className="p-6 rounded-lg bg-[#0e0e12] border border-white/10 text-xs font-mono text-[#a1a1aa]">
              <div className="flex items-center justify-between text-[#f4f4f6] font-semibold mb-2">
                <span>LOCATION</span>
                <span>{PORTFOLIO_DATA.creator.location}</span>
              </div>
              <p className="leading-relaxed">
                Open to remote contracts, collaborative studio commissions, and executive technical design partnerships.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Composer */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded-xl bg-[#0e0e12] border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10 text-xs font-mono">
              <span className="uppercase text-[#f4f4f6] tracking-wider">Direct Message</span>
              <span className="text-[#71717a]">{PORTFOLIO_DATA.creator.availability}</span>
            </div>

            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center gap-4">
                <span className="w-12 h-12 rounded-full border border-[#d8b08c] flex items-center justify-center text-[#d8b08c] text-xl">
                  &check;
                </span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                  Message Prepared
                </h3>
                <p className="text-sm text-[#a1a1aa] max-w-md font-light leading-relaxed">
                  Thank you. Your message placeholder is simulated. You can also reach out directly via{' '}
                  <span className="text-[#d8b08c]">{PORTFOLIO_DATA.creator.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-mono uppercase tracking-widest text-[#d8b08c] hover:underline"
                >
                  Write Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#a1a1aa] mb-2">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="[Your Name or Studio]"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder-white/20 focus:border-[#d8b08c] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#a1a1aa] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="[name@domain.com]"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder-white/20 focus:border-[#d8b08c] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#a1a1aa] mb-2">
                    Message / Project Brief
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="[Describe your project, timeline, or collaboration idea...]"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder-white/20 focus:border-[#d8b08c] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#71717a]">
                    Editable contact form placeholder
                  </span>
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#f4f4f6] hover:bg-[#d8b08c] text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300"
                  >
                    Send Message &rarr;
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
