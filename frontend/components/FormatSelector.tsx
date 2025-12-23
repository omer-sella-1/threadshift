"use client";

import { Check } from "lucide-react";

interface FormatSelectorProps {
  formats: Record<string, string>;
  selectedFormat: string;
  onSelect: (format: string) => void;
  disabled?: boolean;
}

export default function FormatSelector({
  formats,
  selectedFormat,
  onSelect,
  disabled,
}: FormatSelectorProps) {
  return (
    <div className="w-full">
      <label className="block text-lg font-semibold text-foreground mb-4">
        Convert to:
      </label>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.entries(formats).map(([ext, name]) => (
          <button
            key={ext}
            onClick={() => onSelect(ext)}
            disabled={disabled}
            className={`
              relative p-4 rounded-xl border-2 transition-all duration-200
              flex flex-col items-center gap-2 text-center
              ${
                selectedFormat === ext
                  ? "border-primary bg-primary/10 shadow-md scale-[1.02]"
                  : "border-border bg-card hover:border-primary/50 hover:bg-primary/5"
              }
              ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            {selectedFormat === ext && (
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}

            <div className="text-2xl font-bold text-primary-dark">
              .{ext.toUpperCase()}
            </div>

            <div className="text-sm text-foreground/70 leading-tight">
              {name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
