import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.threadshifter.com'),
  title: {
    default: 'ThreadShifter - Free Embroidery File Converter Online | DST to PES Converter',
    template: '%s | ThreadShifter'
  },
  description: 'Convert embroidery files instantly for free. Support for DST, PES, EXP, JEF, XXX, VP3, U01, PEC formats. No software installation, no account needed. Fast, private, and secure online embroidery file conversion.',
  keywords: [
    'embroidery file converter',
    'DST to PES converter',
    'convert embroidery files',
    'free embroidery converter',
    'online embroidery tool',
    'Brother PES converter',
    'Tajima DST converter',
    'embroidery format converter',
    'JEF to PES',
    'EXP to DST',
    'machine embroidery converter',
    'embroidery file formats',
    'convert DST files',
    'convert PES files',
    'embroidery design converter',
    'no registration embroidery converter',
    'instant embroidery conversion',
    'free embroidery software alternative',
  ],
  authors: [{ name: 'ThreadShifter' }],
  creator: 'ThreadShifter',
  publisher: 'ThreadShifter',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.threadshifter.com',
    title: 'ThreadShifter - Free Online Embroidery File Converter',
    description: 'Convert embroidery files between DST, PES, EXP, JEF, XXX, VP3, U01, and PEC formats instantly. No software needed. 100% free and private.',
    siteName: 'ThreadShifter',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'ThreadShifter - Free Embroidery File Converter',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThreadShifter - Free Embroidery File Converter',
    description: 'Convert embroidery files instantly between all major formats. DST, PES, EXP, JEF, and more. 100% free, no software needed.',
    images: ['/twitter-image.png'],
    creator: '@threadshifter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.threadshifter.com',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
