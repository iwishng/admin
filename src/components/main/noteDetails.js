import React from "react";
import close from "../../images/close.png";
import { useGlobalContext } from "../../context";
import green from "../../images/dotg.png";
import yellow from "../../images/doty.png";

const NoteDetails = ({ subject, receiver, noteStatus, message }) => {
  const { details, setDetails } = useGlobalContext();
  const statusImg = noteStatus === "delivered" ? green : yellow;
  return (
    <aside
      className={`${
        details ? "translate-x-0" : "translate-x-full"
      } overflow transition top-0 h-screen z-10 bg-white border-2 shadow-md right-0 p-8 fixed capitalize text-gray-900 w-[75%] sm:w-[50%] lg:w-[30%]`}
    >
      <img
        className='ml-auto bg-[#7805A7] p-2 rounded-md cursor-pointer relative -right-4'
        src={close}
        alt='closeBtn'
        onClick={() => setDetails(false)}
      />

      <h4 className='font-bold text-2xl'>Notification Details</h4>
      <div className='my-4'>
        <h4 className='text-lg font-semibold'>Subject</h4>
        <h4 className='text-sm'>{subject}</h4>
      </div>
      <div className='my-4'>
        <h4 className='text-lg font-semibold'>Message Details</h4>
        <h4 className='text-sm normal-case'>{message}</h4>
      </div>
      <div className='my-4'>
        <h4 className='text-lg font-semibold'>Reciever</h4>
        <h4 className='text-sm'>{receiver}</h4>
      </div>
      <div className='my-4'>
        <h4 className='text-lg font-semibold'>Status</h4>
        <div className='flex items-center space-x-1'>
          <img className='w-2' src={statusImg} alt='status' />
          <h4>{noteStatus}</h4>
        </div>
      </div>
      <div className='flex gap-5'>
        <button
          className='py-4 px-8 w-fit text-sm border-2 bg-[#7805A7] border-[#7805A7] text-gray-50 rounded-md'
          onClick={() => setDetails(false)}
        >
          Broadcast Notification
        </button>
      </div>
    </aside>
  );
};

export default NoteDetails;
