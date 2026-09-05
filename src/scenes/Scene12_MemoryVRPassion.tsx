import { motion } from 'framer-motion';
import { SafeImage } from '../components/SafeImage';
import { TypewriterSequence } from '../components/TypewriterText';
import { Sparkles, Eye } from 'lucide-react';
import type { DialogueLine } from '../types/story';

interface Scene12Props {
  onUnlockNav: () => void;
}

export function Scene12_MemoryVRPassion({ onUnlockNav }: Scene12Props) {
  const dialogue: DialogueLine[] = [
    { text: 'One thing I genuinely admire about you...', pauseAfterMs: 1800 },
    { text: 'Whatever you do, you do it with so much passion.', pauseAfterMs: 1800 },
    { text: "Your curiosity to explore, learn and build... that's something really special.", pauseAfterMs: 2800 },
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
          <span className="font-mono-code text-xs font-bold text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" />
            <span>MEMORY 10 // VR_PASSION.sys</span>
          </span>
          <span className="font-mono-code text-xs text-slate-400">VIRTUAL REALITY VISION</span>
        </div>
        <div className="flex items-center gap-1 font-mono-code text-xs text-cyan-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>SINCERE ADMIRATION</span>
        </div>
      </motion.div>

      {/* COMPOSITION: [ TEXT on LEFT ] [ VR PERSON on RIGHT ] */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
        {/* LEFT COLUMN: Expansive Sincere Typography Panel */}
        <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="blueprint-panel rounded-2xl p-6 md:p-8 relative border-cyan-500/40 shadow-2xl"
          >
            <div className="absolute -top-3 left-6 font-mono-code text-[11px] font-bold text-cyan-300 bg-slate-900 px-3 py-0.5 rounded-full border border-cyan-400/40">
              SINCERE REFLECTION // DEVOTION & CRAFT
            </div>
            <div className="text-xl md:text-3xl font-handwritten text-cyan-100 font-bold leading-relaxed">
              <TypewriterSequence
                lines={dialogue}
                onComplete={onUnlockNav}
                speedMs={35}
              />
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Transparent VR Cutout Figure facing Left towards Text */}
        <div className="md:col-span-5 flex items-center justify-center relative min-h-[300px] md:min-h-[420px] pt-4 pb-2 order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-[320px] flex items-center justify-center"
          >
            {/* Soft cyan aura behind cutout (preserves transparency) */}
            <div className="absolute inset-0 bg-cyan-500/15 rounded-full blur-3xl -z-10 scale-125" />

            <SafeImage
              src="/images/memories/10_vr_passion.png"
              alt="VR Passion Cutout"
              className="w-full h-72 md:h-96"
              imgClassName="filter drop-shadow-[0_15px_30px_rgba(56,189,248,0.3)] object-contain"
              objectFit="contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
