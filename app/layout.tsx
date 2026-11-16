import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

// Headings: a classic book serif at regular weight with tight tracking. The serif carries the emphasis, not the weight.
const serif = Libre_Baskerville({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f5ee" },
    { media: "(prefers-color-scheme: dark)", color: "#12100d" },
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
    images: [{ url: '/og-cover.png', width: 1200, height: 630, alt: 'Aankit Roy, AI strategy and production AI systems' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aankit Roy | AI Strategy and Production AI Systems",
    description: "AI strategy from someone who has built it at scale. Aankit Roy advises founders, CEOs and boards on where AI creates real value, then helps their teams build it.",
    site: "@AankitRoy",
    creator: "@AankitRoy",
    images: ["/og-cover.png"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply the saved or system theme before first paint, so dark mode never flashes cream. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
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
        className={`${serif.variable} ${sans.variable} ${mono.variable} antialiased`}
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
