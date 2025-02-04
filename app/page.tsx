// import Image from "next/image";
import resume from "@/app/lib/resume.json";
import EducationWrapper from "@/app/ui/home/education";

export default function Home() {
  return (
    <div className="bg-dim-gray-500 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-8 pb-20 gap-16 sm:px-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div id="intro" className="flex bg-[#626868] mx-auto px-8 w-full ">
          <h3 className="inline-block text-lg font-medium">
            Welcome I am Mitch Duffy, I am a recent grad with experience in{" "}
            <span className="text-md font-extrabold text-[#C3BF6D]">
              Web Development
            </span>{" "}
            and{" "}
            <span className="text-md font-extrabold text-[#C3BF6D]">
              Startups
            </span>
          </h3>
          <EducationWrapper />
        </div>

        {resume.experience.map((job, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-xl sm:text-2xl font-bold">{job.title}</h3>
            <h4 className="text-lg sm:text-xl">{job.company}</h4>
            <p className="text-sm sm:text-md">{job.location}</p>
            <p className="text-sm sm:text-md">
              {job.start} - {job.end}
            </p>
            <p className="text-sm sm:text-md">{job.info}</p>
          </div>
        ))}
        {resume.projects.map((proj, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-xl sm:text-2xl font-bold">{proj.name}</h3>
            <h4 className="text-lg sm:text-xl">{proj.description}</h4>
            <p className="text-sm sm:text-md">{proj.technologies}</p>
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <p className="text-sm sm:text-md">{resume.technicalSkills}</p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div>
          <h3>{resume.header.email}</h3>
          <h3>{resume.header.phone}</h3>
          <h3>{resume.header.location}</h3>
        </div>
      </footer>
    </div>
  );
}
