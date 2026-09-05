import { motion } from 'framer-motion';
import { SafeImage } from '../components/SafeImage';
import { TypewriterSequence } from '../components/TypewriterText';
import { Navigation, Compass } from 'lucide-react';
import type { DialogueLine } from '../types/story';

interface Scene03Props {
  onUnlockNav: () => void;
}

export function Scene03_MemoryCarRide({ onUnlockNav }: Scene03Props) {
  const dialogue: DialogueLine[] = [
    { text: 'Do u Remember our first car ride', pauseAfterMs: 1600 },
    { text: 'Na driver la unnav but kaadule 😂', pauseAfterMs: 2400 },
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
          <span className="font-mono-code text-xs font-bold text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1.5">
            <Navigation className="w-3.5 h-3.5" />
            <span>MEMORY 01 // FIRST_ENCOUNTER_LOG.sys</span>
          </span>
          <span className="font-mono-code text-xs text-slate-400">MISSION: FIRST ROAD TRIP</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono-code text-xs text-amber-400">
          <Compass className="w-3.5 h-3.5" />
          <span>COORDINATE: [VEHICLE_CABIN]</span>
        </div>
      </motion.div>

      {/* Dynamic Composition: Uncropped Photo in Adaptive Cyber Frame with Telemetry */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left: Complete Uncropped Photograph in Cyber Card */}
        <div className="md:col-span-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: -1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="p-3 bg-slate-900/90 rounded-2xl border-2 border-cyan-400/40 shadow-2xl max-w-sm w-full relative flex flex-col items-center"
          >
            {/* Top diagnostic tag */}
            <div className="w-full flex justify-between items-center mb-2 px-1 font-mono-code text-[10px] text-cyan-300">
              <span>TRIP_LOG #001</span>
              <span className="bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-400/30">VEHICLE: ACTIVE</span>
            </div>

            {/* Uncropped Photograph */}
            <div className="w-full max-h-[50vh] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center p-1">
              <SafeImage
                src="/images/memories/01_first_car_ride.jpeg"
                alt="First Car Ride Memory"
                className="w-full h-full max-h-[48vh]"
                objectFit="contain"
              />
            </div>

            <div className="mt-2 text-center font-mono-code text-[11px] text-amber-300 font-semibold">
              ROLE_ASSIGNMENT: DRIVER (DISPUTED 😂)
            </div>
          </motion.div>
        </div>

        {/* Right: Dialogue Box */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="blueprint-panel rounded-2xl p-6 md:p-8 relative border-cyan-500/30"
          >
            <div className="absolute -top-3 right-6 font-mono-code text-[11px] font-bold text-cyan-300 bg-slate-900 px-3 py-0.5 rounded-full border border-cyan-400/40">
              VOICE_LOG // MEMORY_01
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
