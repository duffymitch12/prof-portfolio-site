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
                <div className="bg-white shadow-sm shadow-black rounded-lg md:w-auto w-full  dark:bg-gray-800 dark:border-gray-700 md:h-[460px] h-3/4">
                    <div className="relative">
                        {underConstruction ? <Image className="blur-xs rounded-t-lg mx-auto w-full object-cover object-top h-60" width={400} height={300} src='/under-construction.webp' alt="card image" /> : <Image className="blur-xs rounded-t-lg mx-auto w-full object-cover h-60" width={400} height={300} src={fileName} alt="card image" />}

                        {additional && <p className="absolute bottom-0 right-0 bg-[#00416a] text-white text-sm pr-3 pl-12 py-1 rounded-tl-2xl">{additional}</p>}
                    </div>

                    <div className="pt-2 px-4 h-[200px]">
                        <h5 className="text-gray-900 font-semibold text-2xl tracking-tight my-2 dark:text-white">{header}</h5>
                        <p className="font-normal text-gray-700 mb-4 dark:text-gray-400">{description}</p>
                        {additionalList && (
                            <p className="absolute italic bottom-4 font-light text-black text-nowrap">{additionalList.join(' | ')}</p>
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