import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

const PlayerInfo = () => {
  const { selectedTrack } = useStore().playlistStore;

  return (
    <div>
      <img
        className="hidden md:inline h-10 w-10"
        loading="lazy"
        src={selectedTrack?.album.images[0].url}
        alt="album"
      />
    </div>
  );
};

export default observer(PlayerInfo);
