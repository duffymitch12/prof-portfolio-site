// component for skills on resume

// component for projects on resume
// componeent for experiences
// import { Suspense } from "react";
import resume from "@/app/lib/resume.json";

// import {}

export default async function TechSkillsWrapper() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = resume.technicalSkills;
    return (
        <div className="grid grid-cols-[65px_65px_65px_65px] gap-2">
            {data.map((item, index) => (
                <div key={index} className="flex">
                    <Skill s={item} />
                </div>
            )
            )}
        </div>
    )
}


export function Skill({
    s,
}: {
    s: string
}) {
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm w-fit">
            <div className="flex p-4 text-sm text-center text-wrap">
                {s}
            </div>
        </div>
    )
}
