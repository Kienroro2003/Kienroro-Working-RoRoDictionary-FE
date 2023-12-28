import React, { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
