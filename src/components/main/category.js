import { useState } from "react";
import phone from "../../images/phone.png";
import shoe from "../../images/shoe.png";
import clothing from "../../images/clothing.png";
import watch from "../../images/watch.png";
import Subcategory from "./subcategory";
import close from "../../images/close.png";
import upload from "../../images/upload.png";
import { useGlobalContext } from "../../context";
import TargetCategory from "./targetCategory";

const Category = () => {
  const [catshow, setCatshow] = useState(false);
  const { page, setPage } = useGlobalContext();
  const category = [
    { cat: `clothing`, img: clothing, id: 1 },
    { cat: `gadgets`, img: phone, id: 2 },
    { cat: `wrist watches`, img: watch, id: 3 },
    { cat: `men's shoe`, img: shoe, id: 4 },
  ];
  const [categories, setCategories] = useState(category);
  const [input, setInput] = useState("");
  const [catImg, setcatImg] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const imageHandler = (e) => {
    const [file] = e.target.files;
    setcatImg(URL.createObjectURL(file));
  };
  const addCat = (e) => {
    e.preventDefault();
    setCatshow(false);
    setInput("");
    setcatImg("");
    if (isEdit && input && catImg) {
      const newCategories = categories.map((newCat) => {
        if (newCat.id === editId) {
          return { ...newCat, cat: input, img: catImg };
        }
        return newCat;
      });
      setCategories(newCategories);
    } else if (input && catImg) {
      categories.push({ cat: input, img: catImg });
    }
  };

  const editCategory = (id) => {
    setIsEdit(true);
    setCatshow(true);
    setEditId(id);
    const selectedItem = categories.find((item) => item.id === id);
    setInput(selectedItem.cat);
    setcatImg(selectedItem.img);
  };

  return (
    <>
      {page && (
        <div className='m-8 text-gray-800'>
          <div className='flex flex-col sm:flex-row justify-between '>
            <h1 className='font-semibold text-xl  sm:text-2xl'>
              Product Categories
            </h1>
            <button
              className='bg-[#7805A7] text-white rounded-md text-sm md:text-base py-4 px-8 font-normal tracking-wider w-fit my-2'
              onClick={() => {
                setCatshow(true);
                setIsEdit(false);
              }}
            >
              Add Category
            </button>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-10 my-8'>
            {categories.map((cat, i) => {
              return (
                <Subcategory
                  key={cat.id}
                  i={i}
                  {...cat}
                  setCategories={setCategories}
                  category={categories}
                  editCategory={editCategory}
                />
              );
            })}
          </div>
          <div
            className={`${catshow ? "category" : "category hider"} overflow`}
          >
            <div className='bg-white shadow-md rounded-md p-4'>
              <img
                className='bg-[#7805A7] p-2 ml-auto rounded-md'
                src={close}
                alt=''
                onClick={() => {
                  setCatshow(false);
                  setInput("");
                  setcatImg(null);
                }}
              />
              <h1 className='text-center text-xl sm:text-2xl font-semibold my-3'>
                {isEdit ? "Edit Category" : "New Category"}
              </h1>
              <form action='' className='sm:w-4/6 mx-auto'>
                <label htmlFor='category' className='font-semibold text-sm'>
                  Name
                </label>
                <input
                  type='text'
                  className='block bg-gray-100 p-2 rounded-md my-2 w-full font-sm'
                  placeholder='Name of category'
                  value={input}
                  onChange={inputHandler}
                />
                <div className='text-center bg-gray-100 my-2 p-4'>
                  <h2 className='font-semibold text-sm'>Upload Your Image</h2>
                  <p className='text-sm my-2'>
                    Upload the picture of the product category. Accepted format
                    : .jpg, .png, .jpeg
                  </p>
                  <div className='bg-purple-300 m-2 p-4 rounded-md'>
                    <label htmlFor='image' className='cursor-pointer text-sm'>
                      <img
                        src={catImg || upload}
                        className='mx-auto my-3 w-10'
                        alt=''
                      />
                      <input
                        type='file'
                        placeholder='Browse to upload your file'
                        className='hidden'
                        id='image'
                        value={""}
                        onChange={imageHandler}
                      />
                      {!catImg && " Browse to upload your file"}
                      {catImg && <h4>Image uploaded</h4>}
                    </label>
                  </div>
                </div>
                <button
                  className='bg-[#7805A7] text-white rounded-md text-sm md:text-base py-4 px-8 font-normal tracking-wider w-full my-2'
                  onClick={addCat}
                >
                  {isEdit ? "Update Category" : "Add Category"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {!page && <TargetCategory />}
    </>
  );
};

export default Category;
