// component for education on resume

import Image from 'next/image';

import resume from "@/app/lib/resume.json";

export default async function EducationContainer() {
    const education = resume.education;
    return (
        <>
            <div className="grid grid-cols-3 w-3/4 md:w-2/3 mt-8 gap-6 items-center mx-auto">
                {/* Image (1/3 of the width) */}
                <div className="col-span-3 mx-auto md:col-span-1 flex md:justify-start">
                    <Image
                        src="/umich-logo.webp"
                        width={200}
                        height={200}
                        alt="University of Michigan Logo"
                    />
                </div>
                <div className="col-span-3 md:col-span-2 text-sm text-gray-800 font-medium">
                    I am a recent graduate with a Bachelor of Science in Computer Science from the <span>{education.institution}</span>, Ann Arbor (December 2024). I have hands-on experience in
                    <span className="text-md font-extrabold text-[#f68c5a]"> Web Development </span>
                    and a background in working with
                    <span className="text-md font-extrabold text-[#f68c5a]"> Startups </span>,
                    which has helped me develop a versatile skill set for building innovative solutions.
                </div>


            </div>
        </>

    )
}