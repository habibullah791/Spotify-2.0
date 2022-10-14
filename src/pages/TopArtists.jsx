import React from 'react';

import { Error, Loader, ArtistCard } from '../components'
import { useGetTopChartQuery } from '../redux/services/shazamCore';

const TopArtists = () => {

    const { data, isFetching, error } = useGetTopChartQuery();
    const topPlays = data?.slice(33, 57);

    if (isFetching) return <Loader title="Loading Songs Around You" />
    if (error) return <Error />

    return (
        <div className='flex flex-col '>
            <div>
                <h2 className="font-bold text-3xl text-white mt-1 mb-10 p-3">Top Artists</h2>
            </div>
            <div className='flex flex-wrap sm:justify-center justify-center gap-8'>
                {topPlays?.map((track, i) => (
                    <ArtistCard key={track.key} track={track} />
                ))}
            </div>
        </div>
    );
}

export default TopArtists;
