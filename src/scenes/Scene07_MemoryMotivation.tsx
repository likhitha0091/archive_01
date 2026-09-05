import { motion } from 'framer-motion';
import { SafeImage } from '../components/SafeImage';
import { TypewriterSequence } from '../components/TypewriterText';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import type { DialogueLine } from '../types/story';

interface Scene07Props {
  onUnlockNav: () => void;
}

export function Scene07_MemoryMotivation({ onUnlockNav }: Scene07Props) {
  const dialogue: DialogueLine[] = [
    { text: 'Nuv entha thopu ayina...', pauseAfterMs: 1500 },
    { text: 'Sometimes..na advice niku avasaram 😂', pauseAfterMs: 2500 },
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
          <span className="font-mono-code text-xs font-bold text-amber-400 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/30 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            <span>MEMORY 05 // SYSTEM_WARNING.sys</span>
          </span>
          <span className="font-mono-code text-xs text-slate-400">HUMAN INTERVENTION</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono-code text-xs text-rose-400 bg-rose-950/30 px-3 py-0.5 rounded-full border border-rose-500/30">
          <span>SYSTEM STATUS: OVERCONFIDENCE DETECTED</span>
        </div>
      </motion.div>

      {/* Composition: Alert Protocol with Uncropped Photograph */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left: Memory Card */}
        <div className="md:col-span-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            transition={{ duration: 0.7 }}
            className="p-3 bg-gradient-to-b from-amber-950/50 to-slate-900 rounded-2xl border-2 border-amber-400/50 shadow-2xl max-w-sm w-full relative flex flex-col items-center"
          >
            <div className="w-full flex justify-between items-center mb-2 px-1 font-mono-code text-[10px] text-amber-300 font-bold">
              <span>ALERT // THOPU_ANALYSIS</span>
              <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> ADVICE DISPATCH
              </span>
            </div>

            <div className="w-full max-h-[50vh] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center p-1">
              <SafeImage
                src="/images/memories/05_sometimes_you_need_motivation.jpeg"
                alt="Motivation Memory"
                className="w-full h-full max-h-[48vh]"
                objectFit="contain"
              />
            </div>

            <div className="mt-2 text-center font-mono-code text-[11px] text-amber-300 font-semibold">
              DIAGNOSTIC: SOMETIMES NA ADVICE NIKU AVASARAM 😂
            </div>
          </motion.div>
        </div>

        {/* Right: Dialogue Box */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="blueprint-panel rounded-2xl p-6 md:p-8 relative border-amber-500/30"
          >
            <div className="absolute -top-3 left-6 font-mono-code text-[11px] font-bold text-amber-400 bg-slate-900 px-3 py-0.5 rounded-full border border-amber-500/40">
              ADVISORY DISPATCH // LIKKI
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
