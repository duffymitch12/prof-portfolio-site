// app/ui/home/Intro.tsx
export default async function Intro() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-justify-center text-lg font-medium mb-4 text-gray-700">
                Welcome I am Mitch Duffy, I am a recent grad with experience in{" "}
                <span className="text-md font-extrabold text-[#C3BF6D]">
                Web Development
                </span>{" "}
                and{" "}
                <span className="text-md font-extrabold text-[#C3BF6D]">
                Startups
                </span>
            </h3>
        </div>
    );
}