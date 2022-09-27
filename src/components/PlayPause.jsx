import React from "react";
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPalying, activeSong, song, handlePause, handlePlay }) =>
(isPalying && activeSong?.title === song?.title ?
  (<FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />) :
  (<FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />));

export default PlayPause;
