import React from 'react'
import Image from 'next/image';
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'

export default function Blogs() {
  return (
    <div className='lg:mx-52 mx-20 mt-40'>
      <h1 className='text-[#5252D4] text-4xl font-extrabold mt-10'>blogs</h1>
      <div className="lg:w-[1120px] lg:-[488px] p-10 lg:p-0 flex-shrink-0 bg-gray-200 lg:flex justify-around items-center mt-10">
        {/* blog1 */}
      <div className="lg:w-[576px] lg:h-[368px] flex-shrink-0 rounded-md bg-gray-300">
      <Image src={blog1} alt="faculty" />
      <p className='m-4 mr-20 text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur. Ac lacinia sed orci mollis quisque tristique. Fermentum egestas ipsum ut sit.</p>
      </div>
        {/* blog2 and 3*/}
        <div className='flex flex-col gap-4'>
        <div className="w-[320px] h-[208px] flex-shrink-0 rounded-md bg-gray-300">
        <Image src={blog2} alt="faculty" />
        <p className='m-2 mr-10 text-xs font-semibold'>Lorem ipsum dolor sit amet consectetur. Ac lacinia sed orci mollis quisque tristique. Fermentum egestas ipsum ut sit.</p>
        </div>
        <div className="w-[320px] h-[208px] flex-shrink-0 rounded-md bg-gray-300">
        <Image src={blog2} alt="faculty" />
        <p className='m-2 mr-10 text-xs font-semibold'>Lorem ipsum dolor sit amet consectetur. Ac lacinia sed orci mollis quisque tristique. Fermentum egestas ipsum ut sit.</p>
        </div>
      </div>
    </div>
    </div>
  )
}
