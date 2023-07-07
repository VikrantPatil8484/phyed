import React from 'react';
import IoTContentSidebar
 from '../components/IoTContentSidebar';
import { Outlet } from 'react-router-dom';

const IoTCoursePage = () => {
  return (
    <div>
        <IoTContentSidebar>
            < Outlet />
        </IoTContentSidebar>
    </div>
  )
}

export default IoTCoursePage