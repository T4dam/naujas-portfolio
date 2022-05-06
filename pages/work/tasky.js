import React from 'react';
import Layout from '../../components/layouts';
import TaskyHero from './../../components/sections/tasky/tasky-hero';
import Details from './../../components/sections/tasky/details';

const Tasky = () => {
  return (
   
    <Layout>
        <TaskyHero />
        <Details />
    </Layout>
  )
}

export default Tasky