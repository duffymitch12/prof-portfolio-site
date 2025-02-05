// componeent for experiences
// import { Suspense } from "react";
import resume from "@/app/lib/resume.json";

// import {}

export default async function ExperienceWrapper() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = resume.experience;
    return (
        data.map((job, index) => (
            <div key={index} className="flex flex-col gap-2">
                <Job title={job.title} company={job.company} location={job.location} start={job.start} end={job.end} info={job.info} />
            </div>
        )
        )
    )
}


export function Job({
    title,
    company,
    location,
    start,
    end,
    info
}: {
    title: string;
    company: string;
    location: string;
    start: string;
    end: string;
    info: string[];
}) {
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
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
        </div>
    )


}