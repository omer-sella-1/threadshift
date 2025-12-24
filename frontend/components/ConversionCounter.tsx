"use client";

import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

const BASE_COUNT = 1583;

export default function ConversionCounter() {
  const [count, setCount] = useState(BASE_COUNT);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Get stored count from localStorage
    const stored = localStorage.getItem('threadshifter_conversions');
    if (stored) {
      setCount(parseInt(stored));
    }
  }, []);

  const incrementCounter = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('threadshifter_conversions', newCount.toString());

    // Trigger animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Expose increment function globally for the main page
  useEffect(() => {
    (window as any).incrementConversionCounter = incrementCounter;
  }, [count]);

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <div className="flex items-center justify-center gap-3 px-4 py-2 border-2 border-black bg-white shadow-brutal-sm">
      <TrendingUp className="w-4 h-4 text-black" strokeWidth={2} />
      <div className="flex items-baseline gap-2">
        <span
          className={`text-xl font-bold transition-all ${
            isAnimating ? 'text-cyan-400' : 'text-black'
          }`}
        >
          {formatNumber(count)}
        </span>
        <span className="text-xs uppercase tracking-wide opacity-70">
          CONVERSIONS
        </span>
      </div>
    </div>
  );
}
