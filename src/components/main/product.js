import React from "react";
import close from "../../images/close.png";
import { useGlobalContext } from "../../context";
import yellow from "../../images/doty.png";
import green from "../../images/dotg.png";
import red from "../../images/dotr.png";

const Product = () => {
  const { items, details, setDetails, setPage, delStatus, setDelStatus } =
    useGlobalContext();
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
    orderDate,
    deliveryDate,
  } = items;
  let statusImg;
  if (delStatus === "delivered") {
    statusImg = green;
  } else if (delStatus === "cancelled") {
    statusImg = red;
  } else {
    statusImg = yellow;
  }
  //
  //   ? green
  //   : "cancelled"
  //   ? red
  //   : "pending"
  //   ? yellow
  //   : "";

  return (
    <aside
      className={`${
        details ? "translate-x-0" : "translate-x-full"
      } overflow transition top-0 h-screen z-10 bg-white border-2 shadow-md right-0 p-8 fixed capitalize text-gray-700 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[38%] xl:w-[30%]`}
    >
      <img
        className='ml-auto bg-[#7805A7] p-2 rounded-md cursor-pointer relative -right-4'
        src={close}
        alt='closeBtn'
        onClick={() => setDetails(false)}
      />
      <div className='flex items-center gap-4 my-5'>
        <img className='w-20' src={img} alt='' />
        <div className=''>
          <h4 className='font-semibold text-sm'>{title}</h4>
          <h4 className='font-bold text-2xl'>
            <del>N</del> {price}
          </h4>
        </div>
      </div>
      <h4 className='font-bold text-xl'>Product Information</h4>
      <div className='my-2'>
        <h4 className='text-sm'>Weight</h4>
        <h4 className='text-sm font-semibold'>{weight}kg</h4>
      </div>
      <div className='my-2'>
        <h4 className='text-sm'>Quantity</h4>
        <h4 className='text-sm font-semibold'>{qty} pieces</h4>
      </div>
      <div className='my-2'>
        <h4 className='text-sm'>Color</h4>
        <h4 className='text-sm font-semibold'>{color}</h4>
      </div>
      <div className='my-2'>
        <h4 className='text-sm'>Customer</h4>
        <h4 className='text-sm font-semibold'>{customer}</h4>
      </div>
      <div className='my-2'>
        <h4 className='text-sm'>vendor</h4>
        <h4 className='text-sm font-semibold'>{vendor}</h4>
      </div>
      <div className='my-2'>
        <h4 className='text-sm'>Delivery address</h4>
        <h4 className='text-sm font-semibold'>{address}</h4>
      </div>
      <div className='flex items-center space-x-1 p-2 px-4 w-fit h-fit border-[#7805A7] text-[#7805A7] rounded-md text-xs border-2 my-2'>
        <img className='w-2' src={statusImg} alt='status' />
        <select
          name=''
          value={delStatus}
          id=''
          className='bg-transparent'
          onChange={(e) => setDelStatus(e.target.value)}
        >
          <option value='pending'>Pending</option>
          <option value='delivered'>Delivered</option>
          <option value='cancelled'>Cancelled</option>
        </select>
      </div>
      <div className='my-2'>
        <h4 className='text-sm'>order Date</h4>
        <h4 className='text-sm font-semibold'>{orderDate}</h4>
      </div>
      <div className='my-2'>
        <h4 className='text-sm'>delivery Date</h4>
        <h4 className='text-sm font-semibold'>{deliveryDate}</h4>
      </div>
      <div className='my-2'>
        <h4 className='text-sm'>Payment method</h4>
        <h4 className='text-sm font-semibold'>i-Wish Wallet</h4>
      </div>
      <div className='flex gap-5'>
        <button
          className='py-3 px-4 w-fit text-xs border-2 bg-[#7805A7] border-[#7805A7] text-gray-50 rounded-md'
          onClick={() => setPage(false)}
        >
          Track Order
        </button>
        <button className='py-3 px-4 w-fit text-xs border-2 border-[#7805A7] text-[#7805A7] rounded-md'>
          Contact Vendor
        </button>
      </div>
    </aside>
  );
};

export default Product;
