import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Convert DST to EXP Online Free | Tajima to Melco Converter",
  description: "Convert Tajima DST files to Melco EXP format instantly. Free DST to EXP converter for Melco and Bernina machines. Professional embroidery file conversion.",
  keywords: ["DST to EXP", "convert DST to EXP", "Tajima to Melco", "DST EXP converter"],
};

export default function DSTtoEXPPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-dark hover:text-primary transition-colors mb-4">
            <Home className="w-4 h-4" />
            Back to Converter
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Convert DST to EXP Online Free</h1>
          <p className="text-foreground/70 mt-3 text-lg">Transform Tajima DST files to Melco EXP format</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">Professional DST to Melco Conversion</h2>
          <Link href="/" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all">
            Convert Now →
          </Link>
        </div>

        <section className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">DST to EXP Conversion for Melco Machines</h2>
            <p className="text-foreground/80 leading-relaxed">
              Converting Tajima DST files to Melco EXP format is common in professional embroidery shops that use Melco or Bernina equipment. EXP is optimized for these machines' capabilities and provides excellent results for commercial production work.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Professional Applications</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Commercial embroidery production on Melco equipment</li>
              <li>• Using industry-standard DST designs with Melco machines</li>
              <li>• Professional apparel decoration workflows</li>
              <li>• Converting client-provided DST files</li>
              <li>• Multi-brand production facilities</li>
              <li>• Bernina commercial embroidery applications</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Why This Conversion Matters</h2>
            <p className="text-foreground/80 leading-relaxed">
              Melco and Bernina commercial machines perform optimally with EXP format files. While they can read DST, converting to native EXP format ensures best results and full compatibility with machine features.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Professional Features</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>✓ Optimized for Melco and Bernina machines</li>
              <li>✓ Professional-grade conversion quality</li>
              <li>✓ Preserves stitch integrity</li>
              <li>✓ Production-ready output</li>
              <li>✓ Instant, unlimited conversions</li>
              <li>✓ No cost, no restrictions</li>
            </ul>
          </div>
        </section>

        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <Link href="/" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all">
            Convert DST to EXP →
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
