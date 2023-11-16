import React from 'react'
import Image from 'next/image';
import stories1 from '../assets/stories1.svg'
import stories2 from '../assets/stories2.svg'

export default function Stories() {
    return (
      <div className="mx-52 mt-40">
        <h1 className='text-[#5252D4] text-4xl font-extrabold '>stories</h1>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full relative -mb-28 z-50">
            <Image src={stories1} alt="img" />
          </div>
  
          <div className="bg-gray-200 shadow-2xl rounded-xl w-96 h-96 pb-8 px-8 relative pt-24">
            <div>
              <p className="text-center bt-smalltitle font-bold pb-4">Name Surname</p>
  
              <p className="text-center bt-smalltext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum placeat
                aperiam tempora.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  