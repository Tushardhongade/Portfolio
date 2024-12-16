import React from 'react'
import Card from '../Components/Card'
import Certificates from '../Components/Certificates'
import Footer from '../Components/Footer'


const Education = () => {
  return (
    <>
    <div className='flex justify-center items-center flex-col'>
      <h2 className='text-5xl font-semibold '>DEGREE</h2>
      <div className='w-full '>
        <Card/>
        
      </div>
      <h2 className='text-5xl font-semibold '>CERTIFICATIONS</h2>
      <div className='w-full '>
        <Certificates/>
        
      </div>        
    
    </div>
    <Footer/>
    </>
  )
}

export default Education