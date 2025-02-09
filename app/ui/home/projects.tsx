// component for projects on resume
// componeent for experiences
// import { Suspense } from "react";
import resume from "@/app/lib/resume.json";
import Card from "@/app/ui/components/cards";

// import {}

export default async function ProjectWrapper() {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = resume.projects;
    return (
        data.map((p, index) => (
            <div key={index} className="flex flex-col gap-2" id="projects">
                <Card header={p.name} additional={p.date} description={p.description} />
            </div>
        )
        )
    )
}


// export function ProjCard({
//     name,
//     description,
//     // technologies,
//     date,
// }: {
//     name: string,
//     description: string,
//     technologies: string[],
//     date: string, //#FIXME: once have actual format for dates impl
// }) {
//     return (
//         <>
//             <div className="max-w-2xl mx-auto">
//                 <div className="bg-white shadow-md border border-gray-500 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
//                     <a href="#" className="h-5 w-5">
//                         {/* <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" /> */}
//                         #TODO:ADD IMAGE HERE
//                     </a>
//                     <div className="p-5">
//                         <a href="#">
//                             <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{name}</h5>
//                         </a>
//                         <p className="italic font-light text-pretty">{date}</p>
//                         <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{description}</p>
//                         <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                             Read more
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             {/*  <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
//                 <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-400">
//                     <h3 className="ml-2 text-lg text-bold">{name}</h3>
//                     <h5 className="ml-2 text-sm font-semibold"> {date}</h5>
//                     <p className="ml-2 text-md text-medium">{description}</p>
//                 </div>
//                 <div className="flex p-4">
//                     <ul>
//                         {technologies.map((item, index) => (
//                             <li key={index} className="text-sm">{item}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div> */}
//         </>
//     )

