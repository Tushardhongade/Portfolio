import React from 'react'
import Footer from '../Components/Footer'
import ProjCard from '../Components/ProjCard'

const Projects = () => {
  return (
   <>
    <div className='flex justify-center items-center flex-col'>
       <h2 className='text-5xl font-semibold mb-12'>Projects</h2>
       <div className='w-full '>
        <div className='p-4 flex justify-around flex-wrap'>
          <ProjCard/>
        
        </div>
        
       </div>
    </div>
    <Footer/>
   </>
  )
}

export default Projects