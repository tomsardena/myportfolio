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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#works' },
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
          ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.06] py-4'
          : 'bg-transparent border-b border-transparent py-7'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[var(--page-padding)] flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-sm font-semibold tracking-tight text-[#f5f5f7] hover:text-[#d4a373] transition-colors whitespace-nowrap"
        >
          {PORTFOLIO_DATA.creator.name}
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 editorial-meta text-[#8e8e99]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-[#8e8e99] hover:text-[#f5f5f7] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4a373] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary Action */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              if (onContactClick) {
                onContactClick();
              } else {
                handleLinkClick('#contact');
              }
            }}
            className="editorial-link group hidden sm:inline-flex"
          >
            <span>Contact</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 rounded border border-white/10 text-white focus-visible:outline-none"
            aria-label="Toggle navigation"
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

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#09090b]/98 backdrop-blur-2xl z-40 p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-6 pt-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-2xl font-bold tracking-tight text-[#f5f5f7] hover:text-[#d4a373] transition-colors py-2 border-b border-white/5 flex items-center justify-between uppercase"
              >
                <span>{link.label}</span>
                <span className="editorial-meta text-[#52525c]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 editorial-meta text-[#52525c] flex justify-between items-center">
            <span>{PORTFOLIO_DATA.creator.location}</span>
            <span className="text-[#d4a373]">{PORTFOLIO_DATA.creator.availability}</span>
          </div>
        </div>
      )}
    </header>
  );
}
