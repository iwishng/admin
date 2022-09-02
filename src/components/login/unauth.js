import React from "react";
import lock from "../../images/lock.png";

const Unauth = ({ setPage }) => {
  return (
    <div className='flex flex-col items-center justify-center my-20 shadow-lg w-[90%] md:w-[50%] mx-auto min-h-[60vh]'>
      <img src={lock} className='w-20' alt='' />
      <h2 className='text-lg text-center sm:text-2xl font-bold my-5'>
        You’re not authorized to access this page
      </h2>

      <button
        className='block bg-[#7805A7] rounded-md text-purple-100  py-4 px-8 my-4 text-sm md:text-xl w-fit capitalize'
        onClick={() => {
          setPage(1);
        }}
      >
        Back Home
      </button>
    </div>
  );
};

export default Unauth;
