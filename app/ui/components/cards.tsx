import Image from "next/image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function card({
  header,
  additional,
  description,
  fileName = "/globe.svg",
  URL,
  buttonText,
  underConstruction,
  additionalList,
}: {
  header: string;
  additional?: string;
  description: string;
  fileName?: string;
  URL?: string;
  buttonText?: string;
  iconName?: boolean;
  additionalList?: string[];
  underConstruction: boolean;
}) {
  // # TODO: see if need to fix styling for card alignment and sizing
  return (
    <>
      <div className="relative w-full mx-auto mb-4">
        <div className="bg-white shadow-md rounded-lg w-full h-full flex flex-col justify-between dark:bg-gray-800 dark:border-gray-700">
          <div className="relative">
            {underConstruction ? (
              <Image
                className="blur-xs rounded-t-lg mx-auto object-cover object-top w-full h-30"
                width={400}
                height={300}
                src="/under-construction.webp"
                alt="card image"
              />
            ) : (
              <Image
                className="blur-xs rounded-t-lg mx-auto w-full object-cover h-30 opacity-90"
                width={400}
                height={300}
                src={`/${fileName}`}
                alt="card image"
              />
            )}

            {additional && (
              <p className="absolute bottom-0 right-0 bg-[#00416a] text-white text-sm pr-3 pl-12 py-1 rounded-tl-2xl">
                {additional}
              </p>
            )}
          </div>

          <div className="p-6 mb-2">
            <h5 className="text-gray-900 font-medium md:text-xl text-md tracking-tight mb-3 dark:text-white">
              {header}
            </h5>
            <p className="font-light text-gray-700 mb-3 dark:text-gray-400 md:text-md text-sm">
              {description}
            </p>
            {additionalList && (
              <p className="tracking-tight dark:text-white italic font-light text-black md:text-sm text-xs">
                {additionalList.join(" | ")}
              </p>
            )}
          </div>
        </div>

        {/* Overlay Button */}
        {URL && buttonText && !underConstruction && (
          <a
            href={URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -inset-1.5 rounded-lg flex items-center hover:underline justify-center bg-gray-200 bg-opacity-60 text-[#00416a] text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            {buttonText}
          </a>
        )}
      </div>
    </>
  );
}
