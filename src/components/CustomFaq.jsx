import React, { useState } from "react";
import { FaqArrow } from "../utils/icons";
import { FAQ_LIST } from "../utils/helper";
import CustomHeading from "../common/CustomHeading";

const CustomFaq = () => {
  const [active, setActive] = useState(0);
  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="container pt-[210px] max-xl:pt-[170px] max-lg:pt-24 max-md:pt-14 max-sm:pt-10">
      <div className="pb-[60px] max-lg:pb-10">
        <CustomHeading sectionHeading="FAQ's" />
      </div>
      <div className="max-w-[1022px] flex flex-col gap-6 mx-auto">
        {FAQ_LIST.map((item, index) => (
          <div
            key={index}
            className={`max-w-[1022px] w-full mx-auto p-[1px] rounded-xl ${
              active === index
                ? "bg-gradient-to-r from-blue-purple to-sky-blue"
                : "bg-transparent "
            }`}
          >
            <div className="bg-off-black rounded-xl p-6 max-md:p-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center font-semibold text-xl text-white leading-custom-3xl max-md:text-base gap-3 text-start"
              >
                {item.heading}
                <span
                  className={`${
                    active === index ? "rotate-180" : "rotate-0"
                  } duration-500 ease-linear`}
                >
                  <FaqArrow />
                </span>
              </button>
              <div
                className={`md:overflow-hidden overflow-auto transition-all duration-700 ease-in-out ${
                  active === index ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <p className="text-base text-white pt-4">{item.subHeading}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomFaq;
