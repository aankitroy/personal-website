import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const display = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aankit Roy | AI Strategy and Production AI Systems",
  description: "Co-founder of a stealth AI startup, former VP of AI Engineering at GeoIQ and YC-backed CTO. Aankit Roy helps leaders turn AI strategy into production systems.",
  keywords: [
    "Aankit Roy",
    "AI strategy",
    "AI agents",
    "production AI systems",
    "agentic AI",
    "AI engineering leadership",
    "VP AI Engineering",
    "startup CTO",
    "Y Combinator",
    "GeoIQ",
    "Khabri",
    "Writesonic",
  ],
  authors: [{ name: "Aankit Roy", url: "https://aankitroy.com" }],
  creator: "Aankit Roy",
  publisher: "Aankit Roy",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://aankitroy.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aankit Roy | AI Strategy and Production AI Systems",
    description: "Co-founder of a stealth AI startup, former VP of AI Engineering at GeoIQ and YC-backed CTO. Aankit Roy helps leaders turn AI strategy into production systems.",
    url: "https://aankitroy.com",
    siteName: "Aankit Roy",
    locale: "en_US",
    type: "website",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Aankit Roy, AI strategy and production AI systems' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aankit Roy | AI Strategy and Production AI Systems",
    description: "Co-founder of a stealth AI startup, former VP of AI Engineering at GeoIQ and YC-backed CTO. Aankit Roy helps leaders turn AI strategy into production systems.",
    site: "@AankitRoy",
    creator: "@AankitRoy",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${display.variable} ${sans.variable} antialiased`}
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
