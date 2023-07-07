import React from 'react';
import PythonContentSidebar
 from '../components/PythonContentSidebar';
import { Outlet } from 'react-router-dom';

const PythonCoursePage = () => {
  return (
    <div>
        <PythonContentSidebar>
            < Outlet />
        </PythonContentSidebar>
    </div>
  )
}

export default PythonCoursePage