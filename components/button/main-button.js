import React from 'react'
import Link from 'next/link'

const MainButton = (props) => {
  return (
    <Link href={props.link} passHref>
    <button className='shadow-md bg-green-400 py-2 px-5 sm:px-10 uppercase font-medium rounded-[4px] hover:bg-green-400 text-black transform hover:scale-110 transition ease-out duration-300'>
        {props.text}
    </button>
  
    </Link>

  )
}

export default MainButton