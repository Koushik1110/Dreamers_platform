/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0rem",
      },
    },
    fontFamily:{
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#1E212B",
        light: "#FAFAFA",
        gray: "#DEDBD8",
        orange: "#F17300",
        cyan: "#64B6AC",
      },
    },
  },
  plugins: [],
};
