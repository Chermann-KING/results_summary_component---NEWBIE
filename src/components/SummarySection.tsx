/**
 * SummarySection Component
 *
 * Displays detailed performance metrics with staggered entrance animations.
 * Contains a grid of TypeCards and a call-to-action button.
 *
 * @component
 * @example
 * ```jsx
 * <SummarySection />
 * ```
 */
"use client";

import TypeCard from "./TypeCard";
import { PerformanceData } from "../utils/constants";
import { useEffect, useState } from "react";

export default function SummarySection() {
  // Controls visibility of animated elements
  const [show, setShow] = useState(false);

  // Trigger entrance animation on mount
  useEffect(() => {
    setShow(true);
  }, []);

  // Performance metrics data
  const cards = [
    { title: "Reaction", score: PerformanceData.reaction },
    { title: "Memory", score: PerformanceData.memory },
    { title: "Verbal", score: PerformanceData.verbal },
    { title: "Visual", score: PerformanceData.visual },
  ];

  return (
    <div className="w-full flex flex-col justify-between gap-10 px-8 py-7 lg:py-11">
      <div className="flex flex-col gap-7">
        <h2 className="text-[1.125rem] lg:text-[1.5rem] font-bold text-neutral-grayBlue">
          Summary
        </h2>
        {/* Animated cards container */}
        <div className="flex flex-col gap-4">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`transform transition-all duration-700 ${
                show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }} // Staggered animation
            >
              <TypeCard title={card.title} score={card.score} />
            </div>
          ))}
        </div>
      </div>

      <button className="bg-neutral-grayBlue text-neutral-white font-bold py-5 rounded-full transition-all duration-300 hover:bg-gradient-to-b hover:from-gradients-slateBlue hover:to-gradients-royalBlue">
        Continue
      </button>
    </div>
  );
}
