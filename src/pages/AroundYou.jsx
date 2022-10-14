import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components'
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {

    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data, isFetching, error } = useGetSongsByCountryQuery(country);


    console.log(country);

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_l1IDNJw4RehskcECFeH0iTAB2c0xf&ipAddress=9.2.6.2`)
            .then((res) => setCountry(res?.data?.location?.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [country])

    if (isFetching && loading) return <Loader title="Loading Songs Around You" />
    if (country && error) return <Error />

    return (
        <div className='flex flex-col '>
            <div>
            <h2 className="font-bold text-3xl text-white mt-1 mb-10 p-3">
            Around You In <span className='hover:text-gray-500'>{country}</span>
            </h2>
            </div>
            <div className='flex flex-wrap sm:justify-center justify-center gap-8'>
                {data?.map((song, i) => (
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

export default AroundYou;
