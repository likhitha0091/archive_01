import { motion } from 'framer-motion';
import { SafeImage } from '../components/SafeImage';
import { TypewriterSequence } from '../components/TypewriterText';
import { Database, Heart } from 'lucide-react';
import type { DialogueLine } from '../types/story';

interface Scene10Props {
  onUnlockNav: () => void;
}

export function Scene10_MemoryOneYear({ onUnlockNav }: Scene10Props) {
  // ONLY the single required line:
  const dialogue: DialogueLine[] = [
    { text: 'We actually have some memories together from the past one year ❤️', pauseAfterMs: 2800 },
  ];

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-col justify-center min-h-[85vh]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-6"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-bold text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5" />
            <span>MEMORY 08 // DATABASE_ARCHIVE.sys</span>
          </span>
          <span className="font-mono-code text-xs text-slate-400">MEMORY RETRIEVAL: 365 DAYS</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono-code text-xs text-rose-300">
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/40" />
          <span>CAPACITY: 1 YEAR MEMORIES ❤️</span>
        </div>
      </motion.div>

      {/* Composition: Database Terminal Record with 100% Uncropped, Zoomed-Out Photograph with Breathing Space */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
        {/* Left: Memory Database Card with Uncropped Photograph */}
        <div className="md:col-span-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="p-4 bg-slate-900/90 rounded-2xl border-2 border-cyan-400/40 shadow-2xl max-w-sm sm:max-w-md w-full relative flex flex-col items-center"
          >
            <div className="w-full flex justify-between items-center mb-2.5 px-1 font-mono-code text-[10px] text-cyan-300 font-bold">
              <span>RECORD_ID // ONE_YEAR</span>
              <span className="bg-cyan-950 px-2 py-0.5 rounded border border-cyan-400/30">100% FULL MEMORY</span>
            </div>

            {/* Uncropped, Zoomed-out Photograph Centered with Surrounding Breathing Space */}
            <div className="w-full flex items-center justify-center p-3 bg-slate-950/80 rounded-xl">
              <SafeImage
                src="/images/memories/08_one_year_memories.jpeg"
                alt="One Year Memories Photograph"
                className="w-auto h-auto max-h-[40vh] md:max-h-[44vh] max-w-full"
                imgClassName="object-contain object-center filter drop-shadow-md"
                objectFit="contain"
              />
            </div>

            <div className="mt-2.5 text-center font-mono-code text-[11px] text-rose-300 font-semibold">
              ARCHIVE LOG: 1 YEAR TOGETHER ❤️
            </div>
          </motion.div>
        </div>

        {/* Right: Story Transcript */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="blueprint-panel rounded-2xl p-6 md:p-8 relative border-cyan-500/30 shadow-xl"
          >
            <div className="absolute -top-3 left-6 font-mono-code text-[11px] font-bold text-cyan-300 bg-slate-900 px-3 py-0.5 rounded-full border border-cyan-400/40">
              RETROSPECTIVE LOG
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
