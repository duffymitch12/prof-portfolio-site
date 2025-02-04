// component for education on resume

// import Image from 'next/image';
import { montserrat } from "@/app/ui/fonts";
import resume from "@/app/lib/resume.json";

export default async function EducationContainer() {
    const education = resume.education;

    return (
        <div className="inline-block columns-2 gap-2 p-6 max-w-sm mx-auto rounded-xl shadow-lg">
            <div className="flex p-4">
                <h3 className="ml-2 text-sm font-medium">{education.institution}</h3>
            </div>
            <p
                className={`${montserrat.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
            >
                {education.degree}
            </p>
            <p
                className={`${montserrat.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
            >
                {education.location}
            </p>
            <p
                className={`${montserrat.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
            >
                {education.graduationDate}
            </p>
        </div>
    )
}