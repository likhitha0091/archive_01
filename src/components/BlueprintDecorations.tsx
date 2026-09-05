import { motion } from 'framer-motion';

export function BlueprintDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top-left Coordinate Badge */}
      <div className="absolute top-4 left-6 hidden sm:flex items-center gap-2 font-mono-code text-[11px] text-cyan-400/50 uppercase tracking-widest bg-cyan-950/20 px-3 py-1 rounded border border-cyan-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>SPEC: PRB_STMNT_v1.0</span>
        <span className="text-slate-600">|</span>
        <span>LAT: 17.3850° N</span>
      </div>

      {/* Top-right Status */}
      <div className="absolute top-4 right-6 hidden sm:flex items-center gap-3 font-mono-code text-[11px] text-slate-400/60 uppercase tracking-wider">
        <span className="bg-slate-800/40 px-2 py-0.5 rounded border border-slate-700/40">ENV: PROD</span>
        <span className="text-cyan-400/70 bg-cyan-950/30 px-2.5 py-0.5 rounded border border-cyan-500/30">
          MODE: INTERACTIVE_ARCHIVE
        </span>
      </div>

      {/* Bottom-left System Clock / Memory Counter */}
      <div className="absolute bottom-4 left-6 hidden sm:flex items-center gap-2 font-mono-code text-[11px] text-slate-500 tracking-wider">
        <span className="text-amber-400/70">ARCHIVE_MEMORIES: 12/12</span>
        <span className="text-slate-600">::</span>
        <span>STATUS: ACTIVE</span>
      </div>

      {/* 4 Corner Crosshairs */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400/30" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400/30" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400/30" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400/30" />
    </div>
  );
}

// Hand-drawn SVG doodle arrow or highlight
export function MarkerArrow({ className = '', color = '#38bdf8' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 60" fill="none" className={`pointer-events-none ${className}`}>
      <motion.path
        d="M10 45 C 35 15, 65 15, 85 30 M 70 15 L 88 32 L 72 45"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </svg>
  );
}

// Hand-drawn scribble circle or badge
export function MarkerCircle({ className = '', color = '#fb7185' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 70" fill="none" className={`pointer-events-none ${className}`}>
      <motion.path
        d="M15 35 C 15 15, 105 10, 105 35 C 105 55, 10 60, 20 40 C 25 30, 85 25, 95 35"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    </svg>
  );
}
