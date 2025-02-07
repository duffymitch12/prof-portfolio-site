// component for education on resume

// import Image from 'next/image';
// import { montserrat } from "@/app/ui/fonts";
import resume from "@/app/lib/resume.json";

export default async function EducationContainer() {
    const education = resume.education;
    return (
        <div className="flex w-full sm:md:w-2/3 mt-8 text-sm text-wrap">
            <div className="font-medium mb-4 text-gray-700">
                I am a recent graduate with a Bachelor of Science in Computer Science from the <span>{education.institution}</span>, Ann Arbor (December 2024). I have hands-on experience in  <span className="text-md font-extrabold text-[#C3BF6D]">
                    Web Development
                </span> and a background in working with <span className="text-md font-extrabold text-[#C3BF6D]">
                    Startups.
                </span>, which has helped me develop a versatile skill set for building innovative solutions.
            </div>
        </div>
    )
}