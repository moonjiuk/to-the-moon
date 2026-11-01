"use client";
import { useState, useRef, type CSSProperties } from 'react';
import { LiquidGlass } from '@dpawlikowski/liquid-glass/react';
import styles from './BGM.module.css';
const bars = Array.from({ length: 56 }, (_, i) => 20 + Math.round(Math.abs(Math.sin(i * 1.7) * Math.cos(i * .43)) * 80));
export default function BGM({ compact = false }: { compact?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState('');
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    setError('');
    if (!audio.paused) { audio.pause(); return; }
    try { await audio.play(); } catch { setError('Unable to play. Please try again.'); }
  };
  return (
    <LiquidGlass as="aside" intensity="subtle" opacity={0.04} refractive
      className={styles.player} aria-label="Background music" data-playing={isPlaying} data-compact={compact}>
      <audio ref={audioRef} src="/assets/audios/debussy-moonlight.mp3" loop preload="none"
        onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}
        onError={() => { setIsPlaying(false); setError('Unable to load music. Please try again.'); }} />
      <button className={styles.toggle} onClick={togglePlay} aria-label={isPlaying ? 'Pause Clair de lune' : 'Play Clair de lune'} aria-pressed={isPlaying}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          {isPlaying ? <path d="M6 4h4v16H6zm8 0h4v16h-4z" /> : <path d="M8 4.5v15l12-7.5z" />}
        </svg>
      </button>
      <div className={styles.track}>
        <p className={styles.title}>Clair de lune</p><p className={styles.artist}>C. Debussy</p>
        <div className={styles.waveform} aria-hidden="true">
          {bars.map((height, i) => <span key={i} style={{ '--height': `${height}%`, '--delay': `${i * -.13}s` } as CSSProperties} />)}
        </div>
      </div>
      <p className={styles.error} role="status">{error}</p>
    </LiquidGlass>
  );
}
