import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";




const ArtistSong = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {

    const dispatch = useDispatch();
    

    return (
        <div className="flex flex-col md:w-[256px] w-[276px] p-4 bg-white/5 opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:bg-dark2">
            <div className="flex-1 flex flex-col justify-start items-start ">
                <div className="relative w-full h-56 group">
                    {!artistId ? (
                        <div className={`p-[50px] absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? "flex bg-black bg-opacity-70" : "hidden"}`}>
                            <PlayPause
                                song={song}
                                isPlaying={isPlaying}
                                activeSong={activeSong}
                                handlePause={handlePauseClick}
                                handlePlay={() => handlePlayClick(song, i)}
                                styles="top-20 left-20 p-2"
                                size="55"

                            />
                        </div>
                    ) : null}
                    <img
                        className="rounded-lg w-full h-56 group"
                        src={artistId ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : song?.images?.coverart}
                        alt={song?.title}
                    />
                </div>
                <div className="flex flex-col justify-start  md:mt-5 mt-10">
                    {!artistId ? (
                        <Link to={`/songs/${song.key}`}>
                            <p className="text-lg font-semibold text-white truncate hover:underline">
                                {song?.title}
                            </p>
                        </Link>
                    ) : (
                            <p className="text-sm font-normal text-gray-300 truncate hover:underline">
                                {song?.attributes?.name}
                            </p>
                    )}
                    <p className="text-base text-gray-300 mt-1">
                        {artistId ? song?.attributes?.albumName : song?.subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ArtistSong;
