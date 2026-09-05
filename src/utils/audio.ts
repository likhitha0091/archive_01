// Lightweight Web Audio API synthesizer for subtle, premium cyber sound effects
let audioCtx: AudioContext | null = null;
let isAudioMuted = true; // Default muted until user toggles or unlocks

export function toggleAudioMute(): boolean {
  isAudioMuted = !isAudioMuted;
  if (!isAudioMuted && !audioCtx) {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtx = new AudioContextClass();
    } catch {
      // Audio not supported
    }
  }
  return isAudioMuted;
}

export function getAudioMuted(): boolean {
  return isAudioMuted;
}

export function playSound(type: 'beep' | 'tick' | 'unlock' | 'transition' | 'fanfare') {
  if (isAudioMuted) return;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    switch (type) {
      case 'tick':
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, now);
        gain.gain.setValueAtTime(0.015, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
        break;

      case 'beep':
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
        break;

      case 'unlock':
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.18); // C6
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
        break;

      case 'transition':
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.15);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.start(now);
        osc.stop(now + 0.18);
        break;

      case 'fanfare':
        // Major chord arpeggio
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
          const o = audioCtx!.createOscillator();
          const g = audioCtx!.createGain();
          o.connect(g);
          g.connect(audioCtx!.destination);
          o.type = 'triangle';
          o.frequency.setValueAtTime(freq, now + i * 0.1);
          g.gain.setValueAtTime(0.06, now + i * 0.1);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.4);
          o.start(now + i * 0.1);
          o.stop(now + i * 0.1 + 0.4);
        });
        break;
    }
  } catch {
    // Audio synthesis fallback
  }
}
