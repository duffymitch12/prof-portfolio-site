import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-fira-sans)", "fira-sans"],
        mono: ["var(--font-fira-mono)", "fira-mono"],
        code: ["var(--font-fira-code)", "fira-code"],
      },
    },
  },
  plugins: [],
} satisfies Config;
