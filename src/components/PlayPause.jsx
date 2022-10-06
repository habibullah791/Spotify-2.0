import React from "react";
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';


const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay, styles, size }) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
    size={size}
    className={`text-spotify relative ${styles}`}
    onClick={handlePause}
  />
) : (
  <FaPlayCircle
    size={size}
    className={`text-spotify relative ${styles}`}
    onClick={handlePlay}
  />
))

export default PlayPause;
