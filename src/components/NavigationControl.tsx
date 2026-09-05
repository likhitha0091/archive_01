import { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { playSound } from '../utils/audio';

interface NavigationControlProps {
  isUnlocked: boolean;
  onAdvance: () => void;
  currentScene: number;
  totalScenes: number;
}

export function NavigationControl({
  isUnlocked,
  onAdvance,
  currentScene,
  totalScenes,
}: NavigationControlProps) {
  const isAdvancingRef = useRef(false);

  const handleTrigger = useCallback(() => {
    if (!isUnlocked || isAdvancingRef.current) return;
    isAdvancingRef.current = true;
    playSound('transition');
    onAdvance();

    // Lock immediate rapid duplicate clicks
    setTimeout(() => {
      isAdvancingRef.current = false;
    }, 600);
  }, [isUnlocked, onAdvance]);

  // Handle keyboard events (Enter, Space, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowRight', ' ', 'Enter'].includes(e.key)) {
        if (e.key === ' ') e.preventDefault(); // Prevent accidental page scrolling
        if (isUnlocked && !isAdvancingRef.current) {
          handleTrigger();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isUnlocked, handleTrigger]);

  // Do not show navigation on password gate (scene 0) or finale (scene 16)
  if (currentScene === 0 || currentScene >= totalScenes - 1) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
      {/* Scene Progress Indicator */}
      <div className="hidden sm:flex items-center font-mono-code text-[11px] text-cyan-400/60 tracking-widest bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-full border border-cyan-500/20">
        <span>{String(currentScene).padStart(2, '0')}</span>
        <span className="text-slate-600 mx-1">/</span>
        <span>{String(totalScenes - 1).padStart(2, '0')}</span>
      </div>

      {/* The Subtle Navigation Button */}
      <AnimatePresence>
        {isUnlocked && (
          <motion.button
            onClick={handleTrigger}
            initial={{ opacity: 0, scale: 0.7, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.7, x: 20 }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(56, 189, 248, 0.25)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/90 border-2 border-cyan-400/70 text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.35)] backdrop-blur cursor-pointer transition-colors"
            title="Next Scene (Enter / Space / →)"
            aria-label="Next Scene"
          >
            <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
            <span className="absolute -inset-1 rounded-full bg-cyan-400/20 animate-ping pointer-events-none" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
