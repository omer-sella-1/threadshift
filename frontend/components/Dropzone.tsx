"use client";

import { Upload, File } from "lucide-react";
import { useCallback, useState } from "react";

interface DropzoneProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  disabled?: boolean;
}

export default function Dropzone({ onFileSelect, selectedFile, disabled }: DropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      if (disabled) return;

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        onFileSelect(file);
      }
    },
    [onFileSelect, disabled]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        onFileSelect(file);
      }
    },
    [onFileSelect, disabled]
  );

  return (
    <div className="w-full">
      <label
        htmlFor="file-upload"
        className={`
          relative block w-full border-2 border-dashed border-black
          transition-all duration-100 cursor-pointer
          ${isDragging ? "bg-cyan-400" : "bg-white"}
          ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-cyan-400/10"}
          ${selectedFile ? "bg-green-100" : ""}
        `}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          id="file-upload"
          type="file"
          className="sr-only"
          onChange={handleFileInput}
          accept=".dst,.pes,.exp,.jef,.xxx,.vp3,.u01,.pec"
          disabled={disabled}
        />

        <div className="p-12 text-center">
          {selectedFile ? (
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-2 border-black bg-green-300 flex items-center justify-center">
                <File className="w-8 h-8 text-black" strokeWidth={2} />
              </div>
              <div>
                <p className="text-base font-bold uppercase tracking-wide">
                  FILE_LOADED:
                </p>
                <p className="text-sm mt-1 font-mono">
                  {selectedFile.name}
                </p>
                <p className="text-xs mt-1 opacity-70">
                  SIZE: {(selectedFile.size / 1024).toFixed(1)} KB
                </p>
              </div>
              <p className="text-xs uppercase opacity-50">
                [ CLICK TO CHANGE ]
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 border-2 border-black bg-white flex items-center justify-center">
                <Upload className="w-10 h-10 text-black" strokeWidth={2} />
              </div>
              <div>
                <p className="text-lg font-bold uppercase tracking-wide">
                  DROP_FILE_HERE
                </p>
                <p className="text-sm mt-2 opacity-70">
                  [ OR CLICK TO BROWSE ]
                </p>
              </div>
              <div className="mt-4 border border-black px-4 py-2 bg-white text-xs uppercase">
                .DST .PES .EXP .JEF .XXX .VP3 .U01 .PEC
              </div>
            </div>
          )}
        </div>
      </label>
    </div>
  );
}
