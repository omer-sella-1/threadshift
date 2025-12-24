import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert PES to JEF Online Free | Brother to Janome Converter",
  description: "Convert Brother PES files to Janome JEF format instantly. Free PES to JEF converter. Upload Brother designs and use them on Janome embroidery machines.",
  keywords: ["PES to JEF", "convert PES to JEF", "Brother to Janome", "PES JEF converter"],
};

export default function PEStoJEFPage() {
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
            PES → JEF // CONVERT
          </h1>
          <p className="mt-3 text-sm uppercase tracking-wider opacity-70">
            BROTHER TO JANOME CONVERSION
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white border-2 border-black shadow-brutal-lg p-8 md:p-12 space-y-12">
          {/* CTA */}
          <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            USE BROTHER DESIGNS ON JANOME MACHINES
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
            WHY_CONVERT: PES → JEF
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Switching from a Brother machine to Janome? Have designs in Brother PES format but now own a Janome? Convert your entire Brother design library to Janome-compatible JEF format instantly. Perfect for crafters upgrading machines or sharing designs between different brands.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            COMMON_SCENARIOS
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>• Switched from Brother to Janome machine</li>
            <li>• Purchased Brother PES designs online</li>
            <li>• Sharing designs with Janome-owning friends</li>
            <li>• Using Brother digitized files on Janome</li>
            <li>• Converting your entire design library</li>
            <li>• Cross-brand embroidery collaboration</li>
          </ul>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            FORMAT_COMPATIBILITY
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Our PES to JEF converter preserves design quality, stitch sequences, and color information. The converted JEF files work perfectly with all Janome and Elna embroidery machines, ensuring your Brother designs look just as good on Janome equipment.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            WHY_USE_THREADSHIFTER
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>✓ High-quality PES to JEF conversion</li>
            <li>✓ Preserves all design details</li>
            <li>✓ Works with all Janome machines</li>
            <li>✓ Completely free, unlimited use</li>
            <li>✓ No software to install</li>
            <li>✓ Instant online conversion</li>
          </ul>
        </section>

        {/* Bottom CTA */}
        <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            CONVERT PES TO JEF NOW
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
            <Link href="/jef-to-pes" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">JEF → PES</h3>
              <p className="text-xs mt-2 opacity-70">Convert Janome JEF to Brother PES</p>
            </Link>
            <Link href="/dst-to-jef" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">DST → JEF</h3>
              <p className="text-xs mt-2 opacity-70">Convert Tajima DST to Janome JEF</p>
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
