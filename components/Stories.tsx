import React from 'react'
import Image from 'next/image';
import stories1 from '../assets/stories1.svg'
import stories2 from '../assets/stories2.svg'

export default function Stories() {
  return (
    <div className='mx-52'>
      <h1 className='text-[#5252D4] text-4xl font-extrabold mt-40'>stories</h1>
      <div className="flex">
        <div>
        <Image src={stories1} alt="faculty" />
        <div className="w-[384px] h-[362px] flex-shrink-0 bg-gray-300">
        <p className='text-sm text-center font-semibold mt-4'>Prof Mac Sandman</p>
        </div>
        </div>
      </div>
    </div>
  )
}
