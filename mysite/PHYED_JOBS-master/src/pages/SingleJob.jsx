import React from "react";
import { Link, useParams } from "react-router-dom";
import listOfJobs from "../components/jobsdata";
import Sailor from "../assests/sailor.png";
import { BsBuildings, BsEyeFill } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoMdTime } from 'react-icons/io'
import { BiCalendar, BiLinkExternal } from 'react-icons/bi' 


const SingleJob = () => {
  const { id } = useParams();
  // console.log(listOfJobs)

  return (
    <div >
      <section >
        {listOfJobs
          .filter((select) => select.id == id)
          .map((select, index) => {
            return (
              <div key={index}>
                <section className="bg-white dark:bg-slate-700 rounded-lg overflow-x-hidden p-4">
                  <article className="flex justify-between">
                    <div className="flex items-center">
                      <img src={select.image} alt="" className="h-32 w-40 rounded-md" />
                      <div className="ml-3">
                        <h3 className="text-2xl font-bold ">{select.name}</h3>
                        <div className="flex items-center pt-2">
                          <BsBuildings className="text-xl" />
                          <h5 className="ml-2">{select.company}</h5>
                        </div>
                        <div className="flex items-center pt-2">
                          <VscLocation className="text-2xl" />
                          <h5 className="ml-2">{select.location}</h5>
                        </div>
                      </div>
                    </div>
                    <Link to={`/jobs/${select.id}`}> < BiLinkExternal className='4xl' /> </Link> 
                  </article>
                  <div className="pt-4 pb-8">
                    <p className="flex">
                      {select.category.map((single) => {
                        return (
                          <p className="bg-gray-200 text-gray-600 w-fit mr-2 px-2 py-1 rounded-md">
                            {single}
                          </p>
                        );
                      })}
                    </p>
                  </div>
                <div className="border-t w-full"></div>
                <section className="p-4 font-hanek flex justify-between">
                  <div className="flex">
                    <div className="mt-4 mr-4">
                      <div className="border  w-fit py-2 px-3 rounded-lg cursor-pointer hover:border-0 hover:bg-slate-500 hover:text-blue-300">
                        <div className="flex items-center">
                          <i class="fa-regular fa-heart text-xl"></i>
                          <p className="ml-2 text-sm">+ Watchlist</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 ">
                      <div className="border  w-fit py-3 px-3 rounded-lg cursor-pointer hover:border-0 hover:bg-slate-500 hover:text-blue-300">
                        <div className="flex items-center">
                          {/* <i class="fa-regular fa-heart text-xl"></i> */}
                          <AiOutlineCalendar className="text-xl" />
                          <p className="ml-2 text-sm">+ Calendar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link to={`/jobs/${select.id}`} className="bg-blue-600 text-white px-16 py-3 rounded-lg">
                      Apply
                    </Link>
                  </div>
                </section>
                </section>
                <section className="bg-white dark:bg-slate-700 rounded-lg overflow-x-hidden mt-4">
                  <div className="p-4 flex">
                    <article className="flex items-center text-sm mr-12">
                      <p className="border rounded-md w-fit p-2 text-blue-400">  < IoMdTime className="text-xl" /> </p>
                      <div className="ml-2">
                        <p>Application Deadline</p>
                        <p>4 days left</p>
                      </div>
                    </article>
                    <article className="flex items-center text-sm">
                      <p className="border rounded-md w-fit p-2 text-blue-400">  < BsEyeFill className="text-xl" /> </p>
                      <div className="ml-2">
                        <p>Impressions</p>
                        <p>2,397</p>
                      </div>
                    </article>
                  </div>
                </section>
                <section className="bg-white dark:bg-slate-700 rounded-lg overflow-x-hidden mt-4">
                  <div className="p-4">
                    <h5 className="font-semibold">Eligibility</h5>
                    <p className="pt-2">{select.eligibility}</p>
                  </div>
                </section>
                <section className="bg-white dark:bg-slate-700 rounded-lg overflow-x-hidden mt-4">
                  <div className="p-4">
                    <h3 className="font-bold text-2xl mb-6">Job Description</h3>
                    <p><span className="font-semibold text-xl mb-6">{select.company}</span> is hiring for the post of <span className="font-bold">{select.name}</span>! </p>
                    <div className="mt-6">
                      <h6 className="font-semibold">Responsibilities of the Candidate:</h6>
                      <ul className="list-disc ml-8 mt-4">
                        {select.respnsibilities.map((requiredItems) => {
                          return (
                            <li className=" mt-2">
                              {requiredItems}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <h6 className="font-semibold">Requirement:</h6>
                      <ul className="list-disc ml-8 mt-4">
                        {select.requirement.map((requiredItems) => {
                          return (
                            <li className=" mt-2">
                              {requiredItems}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </section>
                <section className="bg-white dark:bg-slate-700 rounded-lg overflow-x-hidden mt-4">
                  <div className="p-4">
                    <h5 className="font-semibold border-l-4 h-5 border-blue-500 pl-6">What are the important dates & deadlines?</h5>
                    <p className="pt-2 pl-4 flex items-center">
                      <div className="bg-blue-300 rounded-lg p-2 w-fit h-fit">
                        < BiCalendar className="text-2xl text-white" />
                      </div>
                      <div className="ml-4">
                        <p>Application Deadline</p>
                        <p>{select.date}</p>
                      </div>
                    </p>
                  </div>
                </section>
              </div>
            );
          })
        }
      </section>
    </div>
  );
};

export default SingleJob;
