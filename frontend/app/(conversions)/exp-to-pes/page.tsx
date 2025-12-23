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
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-dark hover:text-primary transition-colors mb-4">
            <Home className="w-4 h-4" />
            Back to Converter
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Convert EXP to PES Online Free</h1>
          <p className="text-foreground/70 mt-3 text-lg">Transform Melco EXP files to Brother PES format</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">Use Melco Designs on Brother Machines</h2>
          <Link href="/" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all">
            Start Converting →
          </Link>
        </div>

        <section className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Converting Melco EXP to Brother PES</h2>
            <p className="text-foreground/80 leading-relaxed">
              Melco EXP files are professional-grade embroidery designs commonly used in commercial settings. If you want to use these high-quality designs on your Brother home embroidery machine, converting to PES format is essential. ThreadShifter makes this conversion instant and free.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">When You Need This Conversion</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Purchased professional Melco designs for home use</li>
              <li>• Received company logos in EXP format</li>
              <li>• Downsizing from commercial to home embroidery</li>
              <li>• Using professional digitized files at home</li>
              <li>• Converting designs from embroidery services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Conversion Benefits</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>✓ Professional Melco quality on your Brother machine</li>
              <li>✓ Full compatibility with PES format</li>
              <li>✓ Preserves stitch quality and density</li>
              <li>✓ Maintains color information</li>
              <li>✓ Free, unlimited conversions</li>
              <li>✓ Instant results</li>
            </ul>
          </div>
        </section>

        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <Link href="/" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all">
            Convert EXP to PES Now →
          </Link>
        </div>
      </div>

      <footer className="border-t border-border bg-card/30 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-foreground/60">ThreadShifter - Professional to Home Embroidery Converter</p>
        </div>
      </footer>
    </main>
  );
}
