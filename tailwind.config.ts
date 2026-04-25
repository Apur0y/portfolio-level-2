import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        gold: {
          50:  "#FFFBF0",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#F5C842",
          400: "#E8B800",
          500: "#C9960A",
          600: "#A67C00",
          700: "#7C5C00",
          DEFAULT: "#C9960A",
        },
        navy: {
          50:  "#F0F4FF",
          100: "#D6E0FF",
          200: "#ADC0FF",
          300: "#7A9AFF",
          400: "#3B6AFF",
          500: "#1A3FCC",
          600: "#0F2A99",
          700: "#0A1F70",
          800: "#061447",
          900: "#030A24",
          DEFAULT: "#0A1628",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        "shimmer": "shimmer 3s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        "gold-shimmer":
          "linear-gradient(90deg, #C9960A 0%, #F5C842 40%, #E8B800 60%, #C9960A 100%)",
        "hero-mesh":
          "radial-gradient(at 20% 30%, rgba(201,150,10,0.08) 0px, transparent 50%), radial-gradient(at 80% 10%, rgba(10,22,40,0.06) 0px, transparent 50%), radial-gradient(at 60% 80%, rgba(201,150,10,0.05) 0px, transparent 50%)",
      },
      boxShadow: {
        "gold": "0 0 40px rgba(201,150,10,0.25)",
        "gold-sm": "0 0 20px rgba(201,150,10,0.15)",
        "card": "0 4px 24px rgba(0,0,0,0.07)",
        "card-hover": "0 12px 48px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
