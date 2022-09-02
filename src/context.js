import { useContext, createContext, useState } from "react";
import { store, notifications, vendors, users } from "./data";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [items, setItems] = useState({
    title: "",
    price: "",
    img: "",
    weight: "",
    qty: "",
    color: "",
    customer: "",
    vendor: "",
    address: "",
    orderStatus: "",
    orderDate: "",
    deliveryDate: "",
  });
  const [details, setDetails] = useState(false);
  const [base, setBase] = useState(0);
  const [notificationItems, setNotificationItems] = useState(notifications);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [business, setBusiness] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [allVendors, setAllVendors] = useState(vendors);
  const [page, setPage] = useState(true);
  const [delStatus, setDelStatus] = useState("");
  const [catTitle, setCatTitle] = useState("");

  const [vendDetails, setVendDetails] = useState({});
  const [newStat, setNewStat] = useState("");

  const edit = (id) => {
    const selectedItem = vendors.find((item) => item.id === id);
    setBusiness(selectedItem.busName);
    setTel(selectedItem.tel);
    setMail(selectedItem.email);
    setEditId(id);
  };

  const editVendor = (e) => {
    e.preventDefault();
    setIsEdit(false);
    if (business && tel && mail) {
      const newVendors = vendors.map((vend) => {
        if (vend.id === editId) {
          return { ...vend, busName: business, tel, email: mail };
        }
        return vend;
      });
      setAllVendors(newVendors);
    }
  };
  return (
    <AppContext.Provider
      value={{
        store,
        details,
        setDetails,
        items,
        setItems,
        base,
        setBase,
        notificationItems,
        setNotificationItems,
        vendors,
        users,
        edit,
        editVendor,
        isEdit,
        editId,
        isEdit,
        allVendors,
        mail,
        setMail,
        tel,
        setTel,
        business,
        setBusiness,
        setEditId,
        setIsEdit,
        page,
        setPage,
        vendDetails,
        setVendDetails,
        newStat,
        setNewStat,
        delStatus,
        setDelStatus,
        catTitle,
        setCatTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
