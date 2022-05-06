import React from 'react';
import Layout from '../components/layouts';
import ResumeHero from './../components/sections/resume/resume-hero';
import Details from './../components/sections/resume/details';

const Resume = () => {
  return (
<Layout>
    <ResumeHero />
    <Details />
</Layout>
  )
}

export default Resume