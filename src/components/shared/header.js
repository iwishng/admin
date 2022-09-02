import React from "react";
import logo from "../../images/logo1.png";

const Header = () => {
  return (
    <header className='p-5 shadow-sm'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <img className='w-20' src={logo} alt='' />
        <button className='bg-[#7805A7] text-white rounded-md text-sm md:text-base py-3 px-8 font-normal tracking-wider'>
          Open App
        </button>
      </div>
    </header>
  );
};

export default Header;
