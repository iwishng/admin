import { useState } from "react";
import UserDetails from "./userDetails";
import back from "../../images/back.png";
import green from "../../images/dotg.png";
import yellow from "../../images/doty.png";
import red from "../../images/dotr.png";
import { useGlobalContext } from "../../context";
import UserOrders from "./userOrders";

const MainUser = () => {
  const [stat, _] = useState("");
  const { setPage, newStat, page, vendDetails } = useGlobalContext();

  const { name, email, tel } = vendDetails;

  let statusImg2;
  if (newStat === "inactive") {
    statusImg2 = yellow;
  } else if (newStat === "active") {
    statusImg2 = green;
  } else if (newStat === "blocked") {
    statusImg2 = red;
  }

  let statusImg;
  if (stat === "inactive") {
    statusImg = yellow;
  } else if (stat === "active") {
    statusImg = green;
  } else if (stat === "blocked") {
    statusImg = red;
  }

  return (
    <div>
      <main className='m-8'>
        <div className='flex space-x-6 items-center'>
          <img
            src={back}
            className='w-3 cursor-pointer'
            alt=''
            onClick={() => setPage(true)}
          />
          <h1 className='font-semibold text-xl  sm:text-2xl text-gray-700'>
            User Details
          </h1>
        </div>
        <div className='mt-12 text-gray-700 shadow-lg'>
          <div className='bg-purple-200 flex justify-between lg:grid lg:grid-cols-4 gap-3 text-xs p-4 rounded-md font-semibold w-full whitespace-nowrap overflowX'>
            <h4>Name</h4>
            <h4 className=''>Email</h4>
            <h4 className=''>Mobile Number</h4>
            <h4>Status</h4>
            {/* <h4>Action</h4> */}
          </div>
          <div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3  text-xs p-4 rounded-md w-full whitespace-nowrap overflowX'>
              <h4 className='font-semibold w-full whitespace-nowrap'>{name}</h4>

              <h4 className='w-full whitespace-nowrap'>{email}</h4>
              <h4 className='w-full whitespace-nowrap'>{tel}</h4>
              <div className='flex items-center space-x-1 w-full whitespace-nowrap'>
                <img className='w-2' src={statusImg2} alt='status' />
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
      <UserOrders />
      {!page && <UserDetails />}
    </div>
  );
};

export default MainUser;
