import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ArtistCard = ({ track }) => {

  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:w-[210px] w-[290px] p-4 bg-white/5 opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:bg-dark2"
      onClick={() => navigate(`/artists/${track.artists[0].adamid}`)}

    >
      <div className="flex-1 flex flex-col justify-start items-start ">
        <div className="relative w-full h-46 group">
          <img
            className="rounded w-full h-46 group"
            src={track?.images?.background}
          />
        </div>
        <div className="mt-4">
          <Link to={''}>
            <p className="text-lg font-semibold text-white truncate hover:underline">
              {track?.subtitle}
            </p>
            <p className="text-sm font-medium text-gray-400 mb-3">Artist</p>
          </Link>
        </div>
      </div>
    </div >
  );
};

export default ArtistCard;
