import { useGetTopChartQuery } from '../redux/services/shazamCore';
import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';



const Discover = () => {

    const { data, isFetching, error } = useGetTopChartQuery();
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);



    if (isFetching) return <Loader title="Loading Songs ......" />

    if (error) return <Error />

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 p-3">
                <h2 className="font-bold text-xl text-white">Discover </h2>
                <select className="bg-black rounded-lg p-3 text-gray-300 outline-none sm:mt-0 mt-5">
                    {genres.map((musicGenre) => <option className='p-3' key={musicGenre.value} value={musicGenre.value}>{musicGenre.title}</option>)}
                </select>

            </div>
            <div className='flex flex-wrap sm:justify-center justify-center gap-8'>
                {data?.map((song, index) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        activeSong={activeSong}
                        isPlaying={isPlaying}
                        i={index}
                        data={data}
                    />
                ))}
            </div>
        </div>
    );
};
export default Discover;
