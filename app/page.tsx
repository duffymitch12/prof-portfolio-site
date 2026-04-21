// app/page.tsx
import BannerContainer from "@/components/home/Hero";
import { Suspense } from "react";
import ExperienceWrapper from "@/components/home/Experience";
import ProjectWrapper from "@/components/home/Projects";
import SkillsCloud from "@/components/home/Skills";
import {
  ExperienceSkeleton,
  ProjectsSkeleton,
  SkillsSkeleton,
} from "@/components/Skeletons";
import Navbar from "@/components/Nav";

export default async function Page() {
  return (
    <main className="flex flex-col items-center bg-[#fefffe]">
      <Navbar />
      <BannerContainer />
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