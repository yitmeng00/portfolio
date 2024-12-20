import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F4EEE8",
          200: "#F2E6D9",
          300: "#E1C8AB",
          400: "#C1A788",
          500: "#5F554A",
          600: "#504538",
        },
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [],
};
export default config;
