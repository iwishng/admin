import { useState } from "react";
import rev from "../../images/rev.png";
import del from "../../images/del.png";
import cart from "../../images/cart.png";
import chart1 from "../../images/1.JPG";
import chart2 from "../../images/2.JPG";
import vendor from "../../images/Vector-9.png";
import user from "../../images/Vector-10.png";
import Product from "./product";
import { useGlobalContext } from "../../context";
import green from "../../images/dotg.png";
import red from "../../images/doty.png";
import Track from "./track";

const Dash = () => {
  const { store, items, setDetails, setItems, page } = useGlobalContext();
  return (
    <>
      {page && (
        <main className='m-8'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-[#080016] text-gray-100 sm:p-4 p-10 rounded-md relative'>
              <h2 className='text-base font-semibold'>Total Orders</h2>
              <h1 className='text-[#FFCC00] text-2xl my-2 font-bold'>2000</h1>
              <p className='text-xs text-gray-400'>
                June, 22 - July, 22 / Last 30 days
              </p>
              <img
                className='absolute w-10 top-8 sm:top-4 right-8 sm:right-4 bg-[#7805A7] p-2 rounded-md'
                src={cart}
                alt=''
              />
            </div>
            <div className='bg-gray-200 text-gray-900 sm:p-4 p-10 rounded-md relative'>
              <h2 className='text-base font-semibold'>Total Revenues</h2>
              <h1 className='text-gray-900 text-2xl my-2 font-bold'>
                <del>N</del>150000
              </h1>
              <p className='text-xs text-gray-700'>
                June, 22 - July, 22 / Last 30 days
              </p>
              <img
                className='absolute w-10 top-8 sm:top-4 right-8 sm:right-4 bg-[#7805A7] p-2 rounded-md'
                src={rev}
                alt=''
              />
            </div>
            <div className='bg-gray-200 text-gray-900 sm:p-4 p-10 rounded-md relative'>
              <h2 className='text-base font-semibold'>Total Deliveries</h2>
              <h1 className='text-gray-900 text-2xl my-2 font-bold'>13000</h1>
              <p className='text-xs text-gray-700'>
                June, 22 - July, 22 / Last 30 days
              </p>
              <img
                className='absolute w-10 top-8 sm:top-4 right-8 sm:right-4 bg-[#7805A7] p-2 rounded-md'
                src={del}
                alt=''
              />
            </div>
            <div className='bg-[#080016] text-gray-100 sm:p-4 p-10 rounded-md relative'>
              <h2 className='text-base font-semibold'>Total Vendors</h2>
              <h1 className='text-[#FFCC00] text-2xl my-2 font-bold'>120</h1>
              <p className='text-xs text-gray-400'>
                June, 22 - July, 22 / Last 30 days
              </p>
              <img
                className='absolute w-10 top-8 sm:top-4 right-8 sm:right-4 bg-[#7805A7] p-2 rounded-md'
                src={vendor}
                alt=''
              />
            </div>
            <div className='bg-gray-200 text-gray-900 sm:p-4 p-10 rounded-md relative'>
              <h2 className='text-base font-semibold'>Total Users</h2>
              <h1 className='text-gray-900 text-2xl my-2 font-bold'>1000</h1>
              <p className='text-xs text-gray-700'>
                June, 22 - July, 22 / Last 30 days
              </p>
              <img
                className='absolute w-10 top-8 sm:top-4 right-8 sm:right-4 bg-[#7805A7] p-2 rounded-md'
                src={user}
                alt=''
              />
            </div>
          </div>

          <div className='my-8 grid md:grid-cols-2 gap-8'>
            <div className='shadow-md p-8 w-full'>
              <div className='flex justify-between items-center space-x-4 w-full'>
                <h1 className='font-bold text-xl'>Revenue</h1>
                <select
                  name=''
                  id=''
                  className='border-[#7805A7] border-2 rounded-md p-2 px-4 text-sm w-fit'
                >
                  <option value=''>Daily</option>
                  <option value=''>Weekly</option>
                  <option value=''>Monthly</option>
                </select>
              </div>
              <div className='flex items-center my-4 space-x-6 text-sm'>
                <div className='flex items-center space-x-2'>
                  <div className='w-3 h-3 bg-[#7805A7]' />
                  <h5>Store</h5>
                </div>
                <div className='flex items-center space-x-2'>
                  <div className='w-3 h-3 bg-[#080016]' />
                  <h5>Wallet</h5>
                </div>
              </div>
              <img className='w-full mt-4' src={chart1} alt='chart' />
            </div>
            <div className='shadow-md p-8 w-full'>
              <div className='flex justify-between items-center space-x-4 w-full'>
                <h1 className='font-bold text-xl'>Order Metrics</h1>
                <select
                  name=''
                  id=''
                  className='border-[#7805A7] border-2 rounded-md p-2 px-4 w-fit text-sm'
                >
                  <option value=''>Daily</option>
                  <option value=''>Weekly</option>
                  <option value=''>Monthly</option>
                </select>
              </div>
              <div className='flex items-center my-4 space-x-6 text-sm'>
                <div className='flex items-center space-x-2'>
                  <div className='w-3 h-3 bg-[#FFCC00]' />
                  <h5>Delivered</h5>
                </div>
                <div className='flex items-center space-x-2'>
                  <div className='w-3 h-3 bg-[#080016]' />
                  <h5>Cancelled</h5>
                </div>
              </div>
              <img className='w-full mt-4' src={chart2} alt='chart' />
            </div>
          </div>

          <div>
            <h1 className='font-bold text-xl capitalize my-4'>Latest Orders</h1>
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
                      className='p-1 border-2 border-[#7805A7] text-[#7805A7] rounded-md w-fit px-4 py-2'
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
