import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert EXP to DST Online Free | Melco to Tajima Converter",
  description: "Convert Melco EXP files to DST format instantly. Free EXP to DST converter for commercial embroidery. Upload Melco designs and get universal Tajima DST files.",
  keywords: ["EXP to DST", "convert EXP to DST", "Melco to Tajima", "EXP DST converter"],
};

export default function EXPtoDSTPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b-2 border-black bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors mb-4 text-sm uppercase tracking-wide">
            <Home className="w-4 h-4" strokeWidth={2} />
            <span>BACK_TO_CONVERTER</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
            EXP → DST // CONVERT
          </h1>
          <p className="mt-3 text-sm uppercase tracking-wider opacity-70">
            MELCO TO TAJIMA CONVERSION
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white border-2 border-black shadow-brutal-lg p-8 md:p-12 space-y-12">
          {/* CTA */}
          <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            CONVERT MELCO DESIGNS TO UNIVERSAL FORMAT
          </h2>
          <Link
            href="/"
            className="inline-block px-8 py-3 border-2 border-black bg-black text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-100 shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            START_CONVERTING →
          </Link>
        </div>

        {/* Main Content */}
        <section className="space-y-8">
          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4">
            WHY_CONVERT: EXP → DST
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Converting Melco EXP files to DST format makes your designs universally compatible with all commercial embroidery machines. DST is the industry standard, accepted by Tajima, Barudan, Happy, SWF, and virtually every professional embroidery system worldwide.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            PROFESSIONAL_USE_CASES
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>• Converting Melco-digitized designs for non-Melco machines</li>
            <li>• Creating universal design libraries for production facilities</li>
            <li>• Sharing designs with embroidery service bureaus</li>
            <li>• Preparing files for multi-brand machine shops</li>
            <li>• Archiving designs in industry-standard format</li>
            <li>• Switching from Melco to Tajima equipment</li>
          </ul>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            UNDERSTANDING_THE_FORMATS
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            <strong>EXP (Melco Expanded):</strong> Professional format used by Melco and Bernina commercial machines. Popular in production environments and apparel decoration.
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">
            <strong>DST (Data Stitch Tajima):</strong> The universal standard recognized by all commercial embroidery machines. Compact, reliable, and industry-preferred.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            CONVERSION_BENEFITS
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>✓ Universal machine compatibility</li>
            <li>✓ Industry-standard output format</li>
            <li>✓ Smaller, more efficient file sizes</li>
            <li>✓ Perfect for production environments</li>
            <li>✓ Instant, professional-grade conversion</li>
            <li>✓ Completely free, no limitations</li>
          </ul>
        </section>

        {/* Bottom CTA */}
        <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            CONVERT EXP TO DST NOW
          </h2>
          <p className="uppercase text-sm tracking-wider mb-6 opacity-80">
            FREE, FAST, AND SECURE. NO ACCOUNT NEEDED.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 border-2 border-black bg-black text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-100 shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            GO_TO_CONVERTER →
          </Link>
        </div>

        {/* Related Conversions */}
        <section>
          <h2 className="text-xl font-bold uppercase tracking-wider mb-6 border-l-4 border-cyan-400 pl-4">
            RELATED_CONVERSIONS
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/dst-to-exp" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">DST → EXP</h3>
              <p className="text-xs mt-2 opacity-70">Convert Tajima DST to Melco EXP</p>
            </Link>
            <Link href="/exp-to-pes" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">EXP → PES</h3>
              <p className="text-xs mt-2 opacity-70">Convert Melco EXP to Brother PES</p>
            </Link>
          </div>
        </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-[#1a1a1a] text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-wider">
            THREADSHIFTER // FREE_CONVERTER
          </p>
          <p className="text-xs opacity-70 mt-1">
            DST • PES • EXP • JEF • XXX • VP3 • U01 • PEC
          </p>
        </div>
      </footer>
    </main>
  );
}
