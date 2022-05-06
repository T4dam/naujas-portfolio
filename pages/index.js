import Image from 'next/image';
import Layout from '../components/layouts';
import Hero from '../components/sections/hero'
import About from '../components/sections/about'
import Reach from './../components/sections/reach'

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <About />
        <Reach />
      </Layout>
    </div>
  )
}
