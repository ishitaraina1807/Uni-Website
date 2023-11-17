'use client'
import React, { useState } from 'react';


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-[#5252D4] w-full h-12 flex lg:justify-around items-center text-white font-montserrat text-base font-normal leading-normal relative'>  
     
      <div className='w-36 h-16 flex-shrink-0 rounded-b-lg bg-gray-200 flex justify-center items-center'>
        <h1 className="text-[#5252D4] font-montserrat text-2xl font-bold leading-[1.309] tracking-[0.48] uppercase">UNI</h1>
        </div>
        <div className={`lg:flex text-white lg:flex-row lg:justify-around lg:space-x-4 absolute left-0 right-0 bg-[#5252D4] lg:bg- z-50 ${isOpen ? 'flex flex-col' : 'hidden'} lg:relative lg:flex-row lg:visible`}>
        <p className='lg:py-0 py-2 lg:px-0 px-4 text-center lg:text-left'>home</p>
        <p className='lg:py-0 py-2 lg:px-0 px-4 text-center lg:text-left'>about us</p>
        <p className='lg:py-0 py-2 lg:px-0 px-4 text-center lg:text-left'>academics</p>
        <p className='lg:py-0 py-2 lg:px-0 px-4 text-center lg:text-left'>programs</p>
        <p className='lg:py-0 py-2 lg:px-0 px-4 text-center lg:text-left'>stories</p>
        <p className='lg:py-0 py-2 lg:px-0 px-4 text-center lg:text-left'>blogs</p>
        <p className='lg:py-0 py-2 lg:px-0 px-4 text-center lg:text-left'>contact us</p>
      </div>
      <div className='lg:hidden absolute top-3 right-3' onClick={toggleMenu}>
        <svg
          className='w-6 h-6 cursor-pointer'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          {isOpen ? (
            <path d='M6 18L18 6M6 6l12 12' />
          ) : (
            <path d='M4 6h16M4 12h16m-7 6h7' />
          )}
        </svg>
      </div>
    </div>
  );
}
