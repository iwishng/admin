import React from "react";
import { useGlobalContext } from "../../context";
import green from "../../images/dotg.png";
import yellow from "../../images/doty.png";
import red from "../../images/dotr.png";
import UserDetails from "./userDetails";
import back from "../../images/back.png";

const VendorDetails = () => {
  const { store, setPage, vendDetails, newStat } = useGlobalContext();
  const { name, email, tel, busName } = vendDetails;
  let statusImg;
  if (newStat === "inactive") {
    statusImg = yellow;
  } else if (newStat === "active") {
    statusImg = green;
  } else if (newStat === "blocked") {
    statusImg = red;
  }
  return (
    <>
      <main className='text-gray-900'>
        <div className='flex space-x-6 items-center'>
          <img
            src={back}
            className='w-3 cursor-pointer'
            alt=''
            onClick={() => setPage(true)}
          />
          <h1 className='font-semibold text-xl  sm:text-2xl'>Vendor Details</h1>
        </div>
        <div className='mt-12 shadow-lg'>
          <div className='bg-purple-200 flex justify-between lg:grid lg:grid-cols-5 gap-3 text-xs p-4 rounded-md font-semibold w-full whitespace-nowrap overflowX'>
            <h4>Name</h4>
            <h4 className=''>Email</h4>
            <h4 className=''>Mobile Number</h4>
            <h4 className=''>Business Name</h4>
            <h4>Status</h4>
            {/* <h4>Action</h4> */}
          </div>
          <div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3  text-xs p-4 rounded-md w-full whitespace-nowrap overflowX'>
              <h4 className='font-semibold w-full whitespace-nowrap'>{name}</h4>

              <h4 className='w-full whitespace-nowrap'>{email}</h4>
              <h4 className='w-full whitespace-nowrap'>{tel}</h4>
              <h4 className='w-full whitespace-nowrap'>{busName}</h4>
              <div className='flex items-center space-x-1 w-full whitespace-nowrap'>
                <img className='w-2' src={statusImg} alt='status' />
                <h4>{newStat}</h4>
              </div>
              {/* <div className='flex space-x-4 w-full cursor-pointer'>
                <h4 className='underline normal-case text--[#7805A7]'>edit</h4>
                <h4 className='underline normal-case text-orange-600'>block</h4>
              </div> */}
            </div>
          </div>
        </div>
      </main>
      <main className='text-gray-900'>
        <div className='mt-12'>
          <h1 className='font-bold text-2xl capitalize my-4'>Products</h1>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  xl:grid-cols-6'>
            {store.slice().map((product, i) => {
              const { title, img, price } = product;
              return (
                <div
                  key={i}
                  className='text-sm my-2 capitalize bg-purple-100 rounded-md flex flex-col justify-between'
                >
                  <div className=''>
                    <img
                      className='h-28 w-full object-cover'
                      src={img}
                      alt=''
                    />
                    <h4 className='mt-2 capitalize pl-4'>
                      {title.slice(0, 15)}...
                    </h4>
                  </div>
                  <div className='p-4'>
                    <h4 className='font-bold mb-2 sm:text-base'>
                      <del>N</del> {price}
                    </h4>
                    <h4 className='text-sm'>
                      <span className='text-xs font-bold'>Left in stock</span>{" "}
                      12/30
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <UserDetails />
      </main>
    </>
  );
};

export default VendorDetails;
