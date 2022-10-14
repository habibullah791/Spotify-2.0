import { Link } from "react-router-dom";


const DetailsHeader = ({ artistId, artistData, songData }) => {

  const artist = artistData?.artists[artistId].attributes;
  return (
    <div className="relative w-full flex flex-col">
      <div className="flex justify-start items-center  bg-gradient-to-l from-transparent to-white/5 p-6">
        <div>
          <img
            alt="art"
            src={artistId ? artistData?.artists[artistId].attributes?.artwork.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart}
            className="w-64 h-64"
          />
        </div>
        <div className="m-4">
          <h1 className="font-bold text-5xl text-white mb-8">
            {artistId ? artistData?.artists[artistId].attributes?.name : songData?.title}
          </h1>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <h2 className="font-medium text-sm text-white">{songData?.subtitle}</h2>
            </Link>
          )}
          <p className="font-medium text-sm text-gray-400 mb-4">{artistId ? artist?.genreNames[0] : songData?.genres?.primary}</p>
        </div>
      </div>
      <div className="w-full sm:44 h-14" />
    </div>

  );
};

export default DetailsHeader;
