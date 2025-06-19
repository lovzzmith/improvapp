import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mythia: {
          primary: "#2b8878", // Teal
          "primary-content": "#fff",
          secondary: "#389b84", // Light Teal
          "secondary-content": "#fff",
          accent: "#d97736", // Orange/Gold
          "accent-content": "#fff",
          neutral: "#052424", // Dark Teal/Almost Black
          "neutral-content": "#fff",
          "base-100": "#052424", // Dark background
          "base-200": "#64888c", // Muted Teal for subtle backgrounds
          "base-300": "#389b84", // Light Teal for elevated backgrounds
          "base-content": "#fff",
          info: "#389b84",
          success: "#2b8878",
          warning: "#d97736",
          error: "#d97736"
        }
      },
      "light",
      "dark",
      "cupcake"
    ]
  },
};
export default config; 