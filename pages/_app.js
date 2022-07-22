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
					{/* <Script>
						{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N2MZZMB');`}
					</Script> */}

					<Script
						src="https://www.googletagmanager.com/gtag/js?id=G-YSTZQP073R"
						strategy="afterInteractive"
					></Script>
					<Script id="google-analytics" strategy="afterInteractive">
						{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YSTZQP073R', {
    transport_url: 'https://gtm-5wfqc58-ymvko.uc.r.appspot.com',
	
});
`}
					</Script>

					{/* <Script
						src="https://www.googletagmanager.com/gtag/js?id=G-YSTZQP073R"
						strategy="afterInteractive"
					></Script>
					<Script id="google-analytics" strategy="afterInteractive">
						{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YSTZQP073R', {
    transport_url: 'https://gtm-5wfqc58-ymvko.uc.r.appspot.com',
	cookie_prefix: 'cookie_channel'
});
`}
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
