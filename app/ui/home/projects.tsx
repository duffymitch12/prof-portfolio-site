// component for projects on resume
// componeent for experiences
// import { Suspense } from "react";
import resume from "@/app/lib/resume.json";
import Card from "@/app/ui/components/cards";

// import {}

export default async function ProjectWrapper() {
    // await new Promise((resolve) => setTimeout(resolve, 3000));`
    const data = resume.projects;
    return (
        <>
            <h2 className="mx-auto text-center text-2xl font-bold text-black underline underline-offset-8 decoration-[#1A535C] decoration-4" id="projects">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-screen my-8 mx-6" id="projects">
                {data.map((p, index) => (
                    <Card
                        key={index}
                        header={p.name}
                        additional={p.date}
                        description={p.description}
                        fileName={p.filePath}
                        URL={p.url}
                        buttonText={p.buttonText}
                        additionalList={p.codeBase}
                        underConstruction={p.underConstruction}
                    />
                ))}
            </div>
        </>

    )
}