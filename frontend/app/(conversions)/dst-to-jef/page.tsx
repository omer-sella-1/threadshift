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
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-dark hover:text-primary transition-colors mb-4">
            <Home className="w-4 h-4" />
            Back to Converter
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Convert DST to JEF Online Free</h1>
          <p className="text-foreground/70 mt-3 text-lg">Transform Tajima DST files to Janome JEF format</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">Use DST Designs on Your Janome Machine</h2>
          <Link href="/" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all">
            Convert Now →
          </Link>
        </div>

        <section className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Convert DST to JEF?</h2>
            <p className="text-foreground/80 leading-relaxed">
              DST is the universal embroidery format used by commercial machines and digitizers. JEF is Janome's native format, optimized for Janome and Elna home embroidery machines. Converting DST to JEF allows you to use professional and commercial designs on your Janome equipment.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Perfect For Janome Users</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Using commercial DST designs on Janome machines</li>
              <li>• Converting professional digitized files</li>
              <li>• Using designs from embroidery marketplaces</li>
              <li>• Working with company logos in DST format</li>
              <li>• Converting vintage or archived DST files</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Compatible Janome Machines</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our DST to JEF converter works with all Janome and Elna embroidery machines that accept JEF files, including: Janome Memory Craft series (MC500E, MC550E), Janome Horizon series, Janome Skyline series, Elna eXpressive series, and all other Janome machines with embroidery capabilities.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Conversion Features</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>✓ Janome-optimized output format</li>
              <li>✓ Maintains stitch integrity</li>
              <li>✓ Preserves design quality</li>
              <li>✓ Instant, free conversion</li>
              <li>✓ No software required</li>
              <li>✓ Works with all DST files</li>
            </ul>
          </div>
        </section>

        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <Link href="/" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all">
            Convert DST to JEF →
          </Link>
        </div>
      </div>

      <footer className="border-t border-border bg-card/30 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-foreground/60">ThreadShifter - Free Embroidery Converter</p>
        </div>
      </footer>
    </main>
  );
}
