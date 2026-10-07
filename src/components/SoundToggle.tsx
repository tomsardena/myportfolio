'use client';

import React, { useSyncExternalStore } from 'react';
import { audioEngine } from '@/src/lib/audioManager';

function subscribe(callback: () => void) {
  return audioEngine.subscribe(() => callback());
}

function getSnapshot() {
  return audioEngine.getMutedState();
}

function getServerSnapshot() {
  return true;
}

export default function SoundToggle() {
  const isMuted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleToggle = () => {
    audioEngine.toggleMute();
  };

  return (
    <button
      onClick={handleToggle}
      className="group relative flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/25 bg-[#0f0f13]/80 hover:bg-[#16161c] text-xs font-mono tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e59b4c]"
      aria-label={isMuted ? 'Enable ambient soundscape' : 'Mute ambient soundscape'}
      data-cursor="SOUND"
    >
      {/* Equalizer animation */}
      <span className="flex items-end gap-[3px] h-3 w-3.5" aria-hidden="true">
        <span
          className={`w-[2px] bg-[#e59b4c] rounded-full transition-all duration-300 ${
            !isMuted ? 'h-3 animate-pulse' : 'h-1.5 opacity-40'
          }`}
        />
        <span
          className={`w-[2px] bg-[#e59b4c] rounded-full transition-all duration-300 ${
            !isMuted ? 'h-2 animate-bounce' : 'h-1 opacity-40'
          }`}
          style={{ animationDuration: '0.8s' }}
        />
        <span
          className={`w-[2px] bg-[#e59b4c] rounded-full transition-all duration-300 ${
            !isMuted ? 'h-3.5 animate-pulse' : 'h-2 opacity-40'
          }`}
          style={{ animationDuration: '1.2s' }}
        />
      </span>

      <span className="text-[11px] uppercase tracking-widest text-[#9c9ca8] group-hover:text-white transition-colors">
        {isMuted ? 'Sound: Off' : 'Sound: Ambient'}
      </span>
    </button>
  );
}
