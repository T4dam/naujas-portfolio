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
				<Script
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N2MZZMB');`,
					}}
				></Script>
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
					{/* <!-- Google Tag Manager (noscript) --> */}
					<noscript>
						<iframe
							src="https://www.googletagmanager.com/ns.html?id=GTM-N2MZZMB"
							height="0"
							width="0"
							style="display:none;visibility:hidden"
						></iframe>
					</noscript>
					{/* <!-- End Google Tag Manager (noscript) --> */}
					<Component {...pageProps} />
				</AnimatePresence>
			) : (
				<Loader />
			)}
		</>
	);
}

export default MyApp;
