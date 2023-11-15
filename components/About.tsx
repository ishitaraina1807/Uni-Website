import React from 'react'
import Image from 'next/image';
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'

export default function About() {
  return (
    <div className='ml-52'>
      <h1 className='text-[#5252D4] text-4xl font-extrabold mt-10'>about us</h1>
      <p className='mt-4 text-black text-lg font-medium w-1/2'>Lorem ipsum dolor sit amet consectetur. Eget nunc etiam morbi aliquet platea felis. Dolor consectetur fames justo vestibulum. Elit sodales nam malesuada volutpat. Fames lectus sapien vitae pellentesque at enim odio.</p>
      <div className="flex my-4 gap-8">
        <div>
          <Image src={about1} alt="about" />
          <p className='text-black text-base font-medium mt-4 w-[540px]'>Lorem ipsum dolor sit amet consectetur. Ac lacinia sed orci mollis quisque tristique. Fermentum egestas ipsum ut sit.</p>
        </div>
        <div>
          <Image src={about2} alt="about" />
          <p className='text-black text-base font-medium mt-4 w-[540px]'>Lorem ipsum dolor sit amet consectetur. Ac lacinia sed orci mollis quisque tristique. Fermentum egestas ipsum ut sit.</p>
        </div>
      </div>
    </div>
  )
}
