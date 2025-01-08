import React from 'react'
import Header from '../common/Header'
import CustomBtn from '../common/CustomBtn';

const Hero = () => {
  return (
    <div
      id="about"
      className="bg-cover bg-no-repeat bg-center bg-hero-bg  h-[840px] max-xl:h-full max-xl:justify-center relative"
    >
      <div className=" container">
        <Header />
      </div>
      <img
        src="./assets/images/png/blue-circle-layer.png"
        alt="layer"
        className=" absolute left-0 bottom-0 max-xl:hidden  max-w-[322px]"
      />
      <div className=" container">
        <div className="flex items-center pt-10 flex-wrap">
          <div className="w-8/12 max-lg:w-full max-xl:flex max-xl:justify-center max-xl:items-center max-xl:flex-col">
            <h1 className="text-white max-w-[705px] text-center text-[72px] font-bold leading-[86.4px] max-xl:text-6xl max-lg:text-5xl max-md:text-4xl">
              Innovate, Automate, Accelerate
            </h1>
            <p className="text-white font-normal text-xl leading-[30px] text-center pt-6">
              Next Gen AI Automation to Scale Your Business.
            </p>
            <div className="flex items-center justify-center">
              <CustomBtn
                btnText="Book A Call Now!"
                myClass="min-w-[230px] py-[19.5px] mt-6 max-md:min-w-[170px] max-md:py-[15px]"
              />
            </div>
          </div>
          <div className="w-4/12 max-lg:w-full">
            <img
              src="/assets/images/png/hero-img.png"
              alt="hero-img"
              className="max-w-[470px] max-xl:w-full max-lg:mx-auto max-md:max-w-[375px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero