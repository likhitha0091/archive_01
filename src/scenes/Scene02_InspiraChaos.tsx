import { motion } from 'framer-motion';
import { TypewriterSequence } from '../components/TypewriterText';
import type { DialogueLine } from '../types/story';

interface Scene02Props {
  onUnlockNav: () => void;
}

export function Scene02_InspiraChaos({ onUnlockNav }: Scene02Props) {
  const dialogue: DialogueLine[] = [
    { text: "July 2025 — that's where it all started...", pauseAfterMs: 1600 },
    { text: 'Then came Inspira... one full month of chaos, work and unlimited roasting 😂', pauseAfterMs: 2000 },
    { text: 'Also... kalisi kastapadi work chesam adi vere vishayam 😅', pauseAfterMs: 2500 },
  ];

  const timelineMilestones = [
    { time: 'JULY 2025', tag: 'ORIGIN', desc: 'First Encounter // Inspira', color: 'border-cyan-400 text-cyan-300' },
    { time: 'DAY 01-30', tag: 'INSPIRA FEST', desc: 'Unlimited Roasting + 1 Month Chaos', color: 'border-amber-400 text-amber-300' },
    { time: 'AUGUST 2025', tag: 'EXECUTION', desc: 'Hard Work + Enduring Memories', color: 'border-emerald-400 text-emerald-300' },
  ];

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-6 flex flex-col justify-center min-h-[80vh]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-8"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-bold text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/30">
            TIMELINE // CHRONO_LOG
          </span>
          <span className="font-mono-code text-xs text-slate-400">JULY 2025 → AUGUST 2025</span>
        </div>
        <div className="flex items-center gap-2 font-mono-code text-xs text-rose-400 bg-rose-950/30 px-3 py-1 rounded-full border border-rose-500/30">
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
          <span>CHAOS_LEVEL: MAXIMUM</span>
        </div>
      </motion.div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive Milestone Nodes */}
        <div className="md:col-span-5 flex flex-col gap-4">
          {timelineMilestones.map((m, idx) => (
            <motion.div
              key={m.time}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.2, duration: 0.6 }}
              className="blueprint-panel p-4 rounded-xl relative overflow-hidden group hover:border-cyan-400/60 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono-code text-xs font-bold text-slate-400">{m.time}</span>
                <span className={`font-mono-code text-[10px] font-bold px-2 py-0.5 rounded border bg-slate-900/60 ${m.color}`}>
                  {m.tag}
                </span>
              </div>
              <div className="font-display font-medium text-sm text-slate-200">{m.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Handwritten Story Log Panel */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="blueprint-panel rounded-2xl p-6 md:p-8 min-h-[260px] flex flex-col justify-center relative border-cyan-500/30"
          >
            <div className="absolute -top-3 right-6 font-mono-code text-[11px] font-bold text-amber-400 bg-slate-900 px-3 py-0.5 rounded-full border border-amber-500/40">
              TASK: INSPIRA FEST // CHAOS LOG
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
