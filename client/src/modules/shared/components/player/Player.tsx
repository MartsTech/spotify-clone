import PlayerControls from "./components/controls";
import PlayerInfo from "./components/info";
import PlayerVolume from "./components/volume";

const Player = () => {
  return (
    <div
      className="h-24 bg-gradient-to-b from from-black to-gray-900
      grid grid-cols-3 text-xs md:text-base px-2 md:px-8"
    >
      <PlayerInfo />
      <PlayerControls />
      <PlayerVolume />
    </div>
  );
};

export default Player;
