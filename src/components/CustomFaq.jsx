import React, { useState } from 'react'
import { FaqArrow } from '../utils/icons';
import { FAQ_DATA_LIST } from '../utils/helper';
import CustomHeading from '../common/CustomHeading';

const CustomFaq = () => {
      const [active, setActive] = useState(0);
      const toggle = (index) => {
        setActive(active === index ? null : index);
      };
  return (
    <div className="container pt-[210px] max-xl:pt-[170px] max-lg:pt-24 max-md:pt-14 max-sm:pt-10">
      <div className='pb-[60px] max-lg:pb-10'>
        <CustomHeading sectionHeading="FAQ's" />
        </div>
      <div className="max-w-[1022px] flex flex-col gap-6 mx-auto">
        {FAQ_DATA_LIST.map((obj, i) => (
          <div
            key={i}
            className={`rounded-xl p-6 border border-solid  ${
              active === i
                ? "border-sky-blue"
                : "border-white border-opacity-10"
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className={`flex w-full text-white justify-between max-sm:gap-4 bg-transparent items-center text-left max-sm:text-base font-medium text-xl max-md:text-lg ${
                active === i ? "pb-4" : ""
              }`}
            >
              {obj.heading}{" "}
              <span
                className={`transition-all duration-300${
                  active === i ? "rotate-180 " : ""
                }`}
              >
                <FaqArrow />
              </span>
            </button>
            <p
              className={`text-white max-md:text-sm overflow-hidden transition-all duration-300 ${
                active === i ? "max-h-32 max-sm:max-h-52" : "max-h-0"
              }`}
            >
              {obj.subHeading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomFaq