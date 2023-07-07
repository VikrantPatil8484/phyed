import React from 'react'
import JobsSideBar from '../components/JobsSideBar';
import { Outlet } from 'react-router-dom';

const JobsList = () => {
  return (
    <div>
      < JobsSideBar >
        <Outlet />
      </JobsSideBar>
    </div>
  )
}

export default JobsList;