"use client";

import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

const BASE_COUNT = 1583;

export default function ConversionCounter() {
  const [count, setCount] = useState(BASE_COUNT);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fetch global count on mount
  useEffect(() => {
    fetch('/api/counter')
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(() => setCount(BASE_COUNT)); // Fallback on error
  }, []);

  const incrementCounter = async () => {
    // Trigger animation immediately for better UX
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);

    try {
      // Increment global counter
      const response = await fetch('/api/counter/increment', {
        method: 'POST',
      });
      const data = await response.json();

      if (data.success) {
        setCount(data.count);
      }
    } catch (error) {
      console.error('Failed to increment counter:', error);
      // Optimistic update even if API fails
      setCount(prev => prev + 1);
    }
  };

  // Expose increment function globally for the main page
  useEffect(() => {
    (window as any).incrementConversionCounter = incrementCounter;
  }, []);

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
