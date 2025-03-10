'use client';
// import Link from 'next/link';
// import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const closeMenu = () => setIsOpen(false);


    // Disable scroll when mobile nav open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);


    return (
        <nav className="fixed w-full top-0 pt-2 z-50 border-b-2 border-gray-200 pb-6 md:pb-2 bg-[#fefefe]">
            {!isOpen && (<h1 className="md:hidden text-2xl font-semibold text-[#000101] text-opacity-100 ml-4 mt-2 text-nowrap underline underline-offset-[6px] decoration-[#277986] decoration-[3px]">Mitchell Duffy</h1>)}
            <div className="hidden container mx-auto md:flex justify-center items-center p-6 md:h-10 bg-white opacity-100">
                {/* Nav Links - Desktop */}
                <div className="hidden md:flex flex-row space-x-8">
                    {/* Left Links */}
                    <button
                        onClick={() => handleScroll('hero')}
                        className="font-bold md:text-lg text-md text-[#1B1B1B] text-opacity-70 hover:text-opacity-100 transition duration-300"
                    >
                        {'{/* education */}'}
                    </button>
                    <button
                        onClick={() => handleScroll('experience')}
                        className="font-bold md:text-lg text-md text-[#1B1B1B] text-opacity-70 hover:text-opacity-100 transition duration-300"
                    >
                        {'{/* experience */}'}
                    </button>
                    <button
                        onClick={() => handleScroll('projects')}
                        className="font-bold md:text-lg text-md text-[#1B1B1B] text-opacity-70 hover:text-opacity-100 transition duration-300"
                    >
                        {'{/* projects */}'}
                    </button>
                    <button
                        onClick={() => handleScroll('skills')}
                        className="font-bold md:text-lg text-md text-[#1B1B1B] text-opacity-70 hover:text-opacity-100 transition duration-300"
                    >
                        {'{/* skills */}'}
                    </button>
                </div>
            </div>
            {/* Hamburger Icon (Mobile) */}
            {!isOpen && (
                <button
                    className="absolute top-0 pt-4 right-6 md:hidden text-2xl text-[#1B1B1B] align focus:outline-none"
                    onClick={() => setIsOpen(true)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            )}
            {/* Mobile Full-Screen Menu */}
            {isOpen && (
                <div className="md:hidden grid grid-cols-4 gap-0 text-left transition-transform duration-300 absolute inset-0">
                    {/* Left Column (close menu) */}
                    <div className="col-span-1 h-full w-full bg-gray-950 bg-opacity-80" onClick={closeMenu}>
                        {/* Transparent Close Menu */}
                    </div>
                    {/* Right Column Navigation */}
                    <div className="col-span-3 bg-white h-dvh w-full">
                        <div className="flex flex-col items-end text-lg font-semibold text-[#1B1B1B] text-opacity-70">
                            <div className="flex flex-row w-full justify-between pb-4">
                                {isOpen && (<h1 className="md:hidden text-2xl font-semibold text-[#000101] text-opacity-100 ml-4 mt-2 text-nowrap underline underline-offset-[6px] decoration-[#277986] decoration-[3px]   ">Mitchell Duffy</h1>)}
                                <button
                                    className="pr-4 text-right text-3xl text-[#1B1B1B] focus:outline-none"
                                    onClick={closeMenu}
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                            <div className='border-t-2 w-full border-gray-600 opacity-20'></div>
                            <button onClick={() => handleScroll('hero')} className="text-center py-4 mx-auto hover:text-opacity-100">
                                {'{/* education */}'}
                            </button>
                            <div className='border-t-2 w-5/6 border-gray-600 opacity-20'></div>
                            <button onClick={() => handleScroll('experience')} className=" text-center mx-auto py-4 hover:text-opacity-100">
                                {'{/* experience */}'}
                            </button>
                            <div className='border-t-2 w-5/6 border-gray-600 opacity-20'></div>
                            <button onClick={() => handleScroll('projects')} className=" text-center mx-auto py-4 hover:text-opacity-100">
                                {'{/* projects */}'}
                            </button>
                            <div className='border-t-2 w-5/6 border-gray-600 opacity-20'></div>
                            <button onClick={() => handleScroll('skills')} className="text-center mx-auto py-4 hover:text-opacity-100">
                                {'{/* skills */}'}
                            </button>
                            <div className='border-t-2 w-5/6 border-gray-600 opacity-20'></div>
                        </div>
                    </div>

                </div>
            )
            }
        </nav >
    );
    //absolute top-2 right-6
};

export default Navbar;