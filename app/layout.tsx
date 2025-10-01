import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NKLNWBXF');
            `,
          }}
        />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-61SMXXNQNF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-61SMXXNQNF');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NKLNWBXF"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
