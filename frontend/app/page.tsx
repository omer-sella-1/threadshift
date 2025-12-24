"use client";

import { useState, useEffect } from "react";
import { Download, Terminal, AlertCircle, CheckCircle2 } from "lucide-react";
import Dropzone from "@/components/Dropzone";
import FormatSelector from "@/components/FormatSelector";
import SEOContent from "@/components/SEOContent";
import ConversionCounter from "@/components/ConversionCounter";
import ShareButtons from "@/components/ShareButtons";
import BrutalButton from "@/components/BrutalButton";
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
      {/* Header - Terminal Style */}
      <header className="border-b-2 border-black bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-6 h-6 text-black" strokeWidth={2} />
              <h1 className="text-2xl font-bold uppercase tracking-wider">THREAD_SHIFTER</h1>
              <span className="text-xs border border-black px-2 py-1 bg-white">v1.0.0</span>
            </div>
            <ConversionCounter />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="border-b-2 border-black bg-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            // CONVERT EMBROIDERY FILES
          </h2>
          <p className="mt-3 text-sm uppercase tracking-wider opacity-70">
            NO LOGIN. NO CLOUD STORAGE. RAW UTILITY.
          </p>
        </div>
      </div>

      {/* Main Converter */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full">
          {/* Converter Card */}
          <div className="border-2 border-black bg-white shadow-brutal-lg">
            {/* Card Header */}
            <div className="bg-black text-white px-6 py-3 border-b-2 border-black">
              <p className="text-sm font-bold uppercase tracking-wider">
                TERMINAL // CONVERT_V1.0
              </p>
            </div>

            {/* Card Body */}
            <div className="p-8 space-y-8">
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

          {/* Terminal Output */}
          {file && isConverting && (
            <div className="border-2 border-black bg-white p-4 font-mono text-xs">
              <div className="space-y-1">
                <p>&gt; READING_FILE... <span className="text-green-500">OK</span></p>
                <p>&gt; DETECTING_FORMAT... <span className="text-cyan-400">{file.name.split('.').pop()?.toUpperCase()}</span></p>
                <p>&gt; CONVERTING_TO... <span className="text-cyan-400">{targetFormat.toUpperCase()}</span></p>
                <p className="animate-pulse">&gt; PROCESSING...</p>
              </div>
            </div>
          )}

          {/* Convert Button */}
          {file && !isConverting && (
            <div>
              <BrutalButton
                onClick={handleConvert}
                variant="primary"
                fullWidth
                className="text-base py-6"
              >
                <div className="flex items-center justify-center gap-3">
                  <Download className="w-5 h-5" strokeWidth={2} />
                  CONVERT &amp; DOWNLOAD
                </div>
              </BrutalButton>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="border-2 border-black bg-red-500 p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-white flex-shrink-0" strokeWidth={2} />
                <div>
                  <p className="font-bold text-white uppercase text-sm">ERROR:</p>
                  <p className="text-white text-sm mt-1">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="border-2 border-black bg-green-400 p-4">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-black" strokeWidth={2} />
                <p className="font-bold uppercase text-sm">
                  SUCCESS // FILE_DOWNLOADED
                </p>
              </div>
            </div>
          )}
            </div>
          </div>
        </div>
      </div>

      {/* Social Share Section */}
      <div className="border-t-2 border-black bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <ShareButtons />
        </div>
      </div>

      {/* SEO Content - FAQ and Format Info */}
      <div className="border-t-2 border-black bg-white">
        <SEOContent />
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-black text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
            <div>
              <p className="text-xs uppercase tracking-wider">
                SYSTEM_READY // COPYRIGHT 2025
              </p>
              <p className="text-xs opacity-70 mt-1">
                NO_ACCOUNTS // NO_STORAGE // ZERO_RETENTION
              </p>
            </div>
            <div className="text-xs uppercase tracking-wider opacity-70">
              DST • PES • EXP • JEF • XXX • VP3 • U01 • PEC
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
