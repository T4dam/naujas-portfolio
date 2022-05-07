import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GamedungeonHero = () => {
  return (
    <section className='bg-slate-900 h-full w-full text-white'>
        <div className='container flex-col w-full h-full mx-auto flex p-4 sm:p-0 md:p-4 items-center'>
        <div className='mt-6 self-start'>
                <Link href={'/portfolio'} passHref>
                    <button className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>Go back</button>
                </Link>
            </div>
           
            <div className='bg-green-300 h-[500px] w-full max-w-5xl mx-auto  mt-14 mb-24 rounded-xl relative overflow-hidden'>
                <Image src='/images/dungeon-photo.jpg' alt='Website photo cover' layout='fill' objectFit='cover' loading='eager'/> 
            </div>
          
        </div>
    </section>
  )
}

export default GamedungeonHero