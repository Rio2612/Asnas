import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a1628",
          50: "#e8edf5",
          100: "#c5d0e3",
          200: "#9fb0ce",
          300: "#7890ba",
          400: "#5a78ab",
          500: "#3c609c",
          600: "#2d4f84",
          700: "#1e3a6b",
          800: "#122652",
          900: "#0a1628",
        },
        gold: {
          DEFAULT: "#c9a84c",
          50: "#fdf8ec",
          100: "#f8ecc9",
          200: "#f2dea3",
          300: "#ecca78",
          400: "#e2ba57",
          500: "#d9aa3c",
          600: "#c9a84c",
          700: "#b08a32",
          800: "#8c6c22",
          900: "#674f14",
        },
        cream: {
          DEFAULT: "#faf8f3",
          50: "#fefefe",
          100: "#faf8f3",
          200: "#f3efe4",
          300: "#e8e1ce",
          400: "#d9ceaf",
          500: "#c8ba90",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
