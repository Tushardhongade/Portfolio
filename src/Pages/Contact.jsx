import React from 'react'
import Footer from '../Components/Footer'
const Contact = () => {
  return (
    <div>
      <div className='w-full flex justify-around items-center'>
        <div className='w-[500px] h-[450px] bg-[#D6EBF5] rounded-[50%] overflow-hidden'>
          <img src="" alt="" />

        </div>
          <div className='w-[500px] h-[400px] flex justify-center items-center flex-col p-4'>
            <div className='flex justify-center items-center flex-col'>
               <h2 className='text-5xl font-semibold mt-2 '>Contact</h2>
            </div>
            <p className='mt-12 text-xl'>I am available on social media. You can message me, I will reply within 24 hours. I can help you with React.</p>
            <a href="https://drive.google.com/file/d/1PGX2IK4pZONVmOqmj6h4dVX3LYPH2vtb/view?usp=drive_link">
              <button class=" mt-4 flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
               
                See My Resume
              </button>
            </a>
            
        </div>
      </div>
      <div className='w-full h-[100vh] flex justify-around items-center mt-2'>
      <div className='w-[500px] h-[400px] flex justify-center items-center flex-col p-4'>
            <div className='flex justify-center items-center flex-col'>
               <h2 className='text-5xl font-semibold mt-2 '>Address</h2>
            </div>
            <p className='mt-12 text-xl'>Nalanda Nagar,Washim,Maharashtra. 444505</p>
            <a href="#">
              <button class=" mt-4 flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
               
                See On Google Map
              </button>
            </a>
        </div>
        <div className='w-[500px] h-[450px] bg-[#D6EBF5] rounded-[50%] overflow-hidden '>
            <h1>Contact</h1>
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Contact