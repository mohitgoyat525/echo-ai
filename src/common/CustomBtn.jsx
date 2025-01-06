import React from 'react'

const CustomBtn = ({ btnText, myClass }) => {
  return (
    <button
      className={`text-xl ${myClass} font-semibold text-white px-[22px] rounded-full header-btn transition-all ease-linear duration-200 hover:scale-95`}
    >
      {btnText}
    </button>
  );
};

export default CustomBtn