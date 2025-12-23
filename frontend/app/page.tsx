"use client";

import { useState, useEffect } from "react";
import { Download, Sparkles, AlertCircle } from "lucide-react";
import Dropzone from "@/components/Dropzone";
import FormatSelector from "@/components/FormatSelector";
import SEOContent from "@/components/SEOContent";
import ConversionCounter from "@/components/ConversionCounter";
import ShareButtons from "@/components/ShareButtons";
import { track } from "@vercel/analytics";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [targetFormat, setTargetFormat] = useState<string>("pes");
  const [formats, setFormats] = useState<Record<string, string>>({});
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Fetch supported formats on mount
  useEffect(() => {
    fetch(`${API_URL}/api/formats`)
      .then((res) => res.json())
      .then((data) => setFormats(data.formats))
      .catch(() =>
        setFormats({
          dst: "Tajima DST",
          pes: "Brother PES",
          exp: "Melco EXP",
          jef: "Janome JEF",
          xxx: "Singer XXX",
          vp3: "Pfaff VP3",
          u01: "Barudan U01",
          pec: "Brother PEC",
        })
      );
  }, []);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    setError(null);
    setSuccess(false);
  };

  const handleConvert = async () => {
    if (!file) return;

    setIsConverting(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("target_format", targetFormat);

      const response = await fetch(`${API_URL}/api/convert`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Conversion failed");
      }

      // Get the blob and filename
      const blob = await response.blob();
      const contentDisposition = response.headers.get("Content-Disposition");
      const filename = contentDisposition
        ? contentDisposition.split("filename=")[1].replace(/"/g, "")
        : `converted.${targetFormat}`;

      // Download the file
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);

      // Track conversion event in Vercel Analytics
      track('Conversion', {
        source_format: file.name.split('.').pop() || 'unknown',
        target_format: targetFormat,
        file_size: file.size,
      });

      // Track conversion event in Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          event_category: 'Embroidery Conversion',
          event_label: `${file.name.split('.').pop()?.toUpperCase()} to ${targetFormat.toUpperCase()}`,
          source_format: file.name.split('.').pop() || 'unknown',
          target_format: targetFormat,
          file_size_kb: Math.round(file.size / 1024),
        });
      }

      // Increment conversion counter
      if (typeof window !== 'undefined' && (window as any).incrementConversionCounter) {
        (window as any).incrementConversionCounter();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed");
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-primary-dark" />
                <h1 className="text-3xl font-bold text-foreground">ThreadShifter</h1>
              </div>
              <p className="text-foreground/70 mt-2">
                Free, instant embroidery file converter
              </p>
            </div>
            <ConversionCounter />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full space-y-8">
          {/* Dropzone */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Dropzone
              onFileSelect={handleFileSelect}
              selectedFile={file}
              disabled={isConverting}
            />
          </div>

          {/* Format Selector */}
          {file && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <FormatSelector
                formats={formats}
                selectedFormat={targetFormat}
                onSelect={setTargetFormat}
                disabled={isConverting}
              />
            </div>
          )}

          {/* Convert Button */}
          {file && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex justify-center">
              <button
                onClick={handleConvert}
                disabled={isConverting}
                className={`
                  group relative px-12 py-5 rounded-full font-semibold text-lg
                  transition-all duration-200 flex items-center gap-3
                  ${
                    isConverting
                      ? "bg-foreground/10 text-foreground/40 cursor-wait"
                      : "bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-xl hover:scale-105 active:scale-95"
                  }
                `}
              >
                <Download className={`w-6 h-6 ${isConverting ? "" : "group-hover:animate-bounce"}`} />
                {isConverting ? "Converting..." : "Convert & Download"}
              </button>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900">Error</p>
                  <p className="text-red-700 text-sm mt-1">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="p-4 rounded-xl bg-success/20 border border-success text-center">
                <p className="font-semibold text-foreground">
                  ✓ File converted and downloaded successfully!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Social Share Section */}
      <div className="border-t border-border bg-card/20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <ShareButtons />
        </div>
      </div>

      {/* SEO Content - FAQ and Format Info */}
      <div className="border-t border-border bg-background">
        <SEOContent />
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-foreground/60">
            No accounts. No data storage. Your files are processed instantly and never saved.
          </p>
          <p className="text-xs text-foreground/40 mt-2">
            Supports DST, PES, EXP, JEF, XXX, VP3, U01, PEC formats
          </p>
        </div>
      </footer>
    </main>
  );
}
