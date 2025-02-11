// component for skills on resume

// component for projects on resume
// import { Suspense } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';
import resume from "@/app/lib/resume.json";

export default async function TechSkillsWrapper() {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const skills = resume.technicalSkills;
    return (
        <>
            <h2 className="mx-auto text-center text-2xl font-bold text-black underline underline-offset-8 decoration-[#1A535C] decoration-4" id="skills">Skills</h2>

            <div className="grid grid-cols-6 gap-2 content-center w-full mb-8" id="skills">
                {skills.map((item, index) => (
                    <div key={index} className="flex text-center">
                        <button className="p-2 bg-[#0c416b] hover:bg-opacity-70 rounded-xl text-white w-[125px] h-[50px]">
                            {item}
                        </button>
                    </div>
                )
                )}
            </div>

        </>
    )
}