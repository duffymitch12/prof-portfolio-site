import { Fira_Sans, Fira_Mono, Fira_Code } from "next/font/google";
// import localFont from "next/font/local";

export const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700"],
  variable: "--font-fira-sans",
  display: "swap",
});

export const firaMono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-mono",
  display: "swap",
});
export const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700"],
  variable: "--font-fira-code",
});
