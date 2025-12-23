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
          relative block w-full rounded-2xl border-4 border-dashed
          transition-all duration-200 cursor-pointer overflow-hidden
          ${
            isDragging
              ? "border-primary-dark bg-primary/10 scale-[1.02]"
              : "border-border hover:border-primary bg-card"
          }
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${selectedFile ? "border-success bg-success/5" : ""}
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
              <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center">
                <File className="w-8 h-8 text-success" />
              </div>
              <div>
                <p className="text-lg font-medium text-foreground">
                  {selectedFile.name}
                </p>
                <p className="text-sm text-foreground/60 mt-1">
                  {(selectedFile.size / 1024).toFixed(1)} KB
                </p>
              </div>
              <p className="text-sm text-foreground/50">
                Click or drag to change file
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Upload className="w-10 h-10 text-primary-dark" />
              </div>
              <div>
                <p className="text-xl font-semibold text-foreground">
                  Drop your embroidery file here
                </p>
                <p className="text-foreground/60 mt-2">
                  or click to browse
                </p>
              </div>
              <div className="mt-4 px-6 py-2 rounded-full bg-border/30 text-sm text-foreground/70">
                DST, PES, EXP, JEF, XXX, VP3, U01, PEC
              </div>
            </div>
          )}
        </div>
      </label>
    </div>
  );
}
