import { motion } from 'framer-motion';
import { SafeImage } from '../components/SafeImage';
import { TypewriterSequence } from '../components/TypewriterText';
import { Camera, Aperture, Focus } from 'lucide-react';
import type { DialogueLine } from '../types/story';

interface Scene04Props {
  onUnlockNav: () => void;
}

export function Scene04_MemoryStills({ onUnlockNav }: Scene04Props) {
  const dialogue: DialogueLine[] = [
    {
      text: 'Nitho stills pettinchadaniki raktalu chindinchina rojulu avi ...😮💨',
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
          <span className="font-mono-code text-xs font-bold text-rose-400 bg-rose-950/40 px-3 py-1 rounded-full border border-rose-500/30 flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5" />
            <span>MEMORY 02 // STILLS & POSES</span>
          </span>
          <span className="font-mono-code text-xs text-slate-400">PHOTOSHOOT DIRECTING</span>
        </div>
        <div className="flex items-center gap-2 font-mono-code text-xs text-cyan-400">
          <Aperture className="w-3.5 h-3.5" />
          <span>f/1.8 • 1/500s • ISO 200</span>
        </div>
      </motion.div>

      {/* Composition: Camera Viewfinder with Uncropped Photograph */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left: Viewfinder Frame */}
        <div className="md:col-span-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative p-3 rounded-2xl bg-slate-900/90 border-2 border-cyan-400/40 shadow-2xl max-w-sm w-full flex flex-col items-center"
          >
            {/* Viewfinder Telemetry Header */}
            <div className="w-full flex justify-between items-center mb-2 px-2 font-mono-code text-[10px] text-cyan-300">
              <span className="flex items-center gap-1 text-rose-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                REC [●] RAW
              </span>
              <span className="flex items-center gap-1">
                <Focus className="w-3 h-3 text-cyan-400" />
                FRAME LOCKED
              </span>
            </div>

            {/* Uncropped Photograph */}
            <div className="w-full max-h-[50vh] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center p-1 relative">
              {/* Corner Viewfinder Crosshairs */}
              <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-cyan-400 z-20 pointer-events-none" />

              <SafeImage
                src="/images/memories/02_stills.jpeg"
                alt="Stills Memory"
                className="w-full h-full max-h-[48vh]"
                objectFit="contain"
              />
            </div>

            <div className="w-full flex justify-between items-center px-2 pt-2 font-mono-code text-[10px] text-slate-400">
              <span>SUBJECT: POSE_DIFFICULTY_HIGH</span>
              <span className="text-amber-400 font-bold">EFFORT: 100% 😮‍💨</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Narrative Box */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="blueprint-panel rounded-2xl p-6 md:p-8 relative border-rose-500/30"
          >
            <div className="absolute -top-3 left-6 font-mono-code text-[11px] font-bold text-rose-400 bg-slate-900 px-3 py-0.5 rounded-full border border-rose-500/40">
              DIRECTOR'S ARCHIVE LOG
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
