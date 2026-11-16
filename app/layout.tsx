import type { Metadata, Viewport } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
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
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// Light, high-contrast display face for the premium surfaces (home, header, footer).
// Self-hosted variable font (weights 300–500): the Google Fonts fetch for Cormorant fails on Vercel builds.
const luxe = localFont({
  variable: "--font-luxe",
  display: "swap",
  src: [
    { path: "./fonts/cormorant-garamond-latin.woff2", weight: "300 500", style: "normal" },
    { path: "./fonts/cormorant-garamond-italic-latin.woff2", weight: "300 500", style: "italic" },
  ],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f2a22" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1d17" },
  ],
};

export const metadata: Metadata = {
  title: "Aankit Roy | AI Strategy and Production AI Systems",
  description: "AI strategy from someone who has built it at scale. Aankit Roy advises founders, CEOs and boards on where AI creates real value, then helps their teams build it.",
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
    description: "AI strategy from someone who has built it at scale. Aankit Roy advises founders, CEOs and boards on where AI creates real value, then helps their teams build it.",
    url: "https://aankitroy.com",
    siteName: "Aankit Roy",
    locale: "en_US",
    type: "website",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Aankit Roy, AI strategy and production AI systems' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aankit Roy | AI Strategy and Production AI Systems",
    description: "AI strategy from someone who has built it at scale. Aankit Roy advises founders, CEOs and boards on where AI creates real value, then helps their teams build it.",
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
        className={`${display.variable} ${sans.variable} ${luxe.variable} antialiased`}
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
