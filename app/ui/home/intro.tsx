// app/ui/home/Intro.tsx
export default async function Intro() {
    return (
        <>
            <h1 className="text-3xl font-bold mt-16 text-nowrap">Mitchell Duffy</h1>
            <div className="flex mt-16 font-light text-gray-500 gap-3">
                <div className="pr-4">
                    <span className="uppercase">City</span>
                    <p className="text-xl text-gray-900 font-semibold pt-2">Bloomfield Hills</p>
                </div>
                <div className="pr-4">
                    <span className="uppercase">State</span>
                    <p className="text-xl text-gray-900 font-semibold pt-2">Michigan</p>
                </div>
                <div className="pr-4">
                    <span className="uppercase">Zipcode</span>
                    <p className="text-xl text-gray-900 font-semibold pt-2">48304</p>
                </div>
            </div>
        </>
    );
}