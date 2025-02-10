'use client';
// import Link from 'next/link';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed bg-white opacity-100 shadow-md w-full top-0 z-50 h-18">
            <div className="container mx-auto flex justify-center items-center  p-4 h-20">
                {/* Left Links */}
                <div className="flex space-x-8">
                    <button
                        onClick={() => handleScroll('hero')}
                        className="font-bold text-lg text-[#1B1B1B] text-opacity-70 hover:text-opacity-100 transition duration-300"
                    >
                        {'{/* education */}'}
                    </button>
                    <button
                        onClick={() => handleScroll('experience')}
                        className="font-bold text-lg text-[#1B1B1B] text-opacity-70 hover:text-opacity-100 transition duration-300"
                    >
                        {'{/* experience */}'}
                    </button>
                </div>

                {/* Centered Logo */}
                <div className="flex items-center mx-4">
                    {/* <Link href="/" className="text-2xl font-bold text-gray-800"> */}
                    {/* <FontAwesomeIcon
                            icon={faUserSecret}
                            className="h-10 w-10 px-4 py-4 text-[#1B1B1B] opacity-60 hover:text-[#0077b6] hover:opacity-100 hover:border-4 rounded-lg  shadow-lg shadow-black border-2 border-gray-100"
                        /> */}
                    {/* </Link> */}
                </div>

                {/* Right Links */}
                <div className="flex space-x-8">
                    <button
                        onClick={() => handleScroll('projects')}
                        className="font-bold text-lg text-[#1B1B1B] text-opacity-70 hover:text-opacity-100 transition duration-300"
                    >
                        {'{/* projects */}'}
                    </button>
                    <button
                        onClick={() => handleScroll('skills')}
                        className="font-bold text-lg text-[#1B1B1B] text-opacity-70 hover:text-opacity-100 transition duration-300"
                    >
                        {'{/* skills */}'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;