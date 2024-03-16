"use client";
import PlayButton from "@/components/common/Button/PlayButton";
import { useEffect, useRef, useState } from "react";
import Steps from "./Steps";

function MetronomeController() {
  const [isPlay, setPlay] = useState(false);
  const audioRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [nominator, setNominator] = useState(8);

  const play = () => {
    if (!isPlay) {
      setPlay(true);
      setActiveIndex(0);
      audioRef.current.src = "/sound/beep2.mp3";
      audioRef.current.play();
    } else {
      setPlay(false);
      setActiveIndex(null);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleEnded = () => {
    if (activeIndex === nominator-1) {
      audioRef.current.src = "/sound/beep2.mp3";
    } else {
      audioRef.current.src = "/sound/beep1.mp3";
    }
    setActiveIndex((idx) => (idx < nominator - 1 ? idx + 1 : 0));
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <div className="flex flex-col items-center gap-16">
      <Steps nominator={8} activeIndex={activeIndex} />
      <PlayButton handlePlay={play} stop={isPlay} activeIndex={activeIndex} />
      {activeIndex}
      <audio ref={audioRef} onEnded={handleEnded}>
        <source src="/sound/beep1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default MetronomeController;
