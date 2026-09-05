import { motion } from 'framer-motion';
import { SafeImage } from '../components/SafeImage';
import { TypewriterSequence } from '../components/TypewriterText';
import { Sparkles, ShieldCheck } from 'lucide-react';
import type { DialogueLine } from '../types/story';

interface Scene14Props {
  onUnlockNav: () => void;
}

export function Scene14_MemoryWhatNot({ onUnlockNav }: Scene14Props) {
  // Left side intro
  const leftDialogue: DialogueLine[] = [
    { text: 'What not...?', pauseAfterMs: 1200 },
  ];

  // Right side & bottom lines
  const rightDialogue: DialogueLine[] = [
    { text: 'A gamer, a developer, a team leader, a teacher...', pauseAfterMs: 2000 },
    { text: 'Our strength, none other than our Ganeshpati ❤️', pauseAfterMs: 3000 },
  ];

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col justify-center min-h-[90vh]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-4"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-bold text-amber-400 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/30 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MEMORY 12 // MULTI_SKILL_PROFILE.sys</span>
          </span>
          <span className="font-mono-code text-xs text-slate-400 hidden sm:inline">COMPLETE GRAPHIC MATRIX</span>
        </div>
        <div className="flex items-center gap-1 font-mono-code text-xs text-cyan-300">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ROLES: FULL SPECTRUM SPECIALIST</span>
        </div>
      </motion.div>

      {/* Main Layout: IMAGE = CENTER, TEXT = SIDES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* LEFT SIDE TEXT: "What not...?" */}
        <div className="lg:col-span-3 flex flex-col justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="blueprint-panel rounded-2xl p-5 border-amber-500/30 text-center lg:text-left shadow-xl"
          >
            <div className="font-mono-code text-[10px] font-bold text-amber-400 uppercase mb-1">
              PROFILE QUERY
            </div>
            <div className="text-2xl md:text-4xl font-display font-black text-amber-300">
              <TypewriterSequence
                lines={leftDialogue}
                speedMs={40}
              />
            </div>
          </motion.div>
        </div>

        {/* CENTER: LARGE COMPLETE UNCROPPED GRAPHIC HERO */}
        <div className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-xl bg-slate-900/90 rounded-2xl border-2 border-cyan-400/50 p-2 md:p-3 shadow-[0_0_50px_rgba(56,189,248,0.2)] flex flex-col items-center"
          >
            <div className="w-full flex justify-between items-center px-2 py-1 font-mono-code text-[10px] text-cyan-300 border-b border-cyan-500/20 mb-1.5">
              <span>CANVAS // COMPLETE_COLLAGE</span>
              <span className="text-emerald-400 font-bold">100% UNCROPPED</span>
            </div>

            {/* Uncropped Photograph Wrapper */}
            <div className="relative w-full max-h-[66vh] md:max-h-[70vh] flex items-center justify-center p-1 bg-slate-950/80 rounded-xl">
              <SafeImage
                src="/images/memories/12_what_not.jpeg"
                alt="What Not Character Profile Collage"
                className="w-auto h-auto max-h-[64vh] md:max-h-[68vh] max-w-full"
                imgClassName="object-contain"
                objectFit="contain"
              />

              {/* Redaction Overlay placed precisely on the bottom portion to hide non-tech role without covering unrelated content */}
              <div className="absolute bottom-1 left-2 right-2 md:left-4 md:right-4 h-11 bg-slate-950/95 border-2 border-dashed border-rose-500/70 rounded-lg flex items-center justify-center pointer-events-none z-20 shadow-xl backdrop-blur-sm">
                <span className="font-mono-code text-[10px] md:text-xs font-bold text-rose-300 tracking-wider">
                  [REDACTED: FOCUS ON TECH ONLY 😉]
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE TEXT: Roles & Tribute */}
        <div className="lg:col-span-3 flex flex-col justify-center gap-4 order-3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="blueprint-panel rounded-2xl p-5 border-cyan-500/30 text-center lg:text-left shadow-xl"
          >
            <div className="font-mono-code text-[10px] font-bold text-cyan-300 uppercase mb-2">
              SKILL SPECTRUM & STRENGTH
            </div>
            <div className="text-lg md:text-2xl font-handwritten text-amber-200 font-bold leading-relaxed">
              <TypewriterSequence
                lines={rightDialogue}
                onComplete={onUnlockNav}
                speedMs={32}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
