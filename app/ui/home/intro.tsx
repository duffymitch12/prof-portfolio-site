// app/ui/home/Intro.tsx
import Image from "next/image";
import resume from "@/app/lib/resume.json";

export default async function IntroProfileSection() {
  const education = resume.education;

  return (
    <div className="w-3/4 md:w-2/3 mx-auto">
      {/* General Details */}
      <h1 className="hidden md:flex text-xl md:text-3xl font-bold text-[#000101] text-nowrap underline underline-offset-8 decoration-[#277986] decoration-4">
        Mitchell Duffy
      </h1>
      <div className="flex flex-col items-center md:items-start justify-center h-full">
        <div className="grid grid-cols-4 my-8 items-center gap-6">
          <div className="flex md:justify-start md:col-span-1 col-span-4 justify-center">
            <Image
              src="/umich-logo.webp"
              width={200}
              height={200}
              alt="University of Michigan Logo"
            />
          </div>
          <div className="flex font-light text-gray-600 gap-3 justify-center md:text-left md:ml-0 md:col-span-3 col-span-4">
            <div className="pr-4">
              <span className="uppercase">City</span>
              <p className="md:text-xl text-md text-gray-800 font-semibold pt-2">
                Bloomfield Hills
              </p>
            </div>
            <div className="pr-4">
              <span className="uppercase">State</span>
              <p className="md:text-xl text-md text-gray-800 font-semibold pt-2">
                Michigan
              </p>
            </div>
            <div className="pr-4">
              <span className="uppercase">Zipcode</span>
              <p className="md:text-xl text-md text-gray-800 font-semibold pt-2">
                48304
              </p>
            </div>
          </div>
        </div>
        <div className="md:text-md text-sm text-gray-800 font-medium">
          I am a recent graduate with a Bachelor of Science in Computer Science
          from the <span>{education.institution}</span>, Ann Arbor (December
          2024). I have hands-on experience in
          <span className="md:text-md text-sm font-extrabold text-[#973B11]">
            {" "}
            Web Development{" "}
          </span>
          and a background in working with
          <span className="md:text-md text-sm font-extrabold text-[#973B11]">
            {" "}
            Startups{" "}
          </span>
          , which has helped me develop a versatile skill set for building
          innovative solutions.
        </div>
      </div>
    </div>
  );
}
