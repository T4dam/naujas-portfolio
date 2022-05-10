// import { useState } from 'react';
import Link from 'next/link';

const ScreenDrop = (props) => {
    // const [open, setOpen ]= useState(false)
    // const handleOpen = () => {
    //     if (open=== false) {
    //         setOpen(props)
    //     }
    // }
  return (
    <div className='h-[100%] w-[100%] fixed z-[1] top-0 left-0 bg-slate-900 overflow-y-hidden transition duration-700'>
    <div className='flex flex-col relative top-[25%] w-[100%] text-center mt-[30px]'>
      <Link href={'/home'}><a>Home</a></Link>
      <Link href={'/resume'}><a>Resume</a></Link>
      <Link href={'/portfolio'}><a>Portfolio</a></Link>
    </div>
  </div>
  )
}

export default ScreenDrop