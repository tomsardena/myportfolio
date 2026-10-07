/**
 * Cinematic Web Audio Ambient Synthesizer & Micro-Interaction Sound Engine
 * Zero external mp3/wav files: completely generative via Web Audio API oscillators and filters.
 * Muted by default to respect user preference and browser autoplay policies.
 */

class CinematicAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private masterGain: GainNode | null = null;
  private ambientGain: GainNode | null = null;
  private droneOscillators: { osc: OscillatorNode; gain: GainNode }[] = [];
  private isInitialized: boolean = false;
  private listeners: ((isMuted: boolean) => void)[] = [];

  constructor() {
    // Lazy initialized on first user gesture
  }

  private initContext() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.4, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      this.ambientGain.connect(this.masterGain);

      this.setupAmbientDrone();
      this.isInitialized = true;
    } catch {
      // Audio not supported or blocked
    }
  }

  private setupAmbientDrone() {
    if (!this.ctx || !this.ambientGain) return;

    // Cinematic deep chords: fundamental at 55Hz (A1), fifth at 82.4Hz (E2), octave at 110Hz (A2), and subtle overtone at 164.8Hz
    const frequencies = [55, 82.4, 110, 164.8];
    const types: OscillatorType[] = ['sine', 'triangle', 'sine', 'sine'];

    frequencies.forEach((freq, index) => {
      if (!this.ctx || !this.ambientGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = types[index];
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Low pass filter for dark, cinematic warm tone
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(240, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.2, this.ctx.currentTime);

      // LFO for subtle breathing movement
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.08 + index * 0.03, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(12, this.ctx.currentTime);
      lfo.connect(filter.frequency);
      lfo.start();

      gain.gain.setValueAtTime(0.04 / (index + 1), this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ambientGain);

      osc.start();
      this.droneOscillators.push({ osc, gain });
    });
  }

  public toggleMute(): boolean {
    if (!this.ctx) {
      this.initContext();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isMuted = !this.isMuted;

    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      if (this.isMuted) {
        this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.3);
      } else {
        this.masterGain.gain.setValueAtTime(0.0001, now);
        this.masterGain.gain.linearRampToValueAtTime(0.35, now + 0.5);
        this.playChime(440, 0.08);
      }
    }

    this.notify();
    return this.isMuted;
  }

  public getMutedState(): boolean {
    return this.isMuted;
  }

  public subscribe(cb: (isMuted: boolean) => void): () => void {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter(l => l !== cb);
    };
  }

  private notify() {
    this.listeners.forEach(cb => cb(this.isMuted));
  }

  /**
   * Subtle micro-interaction sound on button click
   */
  public playClick() {
    if (this.isMuted || !this.ctx || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.04);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.045);
    } catch {
      // Ignore
    }
  }

  /**
   * Subtle hover tactile cue
   */
  public playHover() {
    if (this.isMuted || !this.ctx || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.03);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.035);
    } catch {
      // Ignore
    }
  }

  /**
   * Harmonic chime for modals or reveals
   */
  public playChime(freq = 520, volume = 0.05) {
    if (this.isMuted || !this.ctx || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.36);
    } catch {
      // Ignore
    }
  }
}

export const audioEngine = new CinematicAudioEngine();
