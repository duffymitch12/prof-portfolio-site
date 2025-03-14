import Image from "next/image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function card({
    header,
    additional,
    description,
    fileName = '/globe.svg',
    URL,
    buttonText,
    underConstruction,
    additionalList,
}: {
    header: string,
    additional?: string,
    description: string,
    fileName?: string,
    URL?: string,
    buttonText?: string,
    iconName?: boolean,
    additionalList?: string[],
    underConstruction: boolean,
}) {
    // const projIcon: IconProp = ['fas', 'business-time'];
    return (
        <>
            <div className="relative  mx-auto">
                <div className="bg-white shadow-sm shadow-black rounded-lg md:w-full w-screen  dark:bg-gray-800 dark:border-gray-700 md:h-[460px]">
                    <div className="relative">
                        {underConstruction ? <Image className="blur-xs rounded-t-lg mx-auto object-cover object-top w-full md:w-dvw md:h-60 h-30" width={400} height={300} src='/under-construction.webp' alt="card image" /> : <Image className="blur-xs rounded-t-lg mx-auto w-full md:w-dvw  object-cover md:h-60 h-30" width={400} height={300} src={fileName} alt="card image" />}

                        {additional && <p className="absolute bottom-0 right-0 bg-[#00416a] text-white md:text-sm text-md md:pr-3 md:pl-12 pr-2 pl-6 py-1 rounded-tl-2xl">{additional}</p>}
                    </div>

                    <div className="relative">
                        <h5 className="pl-4 text-gray-900 md:font-semibold font-medium md:text-2xl text-xl tracking-tight md:my-2 my-1 dark:text-white">{header}</h5>
                        <p className="px-4 md:font-normal font-light text-gray-700 md:mb-4 mb-2 dark:text-gray-400 md:text-lg text-md">{description}</p>
                        {additionalList && (
                            <p className="tracking-tight dark:text-white italic px-4 pb-4 md:pb-0 font-light text-black text-sm md:text-lg">{additionalList.join(' | ')}</p>
                        )}
                    </div>
                </div>

                {/* Overlay Button */}
                {URL && buttonText && !underConstruction && (
                    <a
                        href={URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center hover:underline justify-center bg-gray-200 bg-opacity-60 backdrop-blur-md text-[#00416a] text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                        {buttonText}
                    </a>
                )}
            </div >
        </>
    )
}