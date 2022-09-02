import React from "react";
import track from "../../images/track.png";
import nav from "../../images/nav.png";
import back from "../../images/back.png";
import { useGlobalContext } from "../../context";

const Track = () => {
  const { setPage, setDetails } = useGlobalContext();
  return (
    <div className='m-8'>
      <div className='flex space-x-6 items-center'>
        <img
          src={back}
          className='w-6 cursor-pointer'
          alt=''
          onClick={() => {
            setPage(true);
            setDetails(false);
          }}
        />

        <h1 className='text-3xl font-bold my-8'>Track Order</h1>
      </div>
      <img src={track} alt='' />
      <div className='flex flex-col justify-center items-center my-8'>
        <div className='flex space-x-4 w-[100%] sm:w-[50%] justify-center'>
          <div>
            <img src={nav} className='w-10' alt='' />
          </div>
          <div>
            <h4 className='font-light text-base'>Estimated Delivery Date</h4>
            <h4 className='font-bold text-lg'>12th June</h4>
            <h4 className='text-sm font-thin my-2'>Aree Avenue Road</h4>
            <h4 className='text-sm font-thin my-10'>Chelsea town</h4>
            <h4 className='text-xl font-normal'>i-Wish Headquarter store</h4>
            <h4 className='text-sm font-thin'>Alabata, Abeokuta</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
