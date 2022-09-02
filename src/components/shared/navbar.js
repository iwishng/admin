import React from "react";
import search from "../../images/search.png";
import close from "../../images/close.png";
import { useNavigate } from "react-router-dom";
import not from "../../images/notify.png";
import { notify } from "../../data";

const Navbar = () => {
  const navigate = useNavigate();
  const [pop, setPop] = React.useState(false);
  return (
    <>
      <nav className='md:w-[75%] ml-auto p-3 px-6 shadow-md flex items-center justify-between space-x-6'>
        <div className='grid grid-cols-2 sm:flex items-center rounded-md bg-gray-200 w-fit p-2 space-x-5'>
          <input
            placeholder='Search for name, order ID, vendor etc...'
            className='bg-transparent p-2 text-sm sm:w-52 md:w-64'
          />
          <div>
            <img
              className='bg-[#7805A7] p-2 rounded-md w-8 ml-auto'
              src={search}
              alt=''
            />
          </div>
        </div>
        <div className='flex items-center justify-between w-52'>
          <div className='mx-auto'>
            <img
              src={not}
              alt='notify'
              onClick={() => setPop(true)}
              className='cursor-pointer'
            />
          </div>
          <button
            className='bg-[#7805A7] text-white rounded-md text-sm md:text-base p-3 px-6 sm:px-8 font-normal tracking-wider'
            onClick={() => navigate("/")}
          >
            Logout
          </button>
        </div>
      </nav>
      {pop && (
        <div className='absolute m-5 border-2 border-gray-50 sm:right-40 z-20 bg-white rounded-md shadow-md p-16 top-20'>
          <div className='relative'>
            <h1 className='font-bold text-2xl'>Notifications</h1>
            <img
              src={close}
              onClick={() => {
                setPop(false);
              }}
              className='p-2 rounded-md bg-[#7805A7] w-7 absolute -top-5 -right-10'
              alt=''
            />
          </div>
          <div>
            {notify.map(({ title, desc }, i) => {
              return (
                <div key={i} className='my-6'>
                  <h2 className='font-bold text-sm'>{title}</h2>
                  <p className='text-xs my-1'>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
