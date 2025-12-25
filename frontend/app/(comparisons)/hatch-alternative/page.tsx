import { Metadata } from "next";
import Link from "next/link";
import { Home, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Alternative to Hatch Embroidery Software | ThreadShifter",
  description: "Save $199-399/year on Hatch subscription. ThreadShifter converts embroidery files free forever. DST, PES, JEF, EXP formats. No subscription needed.",
  keywords: ["Hatch alternative", "free Hatch embroidery", "Hatch subscription alternative", "free embroidery software", "embroidery converter"],
};

export default function HatchAlternativePage() {
  return (
    <main className="min-h-screen">
      <header className="border-b-2 border-black bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors mb-4 text-sm uppercase tracking-wide">
            <Home className="w-4 h-4" strokeWidth={2} />
            <span>BACK_TO_CONVERTER</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
            FREE ALTERNATIVE TO HATCH EMBROIDERY
          </h1>
          <p className="mt-3 text-sm uppercase tracking-wider opacity-70">
            SAVE $199-399/YEAR // NO SUBSCRIPTION
          </p>
        </div>
      </header>

      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white border-2 border-black shadow-brutal-lg p-8 md:p-12 space-y-12">

          {/* Subscription Cost Comparison */}
          <div className="border-2 border-black bg-cyan-400 p-8 shadow-brutal">
            <h2 className="text-xl font-bold uppercase text-center mb-8">
              SUBSCRIPTION_COST_ANALYSIS
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-2 border-black bg-white p-6 text-center">
                <p className="text-sm uppercase tracking-wider mb-3">HATCH (5 YEARS)</p>
                <p className="text-4xl font-bold mb-2">$1,995</p>
                <p className="text-xs opacity-70">$399/year × 5 years</p>
              </div>
              <div className="border-2 border-black bg-black text-white p-6 text-center">
                <p className="text-sm uppercase tracking-wider mb-3">THREADSHIFTER (FOREVER)</p>
                <p className="text-4xl font-bold mb-2">$0</p>
                <p className="text-xs opacity-70">No subscription ever</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/"
                className="inline-block px-8 py-3 border-2 border-black bg-black text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-100 shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                TRY_FREE_NOW →
              </Link>
            </div>
          </div>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                THE_SUBSCRIPTION_TRAP
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Hatch Embroidery uses a subscription model: $199/year (Essentials) to $399/year (Digitizer). That means you're paying every single year, forever. After 5 years, you've spent $995-$1,995 on software rental.
              </p>
              <p className="text-sm leading-relaxed font-bold">
                For file conversion alone, that's an expensive ongoing cost. ThreadShifter gives you the same conversion capability with zero recurring fees.
              </p>
            </div>

            {/* Feature Table */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                WHAT_YOU_REALLY_NEED
              </h2>

              <div className="border-2 border-black overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-[#f0ebe3] border-b-2 border-black">
                    <tr>
                      <th className="text-left p-4 font-bold uppercase">Capability</th>
                      <th className="text-center p-4 font-bold uppercase">Hatch</th>
                      <th className="text-center p-4 font-bold uppercase">ThreadShifter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black">
                      <td className="p-4 font-bold">Format Conversion</td>
                      <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto" strokeWidth={2} /></td>
                      <td className="p-4 text-center bg-cyan-400"><Check className="w-5 h-5 mx-auto" strokeWidth={3} /></td>
                    </tr>
                    <tr className="border-b border-black bg-[#f0ebe3]">
                      <td className="p-4 font-bold">8 Format Support</td>
                      <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto" strokeWidth={2} /></td>
                      <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto" strokeWidth={2} /></td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="p-4 font-bold">Free Forever</td>
                      <td className="p-4 text-center"><X className="w-5 h-5 mx-auto opacity-30" strokeWidth={2} /></td>
                      <td className="p-4 text-center bg-cyan-400"><Check className="w-5 h-5 mx-auto" strokeWidth={3} /></td>
                    </tr>
                    <tr className="border-b border-black bg-[#f0ebe3]">
                      <td className="p-4 font-bold">Auto-Digitizing</td>
                      <td className="p-4 text-center bg-green-100"><Check className="w-5 h-5 mx-auto" strokeWidth={3} /></td>
                      <td className="p-4 text-center"><X className="w-5 h-5 mx-auto opacity-30" strokeWidth={2} /></td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="p-4 font-bold">Manual Digitizing Tools</td>
                      <td className="p-4 text-center bg-green-100"><Check className="w-5 h-5 mx-auto" strokeWidth={3} /></td>
                      <td className="p-4 text-center"><X className="w-5 h-5 mx-auto opacity-30" strokeWidth={2} /></td>
                    </tr>
                    <tr className="bg-[#f0ebe3]">
                      <td className="p-4 font-bold uppercase">ANNUAL COST</td>
                      <td className="p-4 text-center font-bold">$199-399</td>
                      <td className="p-4 text-center font-bold bg-cyan-400">$0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                THE_SMART_APPROACH
              </h2>
              <div className="border-2 border-black p-6 bg-[#f0ebe3]">
                <p className="text-sm leading-relaxed mb-4">
                  <strong>Start with ThreadShifter (free).</strong> Convert your files, build your design library, learn what you actually need.
                </p>
                <p className="text-sm leading-relaxed mb-4">
                  <strong>After 6 months, evaluate:</strong> Do you need digitizing? Are you creating original designs? Then consider Hatch.
                </p>
                <p className="text-sm leading-relaxed font-bold">
                  <strong>For most users?</strong> ThreadShifter handles 100% of their needs at 0% of the cost. Why pay for a subscription you don't need?
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                SUBSCRIPTION_MATH
              </h2>
              <div className="border-2 border-black p-6 bg-white">
                <table className="w-full text-sm">
                  <thead className="border-b-2 border-black">
                    <tr className="bg-[#f0ebe3]">
                      <th className="p-3 text-left font-bold uppercase">Timeframe</th>
                      <th className="p-3 text-right font-bold uppercase">Hatch Cost</th>
                      <th className="p-3 text-right font-bold uppercase">ThreadShifter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black">
                      <td className="p-3">Year 1</td>
                      <td className="p-3 text-right font-bold">$399</td>
                      <td className="p-3 text-right font-bold text-green-600">$0</td>
                    </tr>
                    <tr className="border-b border-black bg-[#f0ebe3]">
                      <td className="p-3">Year 2</td>
                      <td className="p-3 text-right font-bold">$798</td>
                      <td className="p-3 text-right font-bold text-green-600">$0</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="p-3">Year 3</td>
                      <td className="p-3 text-right font-bold">$1,197</td>
                      <td className="p-3 text-right font-bold text-green-600">$0</td>
                    </tr>
                    <tr className="border-b border-black bg-[#f0ebe3]">
                      <td className="p-3">Year 5</td>
                      <td className="p-3 text-right font-bold">$1,995</td>
                      <td className="p-3 text-right font-bold text-green-600">$0</td>
                    </tr>
                    <tr className="bg-cyan-400">
                      <td className="p-3 font-bold uppercase">TOTAL SAVED</td>
                      <td className="p-3 text-right"></td>
                      <td className="p-3 text-right font-bold text-xl">$1,995</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
            <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
              NO SUBSCRIPTION // FREE FOREVER
            </h2>
            <p className="uppercase text-sm tracking-wider mb-6 opacity-80">
              CONVERT FILES INSTANTLY // NO COST EVER
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
