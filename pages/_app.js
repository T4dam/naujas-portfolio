// import React, {useState, useEffect} from 'react';
import '../styles/globals.css'
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion'
// import Loader from '../components/loader';

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = React.useState(false);

  // useEffect(() => {
  //   setLoading(true);
  // }, []);

  return (
    <>
      <Head>
        <title>Tadam.lt Front-end Developer</title>
        <meta name="description" content="Tadas' portfolio" />
        <meta name="theme-color" content="#9333ea" />

        <link rel="icon" href="/images/logo-purple.png" />
      </Head>
      <AnimatePresence
                exitBeforeEnter
                initial={true}
                onExitComplete={() => window.scrollTo(0, 0)}
            >

      <Component {...pageProps} />
            </AnimatePresence>
    </>
  )
}

export default MyApp
