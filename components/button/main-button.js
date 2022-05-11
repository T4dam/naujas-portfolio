import React from 'react'
import Link from 'next/link'

const MainButton = (props) => {
  return (
    <Link href={props.link} passHref>
    <button className='shadow-md bg-green-400 p-2 w-44 md:w-72 rounded-[4px] hover:bg-green-400 text-black'>
        {props.text}
    </button>
  
    </Link>

  )
}

export default MainButton