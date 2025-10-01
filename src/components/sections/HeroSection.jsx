import React from 'react'
import HeroImg from '../../assets/images/hero.png'
import ButtonArrow from '../../assets/svgs/svg-image-4.svg'

const HeroSection = () => {
  return (
    <div className='relative mx-4 max-h-[50rem] overflow-hidden'>
      <img src={HeroImg} alt="hero image" className='w-full relative brightness-75 min-h-[90vh] object-cover object-top'/>


      <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] xl:translate-x-0 xl:translate-y-0 xl:top-20 xl:left-36 text-center xl:text-left text-4xl md:text-6xl xl:text-8xl font-kaisei w-full xl:max-w-[35rem] text-white leading-tighter'>
      Welcome to <br className='hidden xl:block' />
       <span className='xl:ml-16'>Harbor.</span></h1>

       <div className='max-xl:top-1/2 max-xl:left-1/2 -translate-x-1/2 xl:translate-x-0 xl:translate-y-0 w-full md:w-[40rem]  px-6 xl:px-2 text-center xl:text-left  xl:max-w-[30rem] text-white absolute xl:bottom-16 xl:right-28 leading-relaxed flex flex-col gap-8'>
        <p>We are committed to empowering students with world-class education cutting-edge research opportunities, and a vibran inclusive communit Whether you're here.</p>
       
       <button className='bg-[#151515] px-6 py-3 flex gap-1 w-fit mx-auto xl:mx-0 duration-500 ease-in-out hover:bg-red-600 transition-colors'>Get Started 
        <img src={ButtonArrow} alt="" />
         </button>
       </div>
    </div>
  )
}

export default HeroSection