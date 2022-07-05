import React, { useState, useEffect } from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import Loader from '../components/loader';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		TagManager.initialize({ gtmId: 'GTM-N2MZZMB' });
	}, []);

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
					<Component {...pageProps} />
				</AnimatePresence>
			) : (
				<Loader />
			)}
		</>
	);
}

export default MyApp;
