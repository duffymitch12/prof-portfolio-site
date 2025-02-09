'use client';
import Link from 'next/link';
// import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="sticky bg-[#312F2F] shadow-md w-full top-0 z-50 h-18">
            <div className="container mx-auto flex justify-center items-center  p-4 h-20">
                {/* Left Links */}
                <div className="flex space-x-8 z-30">
                    <button
                        onClick={() => handleScroll('hero')}
                        className="font-medium text-lg text-gray-100 hover:font-bold hover:text-[#0077b6] transition duration-300"
                    >
                        Education
                    </button>
                    <button
                        onClick={() => handleScroll('experience')}
                        className="font-medium text-lg text-gray-100 hover:font-bold hover:text-[#0077b6] transition duration-300"
                    >
                        Experience
                    </button>
                </div>

                {/* Centered Logo */}
                <div className="flex items-center mx-4 z-40">
                    <Link href="/" className="text-2xl font-bold text-gray-800">
                        <FontAwesomeIcon
                            icon={faUserSecret}
                            className="h-10 w-10 px-4 py-4 text-gray-100 hover:text-[#0077b6] hover:border-[#0077B6] hover:border-4 rounded-lg  shadow-lg shadow-black border-2 border-gray-100"
                        />
                    </Link>
                </div>

                {/* Right Links */}
                <div className="flex space-x-8 z-30">
                    <button
                        onClick={() => handleScroll('projects')}
                        className="font-medium text-lg text-gray-100 hover:font-bold hover:text-[#0077b6] transition duration-300"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => handleScroll('skills')}
                        className="font-medium text-lg text-gray-100 hover:font-bold hover:text-[#0077b6] transition duration-300"
                    >
                        Skills
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;