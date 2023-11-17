import React from 'react'
import Image from 'next/image';
import faculty from '../assets/faculty.png'
import event1 from '../assets/event1.png'
import event2 from '../assets/event2.png'

export default function EventPage() {
    return (
        <div className='lg:mx-52 mx-20 my-24'>
        <div className='lg:flex lg:gap-20'>
            <div>
                <h1 className='text-black text-lg font-semibold uppercase mb-10'>What our faculty says</h1>
                <div className='lg:w-[640px] lg:h-[304px] xl:w-[640px] xl:h-[304px]  w-[440px] h-[304px] flex-shrink-0 bg-[#cfcff3]'>
                    <div className="flex">
                        <Image src={faculty} alt="about" />
                        <div>
                            <p className='text-black lg:mt-16 mt-4 text-lg font-semibold'>“Just one small positive thought in the morning can change your whole day".</p>
                            <div className="flex items-center">
                                <div className="w-[64px] h-[1px] bg-black mx-1"></div>
                                <p className='font-semibold text-sm'>Prof Mac Sandman</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-black text-lg font-semibold uppercase mb-10 lg:mt-0 mt-10'>Upcoming events</h1>
                <div className='flex gap-3 items-center'>
                    <div className="w-[96px] h-[78px] bg-red-500 text-white font-bold flex flex-col items-center justify-center">
                        <h1 className='text-4xl'>21</h1>
                        <h2>JUNE</h2>
                    </div>
                    <div>
                    <h1 className='text-black text-base font-bold uppercase'>celebration of yoda day</h1>
                    <p className='font-semibold underline text-sm'>know more</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className="w-[96px] h-[78px] bg-red-500 text-white font-bold flex flex-col items-center justify-center">
                        <h1 className='text-4xl'>21</h1>
                        <h2>JUNE</h2>
                    </div>
                    <div>
                    <h1 className='text-black text-base font-bold uppercase'>celebration of yoda day</h1>
                    <p className='font-semibold underline text-sm'>know more</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className="w-[96px] h-[78px] bg-red-500 text-white font-bold flex flex-col items-center justify-center">
                        <h1 className='text-4xl'>21</h1>
                        <h2>JUNE</h2>
                    </div>
                    <div>
                    <h1 className='text-black text-base font-bold uppercase'>celebration of yoda day</h1>
                    <p className='font-semibold underline text-sm'>know more</p>
                    </div>
                </div>
            </div>
        </div>
        <h1 className='text-black text-lg font-semibold uppercase mt-20 mb-10'>Sneak Peak at cultural events</h1>  
        <div className="lg:flex justify-around">
        <Image  className='mb-5 lg:mb-0' src={event1} alt="about" />
        <Image src={event2} alt="about" />
        </div>  
        </div>
    )
}
