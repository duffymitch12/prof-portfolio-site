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
        brand: {
          teal: '#277986',
          navy: '#00416A',
          'navy-dark': '#0c416b',
          red: '#A30000',
          orange: '#973B11',
          slate: '#424B54',
          'slate-light': '#9DC3C2',
          'navy-hover': '#0f4570'
        }
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
