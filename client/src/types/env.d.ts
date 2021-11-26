declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SPOTIFY_CLIENT_ID: string;
    NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET: string;
    NEXTAUTH_URL: string;
    JWT_SECRET: string;
  }
}
