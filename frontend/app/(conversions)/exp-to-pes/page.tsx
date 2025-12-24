import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert EXP to PES Online Free | Melco to Brother Converter",
  description: "Convert Melco EXP files to Brother PES format instantly. Free EXP to PES converter. Upload Melco designs and use them on Brother embroidery machines.",
  keywords: ["EXP to PES", "convert EXP to PES", "Melco to Brother", "EXP PES converter"],
};

export default function EXPtoPESPage() {
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
            EXP → PES // CONVERT
          </h1>
          <p className="mt-3 text-sm uppercase tracking-wider opacity-70">
            MELCO TO BROTHER CONVERSION
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white border-2 border-black shadow-brutal-lg p-8 md:p-12 space-y-12">
          {/* CTA */}
          <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            USE MELCO DESIGNS ON BROTHER MACHINES
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
            CONVERTING_MELCO_EXP_TO_BROTHER_PES
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Melco EXP files are professional-grade embroidery designs commonly used in commercial settings. If you want to use these high-quality designs on your Brother home embroidery machine, converting to PES format is essential. ThreadShifter makes this conversion instant and free.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            WHEN_YOU_NEED_THIS_CONVERSION
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>• Purchased professional Melco designs for home use</li>
            <li>• Received company logos in EXP format</li>
            <li>• Downsizing from commercial to home embroidery</li>
            <li>• Using professional digitized files at home</li>
            <li>• Converting designs from embroidery services</li>
          </ul>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            CONVERSION_BENEFITS
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>✓ Professional Melco quality on your Brother machine</li>
            <li>✓ Full compatibility with PES format</li>
            <li>✓ Preserves stitch quality and density</li>
            <li>✓ Maintains color information</li>
            <li>✓ Free, unlimited conversions</li>
            <li>✓ Instant results</li>
          </ul>
        </section>

        {/* Bottom CTA */}
        <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            CONVERT EXP TO PES NOW
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
            <Link href="/pes-to-dst" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">PES → DST</h3>
              <p className="text-xs mt-2 opacity-70">Convert Brother PES to Tajima DST</p>
            </Link>
            <Link href="/exp-to-dst" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">EXP → DST</h3>
              <p className="text-xs mt-2 opacity-70">Convert Melco EXP to Tajima DST</p>
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
