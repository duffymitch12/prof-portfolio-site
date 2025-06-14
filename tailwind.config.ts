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
        sans: ['var(--font-fira-sans)', 'sans-serif'],
        mono: ['var(--font-fira-mono)', 'monospace'],
        code: ['var(--font-fira-code)', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
