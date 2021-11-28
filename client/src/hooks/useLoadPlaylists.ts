import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useStore } from "stores/store";
import useSpotify from "./useSpotify";

const useLoadPlaylists = () => {
  const spotifyApi = useSpotify();
  const { setPlaylists } = useStore().playlistStore;
  const { appLoading } = useStore().commonStore;
  const { data: session } = useSession();

  useEffect(() => {
    if (appLoading && spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [appLoading, session, spotifyApi, setPlaylists]);
};

export default useLoadPlaylists;
