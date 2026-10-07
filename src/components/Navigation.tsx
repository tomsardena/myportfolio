'use client';

import React, { useState, useEffect } from 'react';
import SoundToggle from './SoundToggle';
import { audioEngine } from '@/src/lib/audioManager';

interface NavigationProps {
  onOpenContact?: () => void;
}

export default function Navigation({ onOpenContact }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Works', href: '#selected-works' },
    { label: 'Vision', href: '#vision' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Archive', href: '#archive' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    audioEngine.playHover();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    audioEngine.playClick();
    if (onOpenContact) {
      onOpenContact();
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#070709]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            audioEngine.playClick();
          }}
          className="text-base md:text-lg font-semibold tracking-tighter text-[#f5f5f7] hover:text-[#e59b4c] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e59b4c]"
          data-cursor="HOME"
        >
          Aurelius Vane
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide text-[#9c9ca8]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              onMouseEnter={() => audioEngine.playHover()}
              className="relative text-[#9c9ca8] hover:text-white transition-colors duration-200 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#e59b4c] hover:after:w-full after:transition-all after:duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e59b4c]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <SoundToggle />
          </div>

          <button
            onClick={handleCtaClick}
            className="px-4 py-2 text-xs font-medium tracking-wider uppercase text-black bg-[#f5f5f7] hover:bg-[#e59b4c] rounded-full transition-colors duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e59b4c]"
            data-cursor="CONTACT"
          >
            Initiate Dialogue
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 rounded border border-white/10 text-white focus-visible:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`w-4 h-[1.5px] bg-white transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : '-translate-y-[2px]'
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-white transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[2px]' : 'translate-y-[2px]'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#070709]/95 backdrop-blur-xl px-6 py-8 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="text-lg font-medium text-[#f5f5f7] hover:text-[#e59b4c] transition-colors py-1 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-white/10">
            <SoundToggle />
            <span className="text-[11px] font-mono text-[#575764]">GMT+1 · Stockholm</span>
          </div>
        </div>
      )}
    </header>
  );
}
