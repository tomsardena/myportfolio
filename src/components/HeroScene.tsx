'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { audioEngine } from '@/src/lib/audioManager';

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    // Live Stockholm / Europe time display
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Stockholm',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setLocalTime(timeStr);
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Three.js scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070709, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);
    } catch {
      // Fallback if WebGL fails
      return;
    }

    // Particle field with warm amber & titanium tones
    const particleCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const colorWarm = new THREE.Color(0xe59b4c);
    const colorDim = new THREE.Color(0x3a3a46);
    const colorWhite = new THREE.Color(0xf5f5f7);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Cylindrical / spherical cosmic field distribution
      const radius = 20 + Math.random() * 120;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      positions[i3] = radius * Math.cos(theta) * Math.cos(phi);
      positions[i3 + 1] = (Math.random() - 0.5) * 80;
      positions[i3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

      const roll = Math.random();
      const mixedColor = roll > 0.85 ? colorWarm : roll > 0.6 ? colorWhite : colorDim;
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      scales[i] = Math.random() * 2.5 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle material
    const material = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle geometrical horizon grid
    const gridHelper = new THREE.GridHelper(260, 40, 0xe59b4c, 0x181822);
    gridHelper.position.y = -35;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.25;
    scene.add(gridHelper);

    // Mouse movement response
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 12;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 12;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Resize handler
    const onResize = () => {
      if (!container || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth camera interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      camera.position.x = currentMouseX;
      camera.position.y = -currentMouseY * 0.5;
      camera.lookAt(0, 0, 0);

      // Particle subtle rotation
      particles.rotation.y = elapsed * 0.03;
      particles.rotation.x = Math.sin(elapsed * 0.02) * 0.05;

      gridHelper.position.z = (elapsed * 3) % 6.5 - 35;

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer?.dispose();
    };
  }, []);

  const scrollToWorks = () => {
    audioEngine.playClick();
    const el = document.getElementById('selected-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVision = () => {
    audioEngine.playHover();
    const el = document.getElementById('vision');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Three.js Background Canvas */}
      <div ref={mountRef} className="absolute inset-0 pointer-events-none z-0 opacity-80" />

      {/* Atmospheric radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-radial from-transparent via-[#070709]/60 to-[#070709]"
        aria-hidden="true"
      />

      {/* Top telemetry bar */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#9c9ca8] gap-2 pt-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#e59b4c] animate-pulse" />
          <span className="tracking-widest uppercase text-[#f5f5f7]">
            {PORTFOLIO_DATA.creator.coordinates}
          </span>
          <span className="text-white/20">/</span>
          <span className="text-[#9c9ca8]">{PORTFOLIO_DATA.creator.location}</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] tracking-widest uppercase">
          <span className="text-[#9c9ca8]">STOCKHOLM CLOCK:</span>
          <span className="tabular-nums text-[#f5f5f7] bg-white/5 px-2 py-0.5 rounded border border-white/10">
            {localTime || '17:16:33 CET'}
          </span>
        </div>
      </div>

      {/* Central Asymmetrical Typographic Hero */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto my-auto py-12 md:py-20">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-[#e59b4c] mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#e59b4c]" />
            Independent Creative Direction &middot; Technical Architecture
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tight text-[#f5f5f7] leading-[0.92] uppercase select-none">
            I Direct
            <br />
            <span className="text-[#9c9ca8] hover:text-white transition-colors duration-500">
              Interactive
            </span>
            <br />
            <span className="text-shimmer">Realities.</span>
          </h1>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <p className="text-base sm:text-lg md:text-xl text-[#9c9ca8] leading-relaxed font-light max-w-xl">
                Bridging bespoke filmic art direction, custom WebGL compute pipelines, and scalable
                frontend architecture to engineer digital flagships that command memorability.
              </p>

              {/* Status indicator */}
              <div className="mt-6 flex items-center gap-3 text-xs font-mono text-[#9c9ca8]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{PORTFOLIO_DATA.creator.status}</span>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-wrap gap-4 items-center md:justify-end">
              <button
                onClick={scrollToWorks}
                className="group relative px-6 py-3.5 rounded-full bg-[#f5f5f7] hover:bg-[#e59b4c] text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e59b4c]"
                data-cursor="EXPLORE"
              >
                <span>Explore Works</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>

              <button
                onClick={scrollToVision}
                className="px-6 py-3.5 rounded-full border border-white/15 hover:border-white/35 bg-white/[0.02] hover:bg-white/[0.06] text-[#f5f5f7] font-medium text-xs uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                data-cursor="VISION"
              >
                Read Manifesto
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Hero Footer Bar */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto flex items-center justify-between text-xs font-mono text-[#575764] border-t border-white/[0.08] pt-6">
        <div className="hidden sm:flex items-center gap-6">
          <span>SELECTED AWARDS: FWA OF THE DAY &middot; AWWWARDS SITE OF THE DAY</span>
        </div>

        <button
          onClick={scrollToWorks}
          className="flex items-center gap-3 text-[#9c9ca8] hover:text-[#e59b4c] transition-colors uppercase tracking-widest text-[11px] group ml-auto sm:ml-0"
        >
          <span>Scroll to navigate archive</span>
          <span className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#e59b4c] transition-colors">
            <span className="w-1 h-1 bg-[#e59b4c] rounded-full animate-bounce" />
          </span>
        </button>
      </div>
    </section>
  );
}
