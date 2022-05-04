import React from 'react'

const About = () => {
  return (
    <div className='h-full w-full bg-slate-900 text-white flex justify-center items-center'>
        <div className='container  mt-32 w-full  mx-auto flex justify-center items-center'>
            <div className='flex-col mb-32'>
                <div className='flex justify-center mb-12 text-4xl font-bold'>About</div>
                           <div className=' w-full max-w-6xl h-auto text-center md:text-center flex flex-col md:flex-row gap-12 justify-between'>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-3xl md:text-3xl font-bold md:text-left'>Quality is remembered  <br className='' /> long after price is forgotten</h3>
                            <figcaption>
                —Adlo Gucci
                {' '}
                          </figcaption>
                        </div>
                           <div className=' w-full p-4 md:w-1/2'>
                   <p className='text-justify text-1xl sm:p-hidden'>How do you develop a web application that customers would use every day?
                   I dedicated my time and curiosity to become front-end web developer and to
                   pursue the ever changing environment of the world wide web with this thought
                   in mind. With the help of CodeAcademy and online courses I have
                   gained experience in such technologies
                   as HTML, CSS, Javascript, React.js, Material-ui, Bootstrap, Redux, Node.js, Next.js, Tailwindcss and more.<br />
                   <br />
                   Aside from growing as a developer, on my free time I enjoy playing chess, video games and working out.<br /><br />
                
                I{`'`}m a life long learner and try to show my best performance towards specific tasks.
                 Throughout my prior journeys and jobs I also gained experience in 
                 communication and teamwork.</p>
                 <br />
                 <br />
                 
                
                 <div className='text-left'>
                     <button className='shadow-md bg-green-400 p-2 w-44 md:w-72 rounded-[4px] hover:bg-green-300'>
                          <p>Say Hello</p>
                        </button>
                 </div>
                           </div>
                           </div>
            </div>
        </div>
    </div>
  )
}

export default About