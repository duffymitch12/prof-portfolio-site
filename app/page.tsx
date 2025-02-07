// import Image from "next/image";
// import resume from "@/app/lib/resume.json";
import BannerContainer from "@/app/ui/home/hero";
import { Suspense } from "react";
import Image from 'next/image';
import ExperienceWrapper from "@/app/ui/home/experience";
import ProjectWrapper from "@/app/ui/home/projects";
import TechSkillsWrapper from "@/app/ui/home/skills";
import { ExperienceSkeleton, ProjectsSkeleton, SkillsSkeleton } from "@/app/ui/skeletons";
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
      <Suspense fallback={<ExperienceSkeleton />}>
        <ExperienceWrapper />
      </Suspense>
      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectWrapper />
      </Suspense>
      <Suspense fallback={<SkillsSkeleton />}>
        <TechSkillsWrapper />
      </Suspense>
    </main>
  );
}
