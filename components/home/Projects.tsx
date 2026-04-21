// @/components/home/Projects.tsx

import resume from "@/lib/resume.json";
import ProjectCard from "@/components/ProjectCard";

export default async function ProjectWrapper() {
  const data = resume.projects;

  return (
    <section className='w-full px-8 py-8 bg-[#fefefe]' id='projects'>
      <h2 className='w-full mb-8 border-b-4 border-brand-teal md:border-0 md:text-2xl text-xl font-semibold text-black md:underline md:underline-offset-[7px] md:decoration-brand-teal md:decoration-4 uppercase md:text-center'>
        Projects
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((p, index) => (
          <ProjectCard
            key={index}
            header={p.name}
            description={p.description}
            date={p.date}
            codeBase={p.codeBase}
            fileName={p.fileName}
            url={p.url}
            buttonText={p.buttonText}
          />
        ))}
      </div>
    </section>
  );
}
