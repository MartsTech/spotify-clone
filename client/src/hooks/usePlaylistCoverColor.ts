import { useEffect, useState } from "react";
import { shuffle } from "lodash";

const usePlaylistCoverColor = (
  selectedPlaylist: SpotifyApi.PlaylistObjectSimplified | null
) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (selectedPlaylist) {
      setColor(shuffle(colors).pop() as string);
    }
  }, [selectedPlaylist]);

  return color;
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
