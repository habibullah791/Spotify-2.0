import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";



const SongCard = ({ song, isPlaying, activeSong, data, index }) => {

  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  }
  return (
    <div className="flex flex-col md:w-[256px] w-[276px] p-4 bg-white/5 opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:bg-dark2">
      <div className="relative w-full h-56 group">
        <div className={`p-[50px] absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? "flex bg-black bg-opacity-70" : "hidden"}`}>
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            styles="top-20 left-20 p-2"
            size="60"

          />
        </div>
        <img src={song.images?.coverart} />
      </div>
      <div className="flex flex-col justify-start  md:mt-5 mt-10 py-2">
        <p className="text-lg font-semibold text-white truncate hover:underline">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm text-gray-300 truncate hover:underline">
          <Link to={song.artists ? `/artists/${song?.artists[0]}` : '/top/artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SongCard;
