// component for education on resume

// import Image from 'next/image';
import { montserrat } from "@/app/ui/fonts";
import resume from "@/app/lib/resume.json";

export default async function EducationContainer() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const education = resume.education;
    return (
        <div className="bg-gray-50 p-6 rounded-lg">
            <h4
                className={`${montserrat.className} font-semibold mb-4 text-md text-gray-700`}>
                I graduated from The <span>{education.institution}</span>, <span>{education.location}</span> with a <span>{education.degree}</span>
                {" "}in the <span>{education.graduationDate}</span> semester.
            </h4>
        </div>
    )
}