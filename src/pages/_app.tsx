import { AppProps } from 'next/app'
import Head from 'next/head'
import Toast from 'components/Toast'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Space Travel</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple app information about starships"
        />
      </Head>
      <GlobalStyles />
      <Toast />
      <Component {...pageProps} />
    </>
  )
}

export default App
