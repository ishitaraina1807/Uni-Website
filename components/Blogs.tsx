import React from 'react';
import Image from 'next/image';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';

export default function Blogs() {
  return (
    <div className='lg:mx-52 mx-4 mt-10 lg:mt-40 xs:mx-0'>
      <h1 className='text-[#5252D4] text-4xl font-extrabold mt-10 mb-6 lg:mb-10'>blogs</h1>
      <div className="lg:max-w-[1120px] lg:mx-auto p-4 lg:p-0 flex-shrink-0 bg-gray-200 lg:flex justify-around items-center lg:space-x-8 lg:py-10 lg:px-6 lg:gap-4 lg:rounded-md mt-6 lg:mt-10">
        {/* Blog 1 */}
        <div className="lg:w-[576px] lg:h-[368px] flex-shrink-0 rounded-md bg-gray-300">
          <Image src={blog1} alt="blog1" layout="responsive" width={576} height={368} />
          <p className='p-4 lg:p-6 text-base lg:text-lg font-semibold'>
            Lorem ipsum dolor sit amet consectetur. Ac lacinia sed orci mollis quisque tristique. Fermentum egestas ipsum ut sit.
          </p>
        </div>

        {/* Blog 2 and 3 */}
        <div className='flex flex-col gap-6 lg:gap-2 lg:w-full lg:max-w-[320px]'>
          <div className="w-full lg:w-[320px] lg:h-[208px] flex-shrink-0 rounded-md bg-gray-300">
            <Image src={blog2} alt="blog2" layout="responsive" width={320} height={208} />
            <p className='p-2 lg:p-4 text-xs font-semibold'>
              Lorem ipsum dolor sit amet consectetur. Ac lacinia sed orci mollis quisque tristique. Fermentum egestas ipsum ut sit.
            </p>
          </div>
          <div className="w-full lg:w-[320px] lg:h-[208px] flex-shrink-0 rounded-md bg-gray-300">
            <Image src={blog2} alt="blog2" layout="responsive" width={320} height={208} />
            <p className='p-2 lg:p-4 text-xs font-semibold'>
              Lorem ipsum dolor sit amet consectetur. Ac lacinia sed orci mollis quisque tristique. Fermentum egestas ipsum ut sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
