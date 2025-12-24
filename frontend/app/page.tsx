"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
  const [hoopSize, setHoopSize] = useState<string>("none");
  const [formats, setFormats] = useState<Record<string, string>>({});
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
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

  const validateFile = (file: File): boolean => {
    const validExtensions = ['dst', 'pes', 'exp', 'jef', 'xxx', 'vp3', 'u01', 'pec'];
    const fileName = file.name.toLowerCase();
    const extension = fileName.split('.').pop();

    if (!extension || !validExtensions.includes(extension)) {
      setError(`Invalid file format. Supported formats: ${validExtensions.map(ext => ext.toUpperCase()).join(', ')}`);
      return false;
    }

    return true;
  };

  const handleFileSelect = (selectedFile: File) => {
    setError(null);
    setSuccess(false);

    if (validateFile(selectedFile)) {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  const handleConvert = async () => {
    if (!file) return;

    // Validate file again before conversion
    if (!validateFile(file)) {
      return;
    }

    setIsConverting(true);
    setError(null);
    setWarning(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("target_format", targetFormat);
      if (hoopSize !== "none") {
        formData.append("hoop_size", hoopSize);
      }

      const response = await fetch(`${API_URL}/api/convert`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Conversion failed");
      }

      // Check if response is a warning (JSON) or file (blob)
      const contentType = response.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        const warningData = await response.json();
        setWarning(warningData.warning || warningData.detail);
        setIsConverting(false);
        return;
      }

      // Get the blob and filename
      const blob = await response.blob();
      const contentDisposition = response.headers.get("Content-Disposition");
      const filename = contentDisposition
        ? contentDisposition.split("filename=")[1].replace(/"/g, "")
        : `converted.${targetFormat}`;

      // Check for hoop warning in headers
      const hoopWarning = response.headers.get("X-Conversion-Warning");
      if (hoopWarning) {
        setWarning(hoopWarning);
      }

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
            </div>
            <ConversionCounter />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="border-b-2 border-black bg-[#f0ebe3] py-8">
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
            <div className="bg-cyan-400 text-black px-6 py-3 border-b-2 border-black">
              <p className="text-sm font-bold uppercase tracking-wider">
                TERMINAL // CONVERT
              </p>
            </div>

            {/* Card Body */}
            <div className="p-8 space-y-8 bg-[#f0ebe3]">
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

          {/* Hoop Size Selector */}
          {file && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <label className="block text-sm font-bold uppercase tracking-wider mb-4">
                TARGET_HOOP: <span className="text-xs opacity-70">(OPTIONAL // AUTO_RESIZE)</span>
              </label>
              <select
                value={hoopSize}
                onChange={(e) => setHoopSize(e.target.value)}
                disabled={isConverting}
                className="w-full p-4 border-2 border-black bg-white font-bold uppercase text-sm shadow-brutal-sm hover:bg-[#f0ebe3] transition-colors duration-100 disabled:opacity-50"
              >
                <option value="none">NO LIMIT (DEFAULT)</option>
                <option value="brother_4x4">BROTHER 4x4" (100x100mm)</option>
                <option value="brother_5x7">BROTHER 5x7" (130x180mm)</option>
                <option value="brother_6x10">BROTHER 6x10" (160x260mm)</option>
              </select>
              <p className="text-xs mt-2 opacity-70">
                AUTO-SCALES DESIGN IF &lt; 10% OVERSIZED // WARNS IF TOO LARGE
              </p>
            </div>
          )}

          {/* Terminal Output */}
          {file && isConverting && (
            <div className="border-2 border-black bg-[#f0ebe3] p-4 font-mono text-xs">
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

          {/* Warning Message */}
          {warning && (
            <div className="border-2 border-black bg-yellow-300 p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-black flex-shrink-0" strokeWidth={2} />
                <div>
                  <p className="font-bold uppercase text-sm">WARNING:</p>
                  <p className="text-sm mt-1">{warning}</p>
                </div>
              </div>
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

      {/* Popular Conversions - Internal Links */}
      <div className="border-t-2 border-black bg-[#f0ebe3] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold uppercase tracking-wider mb-8 border-l-4 border-cyan-400 pl-4">
            POPULAR_CONVERSIONS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/dst-to-pes" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm text-center">
              <div className="font-bold text-sm">DST → PES</div>
              <div className="text-xs opacity-70 mt-1">Tajima to Brother</div>
            </Link>
            <Link href="/pes-to-dst" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm text-center">
              <div className="font-bold text-sm">PES → DST</div>
              <div className="text-xs opacity-70 mt-1">Brother to Tajima</div>
            </Link>
            <Link href="/jef-to-pes" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm text-center">
              <div className="font-bold text-sm">JEF → PES</div>
              <div className="text-xs opacity-70 mt-1">Janome to Brother</div>
            </Link>
            <Link href="/exp-to-dst" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm text-center">
              <div className="font-bold text-sm">EXP → DST</div>
              <div className="text-xs opacity-70 mt-1">Melco to Tajima</div>
            </Link>
            <Link href="/dst-to-jef" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm text-center">
              <div className="font-bold text-sm">DST → JEF</div>
              <div className="text-xs opacity-70 mt-1">Tajima to Janome</div>
            </Link>
            <Link href="/pes-to-jef" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm text-center">
              <div className="font-bold text-sm">PES → JEF</div>
              <div className="text-xs opacity-70 mt-1">Brother to Janome</div>
            </Link>
            <Link href="/embroidery-file-formats" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm text-center">
              <div className="font-bold text-sm">FILE FORMATS</div>
              <div className="text-xs opacity-70 mt-1">Complete Guide</div>
            </Link>
            <Link href="/embroidery-challenges" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm text-center">
              <div className="font-bold text-sm">CHALLENGES</div>
              <div className="text-xs opacity-70 mt-1">Solutions Guide</div>
            </Link>
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
      <footer className="border-t-2 border-black bg-[#1a1a1a] text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-6 text-center">
            <div>
              <p className="text-sm uppercase tracking-wider mb-2">
                MADE WITH ❤️ BY TREEHOUSE LABS
              </p>
              <p className="text-xs opacity-70">
                © 2025 TREEHOUSE LABS // ALL RIGHTS RESERVED
              </p>
            </div>
            <div className="text-xs opacity-70">
              NO_ACCOUNTS // NO_STORAGE // ZERO_RETENTION
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
