import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=1920"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
