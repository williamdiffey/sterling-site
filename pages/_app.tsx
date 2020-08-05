//import global sass here
import './styles.scss'
import App, { Container } from 'next/app'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Yeseva+One&display=swap'
          rel='stylesheet'
        />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      </Head>
      <Component {...pageProps} />
    </Container>
  )
}
export default MyApp
