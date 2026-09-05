import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, KeyRound, AlertTriangle } from 'lucide-react';
import { APP_PASSWORD } from '../data/storyRegistry';

interface Scene00Props {
  onSuccess: () => void;
}

export function Scene00_PasswordGate({ onSuccess }: Scene00Props) {
  const [inputVal, setInputVal] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isGranted, setIsGranted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = inputVal.trim().toLowerCase().replace(/\s+/g, ' ');
    const noSpaceInput = inputVal.trim().toLowerCase().replace(/\s+/g, '');
    
    if (
      cleanInput === 'hello likki' ||
      noSpaceInput === 'hellolikki' ||
      cleanInput === APP_PASSWORD.toLowerCase() ||
      cleanInput === 'guruji2025'
    ) {
      setIsGranted(true);
      setErrorMsg('');
      setTimeout(() => {
        onSuccess();
      }, 1200);
    } else {
      setErrorMsg('ACCESS_DENIED: INVALID CREDENTIALS');
      setInputVal('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full max-w-lg mx-auto px-6 py-10"
    >
      <div className="blueprint-panel rounded-2xl p-8 md:p-10 relative overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="font-mono-code text-xs text-slate-400 ml-2">SPEC_AUTH.sys</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono-code text-xs font-bold text-rose-400 bg-rose-950/40 px-2.5 py-1 rounded border border-rose-500/30">
            {isGranted ? (
              <>
                <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">ACCESS_GRANTED</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5" />
                <span>STATUS: LOCKED</span>
              </>
            )}
          </div>
        </div>

        {/* Spec Title & Info */}
        <div className="text-center mb-8">
          <div className="font-mono-code text-xs text-cyan-400 uppercase tracking-widest mb-1">
            CONFIDENTIAL REPOSITORY
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
            SPEC: PROBLEM_STATEMENT_v1.0.sys
          </h1>
          <p className="font-sans text-sm text-slate-400">
            Enter the authorized access key to initialize interactive story sequence.
          </p>
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
              <KeyRound className="w-5 h-5 text-cyan-400/70" />
            </div>
            <input
              type="password"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Enter Access Key..."
              disabled={isGranted}
              autoFocus
              className="w-full pl-12 pr-4 py-3.5 bg-slate-950/80 border-2 border-cyan-500/30 focus:border-cyan-400 rounded-xl font-mono-code text-cyan-200 placeholder:text-slate-600 focus:outline-none transition-all shadow-inner"
            />
          </div>

          <AnimatePresence>
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 font-mono-code text-xs text-rose-400 bg-rose-950/30 p-2.5 rounded-lg border border-rose-500/30"
              >
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={isGranted}
            className={`w-full py-3.5 rounded-xl font-display font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg cursor-pointer ${
              isGranted
                ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/20'
                : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20 active:scale-[0.99]'
            }`}
          >
            {isGranted ? 'AUTHENTICATED // INITIALIZING...' : 'INITIALIZE SYSTEM'}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
