// import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <section className="bg-[#424B54] w-dvw dark:bg-gray-800">
        <div className="py-6 mx-auto space-y-8 overflow-hidden px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="flex flex-row px-5 py-2">
              <a
                href="mailto:duffymitch12@gmail.com"
                className="text-base md:leading-6 leading-2 hover:text-[#9DC3C2] text-gray-50"
              >
                <FontAwesomeIcon
                  icon={["fas", "envelope"]}
                  className="text-2xl mr-2"
                />{" "}
                duffymitch12@gmail.com
              </a>
            </div>
            <div className="flex flex-row px-5 py-2">
              <a
                href="tel:+12488945884"
                className="text-base md:leading-6 leading-2 hover:text-[#9DC3C2] text-gray-50"
              >
                <FontAwesomeIcon
                  icon={["fas", "phone"]}
                  className="text-2xl mr-2"
                />{" "}
                (248) 894-5884
              </a>
            </div>
          </nav>
          <div className="flex justify-center space-x-6 p-4">
            <a
              href="https://github.com/duffymitch12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="text-4xl text-gray-50 hover:text-[#6865ff]"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/mitchell-duffy-678781205/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className="text-4xl text-gray-50 hover:text-blue-600"
              />
            </a>
          </div>
          <p className="mt-8 text-sm leading-6 text-center text-gray-50">
            2025 Mitchell Duffy, Portfolio Website.
          </p>
        </div>
      </section>
    </>
  );
}
