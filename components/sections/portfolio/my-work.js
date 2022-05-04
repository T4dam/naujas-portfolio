import React from 'react'
import Image from 'next/image'

const Mywork = () => {
  return (
    <section className='h-full w-full bg-slate-900 text-white flex justify-center items-center'>
    <div className='container  mt-32 w-full  mx-auto flex justify-center items-center'>
        <div className='flex-col mb-32'>
            <div className='flex justify-center mb-12 text-4xl font-bold'>About</div>
                       <div className=' w-full max-w-6xl h-auto text-center md:text-center flex flex-col md:flex-row gap-12 justify-between'>
                    <div className='w-full md:w-1/2'>
                        <h3 className='text-3xl md:text-3xl font-bold md:text-left p-4'>Quality is remembered  <br className='' /> long after price is forgotten</h3>
                
             <div className='text-left'>
                 <button className='shadow-md bg-green-400 p-2 w-44 md:w-72 rounded-[4px] hover:bg-green-300'>
                      <p>Say Hello</p>
                    </button>
             </div>
                    </div>
                       <div className=' w-full p-4 md:w-1/2'>
                       {/* <Image src="https://uploads-ssl.webflow.com/5ff9747066ed90b013f60409/615288994a29b449db5e33ec_zerohaul-duct-tape-thumbnail.jpg" layout='fill' className='w-[85vw] md:w-[42vw] lg:w-[38vw] xl:w-[40vw]' style="transform: translate3d(0vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;"  srcset="https://uploads-ssl.webflow.com/5ff9747066ed90b013f60409/615288994a29b449db5e33ec_zerohaul-duct-tape-thumbnail-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5ff9747066ed90b013f60409/615288994a29b449db5e33ec_zerohaul-duct-tape-thumbnail.jpg 1080w" alt="Zerohaul Logistics Logo on Business Cards Floating" class="project-image" /> */}
                        <div className='bg-green-300 h-[500px] w-[500px] rounded-3xl max-w-4xl max-h-4xl'></div>
                       </div>
                       </div>
        </div>
    </div>
</section>
  )
}

export default Mywork