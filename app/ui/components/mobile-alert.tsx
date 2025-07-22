"use client";
import { useState, useEffect } from "react";

export default function MobileAlert() {
  const [showAlert, setShowAlert] = useState(true);
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (showAlert && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showAlert]);
  if (!showAlert) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center  backdrop-blur-xl z-50 md:hidden px-8">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="mb-4 text-lg font-semibold">
          Alert: Mobile design still under development.
        </p>
        <button
          onClick={() => setShowAlert(false)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
