import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aankit Roy - AI Strategy & Engineering Leadership",
  description: "Transforming businesses through strategic AI implementation and engineering leadership. Over a decade of experience scaling products to serve millions of users.",
  keywords: [
    "AI Strategy",
    "Engineering Leadership", 
    "AI Implementation",
    "Technical Leadership",
    "AI Consultant",
    "System Architecture",
    "AI Agents",
    "Machine Learning",
    "Startup CTO",
    "Y Combinator",
    "Writesonic",
    "Khabri",
    "Technical Consultant"
  ],
  authors: [{ name: "Aankit Roy" }],
  creator: "Aankit Roy",
  publisher: "Aankit Roy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aankitroy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Aankit Roy - AI Strategy & Engineering Leadership",
    description: "Transforming businesses through strategic AI implementation and engineering leadership. Over a decade of experience scaling products to serve millions of users.",
    url: 'https://aankitroy.com',
    siteName: 'Aankit Roy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/aankitroy.png',
        width: 1200,
        height: 630,
        alt: 'Aankit Roy - AI Strategy & Engineering Leadership',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aankit Roy - AI Strategy & Engineering Leadership",
    description: "Transforming businesses through strategic AI implementation and engineering leadership. Over a decade of experience scaling products to serve millions of users.",
    creator: '@AankitRoy',
    images: ['/aankitroy.png'],
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
  verification: {
    google: 'your-google-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
