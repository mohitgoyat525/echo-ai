import React from 'react'
import Header from '../common/Header'

const Hero = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center bg-hero-bg bg-black h-[840px] relative">
      <div className=" container">
        <Header />
      </div>
      <img
        src="./assets/images/png/blue-circle-layer.png"
        alt="layer"
        className=" absolute left-0 bottom-0"
      />
      <div className=" container">
        <div className="flex items-center">
          <div className="w-8/12 max-lg:w-full">
            <h1 className="text-white max-w-[705px] text-center text-[72px] font-bold leading-[86.4px]">
              Innovate, Automate, Accelerate
            </h1>
            <p className='text-white font-normal text-xl leading-[30px] text-center pt-6'>Next Gen AI Automation to Scale Your Business.</p>
          </div>
          <div className='w-4/12 max-lg:w-full'>
            <img src="/assets/images/png/hero-img.png" alt="hero-img" className='w-full'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero