import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate </title>
        <link rel="shortcut icon" href="/public/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/public/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, 
          NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
