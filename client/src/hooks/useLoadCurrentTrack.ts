import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useStore } from "stores/store";
import spotifyApi from "utils/spotify";

const useLoadCurrentTrack = () => {
  const { loadCurrentTrack, selectedTrack } = useStore().playlistStore;
  const { data: session } = useSession();

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !selectedTrack) {
      loadCurrentTrack();
    }
  }, [spotifyApi.getAccessToken(), selectedTrack, session, loadCurrentTrack]);
};

export default useLoadCurrentTrack;
