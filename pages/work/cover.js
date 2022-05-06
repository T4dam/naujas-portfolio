import React from 'react';
import Layout from '../../components/layouts';
import CoverHero from './../../components/sections/cover/cover-hero';
import Details from './../../components/sections/cover/details';

const Cover = () => {
  return (
   <Layout>
       <CoverHero />
       <Details/>
   </Layout>
  )
}

export default Cover