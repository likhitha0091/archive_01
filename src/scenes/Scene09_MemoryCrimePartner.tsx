import { motion } from 'framer-motion';
import { SafeImage } from '../components/SafeImage';
import { TypewriterSequence } from '../components/TypewriterText';
import { ShieldAlert, FileText } from 'lucide-react';
import type { DialogueLine } from '../types/story';

interface Scene09Props {
  onUnlockNav: () => void;
}

export function Scene09_MemoryCrimePartner({ onUnlockNav }: Scene09Props) {
  const dialogue: DialogueLine[] = [
    { text: 'Best crime partner 😎', pauseAfterMs: 2600 },
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
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>MEMORY 07 // CLASSIFIED_DOSSIER.sys</span>
          </span>
          <span className="font-mono-code text-xs text-slate-400">PARTNER DETECTED</span>
        </div>
        <span className="font-mono-code text-xs text-amber-400 font-bold">
          BADGE: CERTIFIED CRIME PARTNER 😎
        </span>
      </motion.div>

      {/* Composition: Classified File Dossier with Uncropped Photograph */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left: Dossier Card */}
        <div className="md:col-span-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, rotate: -3, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="p-4 bg-[#e8d5b5] text-slate-900 rounded-xl border-2 border-[#caa877] shadow-2xl max-w-sm w-full relative flex flex-col items-center"
          >
            {/* Paperclip */}
            <div className="absolute top-2 left-4 w-4 h-10 border-2 border-slate-600 rounded-full z-20 pointer-events-none" />

            {/* Red Stamp */}
            <div className="absolute -top-3 right-4 border-2 border-red-600 bg-red-100/95 text-red-700 font-mono-code text-[11px] font-black tracking-widest px-3 py-1 rounded rotate-6 shadow-lg z-20">
              CERTIFIED CRIME PARTNER 😎
            </div>

            <div className="w-full max-h-[50vh] rounded-lg overflow-hidden bg-slate-950 flex items-center justify-center border border-[#caa877] p-1">
              <SafeImage
                src="/images/memories/07_crime_partner.jpeg"
                alt="Crime Partner Memory"
                className="w-full h-full max-h-[48vh]"
                objectFit="contain"
              />
            </div>
            <div className="mt-2 text-center font-mono-code text-xs font-bold text-slate-800 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" />
              <span>FILE: CRIME_PARTNER // TOP_SECRET</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Dialogue Box */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="blueprint-panel rounded-2xl p-6 md:p-8 relative border-rose-500/30"
          >
            <div className="absolute -top-3 left-6 font-mono-code text-[11px] font-bold text-rose-400 bg-slate-900 px-3 py-0.5 rounded-full border border-rose-500/40">
              CONFIDENTIAL STATEMENT
            </div>
            <div className="text-2xl md:text-4xl font-handwritten text-amber-200 font-bold leading-relaxed">
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
