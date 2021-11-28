import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import spotifyApi from "utils/spotify";

const useSpotify = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.error === "RefreshAccessTokenError") {
      signIn();
    }
    // @ts-ignore
    spotifyApi.setAccessToken(session?.user?.accessToken);
  }, [session]);

  return spotifyApi;
};

export default useSpotify;
