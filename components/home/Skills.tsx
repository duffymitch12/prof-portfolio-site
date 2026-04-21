// @/components/home/Skills.tsx
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
  FileHtmlIcon,
  FileCssIcon,
  FileSqlIcon,
  OpenAiLogoIcon,
  GitBranchIcon,
  CloudIcon,
} from "@phosphor-icons/react/ssr";
import {
  siTypescript,
  siJavascript,
  siPython,
  siNextdotjs,
  siReact,
  siNodedotjs,
  siExpress,
  siPostgresql,
  siPrisma,
  siMysql,
  siGraphql,
  siVercel,
  siGithub,
  siAnthropic,
} from "simple-icons";

// ── Icon type union (mirrors TechStackSection) ─────────────
type SimpleIcon = { path: string; hex: string };
type SkillIcon =
  | { type: "simple"; icon: SimpleIcon }
  | { type: "phosphor"; icon: PhosphorIcon };

type SkillItem = {
  name: string;
  icon?: SkillIcon;
  href?: string;
};

type SkillGroup = {
  group: string;
  items: SkillItem[];
};

function si(icon: SimpleIcon): SkillIcon {
  return { type: "simple", icon };
}
function ph(icon: PhosphorIcon): SkillIcon {
  return { type: "phosphor", icon };
}

// ── Data ───────────────────────────────────────────────────
const SKILL_GROUPS: SkillGroup[] = [
  {
    group: "Languages",
    items: [
      { name: "TypeScript", icon: si(siTypescript), href: "https://typescriptlang.org" },
      { name: "JavaScript", icon: si(siJavascript), href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Python", icon: si(siPython), href: "https://python.org" },
      { name: "HTML", icon: ph(FileHtmlIcon), href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: ph(FileCssIcon), href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
  },
  {
    group: "Frameworks",
    items: [
      { name: "Next.js", icon: si(siNextdotjs), href: "https://nextjs.org" },
      { name: "React", icon: si(siReact), href: "https://react.dev" },
      { name: "Node.js", icon: si(siNodedotjs), href: "https://nodejs.org" },
      { name: "Express", icon: si(siExpress), href: "https://expressjs.com" },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "PostgreSQL", icon: si(siPostgresql), href: "https://postgresql.org" },
      { name: "pgvector", icon: ph(FileSqlIcon), href: "https://github.com/pgvector/pgvector" },
      { name: "Prisma", icon: si(siPrisma), href: "https://prisma.io" },
      { name: "MySQL", icon: si(siMysql), href: "https://mysql.com" },
    ],
  },
  {
    group: "Tools & Infra",
    items: [
      { name: "GraphQL", icon: si(siGraphql), href: "https://graphql.org" },
      { name: "Vercel", icon: si(siVercel), href: "https://vercel.com" },
      { name: "Git", icon: ph(GitBranchIcon), href: "https://git-scm.com" },
      { name: "GitHub", icon: si(siGithub), href: "https://github.com" },
      { name: "REST APIs", icon: ph(CloudIcon), href: "https://developer.mozilla.org/en-US/docs/Glossary/REST" },
    ],
  },
  {
    group: "AI",
    items: [
      { name: "Anthropic API", icon: si(siAnthropic), href: "https://anthropic.com" },
      { name: "OpenAI API", icon: ph(OpenAiLogoIcon), href: "https://openai.com" },
      { name: "Vercel AI SDK", icon: si(siVercel), href: "https://sdk.vercel.ai" },
      { name: "RAG", icon: ph(FileSqlIcon), href: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation" },
    ],
  },
];

// ── Icon renderer (identical pattern to TechStackSection) ──
function SkillIconRenderer({ icon, name }: { icon: SkillIcon; name: string }) {
  if (icon.type === "phosphor") {
    const Icon = icon.icon;
    return (
      <Icon
        className="size-4 shrink-0"
        style={{ opacity: 0.75 }}
        aria-label={name}
      />
    );
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className="size-4 shrink-0"
      style={{ fill: `#${icon.icon.hex}`, opacity: 0.85 }}
      aria-label={name}
    >
      <path d={icon.icon.path} />
    </svg>
  );
}

// ── Component ──────────────────────────────────────────────
export default function SkillsSection() {
  return (
    <section id="skills" className="w-full px-8 py-12 bg-[#faf8f5]">
      <h2 className="w-full mb-8 border-b-4 border-brand-teal md:border-0 md:text-2xl text-xl font-semibold text-black md:underline md:underline-offset-[7px] md:decoration-brand-teal md:decoration-4 uppercase md:text-center">
        Skills
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-5xl md:mx-auto">
        {SKILL_GROUPS.map(({ group, items }) => (
          <div
            key={group}
            className="rounded-xl border border-[#c9c0b3]/60 bg-white overflow-hidden"
          >
            {/* Group header */}
            <div className="border-b border-[#c9c0b3]/40 bg-[#f0ece6]/60 px-3 py-1.5">
              <p className="text-[9px] font-semibold uppercase tracking-widest text-[#7a6f63]">
                {group}
              </p>
            </div>

            {/* Items */}
            <div className="divide-y divide-[#c9c0b3]/20">
              {items.map(({ name, icon, href }) => {
                const inner = (
                  <>
                    {icon && <SkillIconRenderer icon={icon} name={name} />}
                    <span className="text-[11px] font-mono text-[#6b6057] group-hover:text-[#2c2824] transition-colors truncate">
                      {name}
                    </span>
                  </>
                );

                return href ? (

                  <a key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2 transition-colors hover:bg-[#f0ece6]/60 group"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={name}
                    className="flex items-center gap-2.5 px-3 py-2"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section >
  );
}