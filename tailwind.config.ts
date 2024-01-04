import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        super: "20rem",
      },
      width: {
        super: "20rem",
      },
      colors: {
        purple: "#787EA6",
        "soft-purple": "#D9D9D9",
        pink: "#F0A7CA",
        "dark-pink": "#FF007A",
        aqua: "#9ADCFD",
        "dark-blue": "#002C42",
      },
    },
  },
  plugins: [],
};
export default config;
