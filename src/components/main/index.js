import { useEffect } from "react";
import Dash from "./dash";
import { useGlobalContext } from "../../context";
import Order from "./order";
import Category from "./category";
import Notification from "./notification";
import Vendor from "./vendor";
import User from "./user";
import { Delivery } from "./delivery";

const Main = () => {
  const { base, setDetails } = useGlobalContext();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setDetails(false);
  }, [base]);

  return (
    <main className='md:w-[75%] ml-auto mb-20 md:mb-5'>
      {base === 0 && <Dash />}
      {base === 1 && <Order />}
      {base === 2 && <Category />}
      {base === 3 && <Notification />}
      {base === 4 && <Vendor />}
      {base === 5 && <User />}
      {base === 6 && <Delivery />}
    </main>
  );
};

export default Main;
