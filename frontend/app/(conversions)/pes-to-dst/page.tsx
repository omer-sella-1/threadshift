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
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-dark hover:text-primary transition-colors mb-4">
            <Home className="w-4 h-4" />
            <span className="text-sm">Back to Converter</span>
          </Link>
          <h1 className="text-4xl font-bold text-foreground">
            Convert PES to DST Online Free
          </h1>
          <p className="text-foreground/70 mt-3 text-lg">
            Transform Brother PES files to Tajima DST format instantly
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Convert Your PES Files?
          </h2>
          <Link
            href="/"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all"
          >
            Start Converting Now →
          </Link>
        </div>

        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Why Convert PES to DST?
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Converting Brother PES files to DST format is essential when you need to use your designs on commercial embroidery machines or share them with professional embroidery services. DST is the universal standard in the embroidery industry, accepted by virtually all commercial machines including Tajima, Barudan, Happy, and SWF.
          </p>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
            Benefits of PES to DST Conversion
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>✓ <strong>Universal Compatibility:</strong> DST works on all commercial embroidery machines</li>
            <li>✓ <strong>Professional Output:</strong> Perfect for sending designs to embroidery services</li>
            <li>✓ <strong>Smaller File Size:</strong> DST files are typically more compact than PES</li>
            <li>✓ <strong>Industry Standard:</strong> Most digitizers and shops prefer DST format</li>
            <li>✓ <strong>Instant Conversion:</strong> Convert in under 2 milliseconds</li>
            <li>✓ <strong>100% Free:</strong> No limits, no registration required</li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
            When to Use PES to DST Conversion
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>• Sending designs to commercial embroidery shops</li>
            <li>• Using designs created on Brother machines with industrial equipment</li>
            <li>• Sharing designs with clients who use professional machines</li>
            <li>• Converting home designs for production runs</li>
            <li>• Creating design libraries in universal format</li>
            <li>• Preparing files for multi-head embroidery machines</li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
            How PES and DST Files Differ
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            <strong>PES Files:</strong> Brother's proprietary format includes color information, design metadata, and machine-specific settings. PES files are larger but contain more detailed information about the design.
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">
            <strong>DST Files:</strong> The industry-standard format contains only stitch coordinates and commands. DST files are smaller and more universally compatible but don't include color information (colors are set at the machine).
          </p>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
            Professional Embroidery Machines Supporting DST
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            DST files work perfectly with: Tajima TMEX, Barudan BEAT, Happy HCD series, ZSK JCZA, SWF, Toyota ESP series, Brother commercial machines, Ricoma, and virtually all multi-needle industrial embroidery equipment.
          </p>
        </section>

        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Convert PES to DST Now - It's Free!
          </h2>
          <Link
            href="/"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all"
          >
            Go to Converter →
          </Link>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Related Conversions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/dst-to-pes" className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-foreground text-lg">DST to PES</h3>
              <p className="text-foreground/70 text-sm mt-2">Convert Tajima DST back to Brother PES format</p>
            </Link>
            <Link href="/jef-to-pes" className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-foreground text-lg">JEF to PES</h3>
              <p className="text-foreground/70 text-sm mt-2">Convert Janome JEF to Brother PES</p>
            </Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-border bg-card/30 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-foreground/60">
            ThreadShifter - Free Online Embroidery File Converter
          </p>
        </div>
      </footer>
    </main>
  );
}
