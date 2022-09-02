import { useGlobalContext } from "../../context";
import VendorDetails from "./vendorDetails";
import SingleVendor from "./singleVendor";
import close from "../../images/close.png";

const Vendor = () => {
  const {
    edit,
    editVendor,
    isEdit,
    allVendors,
    mail,
    setMail,
    tel,
    setTel,
    business,
    setBusiness,
    setIsEdit,
    page,
    setPage,
    vendDetails,
    newStat,
  } = useGlobalContext();

  return (
    <>
      {page ? (
        <main className='m-8'>
          <div className='flex flex-col sm:flex-row justify-between '>
            <h1 className='font-semibold text-xl  sm:text-2xl text-gray-700'>
              Vendors
            </h1>
          </div>
          <div className='mt-12 text-gray-700 shadow-lg'>
            <div className='bg-purple-200 flex space-x-6 md:grid md:grid-cols-6  text-xs p-4 rounded-md font-semibold w-full whitespace-nowrap overflowX'>
              <h4>Name</h4>
              <h4 className=''>Email</h4>
              <h4 className=''>Mobile Number</h4>
              <h4 className=''>Business Name</h4>
              <h4>Status</h4>
              <h4>Action</h4>
            </div>
            <div>
              {allVendors.map((items) => {
                return <SingleVendor {...items} key={items.id} />;
              })}
            </div>
          </div>
        </main>
      ) : (
        <main className='m-8'>
          <VendorDetails
            vendDetails={vendDetails}
            newStat={newStat}
            setPage={setPage}
          />
        </main>
      )}

      <div className={`${isEdit ? "category" : "category hider"} overflow`}>
        <div className='bg-white shadow-md rounded-md p-4 w-[100%] sm:w-[70%]'>
          <img
            className='bg-[#7805A7] p-2 ml-auto rounded-md'
            src={close}
            alt=''
            onClick={() => setIsEdit(false)}
          />
          <h1 className='text-center text-xl sm:text-2xl font-semibold my-3'>
            Edit Vendor Details
          </h1>
          <form action='' className='sm:w-4/6 mx-auto'>
            <label htmlFor='category' className='text-sm'>
              Email
            </label>
            <input
              type='email'
              id='category'
              className='block bg-gray-100 p-2 rounded-md my-2 w-full text-sm'
              placeholder='New email'
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <label htmlFor='tel' className='text-sm'>
              Mobile No.
            </label>
            <input
              type='tel'
              id='tel'
              className='block bg-gray-100 p-2 rounded-md my-2 w-full text-sm'
              placeholder='New Phone number'
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
            <label htmlFor='name' className='text-sm'>
              Business Name
            </label>
            <input
              type='text'
              id='name'
              className='block bg-gray-100 p-2 rounded-md my-2 w-full text-sm'
              placeholder='New Business Name'
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
            />
            <button
              className='bg-[#7805A7] text-white rounded-md text-sm md:text-base py-4 px-8 font-normal tracking-wider w-full my-2'
              onClick={editVendor}
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Vendor;
