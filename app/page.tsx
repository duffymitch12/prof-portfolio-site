// import Image from "next/image";
// import resume from "@/app/lib/resume.json";
import BannerContainer from "@/app/ui/home/hero";
import { Suspense } from "react";
import ExperienceWrapper from "@/app/ui/home/experience";
import ProjectWrapper from "@/app/ui/home/projects";
import SkillsCloud from "@/app/ui/home/skills";
import { ExperienceSkeleton, ProjectsSkeleton, SkillsSkeleton } from "@/app/ui/skeletons";
import Navbar from '@/app/ui/components/nav'
// import MobileAlert from "./ui/components/mobile-alert";


export default async function Page() {

  return (
    <main className="flex flex-col md:gap-6 gap-2 md:space-x-6 space-x-0 row-start-2 items-center bg-[#fefffe] ">
      <Navbar />
      {/* <MobileAlert /> */}
      <div className="w-full" id="hero">
        <BannerContainer />
      </div>
      <Suspense fallback={<ExperienceSkeleton />}>
        <ExperienceWrapper />
      </Suspense>
      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectWrapper />
      </Suspense>
      <Suspense fallback={<SkillsSkeleton />}>
        <SkillsCloud />
      </Suspense>
    </main>
  );
}
