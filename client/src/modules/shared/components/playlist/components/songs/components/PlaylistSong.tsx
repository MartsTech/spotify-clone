import { FC } from "react";
import { millisToMinutesAndSeconds } from "utils/time";

interface PlaylistSongProps {
  track: SpotifyApi.TrackObjectFull;
  order: number;
}

const PlaylistSong: FC<PlaylistSongProps> = ({ track, order }) => {
  const { album, name, artists, duration_ms } = track;

  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center space-x-4">
        <p>{order}</p>
        <img
          className="h-10 w-10"
          src={track.album.images[0].url}
          loading="lazy"
          alt="album"
        />
        <div className="">
          <p>{name}</p>
          <p>{artists[0].name}</p>
        </div>
      </div>
      <div
        className="flex items-center justify-between ml-auto
        md:ml-0"
      >
        <p className="hidden md:inline">{album.name}</p>
        <p>{millisToMinutesAndSeconds(duration_ms)}</p>
      </div>
    </div>
  );
};

export default PlaylistSong;
