import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert DST to JEF Online Free | Tajima to Janome Converter",
  description: "Convert Tajima DST files to Janome JEF format instantly. Free DST to JEF converter for Janome embroidery machines. Upload DST designs and use them on Janome equipment.",
  keywords: ["DST to JEF", "convert DST to JEF", "Tajima to Janome", "DST JEF converter"],
};

export default function DSTtoJEFPage() {
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
            DST → JEF // CONVERT
          </h1>
          <p className="mt-3 text-sm uppercase tracking-wider opacity-70">
            TAJIMA TO JANOME CONVERSION
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white border-2 border-black shadow-brutal-lg p-8 md:p-12 space-y-12">
          {/* CTA */}
          <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            USE DST DESIGNS ON YOUR JANOME MACHINE
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
            WHY_CONVERT: DST → JEF
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            DST is the universal embroidery format used by commercial machines and digitizers. JEF is Janome's native format, optimized for Janome and Elna home embroidery machines. Converting DST to JEF allows you to use professional and commercial designs on your Janome equipment.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            PERFECT_FOR_JANOME_USERS
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>• Using commercial DST designs on Janome machines</li>
            <li>• Converting professional digitized files</li>
            <li>• Using designs from embroidery marketplaces</li>
            <li>• Working with company logos in DST format</li>
            <li>• Converting vintage or archived DST files</li>
          </ul>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            COMPATIBLE_JANOME_MACHINES
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Our DST to JEF converter works with all Janome and Elna embroidery machines that accept JEF files, including: Janome Memory Craft series (MC500E, MC550E), Janome Horizon series, Janome Skyline series, Elna eXpressive series, and all other Janome machines with embroidery capabilities.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            CONVERSION_FEATURES
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>✓ Janome-optimized output format</li>
            <li>✓ Maintains stitch integrity</li>
            <li>✓ Preserves design quality</li>
            <li>✓ Instant, free conversion</li>
            <li>✓ No software required</li>
            <li>✓ Works with all DST files</li>
          </ul>
        </section>

        {/* Bottom CTA */}
        <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            CONVERT DST TO JEF NOW
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
            <Link href="/dst-to-pes" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">DST → PES</h3>
              <p className="text-xs mt-2 opacity-70">Convert Tajima DST to Brother PES</p>
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
