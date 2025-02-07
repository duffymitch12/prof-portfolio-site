'use client';

import { useEffect, useState } from 'react';

export default function Typewriter() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 5000); // 3 seconds
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
            <h1 className="typewriter text-4xl font-bold">Welcome To My Website</h1>
        </div>
    )
}