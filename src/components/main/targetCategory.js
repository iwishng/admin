import React from "react";
import { useGlobalContext } from "../../context";
import back from "../../images/back.png";

const TargetCategory = () => {
  const { catTitle, store, setPage } = useGlobalContext();

  return (
    <div className='m-8'>
      <div className='mt-12'>
        <div
          className='flex space-x-4 items-center mt-5 mb-16 cursor-pointer'
          onClick={() => setPage(true)}
        >
          <img src={back} className='w-3' alt='' />
          <h1 className='text-sm capitalize mt-1 select-none'>
            Back to Categories
          </h1>
        </div>

        <h1 className='fon t-bold text-2xl capitalize my-4'>{catTitle}</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  xl:grid-cols-6'>
          {store.slice().map((product, i) => {
            const { title, img, price } = product;
            return (
              <div
                key={i}
                className='text-sm my-2 capitalize bg-purple-100 rounded-md flex flex-col justify-between'
              >
                <div className=''>
                  <img className='h-28 w-full object-cover' src={img} alt='' />
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
    </div>
  );
};

export default TargetCategory;
