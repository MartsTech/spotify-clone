import { observer } from "mobx-react-lite";
import PlayerInfo from "./components/info";

const Player = () => {
  return (
    <div>
      <PlayerInfo />
    </div>
  );
};

export default observer(Player);
