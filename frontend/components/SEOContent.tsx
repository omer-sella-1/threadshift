"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is an embroidery file converter?",
    answer: "An embroidery file converter is a tool that transforms embroidery design files from one machine format to another. Different embroidery machines (Brother, Tajima, Janome, etc.) use different file formats. ThreadShifter converts between these formats so you can use your designs on any machine."
  },
  {
    question: "How do I convert DST to PES?",
    answer: "Converting DST to PES is simple with ThreadShifter: 1) Upload your DST file by dragging it into the converter or clicking to browse. 2) Select 'PES' as your target format from the format selector. 3) Click 'Convert & Download' and your PES file will download instantly. The entire process takes less than 30 seconds."
  },
  {
    question: "Is ThreadShifter really free?",
    answer: "Yes! ThreadShifter is 100% free with no hidden costs, subscriptions, or limitations. You can convert unlimited embroidery files at no charge. We don't require registration, credit cards, or any payment information."
  },
  {
    question: "What formats does ThreadShifter support?",
    answer: "ThreadShifter supports 8 major embroidery formats: DST (Tajima), PES (Brother), EXP (Melco), JEF (Janome), XXX (Singer), VP3 (Pfaff), U01 (Barudan), and PEC (Brother). You can convert between any of these formats freely."
  },
  {
    question: "Do you store my embroidery files?",
    answer: "No. Your privacy is our priority. All file conversions happen in-memory and your files are never saved to our servers. Once you download your converted file, all data is immediately discarded. We have zero data retention."
  },
  {
    question: "Can I use ThreadShifter on mobile?",
    answer: "Absolutely! ThreadShifter is fully responsive and works perfectly on smartphones and tablets. Convert your embroidery files on the go, wherever you are."
  },
  {
    question: "Why should I use ThreadShifter instead of paid software?",
    answer: "ThreadShifter offers instant conversions with no software installation, no expensive licenses, and no learning curve. It's faster, more convenient, and completely free. Perfect for hobbyists and professionals alike."
  },
  {
    question: "How fast is the conversion?",
    answer: "Conversions are nearly instantaneous, typically completing in under 2 milliseconds. Including upload and download time, most conversions finish in under 1 second total."
  }
];

const formats = [
  {
    ext: "DST",
    name: "Tajima DST",
    description: "The industry-standard format for commercial embroidery machines. DST files are widely supported and commonly used for professional embroidery work."
  },
  {
    ext: "PES",
    name: "Brother PES",
    description: "Native format for Brother embroidery machines. PES files contain design information optimized for Brother machines and are very popular among home embroiderers."
  },
  {
    ext: "JEF",
    name: "Janome JEF",
    description: "Format used by Janome and Elna embroidery machines. JEF files store designs specifically formatted for Janome machine compatibility."
  },
  {
    ext: "EXP",
    name: "Melco EXP",
    description: "Professional format used by Melco and Bernina embroidery machines. EXP is common in commercial embroidery settings."
  },
  {
    ext: "XXX",
    name: "Singer XXX",
    description: "Format for Singer Futura embroidery machines. XXX files are optimized for Singer's embroidery systems."
  },
  {
    ext: "VP3",
    name: "Pfaff VP3",
    description: "Native format for Pfaff and Husqvarna Viking embroidery machines. VP3 files contain designs with Pfaff-specific formatting."
  },
  {
    ext: "U01",
    name: "Barudan U01",
    description: "Format used by Barudan commercial embroidery machines. U01 is common in industrial embroidery production."
  },
  {
    ext: "PEC",
    name: "Brother PEC",
    description: "Another Brother format, commonly used in older Brother embroidery machines. PEC is a simplified version of the PES format."
  }
];

export default function SEOContent() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* About Section */}
      <section>
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-6 border-l-4 border-cyan-400 pl-4">
          ABOUT // SYSTEM
        </h2>
        <p className="text-sm leading-relaxed">
          ThreadShifter is the fastest and easiest way to convert embroidery files between different machine formats.
          Whether you need to convert DST to PES, JEF to EXP, or any other combination, our free online tool handles
          it instantly with no software installation required. Perfect for embroidery enthusiasts, small businesses,
          and professional embroiderers who need quick, reliable file conversions.
        </p>
        <p className="text-sm leading-relaxed mt-4">
          Our converter supports all major embroidery machine brands including Brother, Tajima, Janome, Melco, Singer,
          Pfaff, Barudan, and Husqvarna Viking. Simply upload your file, select your target format, and download your
          converted embroidery design in seconds. No registration, no fees, no hassle.
        </p>
      </section>

      {/* Supported Formats */}
      <section>
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-8 border-l-4 border-cyan-400 pl-4">
          SUPPORTED_FORMATS
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {formats.map((format) => (
            <div
              key={format.ext}
              className="p-4 border-2 border-black bg-white hover:bg-[#f0ebe3] transition-colors duration-100 shadow-brutal-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl font-bold">
                  .{format.ext}
                </span>
                <span className="text-xs uppercase opacity-70">
                  {format.name}
                </span>
              </div>
              <p className="text-xs leading-relaxed opacity-80">
                {format.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-8 border-l-4 border-cyan-400 pl-4">
          FAQ // SYSTEM_INFO
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-black bg-white shadow-brutal-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className={`w-full flex items-center justify-between p-4 text-left transition-colors duration-100 ${
                  openFAQ === index ? 'bg-cyan-400' : 'hover:bg-[#f0ebe3]'
                }`}
              >
                <h3 className="text-sm font-bold uppercase tracking-wide pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                  strokeWidth={2}
                />
              </button>
              {openFAQ === index && (
                <div className="px-4 pb-4 bg-[#f0ebe3] border-t-2 border-black">
                  <p className="text-sm leading-relaxed mt-3">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SEO Keywords Section (hidden from users but visible to search engines) */}
      <section className="sr-only" aria-label="Additional information">
        <h2>Online Embroidery Converter Keywords</h2>
        <p>
          embroidery file converter, convert DST to PES, convert PES to DST,
          free embroidery converter, online embroidery tool, Brother PES converter,
          Tajima DST converter, Janome JEF converter, embroidery format converter,
          convert embroidery files online, DST converter, PES converter,
          machine embroidery file conversion, embroidery design converter,
          convert JEF to PES, convert EXP to DST, free embroidery software,
          no registration embroidery converter, instant embroidery conversion,
          embroidery file format conversion tool, convert embroidery designs
        </p>
      </section>
    </div>
  );
}
