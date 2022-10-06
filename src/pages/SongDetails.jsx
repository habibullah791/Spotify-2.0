import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetTopChartQuery } from '../redux/services/shazamCore';
import { setActiveSong, playPause } from "../redux/features/playerSlice";

import { DetailsHeader, Loader, Error, RelatedSongs } from '../components'

const SongDetails = () => {

    const dispatch = useDispatch();
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data, isFetching, error } = useGetTopChartQuery();

    return (
        <div className="flex flex-col">
            {/* <DetailsHeader artistId={artistId} songData={songData} />  */}
        </div>
    );
}

export default SongDetails;
