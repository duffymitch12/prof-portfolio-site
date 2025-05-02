'use client';
import Link from 'next/link';
// import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation';
import NavItem from '@/app/ui/components/nav-item';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();


    const handleNav = (target: string) => {
        if (target.startsWith('/')) {
            router.push(target);
        }
        else {
            if (pathname !== '/') {
                router.push(`/#${target}`);
            } else {
                const element = document.getElementById(target);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
        setIsOpen(false);
    };

    const closeMenu = () => setIsOpen(false);


    // Disable scroll when mobile nav open
    // Disable scrolling when mobile nav is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);


    return (
        <nav className="fixed w-full top-0 pt-2 z-50 border-b-2 border-gray-200 pb-6 md:pb-2 bg-[#fefefe]">

            <div className="hidden container mx-auto md:flex justify-center items-center p-6 md:h-10 bg-white opacity-100">
                {/* Nav Links - Desktop */}
                <div className="hidden md:flex flex-row space-x-8">
                    {/* Left Links */}
                    <NavItem label='education' targetId='hero' onClick={handleNav} variant='desktop' />
                    <NavItem label='experience' targetId='experience' onClick={handleNav} variant='desktop' />
                    <NavItem label='projects' targetId='projects' onClick={handleNav} variant='desktop' />
                    <NavItem label='skills' targetId='skills' onClick={handleNav} variant='desktop' />
                    <div className='border-t-2 w-5/6 border-gray-600 opacity-20'></div>
                    {/* <Link href="/portfolio"
                        className="text-center mx-auto py-4 hover:text-opacity-100"
                    >
                        portfolio
                    </Link> */}
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
            {!isOpen && (<h1 className="md:hidden text-2xl font-semibold text-[#000101] text-opacity-100 ml-4 mt-2 text-nowrap underline underline-offset-[6px] decoration-[#277986] decoration-[3px]">Mitchell Duffy</h1>)}
            {isOpen && (
                <div className="md:hidden grid grid-cols-4 gap-0 text-left transition-transform duration-300 absolute inset-0">
                    {/* Left Column (close menu) */}
                    <div className="col-span-1 h-full w-full bg-gray-950 bg-opacity-80" onClick={closeMenu}>
                        {/* Transparent Close Menu */}
                    </div>
                    {/* Right Column Navigation */}
                    <div className="col-span-3 bg-white h-dvh w-full">
                        <div className="flex flex-col items-end text-lg font-semibold text-[#1B1B1B]">
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
                            <NavItem label='education' targetId='hero' onClick={handleNav} variant='mobile' />
                            <div className='border-t-2 w-5/6 border-gray-600 opacity-20'></div>
                            <NavItem label='experience' targetId='experience' onClick={handleNav} variant='mobile' />
                            <div className='border-t-2 w-5/6 border-gray-600 opacity-20'></div>
                            <NavItem label='projects' targetId='projects' onClick={handleNav} variant='mobile' />
                            <div className='border-t-2 w-5/6 border-gray-600 opacity-20'></div>
                            <NavItem label='skills' targetId='skills' onClick={handleNav} variant='mobile' />
                        </div>
                    </div>

                </div>
            )
            }
        </nav >
    );
};