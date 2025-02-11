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
                <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                    {/* Left Side: Header */}
                    <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <h2 className="ml-2 mb-6 text-[#00416A] uppercase tracking-loose font-semibold underline underline-offset-6 decoration-black decoration-4">Work Experience</h2>
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
                    <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                {/* Timeline Line */}
                                <div
                                    className="border-2-2 absolute h-full border-2 border-[#A30000] rounded-md right-1/2"

                                ></div>
                                <div
                                    className="border-2-2 absolute h-full border-2 border-[#A30000] rounded-md left-1/2"
                                ></div>

                                {/* Timeline Entries */}
                                {data.map((job, index) => (
                                    <div
                                        key={index}
                                        className={`mb-8 flex justify-between ${index % 2 === 0 ? "flex-row-reverse items-center left-timeline" : "items-center right-timeline"}`}
                                    >
                                        <Job title={job.title} company={job.company} location={job.location} start={job.start} end={job.end} info={job.info} idx={index} />

                                    </div>
                                ))}
                            </div>
                        </div>
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
            <div className="order-1 w-5/12"></div>
            <div className={`order-1 w-5/12 px-1 py-4 ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
                <p className="mb-3 text-base text-[#00416A] font-medium">
                    {start} - {end}
                </p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">{title}<span className="text-lg font-black px-2">|</span>{company}</h4>
                <p className="text-sm md:text-base text-nowrap leading-snug italic text-[#312F2F] text-opacity-100">
                    {location}
                </p>
                <ul className="list-disc">
                    {info.map((description, i) => (
                        <li key={i} className="text-sm md:text-md text-[#312F2F] my-4">
                            {description}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )


}