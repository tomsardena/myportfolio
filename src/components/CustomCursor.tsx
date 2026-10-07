'use client';

import React, { useEffect, useState, useRef, useSyncExternalStore } from 'react';

function subscribePointer(callback: () => void) {
  const mediaQuery = window.matchMedia('(pointer: fine)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getPointerSnapshot() {
  return !window.matchMedia('(pointer: fine)').matches;
}

function getServerPointerSnapshot() {
  return true;
}

export default function CustomCursor() {
  const isTouch = useSyncExternalStore(subscribePointer, getPointerSnapshot, getServerPointerSnapshot);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTouch) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPos({ x: mouseX, y: mouseY });
      setIsVisible(true);

      // Check if hovering interactive element with custom cursor label
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('[data-cursor]');
      if (interactive) {
        const text = interactive.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        const clickable = target.closest('a, button, [role="button"], input, textarea');
        if (clickable) {
          setCursorText('');
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth lerp loop for the outer ring
    let animationFrameId: number;
    const lerpLoop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(lerpLoop);
    };

    animationFrameId = requestAnimationFrame(lerpLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden" aria-hidden="true">
      {/* Outer magnetic follower */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 transition-[width,height,background-color,border-color] duration-200 ease-out flex items-center justify-center rounded-full pointer-events-none will-change-transform ${
          isHovered
            ? cursorText
              ? 'w-20 h-20 bg-[#e59b4c] text-black text-[11px] font-bold tracking-wider'
              : 'w-10 h-10 border border-[#e59b4c]/80 bg-[#e59b4c]/10'
            : 'w-7 h-7 border border-white/20 bg-white/[0.02]'
        }`}
      >
        {cursorText && (
          <span className="uppercase text-black tracking-widest font-semibold select-none">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center pinpoint */}
      <div
        ref={dotRef}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
        className={`absolute top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none will-change-transform ${
          cursorText ? 'opacity-0' : 'bg-[#f5f5f7] opacity-80'
        }`}
      />
    </div>
  );
}
