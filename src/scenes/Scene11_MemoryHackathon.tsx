import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SafeImage } from '../components/SafeImage';
import { TypewriterSequence } from '../components/TypewriterText';
import { Users, ChevronDown, CheckCircle2 } from 'lucide-react';
import type { DialogueLine } from '../types/story';

interface Scene11Props {
  onUnlockNav: () => void;
}

export function Scene11_MemoryHackathon({ onUnlockNav }: Scene11Props) {
  // Progression steps:
  // Step 1: FIGHTING PARTNERS
  // Step 2: FRIENDS
  // Step 3: HACKATHON TEAM
  // Step 4: WINNING TEAM 🏆 -> Reveal photo
  const [progressionStep, setProgressionStep] = useState<number>(1);

  useEffect(() => {
    const t1 = setTimeout(() => setProgressionStep(2), 900);
    const t2 = setTimeout(() => setProgressionStep(3), 1800);
    const t3 = setTimeout(() => setProgressionStep(4), 2700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const dialogue: DialogueLine[] = [
    {
      text: 'From fighting partners to hackathon winning team 🏆 finally gelipinchesav bro❤️',
      pauseAfterMs: 2400,
    },
    {
      text: 'Ni valle hero tho photo vachindi thanks bro..😅',
      pauseAfterMs: 2600,
    },
  ];

  const steps = [
    { num: 1, label: 'FIGHTING PARTNERS', color: 'border-rose-500 bg-rose-950/60 text-rose-300' },
    { num: 2, label: 'FRIENDS', color: 'border-amber-500 bg-amber-950/60 text-amber-300' },
    { num: 3, label: 'HACKATHON TEAM', color: 'border-cyan-500 bg-cyan-950/60 text-cyan-300' },
    { num: 4, label: 'WINNING TEAM 🏆', color: 'border-emerald-400 bg-emerald-950/80 text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.4)]' },
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
          <span className="font-mono-code text-xs font-bold text-amber-400 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/30 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            <span>MEMORY 09 // HACKATHON_MOMENT.sys</span>
          </span>
          <span className="font-mono-code text-xs text-slate-400">TEAM COLLABORATION PROTOCOL</span>
        </div>
        <span className="font-mono-code text-xs text-emerald-400 font-bold">
          STATUS: HACKATHON // TEAM MOMENT
        </span>
      </motion.div>

      {/* SPECIAL Progression Flow & Uncropped Photograph */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
        {/* Left: Animated Evolution Node Chain */}
        <div className="md:col-span-5 flex flex-col items-center justify-center gap-2">
          {steps.map((step, idx) => (
            <div key={step.num} className="flex flex-col items-center w-full max-w-[280px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: progressionStep >= step.num ? 1 : 0.25,
                  scale: progressionStep === step.num ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
                className={`w-full py-2 px-3 rounded-xl border-2 font-mono-code text-xs font-bold text-center flex items-center justify-between transition-all ${step.color}`}
              >
                <span>{step.label}</span>
                {progressionStep >= step.num && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                )}
              </motion.div>
              {idx < steps.length - 1 && (
                <ChevronDown
                  className={`w-4 h-4 my-0.5 transition-opacity ${
                    progressionStep > step.num ? 'text-cyan-400 opacity-100' : 'text-slate-600 opacity-30'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Right: Prominent Uncropped Photograph & Transcript */}
        <div className="md:col-span-7 flex flex-col gap-4">
          <AnimatePresence>
            {progressionStep >= 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="p-3 bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-950 rounded-2xl border-2 border-amber-400/50 shadow-2xl relative flex flex-col items-center"
              >
                <div className="w-full flex justify-between items-center mb-2 px-1 font-mono-code text-[10px] text-amber-300 font-bold">
                  <span>HACKATHON // MEMORY LOG</span>
                  <span className="bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded border border-amber-400/40">
                    HACKATHON // TEAM MOMENT
                  </span>
                </div>

                <div className="w-full max-h-[42vh] md:max-h-[46vh] rounded-xl bg-slate-950 flex items-center justify-center p-1.5">
                  <SafeImage
                    src="/images/memories/09_hackathon_winner.jpeg"
                    alt="Hackathon Team Moment"
                    className="w-full h-full max-h-[40vh] md:max-h-[44vh]"
                    imgClassName="object-contain"
                    objectFit="contain"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dialogue Transcript */}
          {progressionStep >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="blueprint-panel rounded-2xl p-4 md:p-6 border-amber-500/30 shadow-xl"
            >
              <div className="text-lg md:text-2xl font-handwritten text-amber-200 font-bold leading-relaxed">
                <TypewriterSequence
                  lines={dialogue}
                  onComplete={onUnlockNav}
                  speedMs={35}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
