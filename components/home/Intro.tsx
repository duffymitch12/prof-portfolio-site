// @/components/home/Intro.tsx
import Image from "next/image";
import resume from "@/lib/resume.json";

export default async function IntroProfileSection() {
  const education = resume.education;

  return (
    <div className="w-full max-w-xl mx-auto">

      {/* Name — hidden on mobile since Navbar already shows it */}
      <h1 className="hidden md:block text-2xl md:text-3xl font-bold text-[#000101] underline underline-offset-8 decoration-brand-teal decoration-4 mb-6">
        Mitchell Duffy
      </h1>

      {/* Education row: logo + location details */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
        <Image
          src="/umich-logo.webp"
          width={80}
          height={80}
          alt="University of Michigan Logo"
          className="shrink-0"
        />
        <div className="flex gap-6 text-sm font-light text-gray-600 justify-center sm:justify-start flex-wrap">
          <div>
            <span className="uppercase text-xs tracking-widest">City</span>
            <p className="text-gray-800 font-semibold mt-1">Bloomfield Hills</p>
          </div>
          <div>
            <span className="uppercase text-xs tracking-widest">State</span>
            <p className="text-gray-800 font-semibold mt-1">Michigan</p>
          </div>
          <div>
            <span className="uppercase text-xs tracking-widest">Zipcode</span>
            <p className="text-gray-800 font-semibold mt-1">48304</p>
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm md:text-base text-gray-800 font-medium leading-relaxed text-center sm:text-left">
        I am a recent graduate with a Bachelor of Science in Computer Science
        from the <span>{education.institution}</span>, Ann Arbor (December 2024).
        I have hands-on experience in{" "}
        <span className="font-extrabold text-brand-orange">Web Development</span>{" "}
        and a background in working with{" "}
        <span className="font-extrabold text-brand-orange">Startups</span>,
        which has helped me develop a versatile skill set for building innovative
        solutions.
      </p>
    </div>
  );
}