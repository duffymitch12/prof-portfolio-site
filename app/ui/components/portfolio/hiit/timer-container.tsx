"use client";
import { useState } from "react";
import Form from "@/app/ui/components/portfolio/hiit/form";
import Clock from "@/app/ui/components/portfolio/hiit/clock";

export default function TimerContainer() {
  const [clockSettings, setClockSettings] = useState({
    workLimit: "6",
    restLimit: "2",
    intervals: "1",
  });

  const [phase, setPhase] = useState<"work" | "rest">("work");
  const [intervalCount, setIntervalCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [resetSignal, setResetSignal] = useState(false);

  const totalIntervals = Number(clockSettings.intervals);
  const workLimit = Number(clockSettings.workLimit);
  const restLimit = Number(clockSettings.restLimit);
  const currentLimit = phase === "work" ? workLimit : restLimit;

  const handleSettingsChange = (newSettings: typeof clockSettings) => {
    setClockSettings(newSettings);
    setIntervalCount(0);
    setPhase("work");
    setResetSignal(true); // reset clock if settings change
  };

  const handleStageComplete = () => {
    if (phase === "work") {
      setPhase("rest");
    } else {
      const nextInterval = intervalCount + 1;
      if (nextInterval < totalIntervals) {
        setIntervalCount(nextInterval);
        setPhase("work");
      } else {
        setIsRunning(false); // Finished all intervals
      }
    }
    setResetSignal(true); // trigger reset for next stage
  };

  return (
    <div className="space-y-10">
      <Form
        clockSettings={clockSettings}
        onSettingsChange={handleSettingsChange}
      />
      <Clock
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        resetSignal={resetSignal}
        setResetSignal={setResetSignal}
        timeLimit={currentLimit}
        onComplete={handleStageComplete}
        phase={phase}
        interval={intervalCount + 1}
        totalIntervals={totalIntervals}
      />
    </div>
  );
}
