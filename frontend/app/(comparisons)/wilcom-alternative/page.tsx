import { Metadata } from "next";
import Link from "next/link";
import { Home, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Alternative to Wilcom Embroidery Studio | ThreadShifter",
  description: "Looking for a free Wilcom alternative for file conversion? ThreadShifter converts DST, PES, JEF, EXP formats instantly. Save $1,995 - no software installation needed.",
  keywords: ["Wilcom alternative", "free Wilcom alternative", "Wilcom free version", "embroidery software alternative", "free embroidery converter"],
};

export default function WilcomAlternativePage() {
  return (
    <main className="min-h-screen">
      <header className="border-b-2 border-black bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors mb-4 text-sm uppercase tracking-wide">
            <Home className="w-4 h-4" strokeWidth={2} />
            <span>BACK_TO_CONVERTER</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
            FREE ALTERNATIVE TO WILCOM EMBROIDERY STUDIO
          </h1>
          <p className="mt-3 text-sm uppercase tracking-wider opacity-70">
            SAVE $1,995 // FILE CONVERSION ONLY
          </p>
        </div>
      </header>

      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white border-2 border-black shadow-brutal-lg p-8 md:p-12 space-y-12">

          {/* Price Comparison CTA */}
          <div className="border-2 border-black bg-cyan-400 p-8 shadow-brutal">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <p className="text-sm uppercase tracking-wider opacity-70 mb-2">WILCOM EMBROIDERY STUDIO</p>
                <p className="text-5xl font-bold mb-2">$1,995</p>
                <p className="text-xs uppercase tracking-wider">ONE-TIME LICENSE</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm uppercase tracking-wider opacity-70 mb-2">THREADSHIFTER</p>
                <p className="text-5xl font-bold mb-2">$0</p>
                <p className="text-xs uppercase tracking-wider">FOREVER FREE</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/"
                className="inline-block px-8 py-3 border-2 border-black bg-black text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-100 shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                TRY_THREADSHIFTER_FREE →
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                THE_HONEST_TRUTH
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                <strong>Wilcom Embroidery Studio is an incredible professional digitizing suite.</strong> If you need to create embroidery designs from scratch, digitize logos, or run a commercial production facility, Wilcom is worth every penny of its $1,995 price tag.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>But here's the reality:</strong> Most embroiderers don't need full digitizing capabilities. They buy pre-made designs online and just need to convert between file formats. Spending $1,995 for file conversion alone doesn't make sense.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                FEATURE_COMPARISON
              </h2>

              <div className="border-2 border-black overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-[#f0ebe3] border-b-2 border-black">
                    <tr>
                      <th className="text-left p-4 font-bold uppercase tracking-wide">Feature</th>
                      <th className="text-center p-4 font-bold uppercase tracking-wide">Wilcom</th>
                      <th className="text-center p-4 font-bold uppercase tracking-wide">ThreadShifter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black">
                      <td className="p-4 font-bold">File Format Conversion</td>
                      <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto text-green-600" strokeWidth={2} /></td>
                      <td className="p-4 text-center bg-cyan-400"><Check className="w-5 h-5 mx-auto" strokeWidth={3} /></td>
                    </tr>
                    <tr className="border-b border-black bg-[#f0ebe3]">
                      <td className="p-4 font-bold">DST, PES, JEF, EXP Support</td>
                      <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto text-green-600" strokeWidth={2} /></td>
                      <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto" strokeWidth={2} /></td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="p-4 font-bold">Instant Conversion</td>
                      <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto text-green-600" strokeWidth={2} /></td>
                      <td className="p-4 text-center bg-cyan-400"><Check className="w-5 h-5 mx-auto" strokeWidth={3} /></td>
                    </tr>
                    <tr className="border-b border-black bg-[#f0ebe3]">
                      <td className="p-4 font-bold">No Installation Required</td>
                      <td className="p-4 text-center"><X className="w-5 h-5 mx-auto opacity-30" strokeWidth={2} /></td>
                      <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto" strokeWidth={2} /></td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="p-4 font-bold">Works on Mac/Windows/Linux</td>
                      <td className="p-4 text-center text-xs">Windows Only</td>
                      <td className="p-4 text-center bg-cyan-400"><Check className="w-5 h-5 mx-auto" strokeWidth={2} /></td>
                    </tr>
                    <tr className="border-b border-black bg-[#f0ebe3]">
                      <td className="p-4 font-bold">Hoop Safety Check</td>
                      <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto text-green-600" strokeWidth={2} /></td>
                      <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto" strokeWidth={2} /></td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="p-4 font-bold">Create Designs from Images (Digitizing)</td>
                      <td className="p-4 text-center bg-green-100"><Check className="w-5 h-5 mx-auto text-green-600" strokeWidth={3} /></td>
                      <td className="p-4 text-center"><X className="w-5 h-5 mx-auto opacity-30" strokeWidth={2} /></td>
                    </tr>
                    <tr className="border-b border-black bg-[#f0ebe3]">
                      <td className="p-4 font-bold">Advanced Editing Tools</td>
                      <td className="p-4 text-center bg-green-100"><Check className="w-5 h-5 mx-auto text-green-600" strokeWidth={3} /></td>
                      <td className="p-4 text-center"><X className="w-5 h-5 mx-auto opacity-30" strokeWidth={2} /></td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="p-4 font-bold">3D Visualization</td>
                      <td className="p-4 text-center bg-green-100"><Check className="w-5 h-5 mx-auto text-green-600" strokeWidth={3} /></td>
                      <td className="p-4 text-center"><X className="w-5 h-5 mx-auto opacity-30" strokeWidth={2} /></td>
                    </tr>
                    <tr className="bg-[#f0ebe3]">
                      <td className="p-4 font-bold uppercase">PRICE</td>
                      <td className="p-4 text-center font-bold">$1,995</td>
                      <td className="p-4 text-center font-bold bg-cyan-400">FREE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                WHO_SHOULD_USE_WHAT
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-black p-6 bg-green-100 shadow-brutal-sm">
                  <h3 className="font-bold uppercase text-sm mb-4">USE WILCOM IF YOU:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Create designs from scratch (digitizing)</li>
                    <li>• Run a commercial embroidery business</li>
                    <li>• Need advanced editing and lettering</li>
                    <li>• Require 3D preview and simulation</li>
                    <li>• Work with complex multi-color designs</li>
                    <li>• Have budget for professional software</li>
                  </ul>
                </div>

                <div className="border-2 border-black p-6 bg-cyan-400 shadow-brutal-sm">
                  <h3 className="font-bold uppercase text-sm mb-4">USE THREADSHIFTER IF YOU:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Only need file format conversion</li>
                    <li>• Buy pre-made designs online</li>
                    <li>• Switch between machine brands</li>
                    <li>• Want instant, free conversion</li>
                    <li>• Don't need full digitizing features</li>
                    <li>• Value simplicity and speed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                COMMON_USE_CASE
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                <strong>The Problem:</strong> You own a Brother embroidery machine. You purchase a beautiful embroidery design online, but it comes in DST format (commercial standard). Your machine needs PES format.
              </p>
              <p className="text-sm leading-relaxed mb-4">
                <strong>Wilcom Solution:</strong> Buy Wilcom for $1,995, learn the complex interface, import DST file, export as PES. Total time: Hours of learning + $1,995.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>ThreadShifter Solution:</strong> Visit threadshifter.com, drag DST file, select PES, download. Total time: 10 seconds. Cost: $0.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                WHAT_THREADSHIFTER_DOES_BETTER
              </h2>
              <div className="space-y-4">
                <div className="border-2 border-black p-4 bg-white hover:bg-[#f0ebe3] transition-colors">
                  <h3 className="font-bold text-sm mb-2">SPEED</h3>
                  <p className="text-sm opacity-80">Wilcom takes minutes to load and convert. ThreadShifter converts in under 2 milliseconds.</p>
                </div>
                <div className="border-2 border-black p-4 bg-white hover:bg-[#f0ebe3] transition-colors">
                  <h3 className="font-bold text-sm mb-2">SIMPLICITY</h3>
                  <p className="text-sm opacity-80">Wilcom has hundreds of features and menus. ThreadShifter has one job: convert files. No learning curve.</p>
                </div>
                <div className="border-2 border-black p-4 bg-white hover:bg-[#f0ebe3] transition-colors">
                  <h3 className="font-bold text-sm mb-2">ACCESSIBILITY</h3>
                  <p className="text-sm opacity-80">Wilcom requires Windows and installation. ThreadShifter works on any device with a browser - Mac, phone, tablet, Chromebook.</p>
                </div>
                <div className="border-2 border-black p-4 bg-white hover:bg-[#f0ebe3] transition-colors">
                  <h3 className="font-bold text-sm mb-2">COST</h3>
                  <p className="text-sm opacity-80">Wilcom costs $1,995 upfront plus upgrade fees. ThreadShifter is free forever with no hidden costs.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                WHEN_YOU_NEED_WILCOM
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                ThreadShifter is NOT a Wilcom replacement for professional digitizers. You absolutely need Wilcom or similar software if you:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Create embroidery designs from images (digitizing)</li>
                <li>• Need advanced stitch editing and optimization</li>
                <li>• Require automated lettering with multiple fonts</li>
                <li>• Work with complex multi-color corporate logos</li>
                <li>• Need 3D preview and simulation features</li>
                <li>• Run a professional digitizing business</li>
              </ul>
              <p className="text-sm leading-relaxed mt-4">
                <strong>But if you only need format conversion?</strong> Save your $1,995 and use ThreadShifter.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                REAL_USER_SCENARIOS
              </h2>

              <div className="space-y-6">
                <div className="border-2 border-black p-6 bg-[#f0ebe3]">
                  <p className="font-bold text-sm mb-3">SCENARIO 1: Home Embroiderer</p>
                  <p className="text-sm opacity-80 mb-3">
                    "I buy embroidery designs from Etsy and marketplaces. They come in various formats but my Brother machine only reads PES files. I was going to buy Wilcom just for conversion, but ThreadShifter does it instantly for free. Saved me $1,995!"
                  </p>
                  <p className="text-xs uppercase tracking-wide">✓ THREADSHIFTER IS PERFECT</p>
                </div>

                <div className="border-2 border-black p-6 bg-[#f0ebe3]">
                  <p className="font-bold text-sm mb-3">SCENARIO 2: Small Business Owner</p>
                  <p className="text-sm opacity-80 mb-3">
                    "I embroider custom t-shirts. Clients send logos in DST format, but my Janome needs JEF. I use ThreadShifter 10+ times per day. It's saved me thousands compared to buying Wilcom."
                  </p>
                  <p className="text-xs uppercase tracking-wide">✓ THREADSHIFTER IS PERFECT</p>
                </div>

                <div className="border-2 border-black p-6 bg-green-100">
                  <p className="font-bold text-sm mb-3">SCENARIO 3: Professional Digitizer</p>
                  <p className="text-sm opacity-80 mb-3">
                    "I create custom embroidery designs for clients from their logos. I need advanced auto-digitizing, stitch editing, and 3D preview. Wilcom is essential for my business."
                  </p>
                  <p className="text-xs uppercase tracking-wide">✓ YOU NEED WILCOM</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                WHAT_YOU_GET_WITH_THREADSHIFTER
              </h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span><strong>8 Format Support:</strong> DST, PES, JEF, EXP, XXX, VP3, U01, PEC</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span><strong>Smart Hoop Sizing:</strong> Auto-scales designs to fit your hoop (4x4", 5x7", 6x10")</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span><strong>Color Intelligence:</strong> Smart color palettes for DST conversions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span><strong>Universal PES Compatibility:</strong> Outputs PES v6 (works on all Brother machines)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span><strong>Privacy Protected:</strong> Files never stored, zero data retention</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span><strong>Unlimited Conversions:</strong> No limits, no restrictions, forever</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span><strong>Cross-Platform:</strong> Works on any device with a browser</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
                THE_BOTTOM_LINE
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Wilcom Embroidery Studio is the gold standard for professional embroidery design and digitizing. If you create designs from scratch, it's worth the investment.
              </p>
              <p className="text-sm leading-relaxed mb-4">
                But if you're a hobbyist, small business owner, or professional who just needs to convert file formats - ThreadShifter gives you that capability for free. Why pay $1,995 for features you'll never use?
              </p>
              <p className="text-sm leading-relaxed font-bold">
                Try ThreadShifter first. If you discover you need full digitizing capabilities, then consider Wilcom. But for 90% of users, ThreadShifter is all you need.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
            <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
              TRY THREADSHIFTER FREE NOW
            </h2>
            <p className="uppercase text-sm tracking-wider mb-6 opacity-80">
              NO CREDIT CARD // NO REGISTRATION // NO LIMITS
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 border-2 border-black bg-black text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-100 shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              GO_TO_CONVERTER →
            </Link>
          </div>

          {/* Related Pages */}
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mb-6">
              MORE_COMPARISONS
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/pe-design-alternative" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
                <h3 className="font-bold uppercase text-sm">PE-DESIGN ALTERNATIVE</h3>
                <p className="text-xs mt-2 opacity-70">Save $1,299 on Brother's software</p>
              </Link>
              <Link href="/hatch-alternative" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
                <h3 className="font-bold uppercase text-sm">HATCH ALTERNATIVE</h3>
                <p className="text-xs mt-2 opacity-70">Free vs $199-399/year subscription</p>
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
