import TimerContainer from "@/app/ui/components/portfolio/hiit/timer-container";

export default async function Page() {
  return (
    <main className="flex flex-col md:gap-6 gap-2 md:space-x-6 space-x-0 row-start-2 items-center bg-[#fefffe] ">
      {/* <MobileAlert /> */}
      <TimerContainer />
    </main>
  );
}
