// @/components/home/Experience.tsx
import resume from "@/lib/resume.json";
import {
  DownloadSimpleIcon,
  MapPinSimpleIcon,
  RowsIcon,
  LinkSimpleIcon
} from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default async function ExperienceWrapper() {
  const data = resume.experience;

  return (
    <section id="experience" className="w-full bg-[#faf8f5] py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-10">

        {/* Left: sticky header */}
        <div className="flex flex-col md:w-1/3 md:sticky md:top-20 md:self-start">
          <h2 className="mb-4 border-b-4 border-brand-teal md:border-0 md:text-2xl text-xl font-semibold text-black md:underline md:underline-offset-[7px] md:decoration-brand-teal md:decoration-4 uppercase pb-2">
            Work Experience
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
            A timeline of professional experiences relevant to my career path in
            Web Development.
          </p>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-fit border-[#a89b8c] text-[#4a403a] hover:bg-[#ede9e3] rounded-full"
          >

            <a href="/Mitch-Duffy-Resume (website).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <DownloadSimpleIcon size={15} weight="bold" />
              View Resume
            </a>
          </Button>
        </div>

        {/* Right: timeline */}
        <div className="relative md:w-2/3">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-1  md:w-2 h-full bg-[#A30000] rounded" />
          {/* Jobs */}
          <div className="flex flex-col gap-10">
            {data.map((job, index) => (
              <Job key={index} {...job} idx={index} />
            ))}
          </div>
        </div>

      </div>
    </section >
  );
}

export function Job({
  title,
  company,
  location,
  start,
  end,
  info,
  idx,
  fileName,
  primary,
  secondary,
  accent,
  links,
}: {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  info: string;
  idx: number;
  fileName: string;
  primary: string;
  secondary: string;
  accent: string;
  links?: { name: string; url: string }[];
}) {
  return (
    <div className="relative flex flex-col md:flex-row items-start w-full">

      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#A30000] border-1 border-[#faf8f5] z-10" />

      {/* Card */}
      <Card className={`
  w-[calc(100%-2.5rem)] mr-4 ml-10 md:ml-0 md:mr-0 md:w-[44%]
  ${idx % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}
  bg-[#faf8f5] border border-[#c9c0b3] rounded-xl overflow-hidden
  shadow-none hover:shadow-sm transition-shadow duration-300 p-0
`}>

        {/* Card header — dynamic brand color from resume.json */}
        <CardHeader
          className="px-5 py-4 flex flex-row items-center gap-4 space-y-0 rounded-none"
          style={{ backgroundColor: primary, color: secondary }}
        >
          <Image
            src={`/${fileName}`}
            alt={`${company} logo`}
            width={56}
            height={56}
            className="rounded-lg object-cover shrink-0 bg-white/10"
          />
          <div>
            <h4 className="font-bold text-base md:text-lg font-mono leading-tight">
              {company}
            </h4>
            <p className="text-sm font-medium mt-0.5" style={{ color: accent }}>
              {start} – {end}
            </p>
          </div>
        </CardHeader>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-6 gap-y-1 px-5 pt-3 pb-2 bg-[#f0ece6]">
          <span className="flex items-center gap-1.5 text-[#276FBF] italic text-xs md:text-sm">
            <RowsIcon size={13} weight="bold" className="shrink-0" />
            {title}
          </span>
          <span className="flex items-center gap-1.5 text-[#6b6057] italic text-xs md:text-sm">
            <MapPinSimpleIcon size={13} weight="bold" className="shrink-0" />
            {location}
          </span>
        </div>

        <Separator className="bg-[#c9c0b3]" />

        {/* Body */}
        <CardContent className="px-5 py-4 text-xs md:text-sm text-[#4a403a] font-mono leading-relaxed space-y-2 prose prose-sm max-w-none">
          <ReactMarkdown>{info}</ReactMarkdown>
        </CardContent>

        {/* Links */}
        {links && links.length > 0 && (
          <>
            <Separator className="bg-[#c9c0b3]" />
            <CardFooter className="px-5 py-3 flex flex-col items-start space-y-1.5 bg-[#f0ece6]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7a6f63] mb-2">
                Related Links
              </p>
              {links.map((link, i) => (

                <a key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[#276FBF] hover:underline"
                >
                  <LinkSimpleIcon size={11} weight="bold" className="shrink-0" />
                  {link.name}
                </a>
              ))}
            </CardFooter>
          </>
        )}

      </Card>
    </div >
  );
}