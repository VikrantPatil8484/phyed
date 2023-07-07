import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {  MdOutlineKeyboardArrowRight } from 'react-icons/md';
import pythonlist from './pythonData';
import { BiMenu } from 'react-icons/bi'
import CoursesList from './CoursesList';
import SubMenu from './SubMenu';


const PythonContentSidebar = ({children}) => {

    const [ open, setOpen] = useState(false);
    const [fix, setFix] = useState(false);

    const setFixedSidebar = () => {
        if(window.scrollY >= 50) {
            setFix(true);
        }else {
            setFix(false)
        }
    }
    
    window.addEventListener("scroll", setFixedSidebar)

  return (
    <div>
        <section className='h-12 top-0 sticky w-full z-10 bg-blue-600 text-white dark:bg-blue-900 flex items-center' >
            < BiMenu className='text-2xl ml-2 md:hidden' onClick={() => setOpen(!open)} />
            < CoursesList />
        </section>
        <div className='flex h-full'>
            <section 
                className={ fix ? 
                'bg-white dark:bg-slate-800 text-color-mode fixed top-12 h-[92%] mb-10 hidden md:block overflow-y-auto'
                : 
                'bg-white dark:bg-slate-800 text-color-mode fixed top-32 h-[80%] mb-10 hidden md:block overflow-y-auto'
                }
            >
                    <h4 className='py-2 text-xl px-2'>Python Tutorial</h4>
                {
                    pythonlist.map((item, id) => {  
                        if(item.subRoutes) {
                            return <SubMenu item={item} key={item.name} setOpen={setOpen} />
                        }
                        return (
                            (
                                <NavLink to={item.path} key={id} className='flex w-64 text-base items-center my-2 py-1.5 pl-2  hover:text-blue-400 hover:bg-white'  activeclassName="active">
                                    <div className=''>{item.name}</div>
                                    {/* <div className=' md:mr-2 text-xs md:text-xl'>< MdOutlineKeyboardArrowRight /></div> */}
                                </NavLink>
                            )
                        )
                    }) 
                }
                </section>
                <section className='mx-4 md:ml-[17rem] lg:ml-[18rem] w-inherit md:w-3/5 my-10 rounded-xl text-color-mode bg-lightModeElement/20 dark:bg-darkModeElement'>
                    {children}
                </section>
                <section className='hidden lg:block text-red-600 mt-14'>
                    <h1 className=''>Place Ads Here</h1>
                </section>
        </div>
        {/* PopUp menu */}  
        <div >
            {
                open &&
                <section>
                    <div className='absolute h-[600px] top-32 left-0 bg-slate-400 overflow-y-scroll'>
                        {
                            pythonlist.map((item, id) => {  
                                if(item.subRoutes) {
                                    return <SubMenu item={item} key={item.name} setOpen={setOpen}  />
                                }
                                return (
                                    (
                                        <NavLink to={item.path} key={id} className='flex w-64 items-center my-2 py-1.5 pl-2 text-white hover:text-blue-400 hover:bg-white' onClick={() => setOpen(false)}  activeclassName="active">
                                            <div className=''>{item.name}</div>
                                            <div className=' md:mr-2 text-xs md:text-xl'>< MdOutlineKeyboardArrowRight /></div>
                                        </NavLink>
                                    )
                                )
                            })
                        }
                        </div>
                </section>
            }
        </div>
   
    </div>
  )
}

export default PythonContentSidebar;