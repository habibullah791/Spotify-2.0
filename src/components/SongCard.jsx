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
    <div className="flex flex-col lg:w-[210px] w-[290px] p-4 bg-white/5 opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:bg-dark2">
      <div className="relative w-full h-46 group">
        <div className={`p-[50px] absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? "flex bg-black bg-opacity-70" : "hidden"}`}>
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            styles="lg:top-16 lg:left-16 lg:p-2 object-contain top-24 left-24"
            size="50"

          />
        </div>
        <img src={song.images?.coverart} />
      </div>
      <div className="flex flex-col justify-start  md:mt-3 mt-8 py-2">
        <p className="text-lg font-semibold text-white truncate hover:underline">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm text-gray-300 truncate hover:underline">
          <Link to={song.artists ? `/artists/${song?.artists[0].adamid}` : '/top/artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SongCard;
