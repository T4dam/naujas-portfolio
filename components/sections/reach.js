import React from 'react'

const Reach = () => {
  return (
    <div className='bg-gradient-to-t from-purple-400 via-slate-900 to-slate-900 md:from-black-500 h-full w-full flex justify-center text-white'>
        <div className='container flex justify-center mb-24'>
            <div className='w-full max-w-6xl flex-col items-center justify-center'>
                <div className=' mb-12 p-4 sm:p-0'>
                    <h3 className='font-bold text-3xl'>You can reach <br/> me here</h3>
                </div>
                <div className='flex flex-col items-center sm:flex-row justify-center gap-6 sm:gap-12'>
                <button className='shadow-md m-1 h-16 border-solid border-2 border-white w-60 sm:w-72 hover:border-green-400 hover:text-green-400'>
                          <p className='text-xl'>E-mail</p>
                        </button>
                <button className='shadow-md m-1 h-16 border-solid border-2 border-white w-60 sm:w-72 hover:border-green-400 hover:text-green-400'>
                          <p className='text-xl'>LindedIn</p>
                        </button>
                <button className='shadow-md m-1 h-16 border-solid border-2 border-white w-60 sm:w-72 hover:border-green-400 hover:text-green-400'>
                          <p className='text-xl'>Github</p>
                        </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reach