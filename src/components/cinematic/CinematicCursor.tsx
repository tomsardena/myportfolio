'use client';

import React, { useEffect, useRef, useSyncExternalStore } from 'react';

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

export default function CinematicCursor() {
  const isTouch = useSyncExternalStore(subscribePointer, getPointerSnapshot, getServerPointerSnapshot);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTouch) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isClicking = false;

    const ring = ringRef.current;
    const dot = dotRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dot) {
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, [data-interactive]');
      isHovering = !!interactive;
    };

    const handleMouseDown = () => {
      isClicking = true;
    };

    const handleMouseUp = () => {
      isClicking = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    let animationId: number;
    const updateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ring) {
        const scale = isClicking ? 0.85 : isHovering ? 1.8 : 1;
        const opacity = isHovering ? 0.8 : 0.35;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
        ring.style.opacity = `${opacity}`;
      }

      animationId = requestAnimationFrame(updateRing);
    };

    animationId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden" aria-hidden="true">
      {/* Outer subtle aura */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 w-8 h-8 rounded-full border border-white/40 pointer-events-none will-change-transform transition-[border-color,background-color] duration-200"
      />
      {/* Pinpoint dot */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 w-1 h-1 rounded-full bg-white pointer-events-none will-change-transform opacity-80"
      />
    </div>
  );
}
