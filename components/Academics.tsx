import React from 'react'
import Image from 'next/image';
import faculty1 from '../assets/faculty1.png'
import faculty2 from '../assets/faculty2.png'
import faculty3 from '../assets/faculty3.png'

export default function Academics() {
  return (
    <div className='lg:mx-52 mx-10 xs:mx-0'>
      <h1 className='text-[#5252D4] text-4xl font-extrabold mt-10'>academics</h1>
      <p className='text-black text-lg font-bold uppercase mt-10'>Credit system</p>
      <p className='mt-4 mr-40 text-black text-lg font-medium w-full'>Lorem ipsum dolor sit amet consectetur. Eget nunc etiam morbi aliquet platea felis. Dolor consectetur fames justo vestibulum. Elit sodales nam malesuada volutpat. Fames lectus sapien vitae pellentesque at enim odio.</p>
      <p className='text-black text-lg font-bold uppercase mt-10'>Our faculty</p>
      <div className="md:flex mt-10 justify-between">
        <div>
        <Image src={faculty1} alt="faculty" />
        <p className='text-sm text-center font-semibold mt-4'>Prof Mac Sandman</p>
        </div>
        <div>
        <Image src={faculty2} alt="faculty" />
        <p className='text-sm text-center font-semibold mt-4'>Prof Mac Sandman</p>
        </div>
        <div>
        <Image src={faculty3} alt="faculty" />
        <p className='text-sm text-center font-semibold mt-4'>Prof Mac Sandman</p>
        </div>
      </div>
      <button className='rounded-lg bg-[#5252D4] text-white py-1 px-2 font-semibold mt-20'>know more</button>
    </div>
  )
}
