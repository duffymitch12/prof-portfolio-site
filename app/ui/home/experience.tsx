// componeent for experiences
// import { Suspense } from "react";
import resume from "@/app/lib/resume.json";
// import {}

export default async function ExperienceWrapper() {
    const data = resume.experience;
    return (
        <>
            {/* <section> */}
            <div className="flex bg-[#fefefe] text-gray-800 py-8 w-full" id="experience">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-2 md:mb-4">
                    {/* Left Side: Header */}
                    <div className="flex flex-col w-full sticky md:w-1/3 mt-2 md:mt-12 px-8 mb-12 md:mb-0">
                        {/* <h2 className="md:text-2xl text-lg ml-2 mb-6 text-black uppercase tracking-loose font-semibold underline underline-offset-[7px] decoration-[#277986] decoration-4">Work Experience</h2> */}
                        <h2 className="justify-start w-screen md:w-full mb-6 border-l-4 border-b-4 border-[#277986] text-[18px] md:border-0 md:text-2xl font-semibold text-black md:underline md:underline-offset-[7px] md:decoration-[#277986] md:decoration-4 uppercase md:indent-0 indent-2">Work Experience</h2>
                        <h3 className="text-2xl md:text-3xl leading-normal md:leading-relaxed mb-2 font-bold">
                            Career History
                        </h3>
                        <p className="text-sm md:text-base text-gray-800 mb-4">
                            Here’s a timeline of my professional experiences that are relevant to my aspired career path of Web Development.
                        </p>
                        <a
                            href="#"
                            className="bg-[#00416A] mr-auto hover:opacity-80 text-white rounded shadow hover:shadow-lg py-2 px-4"
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* Right Side: Timeline */}
                    <div className="relative w-full md:w-2/3">
                        {/* Timeline Line */}
                        <div className="absolute right-1/2 md:left-1/2 transform md:-translate-x-1/2 md:w-2 w-4 bg-[#A30000] h-full rounded"></div>

                        {/* Timeline Entries */}
                        {data.map((job, index) => (
                            <Job key={index} {...job} idx={index} />
                        ))}
                    </div>
                </div>
            </div>
            {/* </section> */}
            {/* data.map((job, index) => (
            <div key={index} className="flex flex-col gap-2">
                <Job title={job.title} company={job.company} location={job.location} start={job.start} end={job.end} info={job.info} />
            </div>
            )
            ) */}
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
    idx
}: {
    title: string;
    company: string;
    location: string;
    start: string;
    end: string;
    info: string[];
    idx: number;
}) {
    return (
        <>
            <div className="relative flex flex-col md:flex-row items-start md:items-center mb-8 w-full">

                {/* Content Box */}
                <div
                    className={`
                    w-10/12 md:w-5/12 mt-10 md:mt-0 px-6 py-4 bg-white shadow-lg rounded-lg md:mx-0 mx-auto
                    ${idx % 2 === 0 ? "md:ml-auto md:text-left" : "md:mr-auto md:text-left"}
                `}
                >
                    <p className="mb-3 text-base text-[#00416A] font-medium">{start} - {end}</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        {title}
                        <span className="text-lg font-black px-2">|</span>
                        {company}
                    </h4>
                    <p className="text-sm md:text-base italic text-[#312F2F]">{location}</p>
                    <ul className="list-disc pl-5">
                        {info.map((description, i) => (
                            <li key={i} className="text-sm md:text-md text-[#312F2F] my-2">
                                {description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )


}