import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { toggleAudioMute, getAudioMuted, playSound } from '../utils/audio';

export function AudioToggle() {
  const [isMuted, setIsMuted] = useState(getAudioMuted());

  const handleToggle = () => {
    const nextMuted = toggleAudioMute();
    setIsMuted(nextMuted);
    if (!nextMuted) {
      playSound('beep');
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-4 right-4 sm:top-5 sm:right-6 z-50 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-cyan-300 border border-cyan-400/30 backdrop-blur shadow-lg transition-all cursor-pointer flex items-center gap-1.5 font-mono-code text-xs"
      title={isMuted ? 'Enable Subtle Audio (🔊)' : 'Mute Audio (🔇)'}
      aria-label="Toggle Sound Effects"
    >
      {isMuted ? (
        <VolumeX className="w-4 h-4 text-slate-400" />
      ) : (
        <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
      )}
    </button>
  );
}
