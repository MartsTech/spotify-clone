import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Spotify Clone created using Next.JS"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/meta/favicon.ico" />
          <link rel="apple-touch-icon" href="/meta/favicon.ico" />
          <link rel="mask-icon" href="/meta/icon.png" color="#000000" />
          <link rel="manifest" href="/meta/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
