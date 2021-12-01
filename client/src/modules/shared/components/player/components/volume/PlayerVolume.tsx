import { VolumeOffIcon, VolumeUpIcon } from "@heroicons/react/solid";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import PlayerIcon from "../shared/PlayerIcon";

const PlayerVolume = () => {
  const { volume, setVolume } = useStore().playlistStore;

  return (
    <div
      className="flex items-center space-x-3 md:space-x-4
      justify-end pr-5"
    >
      <PlayerIcon
        Icon={VolumeOffIcon}
        onClick={() =>
          volume !== 0 && (volume >= 10 ? setVolume(volume - 10) : setVolume(0))
        }
        className="h-5 w-5"
      />
      <input
        className="w-14 md:w-28"
        type="range"
        value={volume}
        min={0}
        max={100}
        onChange={(e) => setVolume(Number(e.target.value))}
      />
      <PlayerIcon
        Icon={VolumeUpIcon}
        onClick={() =>
          volume !== 100 &&
          (volume <= 90 ? setVolume(volume + 10) : setVolume(100))
        }
        className="h-5 w-5"
      />
    </div>
  );
};

export default observer(PlayerVolume);
