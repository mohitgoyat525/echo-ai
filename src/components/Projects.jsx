import React from 'react'
import { PROJECTS_LIST } from '../utils/helper';

const Projects = () => {
    return (
      <div className="bg-[#01000B] pt-[56px] max-lg:pt-10 max-md:pt-8">
            <div className=" container">
                <div className='flex items-center max-lg:flex-wrap'>
                    {PROJECTS_LIST.map((obj, i) => (
                        <div key={i} className={`w-full max-w-[384px] max-md:max-w-[350px] max-lg:mx-auto max-lg:gap-5 ${i=== 0? "border-right":1?"border-right":''}`}>
                            <h2 className='text-white text-[48px] font-semibold leading-[57.6px] text-center'>{obj.heading}</h2>
                            <p className={`text-white font-normal text-base text-center leading-[30px] pt-6 max-w-[146px] mx-auto ${i===2? 'max-w-[186px]':''}`}>{obj.description}</p>
                        </div>
                    ))}
                </div>
        </div>
      </div>
    );
}

export default Projects