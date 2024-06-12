/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { RiCalendarEventFill, RiMessageFill } from "react-icons/ri";
import { AiFillSetting, AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useAuth } from '../../../providers/AuthProvider'

const NavigationBar = () => {
  const {user} = useAuth();
  return (
    <div>
      <div className="fixed z-50 md:relative border">
        <nav className="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col xs:hidden overflow-hidden bg-red-100 transition-all md:h-100dvh md:overflow-auto md:w-64 lg:w-72">
          <div className="bg-red-100 mt-0 py-4 pl-10 md:mt-10">
            <span className="">
              <span className=" inline-flex text-white h-8 w-8 items-center justify-center rounded-full bg-red-600 align-bottom text-2xl font-bold">V</span>
              <span className="text-xl">entie</span>
            </span>
          </div>
          <ul className="mt-4 space-y-3 md:mt-5">
            <li className="relative">
              <button className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                <span>
                  <AiFillHome className="h-6 w-6"/>
                    </span>
                    <span className="">Home</span>
              </button>
            </li>
            <li className="relative">
              <button className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                <span>
                  <AiOutlineSearch className="h-6 w-6"/>
                    </span>
                    <span className="">Search</span>
              </button>
            </li>
            <li className="relative">
              <button className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                <span>
                  <RiCalendarEventFill className="h-6 w-6" />
                  </span>
                    <span className="">Events</span>
              </button>
            </li>
            <li className="relative">
              <button className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                <span className="text-2xl">
                  <RiMessageFill aria-hidden="true"/>
                    </span>
                    <span className="">Messages</span>
              </button>
            </li>
            <li className="relative">
              <button className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                <span>
                  <IoIosAddCircle className="h-6 w-6"/>
                    </span>
                <span className="">Post</span>
              </button>
            </li>
            <li className="relative">
              <button className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                <span>
                  <AiFillSetting className="h-6 w-6"/>
                    </span>
                <span className="">Settings</span>
              </button>
            </li>
            <li className="relative">
              <button className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                <span>
                  <FaCircleUser className="h-6 w-6"/>
                    </span>
                <span className="">Profile</span>
              </button>
            </li>
            <li className="relative">
              <button className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                <span>
                  <IoMenu className="h-6 w-6"/>
                    </span>
                <span className="">Menu</span>
              </button>
            </li>
          </ul>
        </nav>


        <div className="sm:hidden fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-red-100 border border-gray-200 bottom-0 left-1/2 dark:bg-gray-700 dark:border-gray-600">
          <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
            <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <AiFillHome className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true"/>
              <span className="sr-only">Home</span>
            </button>
            
            <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <RiCalendarEventFill className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" />
              <span className="sr-only">Events</span>
            </button>

            <div className="flex items-center justify-center">
              <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <IoIosAddCircle className="w-4 h-4 text-white" />
                <span className="sr-only">Post</span>
              </button>
            </div>
            
            <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <RiMessageFill className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"/>
              <span className="sr-only">Messages</span>
            </button>
            
            <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <FaCircleUser className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"/>
              <span className="sr-only">Profile</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavigationBar