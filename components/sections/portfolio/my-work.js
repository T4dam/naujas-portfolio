import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainButton from '../../button/main-button';
import tasky from '/public/images/tasky.jpg'
import dungeon from '/public/images/dungeon.jpg'
import cover from '/public/images/dogma.jpeg'


const Mywork = () => {
  const data = [
    {
      title: 'Tasky',
      intro: 'A handy dandy time management tool for planners and time savers. You can easily track your task process with a drag and drop functionality.',
      src: tasky,
      alt: 'Task board page',
      url: '/work/tasky'
    },
    {
      title: 'Game Dungeon',
      intro: 'A website for a funky looking fictional company that offers variety of services for gamers and beyond. ',
      src: dungeon,
      alt:'image of a webpage',
      url: '/work/gamedungeon'
    },
    {
      title: 'Song cover image',
      intro: 'Collaborated with VeeHouse and famous Lithuanian hip-hop band "Dogma" for a song cover for youtube of their latest single called "Karalius nuogas".',
      src: cover,
      alt: 'Song cover photo',
      url: '/work/cover'
    },
  ]
  return (
    <section className='h-full w-full bg-slate-900 text-white flex justify-center items-center'>
    <div className='container max-w-[640px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:lg:max-w-[1152px]  w-full mt-24 p-4 mx-auto'>
        {data.map((item, i)=> {
            return (
        <div key={i} className='flex-col '>
            {/* <div className='flex justify-center mb-12 text-4xl font-bold'>About</div> */}
                       <div className=' w-full h-auto text-center md:text-center flex flex-col sm:flex-row gap-8 max-gap-12 justify-between'>
                    <div className='flex justify-center sm:justify-start items-center snap-center'>
                      <div className=' max-w-full '>
                          <h3 className='text-4xl md:text-6xl font-black text-center sm:text-left mb-6'>{item.title}</h3>
                          <p className='max-w-[360px] md:max-w-[400px] sm:w-full text-center sm:text-left sm:text-lg leading-7 mb-6'>{item.intro}</p>
                                      
                                   <div className='text-center sm:text-left '>
                                   <MainButton link={item.url} text={'Learn more'} />
                                   </div>
                    </div>
                    </div>
                       <div className='snap-start w-full flex justify-center sm:justify-end items-center'>
                       {/* <Image src="https://uploads-ssl.webflow.com/5ff9747066ed90b013f60409/615288994a29b449db5e33ec_zerohaul-duct-tape-thumbnail.jpg" layout='fill' className='w-[85vw] md:w-[42vw] lg:w-[38vw] xl:w-[40vw]' style="transform: translate3d(0vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;"  srcset="https://uploads-ssl.webflow.com/5ff9747066ed90b013f60409/615288994a29b449db5e33ec_zerohaul-duct-tape-thumbnail-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5ff9747066ed90b013f60409/615288994a29b449db5e33ec_zerohaul-duct-tape-thumbnail.jpg 1080w" alt="Zerohaul Logistics Logo on Business Cards Floating" class="project-image" /> */}
                        <Link href={item.url} passHref>
                         <a>
                        <div className='h-[250px] w-[250px] sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px] lg:h-[550px] lg:w-[550px] rounded-3xl max-w-4xl max-h-4xl relative overflow-hidden'>
                          <Image src={item.src} alt={item.alt} layout='fill' objectFit='cover' loading={'lazy'} placeholder="blur"/>
                        </div>
                         </a>
                        </Link>
                       </div>
                       </div>
                       <div className='h-1 md:h-1 w-full bg-green-400 my-20'></div>
        </div>
            )

        })}
    </div>
</section>
  )
}

export default Mywork