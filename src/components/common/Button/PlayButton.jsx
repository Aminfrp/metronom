"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

import buttonStyle from "./button.module.css";

const PlayButton = ({ handlePlay, stop }) => {
  return (
    <button
      onClick={handlePlay}
      className={`bg-slate-700 shadow-md shadow-slate-400  flex justify-center items-center ${buttonStyle.playBtn}`}
    >
      {stop ? (
        <FontAwesomeIcon size="lg" className="text-slate-100" icon={faStop} />
      ) : (
        <FontAwesomeIcon size="lg" className="text-slate-100" icon={faPlay} />
      )}
    </button>
  );
};

export default PlayButton;
