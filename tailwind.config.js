/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: { DEFAULT: "#590000", light: "#7a1a1a", dark: "#3d0000" },
        gold: { DEFAULT: "#d4af37", light: "#e6c860" },
        brand: { DEFAULT: "#8b1a1a", light: "#a3302f", dark: "#1a0000" },
        paper: "#f5f3ef",
        ink: "#2b2b2b",
        muted: "#6d6863",
        rule: "#c8c3ba",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}