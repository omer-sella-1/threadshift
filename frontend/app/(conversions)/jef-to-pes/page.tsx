import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert JEF to PES Online Free | Janome to Brother Converter",
  description: "Convert Janome JEF files to Brother PES format instantly. Free JEF to PES converter. Upload Janome designs and use them on Brother embroidery machines.",
  keywords: ["JEF to PES", "convert JEF to PES", "Janome to Brother", "JEF PES converter"],
};

export default function JEFtoPESPage() {
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
            JEF → PES // CONVERT
          </h1>
          <p className="mt-3 text-sm uppercase tracking-wider opacity-70">
            JANOME TO BROTHER CONVERSION
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* CTA */}
        <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            CONVERT JANOME DESIGNS FOR BROTHER MACHINES
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
            WHY_CONVERT: JEF → PES
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            If you own a Brother embroidery machine but have designs in Janome JEF format, you'll need to convert them to PES to use them. This is common when purchasing embroidery designs online or sharing designs between different machine brands.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            JANOME_VS_BROTHER_FORMATS
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            <strong>JEF (Janome Embroidery Format):</strong> Native format for Janome and Elna machines. Contains stitch data, colors, and Janome-specific formatting.
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">
            <strong>PES (Brother Embroidery Format):</strong> Brother's format with full color and design information. Perfect for all Brother machines including PE, SE, and Innovis series.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            COMMON_USE_CASES
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>• Using Janome designs purchased online on your Brother machine</li>
            <li>• Converting designs shared from Janome-owning friends</li>
            <li>• Switching from Janome to Brother machine</li>
            <li>• Building a Brother-compatible design library</li>
            <li>• Using professional digitized JEF files on Brother equipment</li>
          </ul>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            CONVERSION_BENEFITS
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>✓ Perfect compatibility with all Brother machines</li>
            <li>✓ Preserves stitch quality and design integrity</li>
            <li>✓ Maintains thread colors and sequences</li>
            <li>✓ Instant, free, unlimited conversions</li>
            <li>✓ No software installation needed</li>
          </ul>
        </section>

        {/* Bottom CTA */}
        <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            CONVERT JEF TO PES NOW
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
              <p className="text-xs mt-2 opacity-70">Convert Tajima DST to Brother PES</p>
            </Link>
            <Link href="/pes-to-dst" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">PES → DST</h3>
              <p className="text-xs mt-2 opacity-70">Convert Brother PES to Tajima DST</p>
            </Link>
          </div>
        </section>
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
