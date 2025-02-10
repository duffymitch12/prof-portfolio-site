
import EducationContainer from "@/app/ui/home/education"
import Intro from "@/app/ui/home/intro"
import { IntroSkeleton, EducationSkeleton } from "@/app/ui/skeletons"
import Image from "next/image";
// import Typewriter from "@/app/ui/home/typewriter";
import { Suspense } from "react";

export default function BannerContainer() {
    return (
        <>
            {/* Typewriter effect */}
            {/* <Typewriter /> */}

            {/* Hero Block */}
            <div className="flex flex-wrap items-center h-screen" id="hero">
                {/* Left Side: Text Content */}
                <div
                    className="bg-white w-full md:w-2/3 h-screen flex items-center justify-center"
                >
                    <div className="mx-8 md:mx-20 md:pl-6">
                        <Suspense fallback={<IntroSkeleton />}>
                            <Intro />
                        </Suspense>
                        {/* Description */}
                        <Suspense fallback={<EducationSkeleton />}>
                            <EducationContainer />
                        </Suspense>
                    </div>
                </div>
                {/* Right Side: Image */}
                <div className=" w-full md:w-1/3 h-screen mx-auto text-center rounded-xl">
                    <Image
                        src="/mitch-ai.png" // Path to your SVG in the public folder
                        alt="AI Generated Image of mitch duffy"
                        width={300} // Adjust as needed
                        height={300} // Adjust as needed
                        className="h-full object-contain rounded-xl"
                    />
                </div>
            </div >
        </>
    )
}
