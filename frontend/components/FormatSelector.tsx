"use client";

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
      <label className="block text-sm font-bold uppercase tracking-wider mb-4">
        TARGET_FORMAT:
      </label>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(formats).map(([ext, name]) => (
          <button
            key={ext}
            onClick={() => onSelect(ext)}
            disabled={disabled}
            className={`
              relative p-4 border-2 border-black transition-all duration-100
              flex flex-col items-center gap-2 text-center
              ${
                selectedFormat === ext
                  ? "bg-cyan-400 shadow-brutal"
                  : "bg-white hover:bg-cyan-400/20 shadow-brutal-sm"
              }
              ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer active:shadow-none active:translate-x-1 active:translate-y-1"}
            `}
          >
            {selectedFormat === ext && (
              <div className="absolute top-1 right-1 w-5 h-5 border border-black bg-black flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            )}

            <div className="text-2xl font-bold">
              .{ext.toUpperCase()}
            </div>

            <div className="text-xs uppercase opacity-70">
              {name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
