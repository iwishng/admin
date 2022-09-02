import { useGlobalContext } from "../../context";
import { useState } from "react";
import green from "../../images/dotg.png";
import yellow from "../../images/doty.png";
import red from "../../images/dotr.png";
import AllUsers from "./allUsers";
import MainUser from "./mainUser";

const User = () => {
  const { page, setPage } = useGlobalContext();

  const [stat, _] = useState("");

  let statusImg;
  if (stat === "inactive") {
    statusImg = yellow;
  } else if (stat === "active") {
    statusImg = green;
  } else if (stat === "blocked") {
    statusImg = red;
  }

  return (
    <>
      {page && <AllUsers setPage={setPage} />}
      {!page && <MainUser />}
    </>
  );
};

export default User;
