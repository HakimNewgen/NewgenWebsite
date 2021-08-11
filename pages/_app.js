import '../styles/globals.css'
import '../styles/myglobals.css'


import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=0.8, user-scalable=no"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp