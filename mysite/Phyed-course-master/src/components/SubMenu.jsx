import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SubMenu = ({ item, setOpen }) => {
  const [ showItems, setShowItems ] = useState(false);
//   const [ open, setOpen] = useState(false);

  return (
    <div>
        <p 
          className='pl-2 font-bold cursor-pointer w-64 items-center my-2 py-1.5 text-color-mode' 
          onClick={() =>{ 
            setShowItems(!showItems)   
        }}
        >
            {item.name}
        </p>
        {
            showItems && 
            <div>
                {item.subRoutes.map((subRoute) => (
                    <NavLink to={subRoute.path} key={subRoute.name} className='flex w-64 items-center my-2 py-1.5 pl-6  hover:text-blue-400 hover:bg-white' onClick={() => setOpen(false)}  activeclassName="active">
                        {subRoute.name}
                    </NavLink>
                )) }
            </div>
        }
    </div>
  )
}

export default SubMenu