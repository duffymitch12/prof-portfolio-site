import IntroProfileSection from "@/app/ui/home/intro";
import Image from "next/image";
// import Typewriter from "@/app/ui/home/typewriter";
// import { Suspense } from "react";

export default function BannerContainer() {
  return (
    <>
      {/* Typewriter effect */}
      {/* <Typewriter /> */}

      {/* Hero Block */}
      <div
        className="flex flex-col-reverse md:flex-wrap h-screen md:mt-0 mt-18"
        id="hero"
      >
        {/* Left Side: Text Content */}
        <div className="bg-white w-full md:w-2/3 h-screen flex items-center justify-center">
          <div className="mx-8 md:mx-12 md:pl-6">
            <IntroProfileSection />
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="w-fit md:w-1/3 md:h-screen mx-auto flex justify-center md:mt-0 mt-8">
          <Image
            src="/mitch-ai.png"
            alt="AI Generated Image of mitch duffy"
            width={300}
            height={300}
            className="object-contain rounded-xl"
          />
        </div>
      </div>
    </>
  );
}
