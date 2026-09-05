import { motion } from 'framer-motion';
import { SafeImage } from '../components/SafeImage';
import { TypewriterSequence } from '../components/TypewriterText';
import { Award, Star, Mic2 } from 'lucide-react';
import type { DialogueLine } from '../types/story';

interface Scene13Props {
  onUnlockNav: () => void;
}

export function Scene13_MemoryIEEE({ onUnlockNav }: Scene13Props) {
  const dialogue: DialogueLine[] = [
    { text: 'IEEE Chairperson...', pauseAfterMs: 1800 },
    { text: 'Every time I see you there, I genuinely feel proud.', pauseAfterMs: 2000 },
    { text: 'Not just because of the position... but because of everything you put into it.', pauseAfterMs: 3000 },
  ];

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-col justify-center min-h-[85vh]">
      {/* Theatrical Stage Spotlight Beam from Top-Left */}
      <div 
        className="absolute top-0 left-1/4 -translate-x-1/2 w-[80vw] max-w-2xl h-[85vh] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0.04) 50%, transparent 80%)',
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex items-center justify-between border-b border-amber-500/20 pb-2 mb-6"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-bold text-amber-400 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/30 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>MEMORY 11 // THEATRICAL_SPOTLIGHT.sys</span>
          </span>
          <span className="font-mono-code text-xs text-slate-400">IEEE CHAIRPERSON STAGE</span>
        </div>
        <div className="flex items-center gap-2 font-mono-code text-xs text-amber-300">
          <Mic2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>STAGE: ACTIVE // PODIUM</span>
        </div>
      </motion.div>

      {/* COMPOSITION: [ IEEE IMAGE on LEFT ] [ TEXT on RIGHT ] */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
        {/* LEFT COLUMN: Zoomed-out Uncropped Photograph in Spacious Stage Frame */}
        <div className="md:col-span-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-sm sm:max-w-md p-3.5 md:p-4 bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-950 rounded-2xl border-2 border-amber-400/60 shadow-[0_0_40px_rgba(251,191,36,0.25)] flex flex-col items-center"
          >
            {/* Top Ribbon */}
            <div className="w-full flex justify-between items-center mb-2.5 px-1 font-mono-code text-[10px] text-amber-300 font-bold">
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                STAGE MOMENT
              </span>
              <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-black">
                IEEE CHAIRPERSON
              </span>
            </div>

            {/* Completely Uncropped Photograph with breathing room */}
            <div className="w-full flex items-center justify-center p-2 bg-slate-950/80 rounded-xl">
              <SafeImage
                src="/images/memories/11_ieee_chairperson.jpeg"
                alt="IEEE Chairperson Stage Memory"
                className="w-auto h-auto max-h-[44vh] md:max-h-[48vh] max-w-full"
                imgClassName="object-contain object-center filter drop-shadow-md"
                objectFit="contain"
              />
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Vertically Centered Right-Aligned Narrative Box */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="blueprint-panel rounded-2xl p-6 md:p-8 relative border-amber-500/30 shadow-xl"
          >
            <div className="absolute -top-3 left-6 font-mono-code text-[11px] font-bold text-amber-300 bg-slate-900 px-3 py-0.5 rounded-full border border-amber-400/40">
              DIGNIFIED TRIBUTE // LEADERSHIP
            </div>
            <div className="text-lg md:text-2xl font-handwritten text-amber-100 font-bold leading-relaxed">
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
