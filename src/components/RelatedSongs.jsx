import ArtistSong from "./ArtistSong";
import SongBar from "./SongBar";


const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => {

  console.log("artistID", artistId);
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white mb-10">Discography</h1>
      {!artistId ? (
        <div className="flex flex-wrap sm:justify-center justify-center gap-8">
          {data?.map((song, i) => (
            <ArtistSong
              key={`${song.key}-${artistId}`}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap sm:justify-center justify-center gap-8">
          {data?.map((song, i) => (
            <SongBar
              key={`${artistId}-${song.key}-${i}`}
              song={song}
              i={i}
              artistId={artistId}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
          ))}
        </div>
      )}
    </div>

  );
};

export default RelatedSongs;
