import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from '../components/PlayPause';
import {playPause, setActiveSong } from '../redux/features/playerSlice';
import {useGetTopChartQuery} from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode'

const TopPlay = () => {
    
    const dispatch = useDispatch();

    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const {data} = useGetTopChartQuery();
    const divRef = useRef();
    const topPays = data?.slice(0, 20);


    const handlePauseClick = () => {
      dispatch(playPause(false));
    }
    const handlePlayClick = () => {
      dispatch(setActiveSong({ song, data, index }));
      dispatch(playPause(true));
    }

    return(
        <div>
        
        </div>
    );
}
  
  export default TopPlay;
  