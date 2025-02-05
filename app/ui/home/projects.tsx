// component for projects on resume
// componeent for experiences
// import { Suspense } from "react";
import resume from "@/app/lib/resume.json";

// import {}

export default async function ProjectWrapper() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = resume.projects;
    return (
        data.map((p, index) => (
            <div key={index} className="flex flex-col gap-2">
                <Proj name={p.name} description={p.description} technologies={p.technologies} date={p.date} />
            </div>
        )
        )
    )
}


export function Proj({
    name,
    description,
    technologies,
    date,
}: {
    name: string,
    description: string,
    technologies: string[],
    date: string, //#FIXME: once have actual format for dates impl
}) {
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-400">
                <h3 className="ml-2 text-lg text-bold">{name}</h3>
                <h5 className="ml-2 text-sm font-semibold"> {date}</h5>
                <p className="ml-2 text-md text-medium">{description}</p>
            </div>
            <div className="flex p-4">
                <ul>
                    {technologies.map((item, index) => (
                        <li key={index} className="text-sm">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
