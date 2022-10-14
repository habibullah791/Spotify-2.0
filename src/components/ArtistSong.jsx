import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";




const ArtistSong = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {

    const dispatch = useDispatch();
    

    return (
        <div className="flex flex-col lg:w-[210px] w-[290px] p-4 bg-white/5 opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:bg-dark2">
            <div className="flex-1 flex flex-col justify-start items-start ">
                <div className="relative w-full h-46 group">
                    {!artistId ? (
                        <div className={`p-[50px] absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? "flex bg-black bg-opacity-70" : "hidden"}`}>
                            <PlayPause
                                song={song}
                                isPlaying={isPlaying}
                                activeSong={activeSong}
                                handlePause={handlePauseClick}
                                handlePlay={() => handlePlayClick(song, i)}
                                styles="lg:top-16 lg:left-16 lg:p-2 object-contain top-24 left-24"
                                size="50"

                            />
                        </div>
                    ) : null}
                    <img
                        className="rounded w-full h-46 group"
                        src={artistId ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : song?.images?.coverart}
                        alt={song?.title}
                    />
                </div>
                <div className="flex flex-col justify-start md:mt-3 mt-8 py-2">
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
