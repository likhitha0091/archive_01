import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SafeImage } from '../components/SafeImage';
import { TypewriterSequence } from '../components/TypewriterText';
import { AVATAR_ASSETS } from '../data/storyRegistry';
import { ShieldAlert } from 'lucide-react';
import type { DialogueLine } from '../types/story';

interface Scene15Props {
  onTriggerFinale: () => void;
}

type SuspenseStep =
  | 'intro-typing'
  | 'teachers-day-center'
  | 'archive-complete'
  | 'all-memories'
  | 'thank-you'
  | 'wait-text'
  | 'one-more-thing'
  | 'final-record'
  | 'processing'
  | 'record-unsolved'
  | 'dramatic-silence'
  | 'completed';

export function Scene15_TeachersDayFakeout({ onTriggerFinale }: Scene15Props) {
  const [step, setStep] = useState<SuspenseStep>('intro-typing');
  const hasTriggeredRef = useRef(false);

  const setupDialogue: DialogueLine[] = [
    { text: 'U have been my teacher', speaker: 'female', pauseAfterMs: 1400 },
    { text: 'chala nerpinchav', speaker: 'female', pauseAfterMs: 1400 },
    { text: 'motivate chesav', speaker: 'female', pauseAfterMs: 1400 },
    { text: 'so...', speaker: 'female', pauseAfterMs: 2000 },
  ];

  const handleSetupFinished = () => {
    setStep('teachers-day-center');
  };

  // Automated cinematic suspense progression with authentic timing
  useEffect(() => {
    let timer: number | null = null;

    if (step === 'teachers-day-center') {
      // Step 1 & 2: Hold centered message for 4.5 seconds, then fade to quiet screen
      timer = setTimeout(() => setStep('archive-complete'), 4500);
    } else if (step === 'archive-complete') {
      // Step 4: "ARCHIVE COMPLETE."
      timer = setTimeout(() => setStep('all-memories'), 2200);
    } else if (step === 'all-memories') {
      // Step 4: "All memories have been recorded."
      timer = setTimeout(() => setStep('thank-you'), 2400);
    } else if (step === 'thank-you') {
      // Step 4: "Thank you for staying till the end."
      timer = setTimeout(() => setStep('wait-text'), 2800);
    } else if (step === 'wait-text') {
      // Step 5: "WAIT..."
      timer = setTimeout(() => setStep('one-more-thing'), 2000);
    } else if (step === 'one-more-thing') {
      // Step 5: "One more thing."
      timer = setTimeout(() => setStep('final-record'), 2400);
    } else if (step === 'final-record') {
      // Step 6: "FINAL RECORD..."
      timer = setTimeout(() => setStep('processing'), 2000);
    } else if (step === 'processing') {
      // Step 6: "PROCESSING..."
      timer = setTimeout(() => setStep('record-unsolved'), 2000);
    } else if (step === 'record-unsolved') {
      // Step 6: "RECORD STATUS: UNSOLVED"
      timer = setTimeout(() => setStep('dramatic-silence'), 2800);
    } else if (step === 'dramatic-silence') {
      // Step 7: Final suspense silence, then sudden atmosphere flip to birthday reveal!
      timer = setTimeout(() => {
        if (!hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          setStep('completed');
          onTriggerFinale();
        }
      }, 1200);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [step, onTriggerFinale]);

  return (
    <div className="relative z-10 w-full min-h-[85vh] flex flex-col items-center justify-center px-4 py-6">
      {/* PHASE 1: Female Avatar & Mentorship Setup Transcript */}
      <AnimatePresence mode="wait">
        {step === 'intro-typing' && (
          <motion.div
            key="intro-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center"
          >
            {/* Header */}
            <div className="w-full flex items-center justify-between border-b border-rose-500/20 pb-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono-code text-xs font-bold text-rose-400 bg-rose-950/40 px-3 py-1 rounded-full border border-rose-500/30">
                  FINAL PROTOCOL // MENTORSHIP_LOG
                </span>
                <span className="font-mono-code text-xs text-slate-400 hidden sm:inline">
                  DIAGNOSTIC CONCLUSION
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono-code text-xs text-rose-400">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                <span>STATUS: CONCLUDING</span>
              </div>
            </div>

            {/* Split Character & Dialogue */}
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center min-h-[440px]">
              {/* Left: Female Avatar */}
              <div className="md:col-span-5 flex items-center justify-center relative min-h-[320px] md:min-h-[420px] pt-6 pb-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative flex flex-col items-center justify-center w-full"
                >
                  <div className="relative h-72 sm:h-80 md:h-96 lg:h-[420px] w-full flex items-center justify-center pt-6">
                    <div className="absolute inset-0 bg-rose-500/15 rounded-full blur-3xl -z-10 scale-125" />
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
              </div>

              {/* Right: Dialogue Box */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <div className="blueprint-panel rounded-2xl p-6 md:p-8 w-full relative border-rose-500/30 shadow-2xl min-h-[260px] flex flex-col justify-center">
                  <div className="absolute -top-3 left-6 font-mono-code text-[11px] font-bold text-rose-300 bg-slate-900 px-3 py-0.5 rounded-full border border-rose-400/40">
                    MENTORSHIP RECOGNITION LOG
                  </div>
                  <div className="text-xl md:text-3xl font-handwritten text-rose-200 font-bold leading-relaxed">
                    <TypewriterSequence
                      lines={setupDialogue}
                      onComplete={handleSetupFinished}
                      speedMs={35}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* STEP 1 & 2: EXACT CENTERED CINEMATIC FULLSCREEN REVEAL */}
        {step === 'teachers-day-center' && (
          <motion.div
            key="centered-teachers-day"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, transition: { duration: 1.2 } }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-slate-950/95 backdrop-blur-md text-center"
          >
            {/* Cinematic Radial Light Aura */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(251,113,133,0.18)_0%,rgba(251,191,36,0.08)_45%,transparent_75%)]" />

            {/* Subtitle tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-mono-code text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-rose-400 mb-6"
            >
              [ SPECIAL DEDICATION ]
            </motion.div>

            {/* Main Centerpiece Statement - Large, Atmospheric, Centered */}
            <motion.h1
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
              className="font-handwritten text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-rose-200 leading-tight drop-shadow-[0_0_40px_rgba(251,113,133,0.6)] px-4"
            >
              HAPPY TEACHERS DAY GURUJI ❤️
            </motion.h1>

            {/* Subtle light bar */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 1.2, ease: 'easeOut' }}
              className="w-48 sm:w-80 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mt-8 rounded-full shadow-[0_0_15px_rgba(251,113,133,0.8)]"
            />
          </motion.div>
        )}

        {/* STEP 3 & 4: QUIET EMPTY SCREEN WITH SUBTLE STATUS MESSAGES */}
        {step === 'archive-complete' && (
          <motion.div
            key="archive-complete"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-slate-950 text-center"
          >
            <div className="font-mono-code text-sm md:text-base font-bold text-slate-400 tracking-[0.25em] uppercase">
              ARCHIVE COMPLETE.
            </div>
          </motion.div>
        )}

        {step === 'all-memories' && (
          <motion.div
            key="all-memories"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-slate-950 text-center"
          >
            <div className="font-mono-code text-sm md:text-base font-medium text-slate-400 tracking-wider">
              All memories have been recorded.
            </div>
          </motion.div>
        )}

        {step === 'thank-you' && (
          <motion.div
            key="thank-you"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-slate-950 text-center"
          >
            <div className="font-mono-code text-sm md:text-base font-medium text-slate-500 tracking-wider">
              Thank you for staying till the end.
            </div>
          </motion.div>
        )}

        {/* STEP 5: UNEXPECTED "WAIT..." */}
        {step === 'wait-text' && (
          <motion.div
            key="wait-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-slate-950 text-center"
          >
            <div className="font-mono-code text-lg sm:text-2xl font-black text-amber-400 tracking-[0.3em] uppercase animate-pulse">
              WAIT...
            </div>
          </motion.div>
        )}

        {step === 'one-more-thing' && (
          <motion.div
            key="one-more-thing"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-slate-950 text-center"
          >
            <div className="font-mono-code text-base sm:text-xl font-bold text-amber-300 tracking-wider">
              One more thing.
            </div>
          </motion.div>
        )}

        {/* STEP 6: SUSPENSE PROTOCOL */}
        {step === 'final-record' && (
          <motion.div
            key="final-record"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-slate-950 text-center"
          >
            <div className="font-mono-code text-xs sm:text-sm font-bold text-cyan-400 tracking-[0.3em] uppercase">
              FINAL RECORD...
            </div>
          </motion.div>
        )}

        {step === 'processing' && (
          <motion.div
            key="processing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-slate-950 text-center"
          >
            <div className="font-mono-code text-xs sm:text-sm font-bold text-cyan-300 tracking-[0.3em] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>PROCESSING...</span>
            </div>
          </motion.div>
        )}

        {step === 'record-unsolved' && (
          <motion.div
            key="record-unsolved"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.7 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-slate-950 text-center"
          >
            <div className="font-mono-code text-sm sm:text-base md:text-lg font-black text-rose-400 tracking-[0.25em] uppercase border-2 border-rose-500/50 bg-rose-950/40 px-6 py-3 rounded-xl shadow-[0_0_30px_rgba(251,113,133,0.3)]">
              RECORD STATUS: UNSOLVED
            </div>
          </motion.div>
        )}

        {step === 'dramatic-silence' && (
          <motion.div
            key="dramatic-silence"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
