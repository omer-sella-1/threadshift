import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert DST to EXP Online Free | Tajima to Melco Converter",
  description: "Convert Tajima DST files to Melco EXP format instantly. Free DST to EXP converter for Melco and Bernina machines. Professional embroidery file conversion.",
  keywords: ["DST to EXP", "convert DST to EXP", "Tajima to Melco", "DST EXP converter"],
};

export default function DSTtoEXPPage() {
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
            DST → EXP // CONVERT
          </h1>
          <p className="mt-3 text-sm uppercase tracking-wider opacity-70">
            TAJIMA TO MELCO CONVERSION
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white border-2 border-black shadow-brutal-lg p-8 md:p-12 space-y-12">
          {/* CTA */}
          <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            PROFESSIONAL DST TO MELCO CONVERSION
          </h2>
          <Link
            href="/"
            className="inline-block px-8 py-3 border-2 border-black bg-black text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-100 shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            CONVERT_NOW →
          </Link>
        </div>

        {/* Main Content */}
        <section className="space-y-8">
          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4">
            DST_TO_EXP_CONVERSION_FOR_MELCO_MACHINES
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Converting Tajima DST files to Melco EXP format is common in professional embroidery shops that use Melco or Bernina equipment. EXP is optimized for these machines' capabilities and provides excellent results for commercial production work.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            PROFESSIONAL_APPLICATIONS
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>• Commercial embroidery production on Melco equipment</li>
            <li>• Using industry-standard DST designs with Melco machines</li>
            <li>• Professional apparel decoration workflows</li>
            <li>• Converting client-provided DST files</li>
            <li>• Multi-brand production facilities</li>
            <li>• Bernina commercial embroidery applications</li>
          </ul>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            WHY_THIS_CONVERSION_MATTERS
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Melco and Bernina commercial machines perform optimally with EXP format files. While they can read DST, converting to native EXP format ensures best results and full compatibility with machine features.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            PROFESSIONAL_FEATURES
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>✓ Optimized for Melco and Bernina machines</li>
            <li>✓ Professional-grade conversion quality</li>
            <li>✓ Preserves stitch integrity</li>
            <li>✓ Production-ready output</li>
            <li>✓ Instant, unlimited conversions</li>
            <li>✓ No cost, no restrictions</li>
          </ul>
        </section>

        {/* Bottom CTA */}
        <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            CONVERT DST TO EXP NOW
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
            <Link href="/exp-to-dst" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">EXP → DST</h3>
              <p className="text-xs mt-2 opacity-70">Convert Melco EXP to Tajima DST</p>
            </Link>
            <Link href="/dst-to-pes" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">DST → PES</h3>
              <p className="text-xs mt-2 opacity-70">Convert Tajima DST to Brother PES</p>
            </Link>
          </div>
        </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-[#1a1a1a] text-white py-8 mt-12">
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
