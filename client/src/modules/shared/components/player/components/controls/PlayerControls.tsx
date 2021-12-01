import {
  RewindIcon,
  SwitchHorizontalIcon,
  PauseIcon,
  PlayIcon,
  FastForwardIcon,
  ReplyIcon,
} from "@heroicons/react/solid";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "stores/store";
import PlayerIcon from "../shared/PlayerIcon";

const PlayerControls = () => {
  const { isPlaying, skipToPreviousTrack, skipToNextTrack, handlePlayPause } =
    useStore().playlistStore;

  return (
    <div className="flex items-center justify-evenly">
      <PlayerIcon Icon={SwitchHorizontalIcon} className="h-5 w-5" />
      <PlayerIcon
        Icon={RewindIcon}
        onClick={skipToPreviousTrack}
        className="h-5 w-5"
      />
      <PlayerIcon
        Icon={isPlaying ? PauseIcon : PlayIcon}
        onClick={handlePlayPause}
        className="h-10 w-10"
      />
      <PlayerIcon
        Icon={FastForwardIcon}
        onClick={skipToNextTrack}
        className="h-5 w-5"
      />
      <PlayerIcon Icon={ReplyIcon} className="h-5 w-5" />
    </div>
  );
};

export default observer(PlayerControls);
