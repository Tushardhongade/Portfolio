import React from 'react';
import { NavLink } from 'react-router-dom';
// @media (min-width: 48em) {
//   .header li {
//     float: left;
//   }
//   .header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//   }
//   .header .menu {
//     max-height: none;
//   }
//   .header .menu-icon {
//     display: none;
//   }
// }
// @media (max-width: 960px) and (min-width: 768px) {
//   .header {
//     font-size: 12px;
//   }
// }
const Header = () => {
  return (
    <div className='h-[100px] w-full flex justify-between items-center px-20 py-4 mb-12'>
      <div className='text-5xl logo'>
      &lt;
        Tushar Dhongade
      /&gt;
      </div>

      <div className='flex justify-around items-center gap-[2vw] me-3'>
        <NavLink 
          to="/home" 
          className={({ isActive }) => 
            `p-2 text-xl font-normal ${isActive ? 'font-semibold' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/education" 
          className={({ isActive }) => 
            `p-2 text-xl font-normal ${isActive ? 'font-semibold' : ''}`
          }
        >
          Education
        </NavLink>
        <NavLink 
          to="/experience" 
          className={({ isActive }) => 
            `p-2 text-xl font-normal ${isActive ? 'font-semibold ' : ''}`
          }
        >
          Experience
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            `p-2 text-xl font-normal ${isActive ? 'font-semibold' : ''}`
          }
        >
          Projects
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `p-2 text-xl font-normal ${isActive ? 'font-semibold' : ''}`
          }
        >
          Contact Me
        </NavLink>
      </div>
    </div>
  );
}

export default Header;