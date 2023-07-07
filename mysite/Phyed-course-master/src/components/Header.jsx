import React, { useState, useEffect, useRef } from "react";
import Toggle from "./Toggle";
import { BsFillCaretDownFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import PhyedLogo from "../assests/phyed.png";
import pythonlist from "./pythonData";


function Header() {

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
      id:6,
      name:"Pandas",
      path:"/Pandas/Pandas-Introduction",
    }
  ];


  const [showCourse, setShowCourse] = useState(false);
  const [open, setOpen] = useState(false);

  let courseRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!courseRef.current.contains(e.target)) {
        setShowCourse(false);
      }
    });
  });

  return (
    <div ref={courseRef}>
      <section
        className={`flex justify-between text-color-mode p-4 bg-blue-400 dark:bg-slate-800 shadow-xl`}
      >
        <div className="flex items-center">
          <a href="/learn/"><img src={PhyedLogo} alt="phyedLogo" className="h-10 w-auto" />
          </a>
          <a href="/home/" style={{color:"white", fontWeight: "bold"}} className="ml-5">Dashboard
          </a>
          {/* <h4 className='ml-4 flex items-center cursor-pointer' onClick={() => setShowCourse(true)}>Courses <BsFillCaretDownFill className='ml-1.5 mt-1.5' /></h4> */}
          <h4
            className="ml-4 flex items-center cursor-pointer md:hidden"
            onClick={() => setShowCourse(true)
          }
          >
            Courses <BsFillCaretDownFill className="ml-1.5 mt-1.5" />
          </h4>
        </div>
        <Toggle />
      </section>
      {open && (
        <section>
          <div className="absolute h-[550px] top-32 left-0 bg-slate-400 overflow-y-scroll">
            {pythonlist.map((item, id) => {
              return (
                <NavLink
                  to={item.path}
                  key={id}
                  className="flex w-64 items-center my-2 py-1.5 pl-2 text-white hover:text-blue-400 hover:bg-white"
                  onClick={() => setOpen(false)}
                  activeclassName="active"
                >
                  <div className="">{item.name}</div>
                  <div className=" md:mr-2 text-xs md:text-xl">
                    <MdOutlineKeyboardArrowRight />
                  </div>
                </NavLink>
              );
            })}
          </div>
        </section>
      )}
      {showCourse && (
        <section className="bg-blue-400 dark:bg-slate-800 text-white absolute z-20 top-20 left-1.5 h-auto w-auto p-4 m-2 rounded-lg">
          <div className="flex justify-between">
            <h3 className="text-2xl">Tutorials</h3>
            <p
              className="text-3xl text-white cursor-pointer hover:text-red-500"
              onClick={() => setShowCourse(false)}
            >
              <AiFillCloseCircle />{" "}
            </p>
          </div>
          <div className="pt-8 grid grid-cols-3">
            {
              allCourseList.map((course) => {
                return (
                  <Link
                    to={course.path}
                    key={course.id}
                    onClick={() => setShowCourse(false)}
                    className="font-semibold mb-4 hover:color-red-400 hover:rounded-md"
                  >
                    {course.name}
                  </Link>

                )
              })
            }
            {/* <Link
              to="/python/intro"
              onClick={() => setShowCourse(false)}
              className=" font-semibold mr-4 hover:bg-red-400 hover:py-1.5 hover:px-3 hover:rounded-md"
            >
              Python
            </Link> */}
            {/* <Link
              to="/algorithm/sorting-intro"
              onClick={() => setShowCourse(false)}
              className="font-semibold mr-4 hover:bg-red-400 hover:py-1.5 hover:px-3 hover:rounded-md"
            >
              Algorithm
            </Link>
            <Link
              to="/IoT/IoT-Intro-Definition"
              onClick={() => setShowCourse(false)}
              className="font-semibold mr-4 hover:bg-red-400 hover:py-1.5 hover:px-3 hover:rounded-md"
            >
              IoT
            </Link> */}
            {/* <Link
              to="/NumPy/NumPy-Introduction"
              onClick={() => setShowCourse(false)}
              className="font-semibold mr-4 hover:bg-red-400 hover:py-1.5 hover:px-3 hover:rounded-md"
            >
              NumPy
            </Link> */}
          </div>
        </section>
      )}
    </div>
  );
}

export default Header;
