import React, { useState, useEffect } from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import Loader from '../components/loader';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setLoading(true), 2300);
	});

	return (
		<>
			<Head>
				<title>Tadel.lt Front-end Developer</title>
				<meta name="description" content="Tadas' portfolio" />
				<meta name="theme-color" content="#9333ea" />
				<link rel="icon" href="/images/logo-purple.png" />
			</Head>
			{loading ? (
				<AnimatePresence
					exitBeforeEnter
					initial={true}
					onExitComplete={() => window.scrollTo(0, 0)}
				>
					{/* <Script
						strategy="afterInteractive"
						src="https://www.googletagmanager.com/gtag/js?id=G-K9S0QKYL33"
					></Script>
					<Script strategy="afterInteractive">
						{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-K9S0QKYL33');`}
					</Script> */}
					<Component {...pageProps} />
				</AnimatePresence>
			) : (
				<Loader />
			)}
		</>
	);
}

export default MyApp;
