/**
 * ResultSection Component
 *
 * Displays the main performance score with an animated counter and overall assessment.
 * Uses a gradient background and responsive layout for optimal viewing across devices.
 *
 * @component
 * @example
 * ```jsx
 * <ResultSection />
 * ```
 */
"use client";

import { PerformanceData } from "../utils/constants";
import { useEffect, useState } from "react";

export default function ResultSection() {
  // State for animated counter
  const [count, setCount] = useState(0);
  const targetScore = PerformanceData.score;

  // Animation effect for score counter
  useEffect(() => {
    if (count < targetScore) {
      // Increment counter every 20ms until target reached
      const timer = setTimeout(() => {
        setCount((prev) => Math.min(prev + 1, targetScore));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [count, targetScore]);

  return (
    <div className="w-full flex flex-col items-center gap-10 bg-gradient-to-b from-gradients-slateBlue to-gradients-royalBlue text-neutral-white rounded-b-[32px] md:rounded-[32px] px-10 md:px-14 py-10 lg:py-11">
      <div className="flex flex-col items-center gap-9">
        <h2 className="text-[1.125rem] lg:text-[1.5rem] font-bold text-neutral-lavender">
          Your Result
        </h2>
        {/* Circular score display with gradient background */}
        <div className="bg-gradient-to-b from-gradients-violetBlue to-gradients-persianBlue rounded-full w-[140px] h-[140px] lg:w-48 lg:h-48 flex flex-col items-center justify-center">
          <h3 className="text-[3.5rem] lg:text-[4.5rem] font-bold leading-none transition-all duration-75">
            {count === 0 ? "" : count}
          </h3>
          <p className="text-sm opacity-50">of 100</p>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-[1.5rem] lg:text-[2rem] font-bold leading-none mb-7">
          Great
        </h1>
        <p className="text-neutral-lavender font-medium">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </div>
  );
}
