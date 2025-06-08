import resume from "@/app/lib/resume.json";
import Card from "@/app/ui/components/cards";

export default async function ProjectWrapper() {
    const data = resume.projects;
    const numProjects = data.length;
    // Parent container settings - now exactly matches content box container
    const parentClass = "md:grid md:grid-cols-6 justify-center md:w-5/6 w-full py-8 bg-[#fefefe]";

    // Child container width - matches content box exactly
    let widthClass = "flex mx-auto md:col-span-2 justify-center w-10/12";

    if (numProjects === 1) {
        // parentClass = "flex justify-center w-full md:w-2/3 px-6 py-8 bg-[#fefefe]";
        widthClass = "flex mx-auto md:col-span-4 justify-center w-10/12";
    } else if (numProjects === 2) {
        // parentClass = "flex flex-wrap justify-center w-full px-6 py-8 bg-[#fefefe]";
        widthClass = "flex mx-auto md:col-span-3 justify-center w-10/12";
    }

    return (
        <>
            <div className="flex flex-col w-full mt-2 md:mt-12 pl-8 mb-0">
                <h2 className="w-full px-6 mb-6 border-b-4 border-[#277986]  md:border-0 md:text-2xl text-xl  font-semibold text-black md:underline md:underline-offset-[7px] md:decoration-[#277986] md:decoration-4 uppercase md:text-center -indent-4"
                    id="projects">
                    Projects
                </h2>
            </div>
            <div className={parentClass}>
                {data.map((p, index) => (
                    <div key={index} className={`${widthClass} mb-6`}> {/* Added mb-6 for gap */}
                        <Card
                            header={p.name}
                            additional={p.date}
                            description={p.description}
                            fileName={p.fileName}
                            URL={p.url}
                            buttonText={p.buttonText}
                            additionalList={p.codeBase}
                            underConstruction={p.underConstruction}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
