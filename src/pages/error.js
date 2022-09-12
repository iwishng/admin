import { useEffect } from "react";
import { Link } from "react-router-dom";
import horse from "../images/horse.gif";

const Error = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-gray-800'>
      <div className='flex justify-center items-center'>
        <h4 className='text-[5rem] sm:text-[19rem] font-bold'>4</h4>
        <span>
          <img src={horse} className='w-48 sm:w-72' alt='horse' />
        </span>
        <h4 className='text-[5rem] sm:text-[19rem] font-bold '>4</h4>
      </div>
      <div className='sm:-mt-20 flex flex-col justify-center items-center'>
        <p className='text-center p-2 text-base font-bold'>
          {" "}
          This page does not exist. Let's help you to a page where wishes are
          horses{" "}
        </p>
        <Link to='/'>
          <button className='py-3 px-6 my-4 rounded-lg bg-[#7805A7] text-sm text-white  w-fit'>
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
