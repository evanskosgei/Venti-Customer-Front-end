/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdArrowBackIosNew } from "react-icons/md";

const Report_problem = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
    }
    return (
        <div className='dark:bg-black h-full dark:text-white'>
            <div className="relative mx-auto w-full px-5 py-16 sm:px-20 md:max-w-screen-lg lg:py-24">
                <Link onClick={()=>window.history.back()}
                className='flex m-5 items-center text-xl'>
                    <MdArrowBackIosNew />
                    <span><strong>Back</strong></span>
                </Link>
                <h2 className="mb-5 text-4xl text-center font-serif  sm:text-5xl">Have Questions? Checkout these FAQs</h2>
                <p className="mb-12 text-center text-lg ">We have written down answers to some of the frequently asked questions. But, if you still have any queries, feel free to ping us on chat.</p>
                <ul className="divide-y divide-gray-200">
                    <li className="text-left">
                        <label htmlFor="accordion-1" className="flex flex-col">
                            <input className="peer hidden" type="checkbox" id="accordion-1" />
                            <div className="before:absolute before:-left-6 before:block before:text-xl before:text-blue-400 before:content-['–'] peer-checked:before:content-['+'] relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                                <h3 className="text-sm lg:text-base">Is there a free trial with Appsy?</h3>
                            </div>
                            <div className="peer-checked:hidden pr-2">
                                <div className="pb-5">
                                    <p className="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li className="text-left">
                        <label htmlFor="accordion-2" className="flex flex-col">
                            <input className="peer hidden" type="checkbox" id="accordion-2" />
                            <div className="before:absolute before:-left-6 before:block before:text-xl before:text-blue-400 before:content-['–'] peer-checked:before:content-['+'] relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                                <h3 className="text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit?</h3>
                            </div>
                            <div className="peer-checked:hidden pr-2">
                                <div className="pb-5">
                                    <p className="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li className="text-left">
                        <label htmlFor="accordion-3" className="flex flex-col">
                            <input className="peer hidden" type="checkbox" id="accordion-3" />
                            <div className="before:absolute before:-left-6 before:block before:text-xl before:text-blue-400 before:content-['–'] peer-checked:before:content-['+'] relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                                <h3 className="text-sm lg:text-base">Is there a free trial with Appsy?</h3>
                            </div>
                            <div className="peer-checked:hidden pr-2">
                                <div className="pb-5">
                                    <p className="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li className="text-left">
                        <label htmlFor="accordion-4" className="flex flex-col">
                            <input className="peer hidden" type="checkbox" id="accordion-4" />
                            <div className="before:absolute before:-left-6 before:block before:text-xl before:text-blue-400 before:content-['–'] peer-checked:before:content-['+'] relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                                <h3 className="text-sm lg:text-base">Is there a Lorem ipsum dolor sit. with Appsy?</h3>
                            </div>
                            <div className="peer-checked:hidden pr-2">
                                <div className="pb-5">
                                    <p className="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
                                </div>
                            </div>
                        </label>
                    </li>
                </ul>
                <div className="mt-20 flex justify-center">
                    <Link onClick={openForm}
                        className="inline-flex cursor-pointer rounded-full bg-blue-400 px-5 py-4 text-white">Still have a question? Ping us on chat support
                    </Link>
                </div>

                {isFormOpen && (
                    <div className=" mx-auto overflow-hidden rounded-2xl">
                        <div className="space-y-4 px-8 py-10">
                            <label className="block" htmlFor="name">
                                <p className="text-gray-600">Name</p>
                                <input className="w-full rounded-md border dark:bg-transparent bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your name" />
                            </label>
                            <label className="block" htmlFor="name">
                                <p className="text-gray-600">Email Address</p>
                                <input className="w-full rounded-md border dark:bg-transparent px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="email" placeholder="Enter your email" />
                            </label>
                            <label className="block" htmlFor="name">
                                <p className="text-gray-600">Message</p>
                                <textarea className="h-32 w-full rounded-md border dark:bg-transparent bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Write something."></textarea>
                            </label>
                            <button className="button mt-4 rounded-full font-semibold text-white">Submit</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Report_problem;