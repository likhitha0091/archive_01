import { motion } from 'framer-motion';
import { SafeImage } from '../components/SafeImage';
import { TypewriterSequence } from '../components/TypewriterText';
import { Heart, GitBranch } from 'lucide-react';
import type { DialogueLine } from '../types/story';

interface Scene08Props {
  onUnlockNav: () => void;
}

export function Scene08_MemoryFriendship({ onUnlockNav }: Scene08Props) {
  const dialogue: DialogueLine[] = [
    { text: 'Somewhere between all the chaos and fights...', pauseAfterMs: 1800 },
    { text: 'we actually became good friends ❤️', pauseAfterMs: 2600 },
  ];

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-6 flex flex-col justify-center min-h-[85vh]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-6"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-bold text-rose-400 bg-rose-950/40 px-3 py-1 rounded-full border border-rose-500/30 flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 fill-rose-400/40" />
            <span>MEMORY 06 // FRIENDSHIP_CONSTELLATION.sys</span>
          </span>
          <span className="font-mono-code text-xs text-slate-400">HEART CONNECTOME</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono-code text-xs text-rose-300">
          <GitBranch className="w-3.5 h-3.5" />
          <span>BOND: CONFIRMED GOOD FRIENDS ❤️</span>
        </div>
      </motion.div>

      {/* Composition: Constellation Node Layout with Uncropped Photo */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
        {/* Constellation lines */}
        <div className="absolute inset-0 pointer-events-none opacity-25 -z-10">
          <svg className="w-full h-full" viewBox="0 0 500 300">
            <circle cx="80" cy="50" r="3" fill="#fb7185" />
            <circle cx="200" cy="80" r="4" fill="#fb7185" />
            <circle cx="420" cy="40" r="3" fill="#38bdf8" />
            <line x1="80" y1="50" x2="200" y2="80" stroke="#fb7185" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="200" y1="80" x2="300" y2="200" stroke="#fb7185" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Left: Memory Card */}
        <div className="md:col-span-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="p-3 bg-gradient-to-b from-rose-950/40 via-slate-900 to-slate-950 rounded-2xl border-2 border-rose-400/40 shadow-2xl max-w-sm w-full relative flex flex-col items-center"
          >
            <div className="w-full flex justify-between items-center mb-2 px-1 font-mono-code text-[10px] text-rose-300 font-bold">
              <span>CONSTELLATION #006</span>
              <span className="bg-rose-500 text-white px-2 py-0.5 rounded shadow">BOND STABILIZED ❤️</span>
            </div>

            <div className="w-full max-h-[50vh] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center p-1">
              <SafeImage
                src="/images/memories/06_friendship_01.jpeg"
                alt="Friendship Memory"
                className="w-full h-full max-h-[48vh]"
                objectFit="contain"
              />
            </div>

            <div className="mt-2 text-center font-mono-code text-[11px] text-rose-300">
              SYNAPSE: CHAOS & FIGHTS → CLOSE BOND
            </div>
          </motion.div>
        </div>

        {/* Right: Narrative Box */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="blueprint-panel rounded-2xl p-6 md:p-8 relative border-rose-500/30"
          >
            <div className="absolute -top-3 left-6 font-mono-code text-[11px] font-bold text-rose-300 bg-slate-900 px-3 py-0.5 rounded-full border border-rose-400/40">
              HEART LOG // BOND
            </div>
            <div className="text-xl md:text-3xl font-handwritten text-amber-200 font-bold leading-relaxed">
              <TypewriterSequence
                lines={dialogue}
                onComplete={onUnlockNav}
                speedMs={35}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
