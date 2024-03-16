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
      audioRef.current.play();
      setActiveIndex(0);
    } else {
      setPlay(false);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setActiveIndex(null);
    }
  };

  const handleEnded = () => {
    audioRef.current.play();
    audioRef.current.currentTime = 0;
    setActiveIndex((idx) => (idx <= nominator - 2 ? idx + 1 : 0));
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
