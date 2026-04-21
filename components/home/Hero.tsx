// @/components/home/Hero.tsx
import IntroProfileSection from "@/components/home/Intro";
import Image from "next/image";

export default function BannerContainer() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row min-h-screen w-full bg-white"
    >
      {/* Left: Text — full width on mobile, 2/3 on desktop */}
      <div className="flex items-center justify-center w-full md:w-2/3 px-6 py-16 md:py-0">
        <IntroProfileSection />
      </div>

      {/* Right: Image — sits above text on mobile via flex-col, right side on desktop */}
      <div className="flex items-center justify-center w-full md:w-1/3 pt-24 pb-6 md:py-0">
        <Image
          src="/mitch-ai.png"
          alt="Mitchell Duffy"
          width={300}
          height={300}
          className="object-contain rounded-xl w-48 h-48 md:w-72 md:h-72"
          priority
        />
      </div>
    </section>
  );
}