import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base:    "#ffffff",
        surface: "#f5f5f5",
        border:  "#000000",
        text:    "#000000",
        muted:   "#cccccc",
        accent:  "#ff0000",
      },
      fontFamily: {
        sans: ["Epilogue", "Helvetica Neue", "Arial", "sans-serif"],
        head: ["Archivo", "Helvetica Neue", "sans-serif"],
        mono: ["Azeret Mono", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
