import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader, SongCard } from '../components'
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {

  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);


  const songs = data?.tracks?.hits.map((song) => song.track);

  if (isFetching) return <Loader title="Loading Songs Around You" />
  if (error) return <Error />

  return (
    <div className='flex flex-col '>
      <div>
        <h2 className="font-bold text-3xl text-white mt-1 mb-10 p-3">
        Showing Results for <span>{searchTerm.toUpperCase()}</span>
        </h2>
      </div>
      <div className='flex flex-wrap sm:justify-center justify-center gap-8'>
        {songs?.map((song, i) => (
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

export default Search;
