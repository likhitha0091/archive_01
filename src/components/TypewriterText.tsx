import { useState, useEffect, useRef } from 'react';
import type { DialogueLine } from '../types/story';

interface TypewriterSequenceProps {
  lines: DialogueLine[];
  onComplete?: () => void;
  speedMs?: number;
  className?: string;
  showAllFinishedLines?: boolean;
}

export function TypewriterSequence({
  lines,
  onComplete,
  speedMs = 30,
  className = '',
  showAllFinishedLines = true,
}: TypewriterSequenceProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const timeoutRef = useRef<number | null>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Create a stable string key from the lines array to prevent unnecessary resets
  const linesKey = lines.map((l) => `${l.text}_${l.pauseAfterMs}`).join(':::');
  const prevLinesKeyRef = useRef(linesKey);

  const clearTimer = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Reset ONLY if the actual text content of lines has changed (e.g. navigating to another scene)
  useEffect(() => {
    if (prevLinesKeyRef.current !== linesKey) {
      prevLinesKeyRef.current = linesKey;
      setCurrentLineIndex(0);
      setCurrentCharIndex(0);
      setCompletedLines([]);
      setIsFinished(false);
      clearTimer();
    }
  }, [linesKey]);

  useEffect(() => {
    if (lines.length === 0) {
      setIsFinished(true);
      onCompleteRef.current?.();
      return;
    }

    if (isFinished) return;

    if (currentLineIndex >= lines.length) {
      setIsFinished(true);
      clearTimer();
      onCompleteRef.current?.();
      return;
    }

    const currentLine = lines[currentLineIndex];
    if (!currentLine) {
      setIsFinished(true);
      clearTimer();
      onCompleteRef.current?.();
      return;
    }

    // Split text cleanly into graphemes/code points to preserve emojis and first letters
    const characters = Array.from(currentLine.text);

    if (currentCharIndex < characters.length) {
      timeoutRef.current = window.setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, speedMs);
    } else {
      // Finished typing current sentence -> pause, then advance to next line
      const pauseDuration = currentLine.pauseAfterMs ?? 1400;
      timeoutRef.current = window.setTimeout(() => {
        if (showAllFinishedLines) {
          setCompletedLines((prev) => [...prev, currentLine.text]);
        }
        const nextIndex = currentLineIndex + 1;
        if (nextIndex >= lines.length) {
          setIsFinished(true);
          onCompleteRef.current?.();
        } else {
          setCurrentLineIndex(nextIndex);
          setCurrentCharIndex(0);
        }
      }, pauseDuration);
    }

    return () => clearTimer();
  }, [currentLineIndex, currentCharIndex, lines, speedMs, showAllFinishedLines, isFinished]);

  if (lines.length === 0) return null;

  // If permanently finished, render all lines stably
  if (isFinished) {
    return (
      <div className={`flex flex-col gap-3 whitespace-pre-wrap break-words ${className}`}>
        {lines.map((line, idx) => (
          <div key={idx} className="opacity-95 leading-relaxed">
            {line.text}
          </div>
        ))}
      </div>
    );
  }

  const currentLine = lines[currentLineIndex];
  const characters = currentLine ? Array.from(currentLine.text) : [];
  const displayedCurrentText = characters.slice(0, currentCharIndex).join('');

  return (
    <div className={`flex flex-col gap-3 whitespace-pre-wrap break-words ${className}`}>
      {showAllFinishedLines &&
        completedLines.map((lineText, idx) => (
          <div key={idx} className="opacity-90 leading-relaxed">
            {lineText}
          </div>
        ))}

      {currentLineIndex < lines.length && (
        <div className="leading-relaxed relative inline-block">
          <span>{displayedCurrentText}</span>
          <span className="inline-block w-2.5 h-6 bg-cyan-400 ml-1.5 translate-y-1 animate-pulse" />
        </div>
      )}
    </div>
  );
}
