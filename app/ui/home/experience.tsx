// componeent for experiences
// import { Suspense } from "react";
import resume from "@/app/lib/resume.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faMapPin, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default async function ExperienceWrapper() {
    const data = resume.experience;
    return (
        <>
            {/* <section> */}
            <div className="flex bg-[#fefefe] text-gray-800 py-8 w-full" id="experience">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-2 md:mb-4">
                    {/* Left Side: Header */}
                    <div className="flex flex-col w-full sticky md:w-1/3 mt-2 md:ml-10 md:mt-12 px-8 mb-12 md:mb-0">
                        <h2 className="justify-start w-screen md:w-full mb-6  border-b-4 border-[#277986] md:border-0 md:text-2xl text-xl font-semibold text-black md:underline md:underline-offset-[7px] md:decoration-[#277986] md:decoration-4 uppercase md:indent-0 indent-2">Work Experience</h2>
                        <p className="text-sm md:text-base text-gray-800 mb-4">
                            Here’s a timeline of my professional experiences that are relevant to my aspired career path of Web Development.
                        </p>
                        <a
                            href="/Mitchell Duffy Resume Website.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#00416A] mr-auto hover:opacity-80 text-white rounded shadow hover:shadow-lg py-2 px-4"
                        >
                            <FontAwesomeIcon icon={faDownload} className="mr-2" />
                            View Resume
                        </a>
                    </div>

                    {/* Right Side: Timeline */}
                    <div className="relative w-full md:w-2/3 md:mr-4">
                        {/* Timeline Line */}
                        <div className="absolute right-1/2 md:left-1/2 transform md:-translate-x-1/2 md:w-2 w-4 bg-[#A30000] h-full rounded"></div>

                        {/* Timeline Entries */}
                        {data.map((job, index) => (
                            <Job key={index} {...job} idx={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export function Job({
    title,
    company,
    location,
    start,
    end,
    info,
    idx,
    fileName,
    primary,
    secondary,
    accent
}: {
    title: string;
    company: string;
    location: string;
    start: string;
    end: string;
    info: string[];
    idx: number;
    fileName: string;
    primary: string;
    secondary: string;
    accent: string;
}) {
    return (
        <>
            <div className="relative flex flex-col md:flex-row items-start md:items-center mb-8 w-full">

                {/* Content Box */}
                <div
                    className={`
                    w-10/12 md:w-5/12 max-w-full break-words lg:break-normal mt-10 md:mt-0 pb-6 bg-white shadow-lg rounded-lg md:mx-0 mx-auto hover:bg-gray-100 transition duration-200 ease-in-out
                    ${idx % 2 === 0 ? "md:ml-auto md:text-left" : "md:mr-auto md:text-left"}
                `}
                >
                    <div className="w-full px-6 py-4 rounded-t-lg" style={{ backgroundColor: primary, color: secondary }} id="job-header">
                        <div className="grid grid-cols-3 gap-0">
                            <div className="col-span-1 w-full">
                                <Image
                                    src={`/${fileName}`}
                                    alt={`${company} logo`}
                                    width={100}
                                    height={100}
                                    className="rounded object-cover pr-4 py-2"
                                />
                            </div>
                            <div className="col-span-2 justify-items-center text-center w-full ml-6 pt-2 p-2">
                                <h4 className="mb-3 font-bold text-lg md:text-xl font-mono">
                                    {company}
                                </h4>
                                <p className="text-base font-medium break-normal" style={{ color: accent }}>{start} - {end}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 justify-between mt-4 mb-2 px-6">
                        <p className="text-[#276FBF] italic text-sm md:text-base">
                            <FontAwesomeIcon icon={faMapPin} className="mr-2 text-[#312F2F]" />
                            {title}
                        </p>
                        <p className="text-sm mb-2 md:text-base italic opacity-70 text-[#312F2F]">
                            <FontAwesomeIcon icon={faBarsStaggered} className="mr-2 text-[#312F2F]" />{location}
                        </p>
                    </div>
                    <div className="space-y-3 md:mt-4 mt-2 leading-relaxed text-xs md:text-sm text-[#312F2F] max-w-prose px-6 ">
                        {info.map((paragraph, i) => (
                            <p key={i}>{paragraph} !=</p>
                        ))}
                    </div>

                </div >
            </div >
        </>
    )


}