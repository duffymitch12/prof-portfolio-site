import type { Metadata } from "next";
import { firaMono, firaSans, firaCode } from "@/app/fonts";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });


// config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: 'Mitch Duffy — Seeking Full Stack Developer Role',
    template: '%s — Mitch Duffy',
  },
  description: 'Full stack developer specializing in React, Next.js, and AI-powered web products.',
  metadataBase: new URL('https://mitchduffy.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mitchduffy.dev',
    siteName: 'Mitch Duffy',
    title: 'Mitch Duffy — Seeking Full Stack Developer Role',
    description: 'Full stack developer specializing in React, Next.js, and AI-powered web products.',
  },
  keywords: [
    'Mitch Duffy',
    'full stack software engineer',
    'full stack developer',
    'web developer',
    'React',
    'Next.js',
    'TypeScript',
    'AI',
  ],
  authors: [{ name: 'Mitch Duffy', url: 'https://mitchduffy.dev' }],
  creator: 'Mitch Duffy',
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${firaSans.className} ${firaSans.variable} ${firaCode.variable} ${firaMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
