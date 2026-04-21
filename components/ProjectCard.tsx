// @/components/ProjectCard.tsx
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
    header,
    description,
    date,
    codeBase,
    fileName,
    url,
    buttonText,
}: {
    header: string;
    description: string;
    date?: string;
    codeBase?: string[];
    fileName?: string;
    url?: string;
    buttonText?: string;
}) {
    return (
        <Card className="group flex flex-col overflow-hidden rounded-xl border border-[#c9c0b3] bg-[#faf8f5] shadow-none transition-shadow duration-300 hover:shadow-md p-0">

            {/* Image block — fixed height, date badge overlaid */}
            {fileName && (
                <div className="relative w-full h-48 overflow-hidden shrink-0">
                    <Image
                        src={`/${fileName}`}
                        alt={header}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {date && (
                        <span className="absolute top-3 right-3 z-10 bg-[#faf8f5]/90 text-[#7a6f63] text-xs font-medium px-2 py-0.5 rounded-full border border-[#c9c0b3]">
                            {date}
                        </span>
                    )}
                </div>
            )}

            {/* Body */}
            <CardContent className="flex flex-col gap-3 px-5 pt-5 pb-2 flex-1">
                <h3 className="text-[#2c2824] font-semibold text-base leading-snug tracking-tight">
                    {header}
                </h3>
                <p className="text-[#6b6057] text-sm leading-relaxed">
                    {description}
                </p>
                {codeBase && codeBase.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                        {codeBase.map((tech) => (
                            <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs font-normal border-[#c9c0b3] text-[#7a6f63] bg-[#f0ece6] hover:bg-[#e8e2da] rounded-full px-2.5 py-0.5"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>

            {/* Footer */}
            {url && buttonText && (
                <CardFooter className="px-5 pb-5 pt-3">
                    <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-[#a89b8c] text-[#4a403a] bg-transparent hover:bg-[#ede9e3] hover:text-[#2c2824] rounded-full text-xs font-medium transition-colors"
                    >
                        <Link href={url} target="_blank" rel="noopener noreferrer">
                            {buttonText}
                            <ArrowUpRight size={13} className="ml-1" />
                        </Link>
                    </Button>
                </CardFooter>
            )}

        </Card>
    );
}