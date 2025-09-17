import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        <meta name="description" content="AgataSoftware - Professionele website ontwikkeling. Wij creëren moderne, responsive websites die perfect aansluiten bij uw bedrijf." />
        <meta name="keywords" content="AgataSoftware, website bouwen, webdesign, responsive design, SEO, e-commerce, portfolio website" />
        <meta name="author" content="AgataSoftware" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
