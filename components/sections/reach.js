import React from 'react'
import Link from 'next/link'


const Reach = () => {
  return (
    <section className='bg-gradient-to-t from-purple-900 via-slate-900 to-slate-900 md:from-black-500 h-full w-full flex justify-center text-white '>
        <div className='container flex justify-center mb-24'>
            <div className='w-full max-w-6xl flex-col items-center justify-center'>
                <div className=' mb-12 p-4'>
                    <h3 className='text-center sm:text-left font-bold text-3xl'>You can reach <br/> me here</h3>
                </div>
                <div className='flex flex-col items-center sm:flex-row justify-between p-4 gap-6 sm:gap-12'>
                          <Link href={'mailto:tadas.delininkaitis@gmail.com'} passHref={true}>
                <button className='rounded-[4px] shadow-md m-1 h-16 border-solid border-2 border-white w-60 sm:w-72 hover:border-green-400 hover:bg-green-400 hover:text-black transition ease-out duration-500'>
                              <a className='text-xl'>E-mail</a>
                        </button>
                          </Link>
                <Link href={'https://www.linkedin.com/in/tadasdelininkaitis'} passHref={true}>
                <button className='rounded-[4px] shadow-md m-1 h-16 border-solid border-2 border-white w-60 sm:w-72 hover:border-green-400 hover:bg-green-400 hover:text-black transition ease-out duration-500'>
                              <a className='text-xl'>LinkedIn</a>
                        </button>
                          </Link>
                <Link href={'https://github.com/T4dam'} passHref={true}>
                <button className='rounded-[5px] shadow-md m-1 h-16 border-solid border-2 border-white w-60 sm:w-72 hover:border-green-400 hover:bg-green-400 hover:text-black transition ease-out duration-500'>
                              <a className='text-xl'>Github</a>
                        </button>
                          </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reach