import React from "react";
import Sidebar from "../components//shared/sidebar";
import Navbar from "../components/shared/navbar";
import Main from "../components/main/index.js";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Main />
    </>
  );
};

export default Dashboard;
