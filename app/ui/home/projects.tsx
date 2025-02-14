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
            <h2 className="md:mx-auto md:text-center text-left justify-start w-screen md:w-full ml-16 border-l-4 border-b-4 border-[#277986] text-[18px] md:border-0 md:text-2xl font-semibold text-black md:underline md:underline-offset-[7px] md:decoration-[#277986] md:decoration-4 uppercase md:indent-0 indent-2" id="projects">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-6 w-screen md:w-full p-4 md:px-8 md:py-0 md:my-8 my-4 mx-auto" id="projects">
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