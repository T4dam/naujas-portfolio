import '../styles/globals.css'
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tadam.lt</title>
        <meta name="description" content="Tadas' portfolio" />
        <link rel="icon" href="/images/logo1.png" />
      </Head>
      <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >

      <Component {...pageProps} />
            </AnimatePresence>
    </>
  )
}

export default MyApp
