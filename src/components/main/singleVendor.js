import { useState, useEffect } from "react";
import green from "../../images/dotg.png";
import yellow from "../../images/doty.png";
import red from "../../images/dotr.png";
import close from "../../images/close.png";
import { useGlobalContext } from "../../context";

const SingleVendor = ({ name, email, tel, busName, vendorStatus, id }) => {
  const { setPage, setVendDetails, setIsEdit, setNewStat, edit } =
    useGlobalContext();

  const [isBlock, setIsBlock] = useState(false);
  const [modal, setModal] = useState(false);
  const [action, setAction] = useState("");
  const [stat, setStat] = useState("");

  let statusImg;
  if (stat === "inactive") {
    statusImg = yellow;
  } else if (stat === "active") {
    statusImg = green;
  } else if (stat === "blocked") {
    statusImg = red;
  }

  useEffect(() => {
    if (stat === "blocked") {
      setAction("unblock");
    } else setAction("block");
    if (isBlock || vendorStatus === "blocked") {
      setStat("blocked");
      setAction("unblock");
    } else if (vendorStatus === "inactive") {
      setStat("inactive");
    } else if (vendorStatus === "active") {
      setStat("active");
    }
  }, []);

  return (
    <div className='text-xs my-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-4 p-4 capitalize w-full overflowX'>
      <h4 className='font-semibold w-full whitespace-nowrap'>{name}</h4>

      <h4 className='w-full whitespace-nowrap'>{email}</h4>
      <h4 className='w-full whitespace-nowrap'>{tel}</h4>
      <h4 className='w-full whitespace-nowrap'>{busName}</h4>
      <div className='flex items-center space-x-1 w-full whitespace-nowrap'>
        <img className='w-2' src={statusImg} alt='status' />
        <h4>{stat}</h4>
      </div>
      <div className='flex space-x-4 w-full'>
        <h4
          className='underline normal-case text-[#7805A7] cursor-pointer'
          onClick={() => {
            setIsEdit(true);
            edit(id);
          }}
        >
          edit
        </h4>
        <h4
          className='underline normal-case text-orange-600 cursor-pointer'
          onClick={() => setModal(true)}
        >
          {action}
        </h4>
        <h4
          className='underline normal-case text-blue-700 cursor-pointer'
          onClick={() => {
            setVendDetails({
              name,
              email,
              tel,
              busName,
              vendorStatus,
            });
            setPage(false);
            setNewStat(stat);
          }}
        >
          details
        </h4>
      </div>
      <div className={`${modal ? "category" : "category hider"} overflow z-10`}>
        <div className='bg-white shadow-md rounded-md p-10 text-center'>
          <img
            className='bg-[#7805A7] p-2 ml-auto rounded-md'
            src={close}
            alt=''
            onClick={() => setModal(false)}
          />
          <h1 className='text-center text-xl sm:text-2xl my-3 mt-10 normal-case'>
            Are you sure you want to {action} this vendor?
          </h1>
          <div className='flex space-x-4 justify-center items-center'>
            <button
              className={`${
                action === "block" ? "bg-red-500" : "bg-green-500"
              }  text-white rounded-md text-sm md:text-base py-3 px-8 font-normal tracking-wider w-fit my-2 capitalize`}
              onClick={() => {
                {
                  setModal(false);
                  if (action === "block") {
                    setAction("unblock");
                    setStat("blocked");
                  } else if (vendorStatus === "blocked") {
                    setAction("unblock");
                    setStat("inactive");
                  } else if (action === "unblock") {
                    setAction("block");
                    setStat(vendorStatus);
                  }
                }
              }}
            >
              Yes
            </button>
            <button
              className='bg-[#7805A7] text-white rounded-md text-sm md:text-base py-3 px-8 font-normal tracking-wider w-fit my-2 capitalize'
              onClick={() => {
                {
                  setModal(false);
                }
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVendor;
