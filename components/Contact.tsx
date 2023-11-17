import React from 'react'

export default function Contact() {
    return (
        <div className='mx-52 lg:flex mt-40 mb-10 justify-between'>
            <div>
                <h1 className='text-[#5252D4] text-4xl font-extrabold '>contact</h1>
                <div className='font-semibold mt-40 leading-loose'>
                    <p>(213) 444-8997</p>
                    <p>1(866) 901-9729 (FAX)</p>
                    <p>office@laskillsacademy.com</p>
                </div>
            </div>
            <div className="w-[1px] h-[550px] flex-shrink-0 bg-indigo-600 lg:block hidden"></div>
            <div>
                <h1 className='text-black text-3xl font-bold mt-10'>Tell Us About Yourself</h1>
                <div className="flex gap-10">
                    <div className='font-semibold mt-10 leading-15'>
                        <p>Name</p>
                        <div className="w-[200px] h-[1px] flex-shrink-0 bg-indigo-600"></div>
                        <p>Phone</p>
                        <div className="w-[200px] h-[1px] flex-shrink-0 bg-indigo-600"></div>
                    </div>
                    <div className='font-semibold mt-10 leading-15'>
                        <p>Email</p>
                        <div className="w-[200px] h-[1px] flex-shrink-0 bg-indigo-600"></div>
                        <p>Zipcode</p>
                        <div className="w-[200px] h-[1px] flex-shrink-0 bg-indigo-600"></div>
                    </div>
                </div>
                <p className='text-black text-base font-semibold mt-10'>I am interested in</p>
                <div className="mt-8 flex flex-col gap-2">
                <div className='flex gap-6 ml-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H19C20.3807 0.5 21.5 1.61929 21.5 3V19C21.5 20.3807 20.3807 21.5 19 21.5H3C1.61929 21.5 0.5 20.3807 0.5 19V3Z" stroke="#5F6EEE" />
                        <path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H19C20.3807 0.5 21.5 1.61929 21.5 3V19C21.5 20.3807 20.3807 21.5 19 21.5H3C1.61929 21.5 0.5 20.3807 0.5 19V3Z" stroke="#5F6EEE" />
                        <path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H19C20.3807 0.5 21.5 1.61929 21.5 3V19C21.5 20.3807 20.3807 21.5 19 21.5H3C1.61929 21.5 0.5 20.3807 0.5 19V3Z" stroke="#5F6EEE" />
                    </svg>
                    <p className='text-black text-base font-semibold'>Chemistry</p>
                </div>
                <div className='flex gap-6 ml-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H19C20.3807 0.5 21.5 1.61929 21.5 3V19C21.5 20.3807 20.3807 21.5 19 21.5H3C1.61929 21.5 0.5 20.3807 0.5 19V3Z" stroke="#5F6EEE" />
                        <path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H19C20.3807 0.5 21.5 1.61929 21.5 3V19C21.5 20.3807 20.3807 21.5 19 21.5H3C1.61929 21.5 0.5 20.3807 0.5 19V3Z" stroke="#5F6EEE" />
                        <path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H19C20.3807 0.5 21.5 1.61929 21.5 3V19C21.5 20.3807 20.3807 21.5 19 21.5H3C1.61929 21.5 0.5 20.3807 0.5 19V3Z" stroke="#5F6EEE" />
                    </svg>
                    <p className='text-black text-base font-semibold'>Maths</p>
                </div>
                <div className='flex gap-6 ml-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H19C20.3807 0.5 21.5 1.61929 21.5 3V19C21.5 20.3807 20.3807 21.5 19 21.5H3C1.61929 21.5 0.5 20.3807 0.5 19V3Z" stroke="#5F6EEE" />
                        <path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H19C20.3807 0.5 21.5 1.61929 21.5 3V19C21.5 20.3807 20.3807 21.5 19 21.5H3C1.61929 21.5 0.5 20.3807 0.5 19V3Z" stroke="#5F6EEE" />
                        <path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H19C20.3807 0.5 21.5 1.61929 21.5 3V19C21.5 20.3807 20.3807 21.5 19 21.5H3C1.61929 21.5 0.5 20.3807 0.5 19V3Z" stroke="#5F6EEE" />
                    </svg>
                    <p className='text-black text-base font-semibold'>Physics</p>
                </div>
                <div className='flex gap-6 ml-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H19C20.3807 0.5 21.5 1.61929 21.5 3V19C21.5 20.3807 20.3807 21.5 19 21.5H3C1.61929 21.5 0.5 20.3807 0.5 19V3Z" stroke="#5F6EEE" />
                        <path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H19C20.3807 0.5 21.5 1.61929 21.5 3V19C21.5 20.3807 20.3807 21.5 19 21.5H3C1.61929 21.5 0.5 20.3807 0.5 19V3Z" stroke="#5F6EEE" />
                        <path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H19C20.3807 0.5 21.5 1.61929 21.5 3V19C21.5 20.3807 20.3807 21.5 19 21.5H3C1.61929 21.5 0.5 20.3807 0.5 19V3Z" stroke="#5F6EEE" />
                    </svg>
                    <p className='text-black text-base font-semibold'>JEE Package</p>
                </div>
                </div>
                <button className='rounded-full text-sm shadow-lg bg-[#5252D4] text-white py-2 px-4 font-semibold mt-4'>Submit</button>
            </div>
        </div>
    )
}
