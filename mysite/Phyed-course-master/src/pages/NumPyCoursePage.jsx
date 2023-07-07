import React from "react";
import NumPyContentSidebar from "../components/NumPyContentSidebar";
import { Outlet } from "react-router-dom";

const NumPyCoursePage = () => {
  return (
    <div>
      <NumPyContentSidebar>
        <Outlet />
      </NumPyContentSidebar>
    </div>
  );
};

export default NumPyCoursePage;
