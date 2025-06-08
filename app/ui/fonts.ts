import { Montserrat, Inter, Fira_Sans, Fira_Mono, Fira_Code } from "next/font/google";
// import localFont from "next/font/local";

export const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: "--font-fira-sans",
  display: "swap",
})

export const firaMono = Fira_Mono({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: "--font-fira-mono",
  display: "swap",
})
export const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: "--font-fira-code",
})


export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


// export const firaSans = localFont({
//   src: [
//     {
//       path: 'fonts/FiraSans-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: 'fonts/FiraSans-Bold.ttf',
//       weight: '700',
//       style: 'bold',
//     },
//     {
//       path: 'fonts/FiraSans-Italic.ttf',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: 'fonts/FiraSans-BoldItalic.ttf',
//       weight: '700',
//       style: 'italic',
//     },
//   ],
//   display: 'swap',
//   variable: '--font-fira-sans',
// });