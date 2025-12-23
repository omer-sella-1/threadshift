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
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-dark hover:text-primary transition-colors mb-4">
            <Home className="w-4 h-4" />
            Back to Converter
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Convert JEF to PES Online Free</h1>
          <p className="text-foreground/70 mt-3 text-lg">Transform Janome JEF files to Brother PES format</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">Convert Janome Designs for Brother Machines</h2>
          <Link href="/" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all">
            Start Converting →
          </Link>
        </div>

        <section className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Convert JEF to PES?</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you own a Brother embroidery machine but have designs in Janome JEF format, you'll need to convert them to PES to use them. This is common when purchasing embroidery designs online or sharing designs between different machine brands.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Janome vs Brother Formats</h2>
            <p className="text-foreground/80 leading-relaxed">
              <strong>JEF (Janome Embroidery Format):</strong> Native format for Janome and Elna machines. Contains stitch data, colors, and Janome-specific formatting.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              <strong>PES (Brother Embroidery Format):</strong> Brother's format with full color and design information. Perfect for all Brother machines including PE, SE, and Innovis series.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Common Use Cases</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>• Using Janome designs purchased online on your Brother machine</li>
              <li>• Converting designs shared from Janome-owning friends</li>
              <li>• Switching from Janome to Brother machine</li>
              <li>• Building a Brother-compatible design library</li>
              <li>• Using professional digitized JEF files on Brother equipment</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Conversion Benefits</h2>
            <ul className="space-y-3 text-foreground/80">
              <li>✓ Perfect compatibility with all Brother machines</li>
              <li>✓ Preserves stitch quality and design integrity</li>
              <li>✓ Maintains thread colors and sequences</li>
              <li>✓ Instant, free, unlimited conversions</li>
              <li>✓ No software installation needed</li>
            </ul>
          </div>
        </section>

        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <Link href="/" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all">
            Convert JEF to PES Now →
          </Link>
        </div>
      </div>

      <footer className="border-t border-border bg-card/30 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-foreground/60">ThreadShifter - Free Embroidery File Converter</p>
        </div>
      </footer>
    </main>
  );
}
