import React from 'react'
import ContentSidebar from '../components/CplusContentSidebar'
import { Outlet } from 'react-router-dom'

const CoursesPage = () => {
  return (
    <div className=''>
        <ContentSidebar>
            <Outlet/>
        </ContentSidebar> 
    </div>
  )
}

export default CoursesPage