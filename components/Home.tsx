import Image from 'next/image';
import homeImage from '../assets/home.png';

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '1100px', height: '676px' }} className='m-auto mt-10'>
      <Image className='rounded-2xl' src={homeImage} alt="Home" layout="fill" objectFit="cover" />
      <div style={{ position: 'absolute', top: '45%', left: '27%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'left' }}>
        <h1 className='text-3xl font-bold'>FOSTERING POSITIVE CHANGE</h1>
        <p className='mt-10 font-semibold'>At IE University, we seek to foster positive change <br /> through education, research, and innovation.</p>
        <div className="flex items-center mt-10 ">
          <button className='bg-white text-black font-bold py-2 px-4 rounded-full'>APPLY</button>
          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
            <path d="M7.70833 4.625C6.02319 4.625 4.625 6.02319 4.625 7.70833V29.2917C4.625 30.9768 6.02319 32.375 7.70833 32.375H29.2917C30.9768 32.375 32.375 30.9768 32.375 29.2917V18.5H29.2917V29.2917H7.70833V7.70833H18.5V4.625H7.70833ZM21.5833 4.625V7.70833H27.1117L12.785 22.035L14.965 24.215L29.2917 9.88835V15.4167H32.375V4.625H21.5833Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}
