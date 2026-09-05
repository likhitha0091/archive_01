import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { AVATAR_ASSETS } from '../data/storyRegistry';
import { RotateCcw, Sparkles } from 'lucide-react';

interface Scene16Props {
  onReplay: () => void;
}

export function Scene16_BirthdayFinale({ onReplay }: Scene16Props) {
  // Fire celebratory multi-stage confetti
  useEffect(() => {
    const end = Date.now() + 3 * 1000;
    const colors = ['#38bdf8', '#fb7185', '#fbbf24', '#34d399', '#a855f7'];

    // Initial big burst
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors,
    });

    // Continuous fireworks
    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }
      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors,
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const chips = ['#ProblemSolved', '#Ganeshpati', '#CrimePartner', '#Guruji'];

  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 flex flex-col items-center justify-center min-h-[85vh] overflow-hidden">
      {/* Background Male Avatar: Large Scale, Soft Float, ~35% Opacity, Visible Behind Main Typography */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 0.35,
          scale: 1.05,
          y: [0, -15, 0],
        }}
        transition={{
          opacity: { duration: 1.2 },
          scale: { duration: 1.2 },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10"
      >
        <img
          src={AVATAR_ASSETS.male}
          alt="Ganeshpati Avatar"
          className="max-h-[85vh] max-w-[90vw] object-contain filter drop-shadow-[0_0_50px_rgba(56,189,248,0.25)]"
        />
      </motion.div>

      {/* Main Celebratory Typography */}
      <div className="text-center z-10 flex flex-col items-center">
        {/* Celebration Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 font-mono-code text-xs md:text-sm font-bold text-amber-300 bg-amber-950/60 px-4 py-1.5 rounded-full border border-amber-500/40 mb-6 shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>CELEBRATION PROTOCOL ACTIVATED</span>
        </motion.div>

        {/* Big Birthday Header */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-cyan-300 tracking-tight leading-none mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        >
          HAPPY BIRTHDAY 🎂
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-handwritten text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-rose-300 leading-tight mb-8 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
        >
          TO MY SWEETEST PROBLEM ❤️
        </motion.h2>

        {/* Floating Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {chips.map((chip, idx) => (
            <span
              key={chip}
              className="font-mono-code text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-400/40 text-cyan-200 shadow-md"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* Replay Experience Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={onReplay}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 text-cyan-300 px-6 py-3.5 rounded-xl font-display font-semibold text-sm border-2 border-cyan-400/50 shadow-xl cursor-pointer transition-all"
        >
          <RotateCcw className="w-4 h-4 group-hover:-rotate-90 transition-transform duration-300" />
          <span>REPLAY EXPERIENCE</span>
        </motion.button>
      </div>
    </div>
  );
}
