import React from "react";
import { Outlet } from "react-router-dom";
import PandasContentSidebar from "../components/PandasContentSidebar";

const PandasCoursePage = () => {
  return (
    <div>
      <PandasContentSidebar>
        <Outlet />
      </PandasContentSidebar>
    </div>
  );
};

export default PandasCoursePage;
