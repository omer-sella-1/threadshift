import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert EXP to DST Online Free | Melco to Tajima Converter",
  description: "Convert Melco EXP files to DST format instantly. Free EXP to DST converter for commercial embroidery. Upload Melco designs and get universal Tajima DST files.",
  keywords: ["EXP to DST", "convert EXP to DST", "Melco to Tajima", "EXP DST converter"],
};

export default function EXPtoDSTPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-dark hover:text-primary transition-colors mb-4">
            <Home className="w-4 h-4" />
            Back to Converter
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Convert EXP to DST Online Free</h1>
          <p className="text-foreground/70 mt-3 text-lg">Transform Melco EXP files to universal DST format</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">Convert Melco Designs to Universal Format</h2>
          <Link href="/" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all">
            Start Converting →
          </Link>
        </div>

        <section className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Convert EXP to DST?</h2>
            <p className="text-foreground/80 leading-relaxed">
              Converting Melco EXP files to DST format makes your designs universally compatible with all commercial embroidery machines. DST is the industry standard, accepted by Tajima, Barudan, Happy, SWF, and virtually every professional embroidery system worldwide.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Professional Use Cases</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Converting Melco-digitized designs for non-Melco machines</li>
              <li>• Creating universal design libraries for production facilities</li>
              <li>• Sharing designs with embroidery service bureaus</li>
              <li>• Preparing files for multi-brand machine shops</li>
              <li>• Archiving designs in industry-standard format</li>
              <li>• Switching from Melco to Tajima equipment</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Understanding the Formats</h2>
            <p className="text-foreground/80 leading-relaxed">
              <strong>EXP (Melco Expanded):</strong> Professional format used by Melco and Bernina commercial machines. Popular in production environments and apparel decoration.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              <strong>DST (Data Stitch Tajima):</strong> The universal standard recognized by all commercial embroidery machines. Compact, reliable, and industry-preferred.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Conversion Benefits</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>✓ Universal machine compatibility</li>
              <li>✓ Industry-standard output format</li>
              <li>✓ Smaller, more efficient file sizes</li>
              <li>✓ Perfect for production environments</li>
              <li>✓ Instant, professional-grade conversion</li>
              <li>✓ Completely free, no limitations</li>
            </ul>
          </div>
        </section>

        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <Link href="/" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all">
            Convert EXP to DST Now →
          </Link>
        </div>
      </div>

      <footer className="border-t border-border bg-card/30 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-foreground/60">ThreadShifter - Professional Embroidery Converter</p>
        </div>
      </footer>
    </main>
  );
}
