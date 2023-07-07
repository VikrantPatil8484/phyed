import React from 'react'
import JobsList from './JobsList'
import JobsSideBar from '../components/JobsSideBar'
import { Outlet } from 'react-router-dom'

const Home = () => {
 
  return (
    <div>
      < JobsSideBar>
        < Outlet />
      </JobsSideBar>
    </div>
  )
}

export default Home