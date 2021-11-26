import type { DefaultSeoProps } from "next-seo";

export const baseUrl = "https://spotify-clone-martstech.vercel.app";

export const defaultSEO: DefaultSeoProps = {
  title: "Spotify Clone",
  description: "Spotify is all the music you’ll ever need.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Spotify Clone",
    images: [
      {
        url: `${baseUrl}/meta/icon.png`,
        alt: "Spotify Clone",
      },
    ],
  },
};
