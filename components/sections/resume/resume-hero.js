import React from 'react';
import { motion } from 'framer-motion';

const ResumeHero = () => {
  return (

<section className='bg-slate-900 h-[400px] bg-gradient-to-b from-[#552582] to-slate-900 md:from-black-500 -mt-14'>
<div className='container mx-auto min-w-[200px] w-full h-full pt-14 flex justify-center items-end'>
    <div className='w-full max-w-6xl text-white flex flex-col gap-10 p-4'>
      <motion.h2 initial={{y:-400}} animate={{y:0, delay: .12}} className='text-center md:text-left text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-black font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#80ff72] to-[#7ee8fa]'>RESUME</motion.h2>
      <div className='h-1 md:h-1 w-full bg-green-400'></div>
      <motion.h3  initial={{x:-550}} animate={{x:0, delay: .12}} className='text-center md:text-left text-2xl sm:text-3xl lg:text-4xl xl:text-5xl '>Grab a copy of my resume </motion.h3>
    </div>

</div>

</section>
  )
}

export default ResumeHero