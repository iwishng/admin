import React from "react";
import logo from "../../images/logo.png";
import dash from "../../images/Vector-5.png";
import order from "../../images/Vector-6.png";
import cat from "../../images/Vector-7.png";
import not from "../../images/Vector-8.png";
import ven from "../../images/Vector-9.png";
import user from "../../images/Vector-10.png";
import truck from "../../images/truck.png";
import { useGlobalContext } from "../../context";
// import { TbTruckDelivery } from "react-icons/tb";

const sideMenus = [
  { name: "dashboard", img: dash },
  { name: "orders", img: order },
  { name: "categories", img: cat },
  { name: "notifications", img: not },
  { name: "vendors", img: ven },
  { name: "users", img: user },
  { name: "delivery", img: truck },
];

const Sidebar = () => {
  const { base, setBase, setPage, setIsEdit } = useGlobalContext();
  return (
    <aside className='bg-[#080016] w-full md:w-[25%] p-4 md:p-8 md:pr-0 pr-0 md:min-h-screen fixed bottom-0 md:top-0  z-10 overflow'>
      <img className='hidden md:block w-20 mb-20' src={logo} alt='logo' />
      <div className='text-white flex md:flex-col justify-between'>
        {sideMenus.map(({ name, img }, i) => {
          return (
            <div
              className={`${
                base === i
                  ? "bg-gray-800 border-r-0 border-b-4 md:border-b-0 md:border-r-8 border-[#7805A7]"
                  : ""
              } flex gap-4 p-3 md:p-5 select-none cursor-pointer transition hover:bg-gray-800 md:hover:border-r-8 `}
              key={i}
              onClick={() => {
                setBase(i);
                setPage(true);
                setIsEdit(false);
              }}
            >
              <img className='w-3 md:w-4 object-contain' src={img} alt='' />
              <h5 className='hidden md:block capitalize text-md text-center tracking-wide'>
                {name}
              </h5>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
