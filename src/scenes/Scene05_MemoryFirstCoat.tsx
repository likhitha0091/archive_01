import { motion } from 'framer-motion';
import { SafeImage } from '../components/SafeImage';
import { TypewriterSequence } from '../components/TypewriterText';
import { Shirt, CheckCircle2 } from 'lucide-react';
import type { DialogueLine } from '../types/story';

interface Scene05Props {
  onUnlockNav: () => void;
}

export function Scene05_MemoryFirstCoat({ onUnlockNav }: Scene05Props) {
  const dialogue: DialogueLine[] = [
    {
      text: 'Coat malli undadu photo teesukundam annav..but ni coat ni na jada dominate chesesindi bro😎',
      pauseAfterMs: 2200,
    },
    {
      text: 'Anyways first time coat vesinanduku 👏🙌',
      pauseAfterMs: 2400,
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
          <span className="font-mono-code text-xs font-bold text-amber-400 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/30 flex items-center gap-1.5">
            <Shirt className="w-3.5 h-3.5" />
            <span>MEMORY 03 // FIRST_COAT_ARCHIVE.sys</span>
          </span>
          <span className="font-mono-code text-xs text-slate-400">FORMAL WEAR SCAN</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono-code text-xs text-emerald-400 bg-emerald-950/30 px-3 py-0.5 rounded-full border border-emerald-500/30">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>STYLE_SCAN: SUCCESS</span>
        </div>
      </motion.div>

      {/* Composition: Fashion Scan Card with Uncropped Photograph */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left: Uncropped Memory Card */}
        <div className="md:col-span-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            transition={{ duration: 0.7 }}
            className="p-3 bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-950 rounded-2xl border-2 border-amber-400/40 shadow-2xl max-w-sm w-full relative flex flex-col items-center"
          >
            <div className="w-full flex justify-between items-center mb-2 px-1 font-mono-code text-[10px] text-amber-300 font-bold">
              <span>SCAN // COAT_OUTFIT</span>
              <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded">RARE OCCASION 👏</span>
            </div>

            <div className="w-full max-h-[50vh] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center p-1">
              <SafeImage
                src="/images/memories/03_first_coat.jpeg"
                alt="First Coat Memory"
                className="w-full h-full max-h-[48vh]"
                objectFit="contain"
              />
            </div>

            <div className="mt-2 text-center font-mono-code text-[11px] text-slate-300">
              RESULT: <span className="text-amber-400 font-bold">JADA DOMINATED COAT 😎</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Narrative Box */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="blueprint-panel rounded-2xl p-6 md:p-8 relative border-amber-500/30"
          >
            <div className="absolute -top-3 left-6 font-mono-code text-[11px] font-bold text-amber-300 bg-slate-900 px-3 py-0.5 rounded-full border border-amber-400/40">
              FASHION CRITIQUE LOG
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
