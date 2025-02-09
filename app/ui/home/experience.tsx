// componeent for experiences
// import { Suspense } from "react";
import resume from "@/app/lib/resume.json";

// import {}

export default async function ExperienceWrapper() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = resume.experience;
    return (
        <>
            {/* <section> */}
            <div className="flex bg-[#1B1818] text-white py-8 w-full" id="experience">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                    {/* Left Side: Header */}
                    <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <p className="ml-2 text-[#79AEA3] uppercase tracking-loose">Work Experience</p>
                        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                            Professional Journey
                        </p>
                        <p className="text-sm md:text-base text-gray-50 mb-4">
                            Here’s a timeline of my professional experience. Each entry represents a role I’ve held, the company I worked for, and the key responsibilities I handled.
                        </p>
                        <a
                            href="#"
                            className="bg-transparent mr-auto hover:bg-[#79AEA3] text-[#79AEA3] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#779FA1] hover:border-transparent"
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
                                    className="border-2-2 border-yellow-555 absolute h-full border"
                                    style={{ right: "50%", border: "2px solid #A30000", borderRadius: "1%" }}
                                ></div>
                                <div
                                    className="border-2-2 border-yellow-555 absolute h-full border"
                                    style={{ left: "50%", border: "2px solid #A30000", borderRadius: "1%" }}
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
                <p className="mb-3 text-base text-[#79AEA3]">
                    {start} - {end}
                </p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">{title}<span className="text-lg font-black px-2">|</span>{company}</h4>
                <p className="text-sm md:text-base text-nowrap leading-snug italic text-gray-50 text-opacity-100">
                    {location}
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                    {info.map((description, i) => (
                        <li key={i} className="text-pretty text-sm text-gray-50 mb-2">
                            {description}
                        </li>
                    ))}
                </ul>
            </div>
            {/* <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-400">
                    <h3 className="ml-2 text-md text-bold">{title}</h3>
                    <h4 className="ml-2 text-md text-medium">{company}</h4>
                    <h4 className="ml-2 text-md text-medium">{location}</h4>
                    <h5 className="ml-2 text-md"></h5>
                    <h5 className='ml-2 text-sm'> {start} - {end}</h5>
                </div>
                <div className="flex p-4">
                    <ul>
                        {info.map((description, index) => (
                            <li key={index} className="text-sm">{description}</li>
                        ))}
                    </ul>
                </div>
            </div> */}
        </>
    )


}