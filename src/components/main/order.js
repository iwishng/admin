import { useState } from "react";
import rev from "../../images/rev.png";
import del from "../../images/del.png";
import ord from "../../images/ord.png";
import green from "../../images/dotg.png";
import red from "../../images/dotr.png";
import Product from "./product";
import { useGlobalContext } from "../../context";
import Track from "./track";

const Dash = () => {
  const { store, items, setDetails, setItems, details, page, setPage } =
    useGlobalContext();
  return (
    <>
      {page && (
        <main className='m-8'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
            <div className='bg-[#080016] text-gray-100 sm:p-4 p-10 rounded-md relative'>
              <h2 className='text-base font-semibold'>Pending Orders</h2>
              <h1 className='text-[#FFCC00] text-2xl my-2 font-bold'>2000</h1>
              <img
                className='absolute w-10 top-8 sm:top-4 right-8 sm:right-4 bg-[#7805A7] p-2 rounded-md'
                src={ord}
                alt=''
              />
            </div>
            <div className='bg-gray-200 text-gray-900 sm:p-4 p-10 rounded-md relative'>
              <h2 className='text-base font-semibold'>Cancelled Orders</h2>
              <h1 className='text-gray-900 text-2xl my-2 font-bold'>100</h1>
              <img
                className='absolute w-10 top-8 sm:top-4 right-8 sm:right-4 bg-[#7805A7] p-2 rounded-md'
                src={rev}
                alt=''
              />
            </div>
            <div className='bg-gray-200 text-gray-900 sm:p-4 p-10 rounded-md relative'>
              <h2 className='text-base font-semibold'>Delivered Orders</h2>
              <h1 className='text-gray-900 text-2xl my-2 font-bold'>13000</h1>
              <img
                className='absolute w-10 top-8 sm:top-4 right-8 sm:right-4 bg-[#7805A7] p-2 rounded-md'
                src={del}
                alt=''
              />
            </div>
          </div>

          <div className='mt-12'>
            <h1 className='font-bold text-2xl capitalize my-4'>Orders</h1>
            <div className='bg-purple-200 grid grid-cols-4 lg:grid-cols-6 gap-4 text-xs p-4 rounded-md font-semibold'>
              <h4>Product</h4>
              <h4 className='hidden lg:block'>Order ID</h4>
              <h4 className='hidden lg:block'>Date</h4>
              <h4>Price</h4>
              <h4 className=''>Status</h4>
              <h4>More</h4>
            </div>
            <div>
              {store.map((product, i) => {
                const {
                  title,
                  img,
                  price,
                  weight,
                  qty,
                  color,
                  customer,
                  vendor,
                  address,
                  orderStatus,
                  orderDate,
                  deliveryDate,
                } = product;
                const statusImg = orderStatus === "delivered" ? green : red;
                return (
                  <div
                    key={i}
                    className='text-xs my-2 grid grid-cols-4 lg:grid-cols-6 items-center gap-4 p-4 capitalize'
                  >
                    <div className='flex items-center space-x-2'>
                      <img className='w-10 object-contain' src={img} alt='' />
                      <h4 className='font-semibold capitalize hidden lg:block'>
                        {title}
                      </h4>
                    </div>
                    <h4 className='hidden lg:block'>R00{i}T</h4>
                    <h4 className='hidden lg:block'>{orderDate}</h4>
                    <h4>
                      <del>N</del> {price}
                    </h4>
                    <div className='flex items-center space-x-1'>
                      <img className='w-2' src={statusImg} alt='status' />
                      <h4>{orderStatus}</h4>
                    </div>
                    <button
                      className='p-2 px-4  w-fit border-2 border-[#7805A7] text-[#7805A7] rounded-md'
                      onClick={() => {
                        setItems({
                          title,
                          img,
                          price,
                          weight,
                          qty,
                          color,
                          customer,
                          vendor,
                          address,
                          orderStatus,
                          orderDate,
                          deliveryDate,
                        });
                        setDetails(true);
                      }}
                    >
                      Details
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <Product />
        </main>
      )}
      {!page && <Track />}
    </>
  );
};

export default Dash;
