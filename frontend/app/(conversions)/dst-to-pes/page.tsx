import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert DST to PES Online Free | Tajima to Brother Converter",
  description: "Convert DST files to PES format instantly. Free online DST to PES converter for Brother embroidery machines. No software needed. Upload Tajima DST files and get Brother PES files in seconds.",
  keywords: ["DST to PES", "convert DST to PES", "Tajima to Brother", "DST PES converter", "embroidery file conversion"],
};

export default function DSTtoPESPage() {
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
            DST → PES // CONVERT
          </h1>
          <p className="mt-3 text-sm uppercase tracking-wider opacity-70">
            TAJIMA TO BROTHER CONVERSION
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* CTA */}
        <div className="text-center p-8 border-2 border-black bg-cyan-400 shadow-brutal">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
            READY TO CONVERT DST FILES?
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
            WHY_CONVERT: DST → PES
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            DST (Tajima) and PES (Brother) are two of the most popular embroidery file formats. While DST is the industry standard used by commercial embroidery machines, PES is specifically designed for Brother embroidery machines. If you own a Brother machine and receive designs in DST format, you'll need to convert them to PES to use them on your machine.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider border-l-4 border-cyan-400 pl-4 mt-12">
            PROCEDURE // 3_STEPS
          </h2>
          <ol className="space-y-4 text-foreground/80">
            <li>
              <strong>Upload Your DST File:</strong> Drag and drop your Tajima DST file into the converter, or click to browse and select your file. Our converter accepts DST files of any size.
            </li>
            <li>
              <strong>Select PES Format:</strong> Choose "PES (Brother)" as your target format from the format selector. The conversion happens automatically.
            </li>
            <li>
              <strong>Download Your PES File:</strong> Click "Convert & Download" and your Brother PES file will be ready instantly. Load it onto your Brother machine and start embroidering!
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
            Benefits of Using ThreadShifter for DST to PES Conversion
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>✓ <strong>100% Free:</strong> No subscriptions, no hidden fees, unlimited conversions</li>
            <li>✓ <strong>Instant Conversion:</strong> Files convert in under 2 milliseconds</li>
            <li>✓ <strong>No Software Installation:</strong> Works entirely in your browser</li>
            <li>✓ <strong>Privacy Protected:</strong> Your files are never stored on our servers</li>
            <li>✓ <strong>High Quality:</strong> Preserves all stitch data and thread colors</li>
            <li>✓ <strong>Brother Compatible:</strong> Works with all Brother embroidery machines</li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
            Understanding DST and PES Formats
          </h2>
          <h3 className="text-2xl font-semibold text-foreground mb-4">What is a DST File?</h3>
          <p className="text-foreground/80 leading-relaxed">
            DST (Tajima) is the most widely-used embroidery format in the commercial embroidery industry. Created by Tajima, DST files contain pure stitch data without color information. They're compatible with most commercial embroidery machines and are often considered the "universal" format for professional embroidery.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">What is a PES File?</h3>
          <p className="text-foreground/80 leading-relaxed">
            PES is Brother's native embroidery format. PES files contain detailed stitch data, color information, and design metadata specifically formatted for Brother embroidery machines. The PES format is optimized for home embroidery machines and includes features like color palettes and design sizing information.
          </p>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
            Common Use Cases for DST to PES Conversion
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>• Converting commercial embroidery designs for home use on Brother machines</li>
            <li>• Using professional DST designs purchased online with your Brother machine</li>
            <li>• Converting company logos from DST format to Brother PES</li>
            <li>• Adapting embroidery designs from commercial digitizers</li>
            <li>• Converting vintage embroidery designs to modern Brother format</li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
            Troubleshooting DST to PES Conversion
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Most DST to PES conversions work flawlessly, but here are some tips if you encounter issues:
          </p>
          <ul className="space-y-3 text-foreground/80">
            <li>• <strong>File won't upload:</strong> Ensure your file has a .dst extension and isn't corrupted</li>
            <li>• <strong>Colors missing:</strong> DST files don't contain color information. Add colors in your Brother machine software</li>
            <li>• <strong>Design too large:</strong> Check your converted PES file fits your Brother machine's hoop size</li>
            <li>• <strong>Stitch density issues:</strong> This is rare but may require adjusting settings in your Brother software</li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
            Compatible Brother Machines
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Our DST to PES converter creates files compatible with all Brother embroidery machines, including:
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">
            Brother PE series (PE-Design, PE800, PE900), Brother SE series (SE600, SE625, SE1900), Brother Luminaire, Brother Dream Machine, Brother Innovis series, and all other Brother machines that accept PES files.
          </p>
        </section>

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Convert Your DST Files to PES Now
          </h2>
          <p className="text-foreground/70 mb-6">
            Free, fast, and secure. No account needed.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all"
          >
            Go to Converter →
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
            <Link href="/jef-to-pes" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">JEF → PES</h3>
              <p className="text-xs mt-2 opacity-70">Convert Janome JEF to Brother PES</p>
            </Link>
            <Link href="/exp-to-dst" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">EXP → DST</h3>
              <p className="text-xs mt-2 opacity-70">Convert Melco EXP to Tajima DST</p>
            </Link>
            <Link href="/dst-to-jef" className="p-4 border-2 border-black bg-white hover:bg-cyan-400 transition-colors duration-100 shadow-brutal-sm">
              <h3 className="font-bold uppercase text-sm">DST → JEF</h3>
              <p className="text-xs mt-2 opacity-70">Convert Tajima DST to Janome JEF</p>
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
