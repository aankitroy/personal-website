import type { Config } from "tailwindcss";

/*
 * Design system: "Cream & Ink"
 * A warm editorial palette: wheat-cream page, stone cards, warm ink, one bronze accent.
 * - gray   → warm neutrals, cream to ink
 * - purple → umber (primary accent). Remapped so the essays, which use purple-* utilities,
 *            inherit the palette without touching their markup.
 * - blue   → bronze (secondary accent), same reason.
 * Page chrome reads the CSS custom properties in app/globals.css instead.
 */
const neutral = {
  50: "#F8F5EE",
  100: "#F3EEE4",
  200: "#E6DFD2",
  300: "#D3CABB",
  400: "#A99F90",
  500: "#857B6D",
  600: "#6B6256",
  700: "#4A433A",
  800: "#2E2923",
  900: "#1C1915",
  950: "#12100D",
};

const umber = {
  50: "#F7F2EA",
  100: "#EDE3D2",
  200: "#DCC8A8",
  300: "#C8AA7C",
  400: "#B08C58",
  500: "#94723F",
  600: "#7D5D31",
  700: "#654B28",
  800: "#4D3A20",
  900: "#352818",
  950: "#211910",
};

const bronze = {
  50: "#FAF6EE",
  100: "#F2E9D6",
  200: "#E6D3AF",
  300: "#D6BA86",
  400: "#C29F64",
  500: "#A07A45",
  600: "#8A673A",
  700: "#6F5230",
  800: "#563F26",
  900: "#3D2D1C",
  950: "#271D12",
};

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--fg)",
        gray: neutral,
        purple: umber,
        blue: bronze,
        umber,
        bronze,
        // Older names, kept so nothing that still references them breaks.
        evergreen: umber,
        brass: bronze,
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Libre Baskerville", "Georgia", "serif"],
        luxe: ["var(--font-serif)", "Libre Baskerville", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        "display-sm": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-md": ["3rem", { lineHeight: "1.06", letterSpacing: "-0.035em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.04", letterSpacing: "-0.04em" }],
        "display-xl": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
        "display-2xl": ["6rem", { lineHeight: "0.98", letterSpacing: "-0.045em" }],
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            code: { fontWeight: "500" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
