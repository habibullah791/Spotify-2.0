import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";



const SongCard = ({ song, isPlaying, activeSong, data, i }) => {

  const handlePauseClick = () =>{

  }
  const handlePlayClick = () =>{

  }
  return (
    <div className="flex flex-col w-[256px] p-4 bg-white/5 opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? "flex bg-black bg-opacity-70" : "hidden"}`}>
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}

          />
        </div>
        <img src={song.images?.coverart} />
      </div>
      <div className="flex flex-col justify-start  mt-5">
        <p className="text-lg font-semibold text-white truncate ">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm text-gray-300 truncate">
          <Link to={song.artists ? `/artists/${song?.artists[0]}` : '/top/artists'}>
            {song.title}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SongCard;
