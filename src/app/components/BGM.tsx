"use client";

import { useState, useRef } from 'react';

export default function BGM() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div id='bgm'>
      <audio ref={audioRef} src="assets/audios/debussy-moonlight.mp3" loop />
      <button onClick={togglePlay}>
        {isPlaying ? 'Music Off' : 'Music On'}
      </button>
    </div>
  );
};
