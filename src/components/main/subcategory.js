import { useState } from "react";
import more from "../../images/more.png";
import close from "../../images/close.png";
import { useGlobalContext } from "../../context";

const Subcategory = ({
  cat,
  id,
  img,
  editCategory,
  category,
  setCategories,
  i,
}) => {
  const { setCatTitle, setPage } = useGlobalContext();
  const [pop, setPop] = useState(false);
  const [del, setDel] = useState(false);
  return (
    <div className='relative w-full'>
      <img
        src={img}
        className='w-full h-52 object-cover'
        alt=''
        onClick={() => {
          setCatTitle(cat);
          setPage(false);
        }}
      />
      <h4 className='text-center capitalize font-semibold text-sm my-2'>
        {cat}
      </h4>
      <div
        className={`${
          pop ? "p-4 w-[70%]" : ""
        } bg-black  rounded-md text-gray-50 text-xs cursor-pointer absolute top-1 right-1`}
      >
        <img
          className={`${pop ? "p-2" : "p-4 py-5"} ml-auto`}
          src={pop ? close : more}
          alt='more'
          onClick={() => setPop(!pop)}
        />
        {pop && (
          <div className=''>
            <h4
              className='my-6'
              onClick={() => {
                editCategory(id);
                setPop(false);
              }}
            >
              Edit Category
            </h4>

            <h4
              className='my-6'
              onClick={() => {
                {
                }
                setPop(false);
                setDel(true);
              }}
            >
              Delete
            </h4>
          </div>
        )}
      </div>
      <div className={`${del ? "category" : "category hider"} overflow z-10`}>
        <div className='bg-white shadow-md rounded-md p-10 text-center'>
          <img
            className='bg-[#7805A7] p-2 ml-auto rounded-md'
            src={close}
            alt=''
            onClick={() => setDel(false)}
          />
          <h1 className='text-center text-xl sm:text-2xl my-3 mt-10'>
            Are you sure you want to delete?
          </h1>
          <div className='flex space-x-4 items-item justify-center'>
            <button
              className='bg-red-500 text-white rounded-md text-sm md:text-base py-3 px-8 font-normal tracking-wider w-fit my-2'
              onClick={() => {
                setCategories(category.filter((_, index) => index !== i));
                setDel(false);
              }}
            >
              Yes
            </button>
            <button
              className='bg-[#7805A7] text-white rounded-md text-sm md:text-base py-3 px-8 font-normal tracking-wider w-fit my-2'
              onClick={() => {
                setDel(false);
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

export default Subcategory;
