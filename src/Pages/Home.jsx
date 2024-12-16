import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <>

    {/* Main Home content */}
    <div className='w-full flex justify-between items-center px-20'>
        <div className='w-[50%] flex flex-col justify-center items-start pe-16 ps-6 '>
          <h1 className='text-5xl mb-4 font-semibold '>Tushar Dhongade</h1>
          <p className='text-2xl text-[#8391AD] leading-'>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
          <div className='flex gap-6  mt-6'>
            <a href="https://github.com/Tushardhongade/" ><img className='rounded-[50%]' src="https://github.com/Tushardhongade/Portfolio/tree/main/src/Imgs/icons/github.png" height='50px' width='50px' alt="Profile" /></a>
            <a href="https://www.linkedin.com/in/tushar-dhongade-4ba929312/" ><img className='rounded-[50%]' src="https://github.com/Tushardhongade/Portfolio/tree/main/src/Imgs/icons/linkedin.webp" height='50px' width='50px' alt="Profile" /></a>
            <a href="https://www.youtube.com/channel/UC1yYU_kyaenJRkmvSPXambw" ><img className='rounded-[50%] bg-[#FF0000]' src="https://github.com/Tushardhongade/Portfolio/tree/main/src/Imgs/icons/youtube.png" height='50px' width='50px' alt="Profile" /></a>
            <a href="mailto:tushardhongade615@gmail.com" ><img className='rounded-[50%]' src="https://github.com/Tushardhongade/Portfolio/tree/main/src/Imgs/icons/gmail.png" height='50px' width='50px' alt="Profile" /></a>
            <a href="https://www.instagram.com/tusha_r9__7___3/" ><img className='rounded-[50%]' src="https://github.com/Tushardhongade/Portfolio/tree/main/src/Imgs/icons/insta.webp" height='50px' width='50px' alt="Profile" /></a>
          </div>
          <button className='bg-[#00072D] text-white rounded-md px-6 py-2 mt-8 text-xl'>
          ⭐ Star Me On Github
          </button>
        </div>
        <div className='w-[50%] '>
          <img src="https://github.com/Tushardhongade/Portfolio/tree/main/src/Imgs/feeling_proud.svg" height='900px' width='900px' alt="Profile" />
        </div>
        

    </div>
    <div className='flex flex-col justify-center items-center px-20'>
      <h2 className='text-5xl font-semibold mt-32'>What I Do ?</h2>
      <div className='flex justify-between items-center mt-20  w-full h-[100vh]'>

        <div className='w-[50%] '>
          <img src="https://github.com/Tushardhongade/Portfolio/tree/main/src/Imgs/Frontend.png" height='500px' width='500px' alt="Profile" />
        </div>


        <div className='w-[50%]  flex flex-col items-start justify-start'>
          <h3 className='text-4xl font-normal ' >Frontend Developer</h3>
          <div>
            <div className='flex gap-4 mt-6'>
              <img className="rounded-[50%]" src="https://github.com/Tushardhongade/Portfolio/tree/main/src/Imgs/icons/html.png" height='70px' width='70px' alt="" />
              <img src="https://github.com/Tushardhongade/Portfolio/tree/main/src/Imgs/icons/css.png" height='70px' width='70px' alt="Profile" />
              <img src="https://github.com/Tushardhongade/Portfolio/tree/main/src/Imgs/icons/js.png" height='70px' width='70px' alt="Profile" />
              <img src="https://github.com/Tushardhongade/Portfolio/tree/main/src/Imgs/icons/bootstrap.png" height='70px' width='70px' alt="Profile" />
              <img src="https://github.com/Tushardhongade/Portfolio/tree/main/src/Imgs/icons/React.png" height='70px' width='70px' alt="Profile" />
              
            </div>
          </div>
          <div className='mt-20'>
           <ul className=''>
            <li className='text-xl text-[#8391AD] leading-10'>⚡ Building responsive website front end using React-Redux</li>
           </ul>
          </div>
          




        </div>
      </div>
    </div>
    

    {/* Footer section */}
    <Footer />
    </>
  )
}

export default Home