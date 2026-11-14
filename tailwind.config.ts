import type { Config } from "tailwindcss";

/*
 * Design system: "Evergreen & Brass"
 * - gray   → porcelain-to-ink neutrals with a faint green undertone
 * - purple → evergreen (primary accent). Remapped so existing blog articles
 *            that use purple-* utilities inherit the new palette automatically.
 * - blue   → brass (secondary accent), same reason.
 */
const neutral = {
  50: "#F5F6F3",
  100: "#ECEEEA",
  200: "#DADDD7",
  300: "#BEC3BC",
  400: "#959C94",
  500: "#6E766F",
  600: "#535B55",
  700: "#3C433E",
  800: "#262C29",
  900: "#161B19",
  950: "#0D1110",
};

const evergreen = {
  50: "#EEF4F1",
  100: "#D7E6DF",
  200: "#B0CDBF",
  300: "#8DB8A5",
  400: "#6A9F88",
  500: "#3F7A63",
  600: "#245A48",
  700: "#1C4839",
  800: "#16392E",
  900: "#102A22",
  950: "#0A1C17",
};

const brass = {
  50: "#FAF6EE",
  100: "#F2E9D6",
  200: "#E4D2AD",
  300: "#D2B783",
  400: "#C29F64",
  500: "#B08A4E",
  600: "#957240",
  700: "#775A34",
  800: "#5A4428",
  900: "#3E2F1D",
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
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: neutral,
        purple: evergreen,
        blue: brass,
        evergreen,
        brass,
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      },
      fontSize: {
        // Classical scale (Bringhurst): 36 48 60 72 96
        "display-sm": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["3rem", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-2xl": ["6rem", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
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
