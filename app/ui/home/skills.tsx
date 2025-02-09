// component for skills on resume

// component for projects on resume
// componeent for experiences
// import { Suspense } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';
// import {}

export default async function TechSkillsWrapper() {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <>
            <h2 className="mx-auto text-lg font-bold text-black border-b-4 border-[#75a79d]">Skills</h2>
            <div className="flex justify-center w-full mt-2">
                <div className="grid grid-cols-2 gap-12 max-w-4xl w-full">
                    {/* Frontend Column */}
                    <div className="text-center">
                        <h2 className="font-bold mb-4 text-lg">Frontend</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <button className="p-2 bg-[#79AEA3] text-white rounded-lg hover:opacity-80">HTML/CSS</button>
                            <button className="p-2 bg-[#79AEA3] text-white rounded-lg hover:opacity-80">React</button>
                            <button className="p-2 bg-[#79AEA3] text-white rounded-lg hover:opacity-80">TypeScript</button>
                            <button className="p-2 bg-[#79AEA3] text-white rounded-lg hover:opacity-80">JavaScript</button>
                            <button className="p-2 bg-[#79AEA3] text-white rounded-lg hover:opacity-80">TailwindCSS</button>
                            <button className="p-2 bg-[#79AEA3] text-white rounded-lg hover:opacity-80">Bootstrap</button>
                            <button className="p-2 bg-[#79AEA3] text-white rounded-lg hover:opacity-80">Swift</button>
                        </div>
                    </div>

                    {/* Backend Column */}
                    <div className="text-center">
                        <h2 className="font-bold mb-4 text-lg">Backend</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <button className="p-2 bg-[#79AEA3] text-white rounded-lg hover:opacity-80">Next.js</button>
                            <button className="p-2 bg-[#79AEA3] text-white rounded-lg hover:opacity-80">Node.js</button>
                            <button className="p-2 bg-[#79AEA3] text-white rounded-lg hover:opacity-80">Vue.js</button>
                            <button className="p-2 bg-[#79AEA3] text-white rounded-lg hover:opacity-80">Flask</button>
                            <button className="p-2 bg-[#79AEA3] text-white rounded-lg hover:opacity-80">SQLite</button>
                            <button className="p-2 bg-[#79AEA3] text-white rounded-lg hover:opacity-80">PostgreSQL</button>
                            <button className="p-2 bg-[#79AEA3] text-white rounded-lg hover:opacity-80">C++</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="grid grid-cols-[65px_65px_65px_65px] gap-2" id="skills">
                {data.map((item, index) => (
                    <div key={index} className="flex">
                        <Skill s={item} />
                    </div>
                )
                )}
            </div> */}

        </>
    )
}


export function Skill({
    s,
}: {
    s: string
}) {
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm w-fit">
            <div className="flex p-4 text-sm text-center text-wrap">
                {s}
            </div>
        </div>
    )
}
