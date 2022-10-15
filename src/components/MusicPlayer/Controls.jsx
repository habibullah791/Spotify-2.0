import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className=" flex items-center justify-around md:w-36 lg:w-35 2xl:w-80">
    <BsArrowRepeat size={15} color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
    {currentSongs?.length && <MdSkipPrevious size={25} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
    {isPlaying ? (
      <BsFillPauseFill size={30} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <BsFillPlayFill size={30} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {currentSongs?.length && <MdSkipNext size={25} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
    <BsShuffle size={15} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
  </div>
);

export default Controls;
