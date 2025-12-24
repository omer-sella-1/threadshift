import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert PES to DST Online Free | Brother to Tajima Converter",
  description: "Convert Brother PES files to DST format instantly. Free online PES to DST converter for commercial embroidery machines. Upload PES files and get Tajima DST files in seconds.",
  keywords: ["PES to DST", "convert PES to DST", "Brother to Tajima", "PES DST converter", "embroidery file conversion"],
};

export default function PEStoDSTPage() {
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
            PES → DST // CONVERT
          </h1>
          <p className="mt-3 text-sm uppercase tracking-wider opacity-70">
            BROTHER TO TAJIMA CONVERSION
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white border-2 border-black shadow-brutal-lg p-8 md:p-12 space-y-12">
          {/* CTA */}
          <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            CONVERT PES TO DST NOW
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

        {/* Main Content */}
        <section className="space-y-8">
          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4">
            WHY_CONVERT: PES → DST
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Converting Brother PES files to DST format is essential when you need to use your designs on commercial embroidery machines or share them with professional embroidery services. DST is the universal standard in the embroidery industry, accepted by virtually all commercial machines including Tajima, Barudan, Happy, and SWF.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            CONVERSION_BENEFITS
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>✓ <strong>Universal Compatibility:</strong> DST works on all commercial embroidery machines</li>
            <li>✓ <strong>Professional Output:</strong> Perfect for sending designs to embroidery services</li>
            <li>✓ <strong>Smaller File Size:</strong> DST files are typically more compact than PES</li>
            <li>✓ <strong>Industry Standard:</strong> Most digitizers and shops prefer DST format</li>
            <li>✓ <strong>Instant Conversion:</strong> Convert in under 2 milliseconds</li>
            <li>✓ <strong>100% Free:</strong> No limits, no registration required</li>
          </ul>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            WHEN_TO_USE
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>• Sending designs to commercial embroidery shops</li>
            <li>• Using designs created on Brother machines with industrial equipment</li>
            <li>• Sharing designs with clients who use professional machines</li>
            <li>• Converting home designs for production runs</li>
            <li>• Creating design libraries in universal format</li>
            <li>• Preparing files for multi-head embroidery machines</li>
          </ul>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            FORMAT_DIFFERENCES
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            <strong>PES Files:</strong> Brother's proprietary format includes color information, design metadata, and machine-specific settings. PES files are larger but contain more detailed information about the design.
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">
            <strong>DST Files:</strong> The industry-standard format contains only stitch coordinates and commands. DST files are smaller and more universally compatible but don't include color information (colors are set at the machine).
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            COMPATIBLE_MACHINES
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            DST files work perfectly with: Tajima TMEX, Barudan BEAT, Happy HCD series, ZSK JCZA, SWF, Toyota ESP series, Brother commercial machines, Ricoma, and virtually all multi-needle industrial embroidery equipment.
          </p>
        </section>

        {/* Bottom CTA */}
        <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            CONVERT PES TO DST NOW
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
            <Link href="/dst-to-pes" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">DST → PES</h3>
              <p className="text-xs mt-2 opacity-70">Convert Tajima DST back to Brother PES format</p>
            </Link>
            <Link href="/jef-to-pes" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">JEF → PES</h3>
              <p className="text-xs mt-2 opacity-70">Convert Janome JEF to Brother PES</p>
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
