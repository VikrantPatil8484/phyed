// import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";

const Home = () => {
  const allCourseList = [
    {
      id: 1,
      name: 'PYTHON',
      learn: 'Learn Python',
      path: '/python/intro',
      description: 'A Web Server Programming Language'
    },
    {
      id: 2,
      name: 'C++',
      learn: 'Learn C++',
      path: '/cpluspage/cpp-intro',
      description: 'A programming language'
    },
    {
      id: 3,
      name: 'ALGORITHM',
      learn: 'Learn Algorithm',
      path: '/algorithm/sorting-intro',
      description: 'Programming language for Automation'

    },
    {
      id: 4,
      name: 'IoT',
      learn: 'Learn IoT',
      path: '/IoT/IoT-Intro-Definition',
      description: 'Programming language for Automation'
    },
    {
      id: 5,
      name: "NumPy",
      learn: 'Learn Numpy',
      path: "/NumPy/NumPy-Introduction",
      description: 'A Programming language'
    },
    {
      id:6,
      name:"Pandas",
      learn:"Learn Pandas",
      path:"/Pandas/Pandas-Introduction",
      description:"A Python Library to Work with Data"
    }
  ]



  return (
    <div className='text-white font-monset bg-white dark:bg-slate-900 h-full pb-10'>
        <section className='h-auto flex flex-col items-center  font-rigtheous pt-20 bg-white dark:bg-slate-900'>
        <h5 className='text-color-mode font-bold text-3xl md:text-4xl' style={{ marginTop: '-15px' }}>Welcome to Phyed</h5>
          {/* <h5 className='font-semibold pt-6 text-sm md:text-xl text-darkTerra capitalize'>where programming starts</h5>
          <div className='border-2 w-fit rounded-full mt-8 overflow-x-hidden flex items-center '>
            <input type="text" placeholder='Search a course e.g python' className='pl-4 py-2 placeholder:text-sm md:w-96 outline-none border-0 text-color-mode bg-gray-600' />
            <div className='py-2 px-4 cursor-pointer'>
              < FaSearch className='text-color-mode' />
            </div>
          </div> */}
        </section>
        <section className='mx-6 ld:mx-16 mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {
            allCourseList.map((course) => {
              return (
                <article key={course.id} className='bg-gray-500 font-rigtheous text-center py-10 h-auto w-auto rounded-lg' style={{ backgroundColor: '#60A5FA' }}>
                  <h3 className='pt-2 mb-4 text-xl md:text-2xl font-bold'>{course.name}</h3> 
                  <p className='font-semibold mb-10'>{course.description}</p>
                  <Link to={course.path} className='bg-red-400 rounded-lg px-4 py-2' style={{ backgroundColor: '#FA9F60' }} >{course.learn}</Link>               
                </article>
              )
            })
          }
        </section>
     
    </div>
  );
};

export default Home;
