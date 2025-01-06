import React, { useEffect, useState } from 'react'
import { NAVBAR_LIST } from '../utils/helper';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);
  return (
    <nav className="flex items-center justify-between pt-6 max-lg:pt-5 max-sm:pt-4">
      <a href="/">
        <img
          src="/assets/images/png/logo.png"
          alt="logo"
          className="w-full max-w-[192px]"
        />
      </a>

      <div
        className={`flex items-center gap-4 max-lg:flex-col max-lg:justify-center max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-screen max-lg:bg-black max-lg:z-40 transition-transform duration-300 ${
          isOpen ? "max-lg:-translate-y-0" : "max-lg:-translate-y-full"
        }`}
      >
        <ul className="flex items-center gap-9 max-lg:flex-col max-lg:gap-6">
          {NAVBAR_LIST.map((obj, i) => (
            <li key={i} className={`${i === 6 ? "hidden" : ""}`}>
              <a
                href={obj.path}
                className="transition-all ease-linear duration-300 hover:text-[#FF5300] text-xl font-medium text-white"
              >
                {obj.name}
              </a>
            </li>
          ))}
          <li>
            <button className="lg:hidden min-w-[172px] text-xl font-semibold text-white py-[13.5px] px-[22px] border border-solid rounded-full header-btn">
              Get Started
            </button>
          </li>
        </ul>
      </div>
      <button className="max-lg:hidden min-w-[172px] text-xl font-semibold text-white py-[13.5px] px-[22px] border border-solid rounded-full header-btn ">
        Get Started
      </button>
      <button
        onClick={handler}
        className="flex flex-col justify-center items-center z-50 gap-1 lg:hidden relative w-6 h-6"
      >
        <span
          className={`h-1 w-full bg-white rounded transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-white rounded transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-white rounded transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        ></span>
      </button>
    </nav>
  );
}

export default Header