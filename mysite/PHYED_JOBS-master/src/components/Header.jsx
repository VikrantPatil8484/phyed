import React, { useState, useEffect, useRef } from 'react';
import Toggle from './Toggle';
import { Link } from 'react-router-dom';
import PhyedLogo from  '../assests/phyed.png'
import { FaSearch } from 'react-icons/fa';

const Header = () => {

  // let menuRef = useRef();

  // useEffect(() => {
    //     if(!menuRef.current.contains(e.target)) {
    //   document.addEventListener('mousedown', (e) => {
  //       // setShowCourse(false);
  //     }
  //   })
  // })

  return (
    <div >
      <section  className={`flex items-center  w-full  justify-between text-color-mode p-4 bg-blue-400 dark:bg-slate-800 shadow-xl`}>
        <div className='flex items-center'>
          {/* <Link to='/'>
          </Link> */}
          <a href="/home/"><img src={PhyedLogo} alt="" className='h-10 mx-4'/></a>
            <a href="/home/" style={{ fontWeight: 'bold', color: 'white' }}>Dashboard</a>
          {/* <div className='flex items-center h-8 px-2 border rounded-lg'>
            <FaSearch />
            <input type="text" className='ml-2 bg-inherit outline-none placeholder-gray-300 ' placeholder='Search Jobs'/>
          </div> */}
        </div>
        <Toggle />
      </section>
    </div>
  )
}

export default Header