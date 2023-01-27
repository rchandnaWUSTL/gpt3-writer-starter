import { Html, Head, Main, NextScript } from 'next/document'
import Home from '.'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Taylor Swift Song Generator" key="title"/>
        <meta property="og:description" content="Generate your dream Taylor Swift song" key="description"/>
        <meta
          property="og:image"
          content="https://64.media.tumblr.com/a35b1f8ec059d946a094ba9b01cd29c8/92d7bd81934dac37-68/s1280x1920/9b7f2325d75a77d5487f29e951daf12333969699.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
