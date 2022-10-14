import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { DetailsHeader, Loader, Error, RelatedSongs } from '../components'

const SongDetails = () => {

    const dispatch = useDispatch();

    const handlePauseClick = () => {
        dispatch(playPause(false));
    }
    const handlePlayClick = (song, index) => {
        dispatch(setActiveSong({ song, data, index }));
        dispatch(playPause(true));
    }

    const { songid, id: artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });
    const { data, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ songid });

    if (isFetchingRelatedSongs || isFetchingSongDetails) return
    <Loader />

    if (error) return
    <Error />

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId={artistId} songData={songData} />
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics</h2>
                <div className="mt-5">
                    {songData?.sections[1].type === 'LYRICS'
                        ? songData.sections[1]?.text.map((line, i) => (
                            <p key={`lyrics-${line}-${i}`} className="text-gray-400 text-base my-1">{line}</p>
                        ))
                        : (
                            <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
                        )}
                </div>
            </div>
            <div>
                <RelatedSongs
                    data={data}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    handlePauseClick={handlePauseClick}
                    handlePlayClick={handlePlayClick}
                    artistId={artistId}
                />
            </div>
        </div>
    );
}

export default SongDetails;
