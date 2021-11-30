import PlaylistCover from "./components/cover";
import PlaylistSongs from "./components/songs";

const Playlist = () => {
  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide">
      <PlaylistCover />
      <PlaylistSongs />
    </div>
  );
};

export default Playlist;
