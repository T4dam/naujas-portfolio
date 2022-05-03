import React from 'react'

const About = () => {
  return (
    <div className='h-screen bg-slate-900 text-white'>
        <div className='container w-full bg-yellow-300 mx-auto'>
           <div className='bg-red-300 w-full h-auto text-center md:text-center flex flex-col md:flex-row justify-between'>
                    <div className='w-full md:w-1/2'>
                        <h3 className='text-3xl md:text-5xl font-bold md:text-left'>Quality is remembered long after price is forgotten</h3>
                        <figcaption>
            —Adlo Gucci
            {' '}
          </figcaption>
                    </div>
           <div className='bg-red-400 w-full md:w-1/2'>
               <p className='text-justify text-2xl'>How do you develop a web application that customers would use every day? 
               I dedicated my time and curiosity to become front-end web developer and to 
               pursue the ever changing environment of the world wide web with this thought
               in mind. With the help of CodeAcademy and online courses I have
               gained experience in such technologies
               as HTML, CSS, Javascript, React.js, Material-ui, Bootstrap, Redux, Node.js and more.<br />
               <br />
               Aside from growing as a developer, on my free time I enjoy playing chess, video games and working out.<br /><br />

I'm a life long learner and try to show my best performance towards specific tasks.
 Throughout my prior journeys and jobs I also gained experience in 
 communication and teamwork.</p>
 <br />
 <br />
 


           </div>
           </div>
        </div>
    </div>
  )
}

export default About