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
    <section id="contact" className="relative w-full py-32 md:py-44 px-[var(--page-padding)] border-t border-white/[0.06] bg-[#09090b]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Marker */}
        <div className="flex items-center justify-between editorial-meta text-[#8e8e99] mb-16 pb-4 border-b border-white/[0.06]">
          <span className="text-[#d4a373]">Dialogue &middot; Contact</span>
          <span>{PORTFOLIO_DATA.creator.availability}</span>
        </div>

        {/* Monumental Final Statement */}
        <div className="max-w-5xl mb-24 md:mb-32">
          <span className="editorial-meta text-[#d4a373] block mb-4">
            Initiate Contact
          </span>
          <h2 className="display-statement text-[#f5f5f7] uppercase tracking-tight select-none">
            Let&apos;s build
            <br />
            something worth
            <br />
            <span className="text-[#8e8e99]">remembering.</span>
          </h2>
        </div>

        {/* 2-Column Split: Direct Channels & Message Dispatch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Direct Email & Social Profiles */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <span className="editorial-meta text-[#8e8e99] block mb-3">
                Direct Electronic Mail
              </span>
              <button
                onClick={handleCopyEmail}
                className="group flex flex-col items-start gap-1 text-left focus-visible:outline-none"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-medium text-[#f5f5f7] group-hover:text-[#d4a373] transition-colors break-all">
                  {PORTFOLIO_DATA.creator.email}
                </span>
                <span className="editorial-meta text-[#52525c] group-hover:text-[#8e8e99] flex items-center gap-2 mt-2">
                  <span>{copied ? 'Copied to clipboard' : 'Click to copy address'}</span>
                  <span className="text-[#d4a373]">{copied ? '✓' : '⧉'}</span>
                </span>
              </button>
            </div>

            <div className="pt-6 border-t border-white/10">
              <span className="editorial-meta text-[#8e8e99] block mb-4">
                Verified Social Profiles
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
                    <span className="text-[#f5f5f7] group-hover:text-[#d4a373] transition-colors font-medium">
                      {soc.label}
                    </span>
                    <span className="editorial-meta text-[#52525c] group-hover:text-[#8e8e99] flex items-center gap-1.5 transition-colors">
                      <span>{soc.handle}</span>
                      <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        &nearr;
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Location Note */}
            <div className="p-6 rounded bg-[#101014] border border-white/10 editorial-meta text-[#8e8e99]">
              <div className="flex items-center justify-between text-[#f5f5f7] font-semibold mb-2">
                <span>Location</span>
                <span>{PORTFOLIO_DATA.creator.location}</span>
              </div>
              <p className="body-base text-[#8e8e99] leading-relaxed normal-case">
                Open to remote contracts, collaborative studio commissions, and design-led engineering partnerships.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded bg-[#101014] border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10 editorial-meta">
              <span className="text-[#f5f5f7]">Direct Message</span>
              <span className="text-[#d4a373]">{PORTFOLIO_DATA.creator.availability}</span>
            </div>

            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center gap-4">
                <span className="w-10 h-10 rounded border border-[#d4a373] flex items-center justify-center text-[#d4a373]">
                  &check;
                </span>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                  Message Prepared
                </h3>
                <p className="body-base text-[#8e8e99] max-w-md font-light leading-relaxed">
                  Thank you. Direct communication can also be sent to{' '}
                  <span className="text-[#d4a373]">{PORTFOLIO_DATA.creator.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="editorial-link text-[#d4a373] mt-4"
                >
                  Write Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block editorial-meta text-[#8e8e99] mb-2">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="[Your Name or Studio]"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-black/40 border border-white/10 text-sm text-white placeholder-white/20 focus:border-[#d4a373] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block editorial-meta text-[#8e8e99] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="[name@domain.com]"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-black/40 border border-white/10 text-sm text-white placeholder-white/20 focus:border-[#d4a373] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block editorial-meta text-[#8e8e99] mb-2">
                    Message / Project Brief
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="[Describe your project, timeline, or collaboration idea...]"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-black/40 border border-white/10 text-sm text-white placeholder-white/20 focus:border-[#d4a373] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="editorial-meta text-[#52525c]">
                    Editable contact placeholder
                  </span>
                  <button
                    type="submit"
                    className="editorial-cta"
                  >
                    <span>Send Message</span>
                    <span>&rarr;</span>
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
