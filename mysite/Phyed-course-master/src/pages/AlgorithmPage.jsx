import React from 'react';
import AlgorithmContentSidebar from '../components/AlgorithmContentSidebar';
import { Outlet } from 'react-router';

const AlgorithmPage = () => {
  return (
    <div>
        <AlgorithmContentSidebar>
            < Outlet />
        </AlgorithmContentSidebar>
    </div>
  )
}

export default AlgorithmPage