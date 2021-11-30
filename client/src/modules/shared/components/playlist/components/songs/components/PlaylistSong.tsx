import { FC } from "react";
import { millisToMinutesAndSeconds } from "utils/time";

interface PlaylistSongProps {
  track: SpotifyApi.TrackObjectFull;
  order: number;
  onClick: () => void;
}

const PlaylistSong: FC<PlaylistSongProps> = ({ track, order, onClick }) => {
  const { album, name, artists, duration_ms } = track;

  return (
    <div
      onClick={onClick}
      className="grid grid-cols-2 text-gray-500 py-4 px-5
      hover:bg-gray-900 rounded-lg cursor-pointer"
    >
      <div className="flex items-center space-x-4">
        <p>{order}</p>
        <img
          className="h-10 w-10"
          src={track.album.images[0].url}
          loading="lazy"
          alt="album"
        />
        <div className="">
          <p className="w-36 lg:w-64 truncate text-white">{name}</p>
          <p className="w-40">{artists[0].name}</p>
        </div>
      </div>
      <div
        className="flex items-center justify-between ml-auto
        md:ml-0"
      >
        <p className="w-40 hidden md:inline">{album.name}</p>
        <p>{millisToMinutesAndSeconds(duration_ms)}</p>
      </div>
    </div>
  );
};

export default PlaylistSong;
