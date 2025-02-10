// import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {

    return (
        <>
            <section className="bg-white">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        <div className="flex flex-row px-5 py-2">
                            <a href="mailto:duffymitch12@gmail.com" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                <FontAwesomeIcon icon={['fas', 'envelope']} className="text-3xl text-gray-600 hover:text-black mr-4" /> duffymitch12@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-row px-5 py-2">
                            <a href="tel:+12488945884" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                <FontAwesomeIcon icon={['fas', 'phone']} className="text-3xl text-gray-600 hover:text-black mr-4" /> (248) 894-5884
                            </a>
                        </div>
                    </nav>
                    <div className="flex justify-center space-x-6 p-4 bg-gray-100">
                        <FontAwesomeIcon icon={['fab', 'github']} className="text-4xl text-gray-600 hover:text-black" />
                        <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-4xl text-gray-600 hover:text-blue-600" />
                        <FontAwesomeIcon icon={['fab', 'discord']} className="text-4xl text-gray-600 hover:text-purple-600" />
                    </div>
                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        2024 Mitchell Duffy, Portfolio Website.
                    </p>
                </div>
            </section>
        </>
        // <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        //     <h3>duffymitch12@gmail.com</h3>
        //     <h3>(248)-894-5884</h3>
        //     <h3>Bloomfield Hills, MI 48304</h3>
        // </footer>
    )
}