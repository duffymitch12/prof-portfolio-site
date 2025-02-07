
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
            <div className="flex flex-wrap items-center h-screen">
                {/* Left Side: Text Content */}
                <div
                    className="bg-white w-full md:w-1/2 h-screen flex items-center justify-center"
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
                <div className=" w-full md:w-1/2 h-screen">
                    <Image
                        src="/dumpster-fire-solid.svg" // Path to your SVG in the public folder
                        alt="Dumpster Fire Icon"
                        width={200} // Adjust as needed
                        height={200} // Adjust as needed
                        className="h-screen w-full object-fit"
                    />
                </div>
            </div >
        </>
    )
}
