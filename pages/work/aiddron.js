import React from 'react';
import Layout from '../../components/layouts';
import AiddronHero from '../../components/sections/aiddron/aiddron-hero';
import Details from '../../components/sections/aiddron/details';

const Cover = () => {
	return (
		<Layout>
			<AiddronHero />
			<Details />
		</Layout>
	);
};

export default Cover;
