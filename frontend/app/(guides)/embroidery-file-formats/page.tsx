import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Complete Guide to Embroidery File Formats | ThreadShifter",
  description: "Learn about all embroidery file formats: DST, PES, JEF, EXP, XXX, VP3, U01, PEC. Understanding machine embroidery formats for Brother, Tajima, Janome, Melco, and more.",
  keywords: ["embroidery file formats", "DST format", "PES format", "embroidery formats guide", "machine embroidery formats"],
};

export default function EmbroideryFormatsGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-dark hover:text-primary transition-colors mb-4">
            <Home className="w-4 h-4" />
            Back to Converter
          </Link>
          <h1 className="text-4xl font-bold text-foreground">
            The Complete Guide to Embroidery File Formats
          </h1>
          <p className="text-foreground/70 mt-3 text-lg">
            Everything you need to know about machine embroidery formats
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-foreground mb-6">Understanding Embroidery File Formats</h2>
          <p className="text-foreground/80 leading-relaxed">
            Machine embroidery uses specialized file formats to store design information. Unlike regular image files (JPG, PNG), embroidery files contain stitch-by-stitch instructions that tell the machine exactly where to place each needle drop, what color thread to use, and how to move between design elements. Understanding these formats is crucial for anyone working with machine embroidery.
          </p>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">Why Are There So Many Formats?</h2>
          <p className="text-foreground/80 leading-relaxed">
            Each embroidery machine manufacturer developed their own proprietary format optimized for their equipment's specific capabilities. This fragmentation creates challenges for embroiderers who need to use designs across different machines or share files with others. That's where file conversion tools like ThreadShifter become essential.
          </p>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">The Major Embroidery File Formats</h2>

          <div className="space-y-8 mt-8">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-2xl font-bold text-primary-dark mb-3">DST - Tajima (Industry Standard)</h3>
              <p className="text-foreground/80 leading-relaxed">
                <strong>Who uses it:</strong> Commercial embroidery machines, professional digitizers, production facilities
              </p>
              <p className="text-foreground/80 leading-relaxed mt-2">
                <strong>Characteristics:</strong> DST is the universal language of embroidery. It contains pure stitch data without color information, making it the most widely-compatible format. Almost every commercial machine can read DST files. File sizes are typically small and efficient.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-2">
                <strong>Best for:</strong> Commercial production, sharing designs universally, professional embroidery services, multi-brand machine shops
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-2xl font-bold text-primary-dark mb-3">PES - Brother</h3>
              <p className="text-foreground/80 leading-relaxed">
                <strong>Who uses it:</strong> Brother and Baby Lock home embroidery machines
              </p>
              <p className="text-foreground/80 leading-relaxed mt-2">
                <strong>Characteristics:</strong> PES files are rich with information including stitch data, thread colors, design metadata, and Brother-specific settings. They're larger than DST but contain everything needed for home embroidery including on-screen previews.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-2">
                <strong>Best for:</strong> Brother PE/SE/Innovis machines, home embroidery, designs with detailed color information
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-2xl font-bold text-primary-dark mb-3">JEF - Janome</h3>
              <p className="text-foreground/80 leading-relaxed">
                <strong>Who uses it:</strong> Janome and Elna embroidery machines
              </p>
              <p className="text-foreground/80 leading-relaxed mt-2">
                <strong>Characteristics:</strong> Janome's native format optimized for their machines. Includes full design data, colors, and Janome-specific features like automatic thread cutting and fabric type settings.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-2">
                <strong>Best for:</strong> Janome Memory Craft, Skyline, Horizon series machines
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-2xl font-bold text-primary-dark mb-3">EXP - Melco</h3>
              <p className="text-foreground/80 leading-relaxed">
                <strong>Who uses it:</strong> Melco and Bernina commercial embroidery machines
              </p>
              <p className="text-foreground/80 leading-relaxed mt-2">
                <strong>Characteristics:</strong> Professional format for commercial production. EXP files are common in apparel decoration, promotional products, and commercial embroidery businesses.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-2">
                <strong>Best for:</strong> Commercial production, professional digitizing, Melco/Bernina equipment
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-2xl font-bold text-primary-dark mb-3">Other Formats</h3>
              <ul className="text-foreground/80 space-y-2 mt-3">
                <li><strong>XXX (Singer):</strong> Used by Singer Futura machines</li>
                <li><strong>VP3 (Pfaff):</strong> Pfaff and Husqvarna Viking format</li>
                <li><strong>U01 (Barudan):</strong> Industrial Barudan machines</li>
                <li><strong>PEC (Brother):</strong> Older Brother format, simplified PES</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">Choosing the Right Format</h2>
          <p className="text-foreground/80 leading-relaxed">
            The format you need depends on your embroidery machine:
          </p>
          <ul className="space-y-3 text-foreground/80 mt-4">
            <li>• <strong>Home Brother machines:</strong> Use PES</li>
            <li>• <strong>Commercial/Multi-brand shops:</strong> Use DST (universal)</li>
            <li>• <strong>Janome/Elna machines:</strong> Use JEF</li>
            <li>• <strong>Melco/Bernina commercial:</strong> Use EXP</li>
            <li>• <strong>Pfaff/Viking machines:</strong> Use VP3</li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">Common Conversion Challenges</h2>
          <p className="text-foreground/80 leading-relaxed">
            One of the biggest challenges in machine embroidery is file compatibility. You might receive a design in DST format but own a Brother machine that needs PES. Or purchase a design in PES but need it for your Melco commercial machine. Many embroidery software packages cost hundreds of dollars just for basic conversion capabilities.
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">
            <strong>ThreadShifter solves this problem completely for free.</strong> Convert between any supported formats instantly without expensive software, complicated installations, or technical knowledge.
          </p>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">File Format Best Practices</h2>
          <ul className="space-y-3 text-foreground/80">
            <li>• Always keep original files as backups before converting</li>
            <li>• Test converted files on your machine before production</li>
            <li>• Use DST for maximum compatibility when sharing</li>
            <li>• Check file size limits for your specific machine model</li>
            <li>• Preview designs in embroidery software when possible</li>
            <li>• Keep a library organized by machine format</li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">The Future of Embroidery Formats</h2>
          <p className="text-foreground/80 leading-relaxed">
            While the industry has long hoped for a single universal standard, machine manufacturers continue to use proprietary formats to optimize for their equipment's unique features. This means file conversion will remain essential for the foreseeable future. Tools like ThreadShifter make cross-platform embroidery work seamless and accessible to everyone.
          </p>
        </section>

        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">Convert Any Embroidery Format</h2>
          <p className="text-foreground/70 mb-6">Support for all major formats - DST, PES, JEF, EXP, and more</p>
          <Link href="/" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-xl transition-all">
            Try ThreadShifter Free →
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
