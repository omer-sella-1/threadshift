import { Metadata } from "next";
import Link from "next/link";
import { Home, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Alternative to PE-Design | Brother Embroidery Software",
  description: "Save $1,299 on PE-Design. ThreadShifter converts PES, DST, JEF files for Brother machines free. No software installation. Instant file format conversion.",
  keywords: ["PE-Design alternative", "free PE-Design", "Brother software alternative", "PES converter free", "Brother embroidery software"],
};

export default function PEDesignAlternativePage() {
  return (
    <main className="min-h-screen">
      <header className="border-b-2 border-black bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors mb-4 text-sm uppercase tracking-wide">
            <Home className="w-4 h-4" strokeWidth={2} />
            <span>BACK_TO_CONVERTER</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
            FREE ALTERNATIVE TO PE-DESIGN 11
          </h1>
          <p className="mt-3 text-sm uppercase tracking-wider opacity-70">
            SAVE $1,299 // BROTHER FILE CONVERSION
          </p>
        </div>
      </header>

      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white border-2 border-black shadow-brutal-lg p-8 md:p-12 space-y-12">

          {/* Price Shock */}
          <div className="border-2 border-black bg-cyan-400 p-8 shadow-brutal text-center">
            <p className="text-sm uppercase tracking-wider mb-4">BROTHER PE-DESIGN 11</p>
            <p className="text-6xl font-bold mb-2">$1,299</p>
            <p className="text-xs uppercase tracking-wider opacity-70 mb-6">JUST FOR FILE CONVERSION?</p>
            <div className="border-t-2 border-black pt-6 mt-6">
              <p className="text-sm font-bold uppercase mb-4">THREADSHIFTER // FREE</p>
              <Link
                href="/"
                className="inline-block px-8 py-3 border-2 border-black bg-black text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-100 shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                CONVERT_FILES_FREE →
              </Link>
            </div>
          </div>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                PE-DESIGN_VS_THREADSHIFTER
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                PE-Design 11 is Brother's official embroidery software. It's excellent for creating designs, editing stitches, and managing your Brother machine. But most Brother owners don't need those advanced features - they just want to convert files.
              </p>
              <p className="text-sm leading-relaxed font-bold">
                If you only need format conversion, you're paying $1,299 for features you'll never touch.
              </p>
            </div>

            {/* Comparison Table */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                FEATURE_BREAKDOWN
              </h2>

              <div className="border-2 border-black overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-[#f0ebe3] border-b-2 border-black">
                    <tr>
                      <th className="text-left p-4 font-bold uppercase">Feature</th>
                      <th className="text-center p-4 font-bold uppercase">PE-Design</th>
                      <th className="text-center p-4 font-bold uppercase">ThreadShifter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black">
                      <td className="p-4 font-bold">Convert PES Files</td>
                      <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto" strokeWidth={2} /></td>
                      <td className="p-4 text-center bg-cyan-400"><Check className="w-5 h-5 mx-auto" strokeWidth={3} /></td>
                    </tr>
                    <tr className="border-b border-black bg-[#f0ebe3]">
                      <td className="p-4 font-bold">Convert DST to PES</td>
                      <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto" strokeWidth={2} /></td>
                      <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto" strokeWidth={2} /></td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="p-4 font-bold">Works on Mac</td>
                      <td className="p-4 text-center"><X className="w-5 h-5 mx-auto opacity-30" strokeWidth={2} /></td>
                      <td className="p-4 text-center bg-cyan-400"><Check className="w-5 h-5 mx-auto" strokeWidth={2} /></td>
                    </tr>
                    <tr className="border-b border-black bg-[#f0ebe3]">
                      <td className="p-4 font-bold">No Installation</td>
                      <td className="p-4 text-center"><X className="w-5 h-5 mx-auto opacity-30" strokeWidth={2} /></td>
                      <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto" strokeWidth={2} /></td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="p-4 font-bold">Create Designs from Images</td>
                      <td className="p-4 text-center bg-green-100"><Check className="w-5 h-5 mx-auto" strokeWidth={3} /></td>
                      <td className="p-4 text-center"><X className="w-5 h-5 mx-auto opacity-30" strokeWidth={2} /></td>
                    </tr>
                    <tr className="border-b border-black bg-[#f0ebe3]">
                      <td className="p-4 font-bold">Lettering & Fonts</td>
                      <td className="p-4 text-center bg-green-100"><Check className="w-5 h-5 mx-auto" strokeWidth={3} /></td>
                      <td className="p-4 text-center"><X className="w-5 h-5 mx-auto opacity-30" strokeWidth={2} /></td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="p-4 font-bold">Stitch Editing</td>
                      <td className="p-4 text-center bg-green-100"><Check className="w-5 h-5 mx-auto" strokeWidth={3} /></td>
                      <td className="p-4 text-center"><X className="w-5 h-5 mx-auto opacity-30" strokeWidth={2} /></td>
                    </tr>
                    <tr className="bg-cyan-400">
                      <td className="p-4 font-bold uppercase">PRICE</td>
                      <td className="p-4 text-center font-bold">$1,299</td>
                      <td className="p-4 text-center font-bold text-2xl">FREE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                WHO_NEEDS_PE-DESIGN
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                You should buy PE-Design 11 if you:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Want to create custom embroidery designs from photos/logos</li>
                <li>• Need Brother's official lettering fonts</li>
                <li>• Require advanced stitch editing capabilities</li>
                <li>• Want to combine/merge multiple designs</li>
                <li>• Need to customize thread colors precisely</li>
                <li>• Use Brother-specific machine features</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                WHO_NEEDS_THREADSHIFTER
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                ThreadShifter is perfect if you:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Buy embroidery designs online (Etsy, marketplaces)</li>
                <li>• Receive designs in wrong format for your Brother machine</li>
                <li>• Only need to convert between PES, DST, JEF formats</li>
                <li>• Want instant conversion without learning software</li>
                <li>• Can't justify $1,299 for simple file conversion</li>
                <li>• Use a Mac (PE-Design is Windows only)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                REAL_BROTHER_USER_STORIES
              </h2>

              <div className="space-y-4">
                <div className="border-2 border-black p-6 bg-[#f0ebe3]">
                  <p className="text-sm italic mb-3">
                    "I have a Brother PE800. I buy designs on Etsy but they're often in DST format. I almost bought PE-Design just for conversion, but ThreadShifter does it instantly for free. Saved me $1,299!"
                  </p>
                  <p className="text-xs uppercase tracking-wide opacity-70">— JENNIFER, HOBBY EMBROIDERER</p>
                </div>

                <div className="border-2 border-black p-6 bg-[#f0ebe3]">
                  <p className="text-sm italic mb-3">
                    "I switched from Janome to Brother. Had hundreds of JEF files. ThreadShifter converted my entire library to PES for free. PE-Design would have cost me over $1,000 just for this one task."
                  </p>
                  <p className="text-xs uppercase tracking-wide opacity-70">— MARIA, SMALL BUSINESS OWNER</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                THE_VERDICT
              </h2>
              <div className="border-2 border-black p-6 bg-[#f0ebe3]">
                <p className="text-sm leading-relaxed mb-4">
                  <strong>PE-Design 11 is worth $1,299 if:</strong> You create custom designs, need lettering tools, or want Brother's official software ecosystem.
                </p>
                <p className="text-sm leading-relaxed font-bold">
                  <strong>ThreadShifter saves you $1,299 if:</strong> You only need file format conversion. Try it first - it's free. If you discover you need digitizing features later, then buy PE-Design.
                </p>
              </div>
            </div>
          </section>

          <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
            <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
              START CONVERTING FREE
            </h2>
            <p className="uppercase text-sm tracking-wider mb-6 opacity-80">
              WORKS WITH ALL BROTHER MACHINES
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 border-2 border-black bg-black text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-100 shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              GO_TO_CONVERTER →
            </Link>
          </div>
        </div>
      </div>

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
          </div>
        </div>
      </footer>
    </main>
  );
}
