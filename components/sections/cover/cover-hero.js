import React from 'react';
import Image from 'next/image';

const CoverHero = () => {
  return (
    <section className='bg-slate-900 h-full w-full text-white'>
        <div className='container  w-full h-full mx-auto flex p-4 sm:p-0 md:p-4 items-center'>
            <div className='bg-green-300 h-[500px] w-full max-w-5xl mx-auto my-24 relative rounded-xl overflow-hidden'>
                <Image src='/images/dogma.jpeg' alt='Cover art of Dogma group members' layout='fill' objectFit='cover' />
            </div>
        </div>
    </section>
  )
}

export default CoverHero