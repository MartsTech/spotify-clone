import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { useStore } from "stores/store";

const usePlaylistCoverColor = () => {
  const { selectedPlaylist } = useStore().playlistStore;
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(shuffle(colors).pop() as string);
  }, [selectedPlaylist?.name]);

  return [color] as const;
};

export default usePlaylistCoverColor;

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];
