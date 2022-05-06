import React from 'react';
import Layout from '../components/layouts';
import PorfolioHero from '../components/sections/portfolio/portfolio-hero';
import Mywork from '../components/sections/portfolio/my-work';
import Head from 'next/head';

const Portfolio = () => {
  return (
        <Layout>
            <PorfolioHero />
            <Mywork />
        </Layout> 
  )
}

export default Portfolio