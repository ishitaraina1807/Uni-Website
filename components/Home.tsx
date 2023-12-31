import Image from 'next/image';
import homeImage from '../assets/home.png';

export default function Home() {
  return (
    <div className='lg:flex '>
      <div style={{ position: 'relative', width: '100%', height: '676px' }} className='lg:ml-52 my-10 sm:mx-0'>
        <Image className='rounded-2xl' src={homeImage} alt="Home" layout="fill" objectFit="cover" />
        <div className="absolute lg:top-1/2 lg:left-1/3 top-1/2 left-1/3 transform translate-x-[-50%] -translate-y-1/2 text-white text-left">
          <h1 className='text-3xl font-bold'>FOSTERING POSITIVE CHANGE</h1>
          <p className='mt-10 font-semibold'>At IE University, we seek to foster positive change <br /> through education, research, and innovation.</p>
          <div className="flex items-center mt-10">
            <button className='bg-white text-black font-bold py-2 px-4 rounded-full'>APPLY</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
              <path d="M7.70833 4.625C6.02319 4.625 4.625 6.02319 4.625 7.70833V29.2917C4.625 30.9768 6.02319 32.375 7.70833 32.375H29.2917C30.9768 32.375 32.375 30.9768 32.375 29.2917V18.5H29.2917V29.2917H7.70833V7.70833H18.5V4.625H7.70833ZM21.5833 4.625V7.70833H27.1117L12.785 22.035L14.965 24.215L29.2917 9.88835V15.4167H32.375V4.625H21.5833Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <div className='flex lg:flex-col md:flex-row gap-4 items-center lg:mt-60 md:mt-20 lg:mr-20 ml-10'>
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M33.6666 16.9999C33.6666 7.79992 26.2 0.333252 17 0.333252C7.79998 0.333252 0.333313 7.79992 0.333313 16.9999C0.333313 25.0666 6.06665 31.7833 13.6666 33.3332V21.9999H10.3333V16.9999H13.6666V12.8333C13.6666 9.61658 16.2833 6.99992 19.5 6.99992H23.6666V11.9999H20.3333C19.4166 11.9999 18.6666 12.7499 18.6666 13.6666V16.9999H23.6666V21.9999H18.6666V33.5833C27.0833 32.7499 33.6666 25.6499 33.6666 16.9999Z" fill="black" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M13.3333 5C8.73167 5 5 8.73167 5 13.3333V26.6667C5 31.2683 8.73167 35 13.3333 35H26.6667C31.2683 35 35 31.2683 35 26.6667V13.3333C35 8.73167 31.2683 5 26.6667 5H13.3333ZM30 8.33333C30.92 8.33333 31.6667 9.08 31.6667 10C31.6667 10.92 30.92 11.6667 30 11.6667C29.08 11.6667 28.3333 10.92 28.3333 10C28.3333 9.08 29.08 8.33333 30 8.33333ZM20 11.6667C24.6017 11.6667 28.3333 15.3983 28.3333 20C28.3333 24.6017 24.6017 28.3333 20 28.3333C15.3983 28.3333 11.6667 24.6017 11.6667 20C11.6667 15.3983 15.3983 11.6667 20 11.6667ZM20 15C18.6739 15 17.4021 15.5268 16.4645 16.4645C15.5268 17.4021 15 18.6739 15 20C15 21.3261 15.5268 22.5979 16.4645 23.5355C17.4021 24.4732 18.6739 25 20 25C21.3261 25 22.5979 24.4732 23.5355 23.5355C24.4732 22.5979 25 21.3261 25 20C25 18.6739 24.4732 17.4021 23.5355 16.4645C22.5979 15.5268 21.3261 15 20 15Z" fill="black" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M31.6667 5H8.33333C6.49167 5 5 6.49167 5 8.33333V31.6667C5 33.5083 6.49167 35 8.33333 35H31.6667C33.5083 35 35 33.5083 35 31.6667V8.33333C35 6.49167 33.5083 5 31.6667 5ZM15 28.3333H10.795V16.6667H15V28.3333ZM12.8233 14.5283C11.5383 14.5283 10.68 13.6717 10.68 12.5283C10.68 11.385 11.5367 10.5283 12.965 10.5283C14.25 10.5283 15.1083 11.385 15.1083 12.5283C15.1083 13.6717 14.2517 14.5283 12.8233 14.5283ZM30 28.3333H25.93V21.9567C25.93 20.1933 24.845 19.7867 24.4383 19.7867C24.0317 19.7867 22.675 20.0583 22.675 21.9567C22.675 22.2283 22.675 28.3333 22.675 28.3333H18.47V16.6667H22.675V18.295C23.2167 17.345 24.3017 16.6667 26.3367 16.6667C28.3717 16.6667 30 18.295 30 21.9567V28.3333Z" fill="black" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M16.755 13.3133L26.14 26.6867H23.645L14.2767 13.3133H16.755ZM35 10V30C35 32.7617 32.7617 35 30 35H10C7.23833 35 5 32.7617 5 30V10C5 7.23833 7.23833 5 10 5H30C32.7617 5 35 7.23833 35 10ZM29.23 28.3333L22.2533 18.35L27.9567 11.6667H25.7717L21.265 16.9333L17.5867 11.6667H11.17L17.7383 21.055L11.51 28.3333H13.7317L18.7333 22.4733L22.83 28.3333H29.23Z" fill="black" />
        </svg>
      </div>
    </div>
  );
}
