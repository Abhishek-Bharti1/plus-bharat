"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import BANNER from "../../../public/banner.png";
import CROSS from "../../../public/cross.svg";
import LOGO from "../../../public/logo.svg";
import HAMBURGER from "../../../public/hamburger.svg";
import CommonButton from "./commonComponents/CommonButton";

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [open, setOpen] = useState(false);

    const closeTopNav = () => {
        setShow(false);
    };

    const handleDrawer = () => {
        setOpen(!open);
    };
    return (
        <div className="fixed top-0 left-0 w-full z-50">
            {show && (
                <div className="relative w-full flex justify-center items-start">
                    <Image src={BANNER} alt="shark_tank" className="block" />
                    <Image
                        src={CROSS}
                        alt="cancel"
                        onClick={closeTopNav}
                        className="absolute  sm:w-5 top-0 right-10 sm:top-2 lg:top-5 m-0 cursor-pointer"
                    />
                </div>
            )}

            <nav
                className="w-full border-b border-ffe6c4 bg-white"
            >
                <div 
                    className="flex justify-between items-center h-[50px] sm:h-[70px] w-full px-6 sm:px-5 lg:px-[7.5rem]">
                    <Image
                        src={LOGO}
                        alt="logo"
                        width={200}
                        height={70}
                        className="cursor-pointer"
                    />
                    <div className="hidden sm:flex sm:text-sm md:text-base text-gray-500">
                        <ul className="hidden sm:flex items-center">
                            <li className="hover:font-semibold ml-10 cursor-pointer">Home</li>
                            <li className="hover:font-semibold ml-10 cursor-pointer">Start Saving</li>
                            <li className="hover:font-semibold ml-10 cursor-pointer">Partner With Us</li>
                            <li className='ml-10'><CommonButton text="Download App"/></li>
                        </ul>
                    </div>
                    <div onClick={handleDrawer} className="sm:hidden cursor-pointer pl-24">
                        <Image src={HAMBURGER} alt='hamburger' />
                    </div>
                </div>

                <div
                    className={
                        open
                            ? "fixed z-50 right-0 top-18 w-[100%] sm:hidden bg-[black] h-auto p-4 ease-in duration-500"
                            : "fixed z-50 left-[-100%] top-24 p-10 ease-in-out duration-500"
                    }
                >
                    <ul className="flex flex-col gap-6 text-xl text-white">
                        <li className="hover:font-semibold  cursor-pointer">Home</li>
                        <li className="hover:font-semibold  cursor-pointer">Start Saving</li>
                        <li className="hover:font-semibold  cursor-pointer">Partner With Us</li>
                        <li><CommonButton text="Download App" /></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar