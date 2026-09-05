import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypewriterSequence } from '../components/TypewriterText';
import { SafeImage } from '../components/SafeImage';
import { AVATAR_ASSETS } from '../data/storyRegistry';
import { Terminal, ShieldAlert } from 'lucide-react';
import type { DialogueLine } from '../types/story';

interface Scene01Props {
  onUnlockNav: () => void;
}

export function Scene01_OpeningStatement({ onUnlockNav }: Scene01Props) {
  // Cinematic movie boot phases:
  // 1. 'booting' -> telemetry loading text
  // 2. 'male-enter' -> male avatar animates in from right
  // 3. 'male-speaking' -> typewriter types male line
  // 4. 'male-exit' -> male avatar leaves screen completely
  // 5. 'female-enter' -> female avatar animates in from left
  // 6. 'female-speaking' -> female typewriter sequence with pauses
  // 7. 'completed' -> unlock navigation
  const [phase, setPhase] = useState<
    'booting' | 'male-enter' | 'male-speaking' | 'male-exit' | 'female-enter' | 'female-speaking' | 'completed'
  >('booting');

  const maleDialogue: DialogueLine[] = [
    { text: 'Find some problem statement and do something.', speaker: 'male', pauseAfterMs: 1500 },
  ];

  const femaleDialogue: DialogueLine[] = [
    { text: 'U told me to find some problem statement I was thinking of a problem 🤔', speaker: 'female', pauseAfterMs: 1500 },
    { text: 'Appude anipinchindi nikanna pedda problem em undi', speaker: 'female', pauseAfterMs: 1500 },
    { text: 'So YOU are my problem statement 😁', speaker: 'female', pauseAfterMs: 1500 },
    { text: "Let's see how the problem will be ..", speaker: 'female', pauseAfterMs: 2500 },
  ];

  // Cinematic Boot Sequence Timings
  useEffect(() => {
    if (phase === 'booting') {
      const t = setTimeout(() => setPhase('male-enter'), 2200);
      return () => clearTimeout(t);
    }
    if (phase === 'male-enter') {
      const t = setTimeout(() => setPhase('male-speaking'), 800);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const handleMaleDone = () => {
    setPhase('male-exit');
    setTimeout(() => {
      setPhase('female-enter');
      setTimeout(() => {
        setPhase('female-speaking');
      }, 800);
    }, 900);
  };

  const handleFemaleDone = () => {
    setPhase('completed');
    onUnlockNav();
  };

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-col items-center justify-center min-h-[85vh]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-6"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-bold text-amber-400 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/30">
            ISSUE #001: ASSIGNMENT
          </span>
          <span className="font-mono-code text-xs text-slate-400 hidden sm:inline">
            FIRST ENCOUNTER // INSPIRA
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono-code text-xs text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>STATUS: INVESTIGATING</span>
        </div>
      </motion.div>

      {/* Cinematic Boot Screen (Phase 1) */}
      <AnimatePresence mode="wait">
        {phase === 'booting' && (
          <motion.div
            key="booting"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="w-full max-w-xl blueprint-panel p-8 rounded-2xl border-cyan-500/40 text-center shadow-2xl"
          >
            <Terminal className="w-10 h-10 text-cyan-400 mx-auto mb-4 animate-pulse" />
            <div className="font-mono-code text-xs text-cyan-300 tracking-widest uppercase mb-2">
              INITIALIZING...
            </div>
            <div className="font-display font-bold text-2xl text-white mb-4">
              SYSTEM BOOT // PROBLEM STATEMENT DETECTED
            </div>
            <div className="flex flex-col gap-2 font-mono-code text-xs text-slate-400 bg-slate-950/70 p-4 rounded-xl border border-cyan-500/20 text-left">
              <div className="text-emerald-400">&gt; MEMORY ARCHIVE FOUND [12 NODES]</div>
              <div className="text-cyan-400">&gt; SUBJECT IDENTIFIED: GANESHPATI</div>
              <div className="text-amber-400">&gt; SUBJECT STATUS: UNSOLVED</div>
              <div className="text-slate-500">&gt; LOADING ASSIGNED ISSUE...</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Avatar & Dialogue Stage */}
      {phase !== 'booting' && (
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center min-h-[440px]">
          {/* Avatar Display Area - Transparent, Large Character Presence with ZERO Top Cropping */}
          <div className="md:col-span-5 flex items-center justify-center relative min-h-[320px] md:min-h-[420px] pt-4 pb-2">
            <AnimatePresence mode="wait">
              {/* MALE AVATAR */}
              {(phase === 'male-enter' || phase === 'male-speaking') && (
                <motion.div
                  key="male-avatar"
                  initial={{ x: 200, opacity: 0, scale: 0.85 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: 300, y: -80, opacity: 0, rotate: 15, scale: 0.7 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative flex flex-col items-center justify-center w-full"
                >
                  <div className="relative h-72 sm:h-80 md:h-96 lg:h-[420px] w-full flex items-center justify-center pt-6">
                    {/* Subtle aura behind avatar */}
                    <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-3xl -z-10 scale-110" />
                    <SafeImage
                      src={AVATAR_ASSETS.male}
                      alt="Male Avatar - Ganeshpati"
                      className="w-full h-full max-h-[380px] md:max-h-[420px]"
                      imgClassName="filter drop-shadow-[0_20px_35px_rgba(56,189,248,0.35)] object-contain object-bottom"
                      objectFit="contain"
                    />
                    <div className="absolute -bottom-2 font-mono-code text-xs text-cyan-300 bg-slate-900/90 px-3 py-1 rounded-full border border-cyan-400/40 shadow-lg">
                      SUBJECT: GANESHPATI
                    </div>
                  </div>
                </motion.div>
              )}

              {/* FEMALE AVATAR */}
              {(phase === 'female-enter' || phase === 'female-speaking' || phase === 'completed') && (
                <motion.div
                  key="female-avatar"
                  initial={{ x: -200, opacity: 0, scale: 0.85 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative flex flex-col items-center justify-center w-full"
                >
                  <div className="relative h-72 sm:h-80 md:h-96 lg:h-[420px] w-full flex items-center justify-center pt-6">
                    {/* Subtle aura behind avatar */}
                    <div className="absolute inset-0 bg-rose-500/10 rounded-full blur-3xl -z-10 scale-110" />
                    <SafeImage
                      src={AVATAR_ASSETS.female}
                      alt="Female Avatar - Likki"
                      className="w-full h-full max-h-[380px] md:max-h-[420px]"
                      imgClassName="filter drop-shadow-[0_20px_35px_rgba(251,113,133,0.35)] object-contain object-bottom"
                      objectFit="contain"
                    />
                    <div className="absolute -bottom-2 font-mono-code text-xs text-rose-300 bg-slate-900/90 px-3 py-1 rounded-full border border-rose-400/40 shadow-lg flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                      <span>INVESTIGATOR: LIKKI</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dialogue Transcript Board */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="blueprint-panel rounded-2xl p-6 md:p-8 min-h-[240px] flex flex-col justify-center relative shadow-2xl">
              <div className="absolute -top-3 left-6 font-mono-code text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full border shadow-sm bg-slate-900 text-cyan-300 border-cyan-400/40">
                {phase === 'male-speaking' ? 'MALE_COMMAND_LOG' : 'FEMALE_RESPONSE_LOG'}
              </div>

              {phase === 'male-speaking' && (
                <div className="text-xl md:text-2xl font-mono-code text-cyan-200">
                  <TypewriterSequence
                    lines={maleDialogue}
                    onComplete={handleMaleDone}
                    speedMs={35}
                  />
                </div>
              )}

              {(phase === 'female-speaking' || phase === 'completed') && (
                <div className="text-xl md:text-3xl font-handwritten text-amber-200 leading-relaxed font-bold">
                  <TypewriterSequence
                    lines={femaleDialogue}
                    onComplete={handleFemaleDone}
                    speedMs={30}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
