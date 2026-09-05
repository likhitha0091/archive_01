import { useState, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BlueprintDecorations } from './components/BlueprintDecorations';
import { NavigationControl } from './components/NavigationControl';
import { AudioToggle } from './components/AudioToggle';
import { STORY_SCENES } from './data/storyRegistry';
import { playSound } from './utils/audio';

// Import All 17 Clean-Slate Scenes
import { Scene00_PasswordGate } from './scenes/Scene00_PasswordGate';
import { Scene01_OpeningStatement } from './scenes/Scene01_OpeningStatement';
import { Scene02_InspiraChaos } from './scenes/Scene02_InspiraChaos';
import { Scene03_MemoryCarRide } from './scenes/Scene03_MemoryCarRide';
import { Scene04_MemoryStills } from './scenes/Scene04_MemoryStills';
import { Scene05_MemoryFirstCoat } from './scenes/Scene05_MemoryFirstCoat';
import { Scene06_MemoryFirstCycle } from './scenes/Scene06_MemoryFirstCycle';
import { Scene07_MemoryMotivation } from './scenes/Scene07_MemoryMotivation';
import { Scene08_MemoryFriendship } from './scenes/Scene08_MemoryFriendship';
import { Scene09_MemoryCrimePartner } from './scenes/Scene09_MemoryCrimePartner';
import { Scene10_MemoryOneYear } from './scenes/Scene10_MemoryOneYear';
import { Scene11_MemoryHackathon } from './scenes/Scene11_MemoryHackathon';
import { Scene12_MemoryVRPassion } from './scenes/Scene12_MemoryVRPassion';
import { Scene13_MemoryIEEE } from './scenes/Scene13_MemoryIEEE';
import { Scene14_MemoryWhatNot } from './scenes/Scene14_MemoryWhatNot';
import { Scene15_TeachersDayFakeout } from './scenes/Scene15_TeachersDayFakeout';
import { Scene16_BirthdayFinale } from './scenes/Scene16_BirthdayFinale';

export function App() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isNavUnlocked, setIsNavUnlocked] = useState(false);
  const [transitioningBadge, setTransitioningBadge] = useState<string | null>(null);
  const isTransitioningRef = useRef(false);

  // Advance scene handler
  const handleAdvance = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setIsNavUnlocked(false);
    
    // Quick sleek cyber transition flash
    const nextIdx = currentSceneIndex + 1;
    if (nextIdx < STORY_SCENES.length) {
      const nextScene = STORY_SCENES[nextIdx];
      setTransitioningBadge(`LOADING ${nextScene.id}...`);
      setTimeout(() => setTransitioningBadge(null), 400);
      setCurrentSceneIndex(nextIdx);
    }
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 700);
  }, [currentSceneIndex]);

  // Unlock navigation helper
  const handleUnlockNav = useCallback(() => {
    setIsNavUnlocked(true);
    playSound('beep');
  }, []);

  // Replay from Scene 1
  const handleReplay = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setIsNavUnlocked(false);
    setTransitioningBadge('REBOOTING MEMORY ARCHIVE...');
    setTimeout(() => setTransitioningBadge(null), 500);
    setCurrentSceneIndex(1);
    playSound('unlock');
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 700);
  }, []);

  // Render current scene
  const renderCurrentScene = () => {
    switch (currentSceneIndex) {
      case 0:
        return <Scene00_PasswordGate onSuccess={handleAdvance} />;
      case 1:
        return <Scene01_OpeningStatement onUnlockNav={handleUnlockNav} />;
      case 2:
        return <Scene02_InspiraChaos onUnlockNav={handleUnlockNav} />;
      case 3:
        return <Scene03_MemoryCarRide onUnlockNav={handleUnlockNav} />;
      case 4:
        return <Scene04_MemoryStills onUnlockNav={handleUnlockNav} />;
      case 5:
        return <Scene05_MemoryFirstCoat onUnlockNav={handleUnlockNav} />;
      case 6:
        return <Scene06_MemoryFirstCycle onUnlockNav={handleUnlockNav} />;
      case 7:
        return <Scene07_MemoryMotivation onUnlockNav={handleUnlockNav} />;
      case 8:
        return <Scene08_MemoryFriendship onUnlockNav={handleUnlockNav} />;
      case 9:
        return <Scene09_MemoryCrimePartner onUnlockNav={handleUnlockNav} />;
      case 10:
        return <Scene10_MemoryOneYear onUnlockNav={handleUnlockNav} />;
      case 11:
        return <Scene11_MemoryHackathon onUnlockNav={handleUnlockNav} />;
      case 12:
        return <Scene12_MemoryVRPassion onUnlockNav={handleUnlockNav} />;
      case 13:
        return <Scene13_MemoryIEEE onUnlockNav={handleUnlockNav} />;
      case 14:
        return <Scene14_MemoryWhatNot onUnlockNav={handleUnlockNav} />;
      case 15:
        return <Scene15_TeachersDayFakeout onTriggerFinale={handleAdvance} />;
      case 16:
        return <Scene16_BirthdayFinale onReplay={handleReplay} />;
      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-blueprint-grid text-slate-100 flex items-center justify-center overflow-x-hidden">
      {/* Background Blueprint Layout Markers & Coordinates */}
      <BlueprintDecorations />

      {/* Top Right Sound Toggle */}
      <AudioToggle />

      {/* Quick Cyber Transition Flash Banner */}
      <AnimatePresence>
        {transitioningBadge && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-1/2 -translate-x-1/2 z-50 font-mono-code text-xs font-bold text-cyan-300 bg-slate-900/90 px-4 py-1.5 rounded-full border border-cyan-400/50 shadow-2xl backdrop-blur flex items-center gap-2 pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{transitioningBadge}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Animated Scene Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSceneIndex}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="w-full flex items-center justify-center"
        >
          {renderCurrentScene()}
        </motion.div>
      </AnimatePresence>

      {/* Global Bottom-Right Navigation Control */}
      <NavigationControl
        isUnlocked={isNavUnlocked}
        onAdvance={handleAdvance}
        currentScene={currentSceneIndex}
        totalScenes={STORY_SCENES.length}
      />
    </main>
  );
}

export default App;
