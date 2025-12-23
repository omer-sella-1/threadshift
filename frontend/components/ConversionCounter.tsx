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
    <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
      <TrendingUp className="w-5 h-5 text-primary-dark" />
      <div className="flex items-baseline gap-2">
        <span
          className={`text-2xl font-bold text-primary-dark transition-all ${
            isAnimating ? 'scale-110' : 'scale-100'
          }`}
        >
          {formatNumber(count)}
        </span>
        <span className="text-sm text-foreground/70">
          files converted
        </span>
      </div>
    </div>
  );
}
