// import { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { useState } from 'react';

const Loader = () => {
    const [greet, setGreet] = useState(true);
    setTimeout(()=>{
        setGreet(false);
    }, 1700)

    

const greetVar = {
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        },
        exit: {
            scale: 0.8,
            opacity: 0,
            transition: {
                ease: [0.17, 0.67, 0.83, 0.67],
              delay: .3
            }
    }
}
        
    return (
        <div className='h-screen w-screen fixed z-[1] top-0 left-0 bg-slate-900'>
            <AnimatePresence>
        
           {greet && (<motion.h2
           key="greet"
             variants={greetVar}
             initial="hidden"
             animate="visible"
             exit="exit"
             className='text-white h-screen w-screen flex justify-center items-center text-[3rem] font-bold'>WELCOME</motion.h2>)}
            
        </AnimatePresence>
    </div>
    )
}
export default Loader