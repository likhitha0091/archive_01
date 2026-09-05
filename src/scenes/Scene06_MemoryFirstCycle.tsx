import { motion } from 'framer-motion';
import { SafeImage } from '../components/SafeImage';
import { TypewriterSequence } from '../components/TypewriterText';
import { Bike, Route } from 'lucide-react';
import type { DialogueLine } from '../types/story';

interface Scene06Props {
  onUnlockNav: () => void;
}

export function Scene06_MemoryFirstCycle({ onUnlockNav }: Scene06Props) {
  const dialogue: DialogueLine[] = [
    {
      text: 'Enthaina na cycle ekkina first abbai nuvve bro...you are very lucky 😉😅',
      pauseAfterMs: 2600,
    },
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
          <span className="font-mono-code text-xs font-bold text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
            <Bike className="w-3.5 h-3.5" />
            <span>MEMORY 04 // CYCLE_TRANSIT.sys</span>
          </span>
          <span className="font-mono-code text-xs text-slate-400">VEHICLE LOG</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono-code text-xs text-emerald-300">
          <Route className="w-3.5 h-3.5" />
          <span>ROUTE: LUCKY_RIDER_DISPATCH</span>
        </div>
      </motion.div>

      {/* Composition: Dynamic Diagonal Route Layout with Uncropped Photo */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
        {/* Subtle Route Trajectory Lines behind photo */}
        <div className="absolute inset-0 pointer-events-none opacity-20 -z-10">
          <svg className="w-full h-full" viewBox="0 0 500 300" fill="none">
            <path d="M 50 250 Q 200 50 450 150" stroke="#34d399" strokeWidth="3" strokeDasharray="6 6" />
          </svg>
        </div>

        {/* Left: Memory Card */}
        <div className="md:col-span-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, rotate: -4, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -2, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="p-3 bg-slate-900/90 rounded-2xl border-2 border-emerald-400/40 shadow-2xl max-w-sm w-full relative flex flex-col items-center"
          >
            <div className="w-full flex justify-between items-center mb-2 px-1 font-mono-code text-[10px] text-emerald-300">
              <span>PASSENGER_ID #001</span>
              <span className="bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-400/30">LUCKY TICKET 😉</span>
            </div>

            <div className="w-full max-h-[50vh] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center p-1">
              <SafeImage
                src="/images/memories/04_first_cycle.jpeg"
                alt="First Cycle Memory"
                className="w-full h-full max-h-[48vh]"
                objectFit="contain"
              />
            </div>

            <div className="mt-2 text-center font-mono-code text-[11px] text-slate-300 font-semibold">
              HISTORIC EVENT: FIRST BOY ON BICYCLE
            </div>
          </motion.div>
        </div>

        {/* Right: Dialogue Box */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="blueprint-panel rounded-2xl p-6 md:p-8 relative border-emerald-500/30"
          >
            <div className="absolute -top-3 left-6 font-mono-code text-[11px] font-bold text-emerald-400 bg-slate-900 px-3 py-0.5 rounded-full border border-emerald-500/40">
              PASSENGER LOG
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
