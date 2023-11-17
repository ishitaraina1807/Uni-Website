import React from 'react'
import Image from 'next/image';
import stories1 from '../assets/stories1.svg'
import stories2 from '../assets/stories2.svg'

export default function Stories() {
    return (
      <div className="lg:mx-52 mx-20 mt-40">
        <h1 className='text-[#5252D4] text-4xl font-extrabold '>stories</h1>
        <div className="md:flex lg:justify-around md:justify-between">
{/* story 1 */}
<div className="flex flex-col items-center">
          <div className="bg-white rounded-full relative -mb-28 z-50">
            <Image src={stories1} alt="img" />
          </div>
          <div className="bg-gray-300 w-[384px] h-[362px] pb-8 px-8 relative pt-32">
            <div>
              <p className="text-center bt-smalltitle font-bold pb-6">Prof Mac Sandman</p>
              <p className="text-left text-lg font-normal bt-smalltext">
              Lorem ipsum dolor sit amet consectetur. Ac lacinia sed orci mollis quisque tristique. Fermentum egestas ipsum ut sit.
              </p>
            </div>
          </div>
        </div>
{/* story 2 */}
      <div className="flex flex-col items-center">
          <div className="bg-white rounded-full relative -mb-28 z-50">
            <Image src={stories2} alt="img" />
          </div>
          <div className="bg-gray-300 w-[384px] h-[362px] pb-8 px-8 relative pt-32">
            <div>
              <p className="text-center bt-smalltitle font-bold pb-6">Prof Mac Sandman</p>
              <p className="text-left text-lg font-normal bt-smalltext">
              Lorem ipsum dolor sit amet consectetur. Ac lacinia sed orci mollis quisque tristique. Fermentum egestas ipsum ut sit.
              </p>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    );
  }
  