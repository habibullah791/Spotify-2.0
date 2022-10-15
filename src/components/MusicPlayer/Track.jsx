import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-12 w-12 mr-4`}>
      <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <Link to={""}>
        <p className="truncate text-white font-bold text-base hover:underline cursor-pointer">
          {activeSong?.title ? activeSong?.title : 'No active Song'}
        </p>
      </Link>
      <p className="truncate text-gray-300 text-sm hover:underline cursor-pointer">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
