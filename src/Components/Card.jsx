import React from 'react'

const Card = () => {
  return (
    <div className='w-full flex justify-start px-[63px] flex-col items-center mt-12 mb-12 flex-wrap'>
        <div className='mt-4 p-2 w-full flex items-center  justify-between'>
            <div>
                <img src="src/Imgs/dyplogo.png" alt="" className='me-2'/>
            </div>
            <div className="flex justify-around items-start flex-col  p-5 px-10 rounded-lg w-[80%] h-[400px] cards">
                <div className='bg-[#00072D] rounded-lg p-2'>
                    <h3 className='font-semibold text-3xl text-white'>Post-Graduation</h3>

                </div>
                <h4 className='font-medium text-2xl'>Institue</h4>
                <p className='text-xl'>Dr D Y Patil Institute of Management And Enterpreneur Developement</p>
                <h4 className='font-medium text-2xl'>Course</h4>
                <p className='text-xl'>Master Of Computer Application</p>
                <h4 className='font-medium text-2xl'>Duration</h4>
                <p className='text-xl'>2024-2026(OnGoing)</p>  
            </div>
        
        </div>
        <div className='mt-4 p-2 w-full flex items-center  justify-between'>
            <div>
                <img src="src/Imgs/logo.png" alt="" className='h-50 w-56 me-2'/>
            </div>
            <div className="flex justify-around items-start flex-col p-5 px-10 rounded-lg w-[80%] h-[400px] cards">
                <div className='bg-[#00072D] rounded-lg p-2'>
                    <h3 className='font-semibold text-3xl text-white'>Graduation</h3>

                </div>
                <h4 className='font-medium text-2xl'>Institue</h4>
                <p className='text-xl'>RAJASTHAN ARYA ARTS, SHRI MITHULALJI KACHOLIYA COMMERCE & SHRI SATYANARAYANJI RAMKRISHNAJI RATHI SCIENCE MAHAVIDYALAYA, WASHIM </p>
                <h4 className='font-medium text-2xl'>Course</h4>
                <p className='text-xl'>Bachelor Of Computer Application</p>
                <h4 className='font-medium text-2xl'>Duration</h4>
                <p className='text-xl'>2021-2024</p>  
            </div>
        
        </div>
    </div>
  )
}

export default Card