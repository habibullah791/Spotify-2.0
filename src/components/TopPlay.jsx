import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode'

const TopChartCard = ({ song, index, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
  return (
    <div key={index} className="flex flex-row justify-between mr-10 py-3 px-5 w-full bg-white/5 opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:bg-dark2">
      <div className="flex flex-row items-center">
        <h3 className="font-bold text-base text-white mr-3">{index + 1}</h3>
        <img src={song.images.coverart} className="w-[80px] h-[80px] mr-5" />
        <div className="flex flex-col justify-center ">
          <p className="text-lg font-semibold text-white truncate hover:underline">
            <Link to={`/songs/${song.key}`}>
              {song.title}
            </Link>
          </p>
          <p className="text-sm text-gray-300 truncate hover:underline">
            <Link to={`/artists/${song.artists[0].adamid}`}>
              {song.subtitle}
            </Link>
          </p>
        </div>
      </div>
      <PlayPause
        song={song}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
        styles="top-12"
        size={30}
      />
    </div>
  );
};

const TopPlay = () => {

  const dispatch = useDispatch();

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartQuery();
  const topPlays = data?.slice(0,7);


  const handlePauseClick = () => {
    dispatch(playPause(false));
  }
  const handlePlayClick = (song, index) => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  }

  return (
    <div className="text-white xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className={`${isFetching ? 'hidden' : 'block'} w-full flex flex-col`}>
        <div className="flex flex-row justify-between items-center my-4">
          <h2 className="text-white font-bold text-3xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, index) => (
            <TopChartCard
              key={song.key}
              song={song}
              index={index}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, index)}
            />
          ))}
        </div>
      </div>
      <div className={`${isFetching ? 'hidden' : 'block'} flex flex-row justify-between items-center my-10`}>
        <h2 className="text-white font-bold text-3xl">Top Artists</h2>
        <Link to="/top-artists">
          <p className="text-gray-300 text-base cursor-pointer"> see more</p>
        </Link>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={25}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="flex flex-row justify-between mt-10 w-full opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      >
        {topPlays?.map((song, i) => (
          <SwiperSlide
            key={song.key}
            style={{ width: '25%', height: '25%' }}
            className="bg-white/5 hover:bg-dark2 p-4 mx-10 rounded-lg animate-slideright flex flex-col justify-center items-start"
          >
            <Link to={`/artists/${song.artists[0].adamid}`}>
              <img
                src={song.images.background}
                className="rounded-full shadow-lg w-full oject-cover"
              />
            </Link>
            <Link to={`/artists/${song.artists[0].adamid}`}>
              <p className="text-lg font-semibold text-white mt-2">{song.subtitle}</p>
              <p className="text-sm font-medium text-gray-400 mb-3">Artist</p>
            </Link>
          </SwiperSlide>
        ))}

      </Swiper>
    </div >
  );
}

export default TopPlay;
