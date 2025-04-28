// component for skills on resume
"use client";
// component for projects on resume
// import { Suspense } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';
import resume from "@/app/lib/resume.json";

import { useEffect, useState } from "react";

interface SkillItem {
    text: string;
    top: string;
    left: string;
    rotation: number;
    size: string;
}

export default function SkillsCloud() {
    const [randomizedSkills, setRandomizedSkills] = useState<SkillItem[]>([]);
    const skills = resume.technicalSkills;
    useEffect(() => {
        const placedSkills: SkillItem[] = [];
        const maxAttempts = 100; // Limit retries to prevent infinite loops

        skills.forEach((skill) => {
            let attempts = 0;
            let newSkill: SkillItem;

            do {
                const topValue = Math.floor(Math.random() * 70) + 10; // Store as number for calculation
                const leftValue = Math.floor(Math.random() * 70) + 10; // Sto

                newSkill = {
                    text: skill,
                    top: `${topValue}%`,  // Convert to string for CSS
                    left: `${leftValue}%`, // Keep within bounds (10% - 90%)
                    rotation: Math.random() * 20 - 10, // Subtle rotation (-10° to +10°)
                    size: Math.random() > 0.6 ? "text-lg md:text-xl" : "text-sm md:text-lg"
                };
                attempts++;
            } while (
                attempts < maxAttempts &&
                placedSkills.some(existing => {
                    // Extract numerical values from existing placements
                    const existingTop = parseFloat(existing.top);
                    const existingLeft = parseFloat(existing.left);
                    const newTop = parseFloat(newSkill.top);
                    const newLeft = parseFloat(newSkill.left);

                    return Math.abs(existingTop - newTop) < 10 && Math.abs(existingLeft - newLeft) < 10;
                })// Check if new placement overlaps
            );

            placedSkills.push(newSkill);
        });

        setRandomizedSkills(placedSkills);
    }, [skills]);

    return (
        <section id="skills" className="relative w-full h-[450px] md:h-[500px] bg-[#fefefe] pl-8 md:px-0">
            {/* Title */}
            <h2 className="w-full px-6 mb-6 border-b-4 border-[#277986] md:border-0 md:text-2xl text-xl font-semibold text-black md:underline md:underline-offset-[7px] md:decoration-[#277986] md:decoration-4 uppercase md:text-center -indent-4">
                Skills
            </h2>

            {/* Word Cloud Container */}
            <div className="relative w-11/12 h-full pb-8">
                {randomizedSkills.map((skill, index) => (
                    <span
                        key={index}
                        className={`absolute font-semibold px-3 py-1 text-white bg-[#0c416b] rounded-lg shadow-md transition-all ${skill.size}`}
                        style={{
                            top: skill.top,
                            left: skill.left,
                            transform: `rotate(${skill.rotation}deg)`,
                        }}
                    >
                        {skill.text}
                    </span>
                ))}
            </div>
        </section>
    );
}
