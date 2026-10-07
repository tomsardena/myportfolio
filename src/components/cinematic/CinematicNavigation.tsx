'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';

interface NavigationProps {
  onContactClick?: () => void;
}

export default function CinematicNavigation({ onContactClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Works', href: '#works' },
    { label: 'Story', href: '#story' },
    { label: 'Craft', href: '#craft' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#08080a]/80 backdrop-blur-md border-b border-white/[0.06] py-3.5'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-sm md:text-base font-semibold tracking-tight text-[#f4f4f6] hover:text-[#d8b08c] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d8b08c]"
        >
          {PORTFOLIO_DATA.creator.name}
        </a>

        {/* Zone 2: Editorial Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide text-[#a1a1aa]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-[#a1a1aa] hover:text-[#f4f4f6] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d8b08c] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              if (onContactClick) {
                onContactClick();
              } else {
                handleLinkClick('#contact');
              }
            }}
            className="px-4 py-2 text-xs font-medium tracking-wider uppercase text-black bg-[#f4f4f6] hover:bg-[#d8b08c] rounded-full transition-colors duration-300 whitespace-nowrap"
          >
            Initiate Contact
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 rounded border border-white/10 text-white focus-visible:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`w-4 h-[1.5px] bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[3.5px]' : '-translate-y-[2px]'
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[2px]' : 'translate-y-[2px]'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#08080a]/95 backdrop-blur-2xl z-40 p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-6 pt-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-3xl font-bold uppercase tracking-tight text-[#f4f4f6] hover:text-[#d8b08c] transition-colors py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#71717a]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 text-xs font-mono text-[#71717a] flex justify-between items-center">
            <span>{PORTFOLIO_DATA.creator.location}</span>
            <span className="text-[#d8b08c]">{PORTFOLIO_DATA.creator.availability}</span>
          </div>
        </div>
      )}
    </header>
  );
}
