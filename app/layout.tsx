import type { Metadata } from "next";
import { montserrat } from "@/app/ui/fonts";
import '@/app/ui/global.css';
import Navbar from '@/app/ui/home/nav'

export const metadata: Metadata = {
  title: "Mitch Duffy",
  description: "Generated by create next app",
  icons: {
    icon: '/user-astronaut-solid.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${montserrat.variable} font-montserrat antialiased`}
      >
        <Navbar />
        {children}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <h3>duffymitch12@gmail.com</h3>
          <h3>(248)-894-5884</h3>
          <h3>Bloomfield Hills, MI 48304</h3>
        </footer>
      </body>
    </html>
  );
}
