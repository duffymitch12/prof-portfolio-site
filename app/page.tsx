// import Image from "next/image";
// import resume from "@/app/lib/resume.json";
import BannerContainer from "@/app/ui/home/banner";
import { Suspense } from "react";
import Image from 'next/image';
import ExperienceWrapper from "@/app/ui/home/experience";
import ProjectWrapper from "@/app/ui/home/projects";
import TechSkillsWrapper from "@/app/ui/home/skills";
export default async function Page() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="w-full">
        <BannerContainer />
      </div>
      <Image
        alt="globe"
        src='/vercel.svg'
        width={500}
        height={300}
      />
      <Suspense fallback={<div className="text-2xl bg-black text-white font-extrabold">EXP Loading...</div>}>
        <ExperienceWrapper />
      </Suspense>
      <Suspense fallback={<div className="text-2xl bg-black text-white font-extrabold">PROJ Loading...</div>}>
        <ProjectWrapper />
      </Suspense>
      <Suspense fallback={<div className="text-2xl bg-black text-white font-extrabold">TEK Loading...</div>}>
        <TechSkillsWrapper />
      </Suspense>
    </main>
  );
}
