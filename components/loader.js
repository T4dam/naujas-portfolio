// import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {motion} from 'framer-motion';

const Loader = () => {

    return (
        <div className='h-screen w-screen fixed z-[1] top-0 left-0 bg-slate-900'>
        <p className='text-white'>Welcome</p>
    </div>
    )
    }
export default Loader