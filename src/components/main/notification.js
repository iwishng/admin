import { useState } from "react";
import { useGlobalContext } from "../../context";
import green from "../../images/dotg.png";
import yellow from "../../images/doty.png";
import close from "../../images/close.png";
import NoteDetails from "./noteDetails";

const Notifications = () => {
  const { setDetails, details, notificationItems } = useGlobalContext();
  const [showNote, setshowNote] = useState(false);
  const [sub, setSub] = useState("");
  const [message, setMessage] = useState("");
  const [receiver, setReceiver] = useState("all");
  const [noteObj, setNoteObj] = useState({
    subject: "",
    receiver: "",
    date: "",
    noteStatus: "",
    message: "",
  });

  const addNotification = (e) => {
    setNoteObj({});
    e.preventDefault();
    if (sub && message && receiver) {
      setshowNote(false);
      notificationItems.push({
        subject: sub,
        receiver,
        date: "jun 12, 2022",
        noteStatus: "pending",
        message,
      });
    }
  };
  return (
    <>
      <main className='m-8'>
        <div className='flex flex-col sm:flex-row justify-between '>
          <h1 className='font-semibold text-xl  sm:text-2xl text-gray-700'>
            Notification Board
          </h1>
          <button
            className='bg-[#7805A7] text-white rounded-md text-sm md:text-base py-4 px-6 font-normal tracking-wider w-fit my-2'
            onClick={() => setshowNote(true)}
          >
            New Notification
          </button>
        </div>
        <div className='mt-12 text-gray-700'>
          <div className='bg-purple-200 grid grid-cols-4 md:grid-cols-5 gap-4 text-xs p-4 rounded-md font-semibold'>
            <h4>Subject</h4>
            <h4 className=''>Reciever</h4>
            <h4 className='hidden md:block'>Date</h4>
            <h4 className=''>Status</h4>
            <h4>More</h4>
          </div>
          <div>
            {notificationItems.map((items, i) => {
              const { subject, receiver, date, noteStatus, message } = items;
              const statusImg = noteStatus === "delivered" ? green : yellow;
              return (
                <div
                  key={i}
                  className='text-xs my-2 grid grid-cols-4 md:grid-cols-5 items-center gap-4 p-4 capitalize'
                >
                  <h4 className='font-semibold'>{subject}</h4>

                  <h4 className=''>{receiver}</h4>
                  <h4 className='hidden md:block'>{date}</h4>
                  <div className='flex items-center space-x-1'>
                    <img className='w-2' src={statusImg} alt='status' />
                    <h4>{noteStatus}</h4>
                  </div>
                  <button
                    className='p-2 px-4 w-fit border-2 border-[#7805A7] text-[#7805A7] rounded-md'
                    onClick={() => {
                      setDetails(true);
                      setNoteObj({
                        subject,
                        receiver,
                        date,
                        noteStatus,
                        message,
                      });
                    }}
                  >
                    Details
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${showNote ? "category" : "category hider"} overflow`}>
          <div className='bg-white shadow-md rounded-md p-12 text-gray-700 w-5/6 lg:w-4/6 mt-20'>
            <img
              className='bg-[#7805A7] p-2 ml-auto rounded-md'
              src={close}
              alt=''
              onClick={() => setshowNote(false)}
            />
            <h1 className='text-center text-xl sm:text-2xl font-semibold my-3'>
              New Notification
            </h1>
            <form action='' className='sm:w-5/6 mx-auto'>
              <label htmlFor='category' className='text-sm'>
                Subject
              </label>
              <input
                type='text'
                className='block bg-gray-100 p-2 rounded-md my-2 w-full font-sm mb-4'
                placeholder='Subject of your notification'
                value={sub}
                onChange={(e) => setSub(e.target.value)}
              />
              <label htmlFor='category' className='text-sm'>
                Message Details
              </label>
              <textarea
                name=''
                id=''
                cols='30'
                rows='5'
                value={message}
                placeholder='Notification Details'
                className='block bg-gray-100 p-2 rounded-md my-2 w-full font-sm mb-4'
                onChange={(e) => setMessage(e.target.value)}
              />
              <label htmlFor='category' className='text-sm'>
                Select Receiver
              </label>
              <select
                name=''
                id=''
                className='block bg-gray-100 p-2 rounded-md my-2 w-full font-sm capitalize mb-4'
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
              >
                <option value='all'>all</option>
                <option value='vendors'>vendors</option>
                <option value='customers'>customers</option>
              </select>

              <button
                className='bg-[#7805A7] text-white rounded-md text-sm md:text-base py-4 px-6 font-normal tracking-wider w-full my-2'
                onClick={addNotification}
              >
                Broadcast Notification
              </button>
              <button
                className='border-[#7805A7] border-2 text-[#7805A7] rounded-md text-sm md:text-base py-4 px-6 font-normal tracking-wider w-full my-2'
                onClick={addNotification}
              >
                Save as Draft
              </button>
            </form>
          </div>
        </div>
        <NoteDetails {...noteObj} />
      </main>
    </>
  );
};

export default Notifications;
