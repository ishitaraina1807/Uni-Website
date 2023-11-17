import React from 'react'

export default function NavBar() {
  return (
    <div className='bg-[#5252D4] w-full h-12 flex lg:justify-around items-center text-white font-montserrat text-base font-normal leading-normal' >
      <div className='w-36 h-16 flex-shrink-0 rounded-b-lg bg-gray-200  flex justify-center items-center'>
         <h1 className="text-[#5252D4] font-montserrat text-2xl font-bold leading-[1.309] tracking-[0.48] uppercase">UNI</h1>
      </div>
      <p>home</p>
      <p>about us</p>
      <p>academics</p>
      <p>programs</p>
      <p>stories</p>
      <p>blogs</p>
      <p>contact us</p>
    </div>
  )
}
