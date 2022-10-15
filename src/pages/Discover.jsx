import { useDispatch, useSelector } from 'react-redux';

import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetTopChartQuery, useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';



const Discover = () => {

    const dispatch = useDispatch();
    const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');


    if (isFetching) return <Loader title="Loading Songs ......" />

    if (error) return <Error />

    const genreTitle = genres.find(({ value }) => value === genreListId)?.title || 'POP';

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-1 mb-10 p-3">
                <h2 className="font-bold text-3xl text-white">Discover {genreTitle}</h2>
                <select className=" bg-dark  font-bold rounded-lg p-3 text-gray-300 outline-none sm:mt-0 mt-5"
                    onChange={(e) => dispatch(selectGenreListId(e.target.value))}
                    value={genreListId || 'PoP'}
                >
                    {genres.map((musicGenre) =>
                        <option className=''
                            key={musicGenre.value}
                            value={musicGenre.value}>
                            {musicGenre.title}</option>)
                    }
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
