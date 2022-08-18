import React from 'react';
import Layout from '../../components/layouts';
import CoinTrackHero from '../../components/sections/cointrack/cointrack-hero';
import Details from '../../components/sections/cointrack/details';

const Cover = () => {
	return (
		<Layout>
			<CoinTrackHero />
			<Details />
		</Layout>
	);
};

export default Cover;
