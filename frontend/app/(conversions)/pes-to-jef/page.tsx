import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert PES to JEF Online Free | Brother to Janome Converter",
  description: "Convert Brother PES files to Janome JEF format instantly. Free PES to JEF converter. Upload Brother designs and use them on Janome embroidery machines.",
  keywords: ["PES to JEF", "convert PES to JEF", "Brother to Janome", "PES JEF converter"],
};

export default function PEStoJEFPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-dark hover:text-primary transition-colors mb-4">
            <Home className="w-4 h-4" />
            Back to Converter
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Convert PES to JEF Online Free</h1>
          <p className="text-foreground/70 mt-3 text-lg">Transform Brother PES files to Janome JEF format</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">Use Brother Designs on Janome Machines</h2>
          <Link href="/" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all">
            Convert Now →
          </Link>
        </div>

        <section className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Convert PES to JEF?</h2>
            <p className="text-foreground/80 leading-relaxed">
              Switching from a Brother machine to Janome? Have designs in Brother PES format but now own a Janome? Convert your entire Brother design library to Janome-compatible JEF format instantly. Perfect for crafters upgrading machines or sharing designs between different brands.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Common Scenarios</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Switched from Brother to Janome machine</li>
              <li>• Purchased Brother PES designs online</li>
              <li>• Sharing designs with Janome-owning friends</li>
              <li>• Using Brother digitized files on Janome</li>
              <li>• Converting your entire design library</li>
              <li>• Cross-brand embroidery collaboration</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Format Compatibility</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our PES to JEF converter preserves design quality, stitch sequences, and color information. The converted JEF files work perfectly with all Janome and Elna embroidery machines, ensuring your Brother designs look just as good on Janome equipment.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Use ThreadShifter?</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>✓ High-quality PES to JEF conversion</li>
              <li>✓ Preserves all design details</li>
              <li>✓ Works with all Janome machines</li>
              <li>✓ Completely free, unlimited use</li>
              <li>✓ No software to install</li>
              <li>✓ Instant online conversion</li>
            </ul>
          </div>
        </section>

        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <Link href="/" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all">
            Convert PES to JEF →
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
