export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "ThreadShifter",
        "url": "https://www.threadshifter.com",
        "description": "Free online embroidery file converter. Convert between DST, PES, EXP, JEF, XXX, VP3, U01, and PEC formats instantly without software installation.",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "Convert DST to PES",
          "Convert PES to DST",
          "Convert JEF files",
          "Convert EXP files",
          "No registration required",
          "Instant conversion",
          "Privacy-focused",
          "No data storage"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "ratingCount": "1247",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "ThreadShifter Embroidery File Converter",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0"
        },
        "description": "Convert embroidery machine files between all major formats including Brother PES, Tajima DST, Janome JEF, Melco EXP, and more."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What embroidery file formats can I convert?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ThreadShifter supports conversion between DST (Tajima), PES (Brother), EXP (Melco), JEF (Janome), XXX (Singer), VP3 (Pfaff), U01 (Barudan), and PEC (Brother) formats."
            }
          },
          {
            "@type": "Question",
            "name": "Is ThreadShifter free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, ThreadShifter is completely free. No registration, no subscription, no hidden fees. Convert unlimited embroidery files at no cost."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to install software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No software installation required. ThreadShifter works entirely in your web browser. Simply upload your file, select the target format, and download the converted file."
            }
          },
          {
            "@type": "Question",
            "name": "Is my embroidery file data safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Your files are processed in-memory and never stored on our servers. All conversions happen instantly and your data is immediately discarded after download."
            }
          },
          {
            "@type": "Question",
            "name": "How long does conversion take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Conversion is nearly instant, typically taking less than 2 milliseconds to process. Total time including upload and download is usually under 1 second."
            }
          },
          {
            "@type": "Question",
            "name": "Can I convert DST to PES?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! ThreadShifter easily converts DST files to PES format, as well as all other supported embroidery format combinations."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Convert Embroidery Files Online",
        "description": "Step-by-step guide to converting embroidery files using ThreadShifter",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Upload File",
            "text": "Drag and drop your embroidery file (DST, PES, JEF, etc.) or click to browse and select it.",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Select Format",
            "text": "Choose your desired output format from the 8 supported embroidery machine formats.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Download",
            "text": "Click 'Convert & Download' and your converted file will download instantly.",
            "position": 3
          }
        ],
        "totalTime": "PT30S"
      },
      {
        "@type": "WebSite",
        "name": "ThreadShifter",
        "url": "https://www.threadshifter.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.threadshifter.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
