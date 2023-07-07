import React from "react";
import { NavLink } from "react-router-dom";

const CoursesList = () => {
  const allCourseList = [
    {
      id: 1,
      name: "PYTHON",
      path: "/python/intro",
    },
    {
      id: 2,
      name: "C++",
      path: "/cpluspage/cpp-intro",
    },
    {
      id: 3,
      name: "ALGORITHM",
      path: "/algorithm/sorting-intro",
    },
    {
      id: 4,
      name: "IoT",
      path: "/IoT/IoT-Intro-Definition",
    },
    {
      id: 5,
      name: "NumPy",
      path: "/NumPy/NumPy-Introduction",
    },
    {
      id: 6,
      name: "Pandas",
      path: "/Pandas/Pandas-Introduction",
    },
  ];

  return (

    <div>
        <section className='flex hidden md:block md:flex text-white text-sm md:text-base md:ml-4 '>
          {
            allCourseList.map((item, id) => {
              return (
                <div key={id} className=''>
                  <NavLink to={item.path} className='px-3 py-1 rounded-md'>{item.name}</NavLink>
                </div>
              )
            })
          }
        </section>
        <section className='flex text-white text-sm md:text-base ml-4 md:hidden'>
          {
            allCourseList.slice(0, 2).map((item, id) => {
              return (
                <div key={id} className=''>
                  <NavLink to={item.path} className='px-3 py-1 rounded-md'>{item.name}</NavLink>
                </div>
              )
            })
          }
        </section>

    </div>
  );
};

export default CoursesList;
