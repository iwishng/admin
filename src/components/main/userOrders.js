import React from "react";
import green from "../../images/dotg.png";
import yellow from "../../images/doty.png";
import { useGlobalContext } from "../../context";

const UserOrders = () => {
  const { store, setItems, setDetails } = useGlobalContext();
  return (
    <main className='m-8'>
      <div className='mt-12'>
        <h1 className='font-bold text-2xl capitalize my-4'>Orders</h1>
        <div className='bg-purple-200 flex justify-between lg:grid lg:grid-cols-5 gap-3 text-xs p-4 rounded-md font-semibold w-full whitespace-nowrap overflowX'>
          <h4>Product</h4>
          <h4 className='hidden lg:block'>Order ID</h4>
          <h4 className='hidden lg:block'>Date</h4>
          <h4>Price</h4>
          <h4 className=''>Status</h4>
          <h4>More</h4>
        </div>
        <div>
          {store.slice(0, 2).map((product, i) => {
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
            const statusImg = orderStatus === "delivered" ? green : yellow;
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
                  className='p-1 border-2 border-[#7805A7] text-[#7805A7] rounded-md'
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
                      orderStatus,
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
    </main>
  );
};

export default UserOrders;
