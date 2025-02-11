// app/ui/home/Intro.tsx
export default async function Intro() {
    return (
        <>
            <h1 className="text-xl md:text-3xl font-bold mt-16 text-nowrap underline underline-offset-8 decoration-[#1A535C] decoration-4">Mitchell Duffy</h1>
            <div className="flex md:mt-16 mt-8 font-light text-gray-600 gap-3">
                <div className="pr-4">
                    <span className="uppercase">City</span>
                    <p className="md:text-xl text-md text-gray-800 font-semibold pt-2">Bloomfield Hills</p>
                </div>
                <div className="pr-4">
                    <span className="uppercase">State</span>
                    <p className="md:text-xl text-md text-gray-800 font-semibold pt-2">Michigan</p>
                </div>
                <div className="pr-4">
                    <span className="uppercase">Zipcode</span>
                    <p className="md:text-xl text-md text-gray-800 font-semibold pt-2">48304</p>
                </div>
            </div>
        </>
    );
}