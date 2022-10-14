import React from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components'
import { useGetTopChartQuery } from '../redux/services/shazamCore';

const TopCharts = () => {

    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetTopChartQuery();

    const topPlays = data?.slice(33, 57);

    if (isFetching) return <Loader title="Loading Songs Around You" />
    if (error) return <Error />

    return (
        <div className='flex flex-col '>
            <div>
                <h2 className="font-bold text-3xl text-white mt-1 mb-10 p-3">Discover Top Charts</h2>
            </div>
            <div className='flex flex-wrap sm:justify-center justify-center gap-8'>
                {topPlays?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
}

export default TopCharts;
