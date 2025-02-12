import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      colors: {
        background: "#0B0E14",
        foreground: "#ffffff",
        secondary: {
          DEFAULT: "#0B0F17",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#1D6CFF",
        },
        border: "#E4E4E4",
      },
    },
  },
  plugins: [],
} satisfies Config;
