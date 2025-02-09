import Image from "next/image";

export default function card({
    header,
    additional,
    description,
    fileName = '/globe.svg',
    URL,
    buttonText,
}: {
    header: string,
    additional?: string,
    description: string,
    fileName?: string,
    URL?: string,
    buttonText?: string,
}) {


    return (
        <>
            <div className="max-w-2xl mx-auto">
                <div className="bg-white shadow-md border border-gray-500 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" >
                        <Image className="rounded-t-lg mx-auto mt-8" width={100} height={100} src={fileName} alt="card image" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{header}</h5>
                        </a>
                        {additional && <p className="italic font-light text-pretty">{additional}</p>}
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{description}</p>
                        {URL && buttonText && <a href={URL} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {buttonText}
                        </a>}
                    </div>
                </div>
            </div>
        </>
    )
}