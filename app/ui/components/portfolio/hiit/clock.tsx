'use client';

import React from "react";
import { useState, useEffect } from "react";

const buttonStyles = {
    yellow: "mx-auto border-4 border-yellow-500 px-2 py-1 text-yellow-500",
    green: "mx-auto border-4 border-green-500 px-2 py-1 text-green-500",
    red: "mx-auto border-4 border-red-500 px-2 py-1 text-red-500",
};

export default function Clock({
    isRunning,
    setIsRunning,
    resetSignal,
    setResetSignal,
    timeLimit,
    onComplete,
    phase,
    interval,
    totalIntervals,
}: {
    isRunning: boolean;
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
    resetSignal: boolean;
    setResetSignal: React.Dispatch<React.SetStateAction<boolean>>;
    timeLimit: number; // in seconds
    onComplete: () => void;
    phase: "work" | "rest";
    interval: number;
    totalIntervals: number;
}) {
    const [time, setTime] = useState(0);


    useEffect(() => {
        if (resetSignal) {
            setTime(0);
            setResetSignal(false);
        }
    }, [resetSignal, setResetSignal]);//timeLimit

    useEffect(() => {
        let id: NodeJS.Timeout | undefined;
        if (isRunning) {
            id = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 10);
        }
        return () => clearInterval(id);
    }, [isRunning, timeLimit]);

    useEffect(() => {
        if (time >= timeLimit * 100) {
            setIsRunning(false);
            onComplete();
        }
    }, [time, timeLimit, onComplete, setIsRunning]);

    // Hours calculation
    // const hours = Math.floor(time / 360000);
    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);
    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);
    // Milliseconds calculation
    const milliseconds = time % 100;


    return (
        <div className="flex flex-col items-center justify-center w-full bg-[#d1d1d1] p-10 rounded-lg inset-shadow-sm inset-shadow-emerald-400">
            <h1 className="text-2xl mb-4">
                {phase.toUpperCase()} - Interval {interval}/{totalIntervals}
            </h1>
            <h1 className="text-3xl font-bold text-center pb-4">
                {minutes}:{seconds.toString().padStart(2, "0")}:{milliseconds.toString().padStart(2, "0")}
            </h1>
            <div className="flex columns-3 gap-8">
                <button className={buttonStyles.red} onClick={() => setResetSignal(true)}>Reset</button>
                <button className={buttonStyles.green} onClick={() => setIsRunning(true)}>Start</button>
                <button className={buttonStyles.yellow} onClick={() => setIsRunning(false)}>Stop</button>
            </div>

        </div>
    );
};