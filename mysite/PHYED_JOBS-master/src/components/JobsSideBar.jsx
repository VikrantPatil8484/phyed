import React, { useState} from 'react';
import Sailor from '../assests/sailor.png';
import { HiUsers, HiOutlineClock } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import listOfJobs from './jobsdata'
import { BiLinkExternal, BiFilter } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa';


const JobsSideBar = ({children}) => {

    const [ showJob, setShowJob ] = useState(false);
    const [fix, setFix] = useState(false);
    

    const setFixedSidebar = () => {
        if(window.scrollY >= 50) {
            setFix(true);
        }else {
            setFix(false)
        }
    }
    
    window.addEventListener("scroll", setFixedSidebar);

  return (
    <div>
       <section className='h-16 top-0 sticky text-xs md:text-sm w-full z-20 px-4 md:px-20 bg-blue-600 text-white dark:bg-blue-900 flex items-center'>
           <div className='border-r pr-3 cursor-pointer'>
                <p className='bg-slate-600 px-3 py-1.5 rounded-2xl flex items-center'>
                    <span>All Opportunies</span>
                    < FaAngleDown className='ml-2 pt-1 text-xl ' />
                </p>
           </div>
           <div className='border-r px-3 cursor-pointer'>
            <p className='border border-gray-200 px-3 py-1 rounded-2xl flex items-center'>
                <span>Sort By</span> 
                < FaAngleDown className='ml-2 pt-1 text-xl' />
            </p>
           </div>
           <div className=' px-3 cursor-pointer'>
            <p className='border-2 border-gray-400 px-3 py-1 rounded-2xl flex items-center'>
                <span>All Filters</span>
                < BiFilter className='ml-2 pt-1 text-2xl' />
            </p>
           </div>
           <div className=' px-3 hidden lg:block cursor-pointer'>
            <p className='border-2 border-gray-400 px-6 py-1 rounded-2xl flex items-center '>
                Status
                < FaAngleDown className='ml-2 pt-1 text-xl' />
            </p>
           </div>
           <div className='px-3 hidden lg:block cursor-pointer'>
                <p className='border-2 border-gray-400 px-4 py-1 rounded-2xl flex items-center '>
                    Eligibility
                    < FaAngleDown className='ml-2 pt-1 text-xl' />
                </p>
           </div>
            <div className='px-3 hidden lg:block cursor-pointer'>
                <p className='border-2 border-gray-400 px-3 py-1 rounded-2xl flex items-center'>
                    Category
                    < FaAngleDown className='ml-2 pt-1 text-xl' />
                </p>
            </div>
            <div className='px-3 ml-32 cursor-pointer hidden lg:block'>
                <p className='border-2 border-gray-400 px-3 py-1 rounded-2xl flex items-center'>
                    Live Only
                </p>
            </div>
       </section>
      <div className='flex h-full'>
        <section 
         className= {fix ? 
            'hidden md:block md:w-[33%] p-2 top-16 text-color-mode fixed h-[90%] overflow-y-auto' 
            : 
            'hidden md:block md:w-[33%] p-2 text-color-mode fixed  h-[78.5%] overflow-y-auto'}
        >
            {
                listOfJobs.map((job, index) => {
                    return (
                        <Link to={`${job.id}`} key={index} onClick={() => setShowJob(true)}>
                            <div className=' bg-white dark:bg-slate-700 overflow-x-hidden mb-2 p-2 border-2 border-blue-400 text-color-mode rounded-lg'>
                              <article className='flex  justify-between'>
                                <div className='flex items-center'>
                                    <div>
                                        <img src={job.image} alt="" className='h-14 w-20 rounded-md' />
                                    </div>
                                    <div className='text-left ml-3'>
                                        <h5 className=' font-bold'>{job.name}</h5>
                                        <p className='block'>{job.company}</p>
                                    </div>
                                </div>
                                <div className='md:hidden'>
                                    {/* <Link to={`/jobs/${job.id}`}> < BiLinkExternal className='4xl' /> </Link>  */}
                                </div>

                              </article>
                                {/* Categories */}
                                <div className='pt-6 flex flex-wrap gap-2'>
                                    {job.category.map((categories) => {
                                        return <p className='border w-fit rounded-lg py-1.5 px-3 text-xs md:text-base mb-1 '>{categories}</p>
                                    })}
                                    
                                </div>
                                {/* Number Applied & Days left */}
                                <section className='flex'>
                                    <div className='mt-6 flex flex-wrap pr-2  h-8 border-r-2 border-gray-500'>
                                        <div className='flex items-center'>
                                            < HiUsers className='text-xl ' />
                                            <p className='ml-1 text-sm font-monset font-semibold'>{job.impressions} Applied</p>
                                        </div>
                                    </div>
                                    <div className='pt-6 flex flex-wrap pl-2'>
                                        <div className='flex items-center'>
                                            < HiOutlineClock className='text-xl ' />
                                            <p className='ml-1 text-sm font-monset font-semibold'>4 days left</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </Link>
                    )
                })
            }
            
        </section>
        <section className='w-full md:hidden p-2 text-color-mode sticky'>
            {
                listOfJobs.map((job, index) => {
                    return (
                        <Link to={`/jobs/${job.id}`} key={index} onClick={() => setShowJob(true)}>
                            <div className=' bg-white dark:bg-slate-700 overflow-x-hidden mb-2 p-2 border-2 border-blue-400 text-color-mode rounded-lg'>
                              <article className='flex  justify-between'>
                                <div className='flex items-center'>
                                    <div>
                                        <img src={job.image} alt="" className='h-14 w-20 rounded-md' />
                                    </div>
                                    <div className='text-left ml-3'>
                                        <h5 className=' font-bold'>{job.name}</h5>
                                        <p className='block'>{job.company}</p>
                                    </div>
                                </div>
                                <div className='md:hidden'>
                                    {/* <Link to={`/jobs/${job.id}`}> < BiLinkExternal className='4xl' /> </Link>  */}
                                </div>

                              </article>
                                {/* Categories */}
                                <div className='pt-6 flex flex-wrap gap-2'>
                                    {job.category.map((categories) => {
                                        return <p className='border w-fit rounded-lg py-1.5 px-3 text-xs md:text-base mb-1 '>{categories}</p>
                                    })}
                                    
                                </div>
                                {/* Number Applied & Days left */}
                                <section className='flex'>
                                    <div className='mt-6 flex flex-wrap pr-2  h-8 border-r-2 border-gray-500'>
                                        <div className='flex items-center'>
                                            < HiUsers className='text-xl ' />
                                            <p className='ml-1 text-sm font-monset font-semibold'>{job.impressions} Applied</p>
                                        </div>
                                    </div>
                                    <div className='pt-6 flex flex-wrap pl-2'>
                                        <div className='flex items-center'>
                                            < HiOutlineClock className='text-xl ' />
                                            <p className='ml-1 text-sm font-monset font-semibold'>4 days left</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </Link>
                    )
                })
            }
            
        </section>
        {
            showJob && 
            <section className='w-[60%] hidden md:block my-4 ml-[33rem]'>
                {children}
            </section>
        }
      </div>
    </div>
  )
}

export default JobsSideBar