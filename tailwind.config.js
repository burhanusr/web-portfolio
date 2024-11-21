/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
      animation: {
        blob1: "blob1 15s ease-in-out infinite",
        blob2: "blob2 15s ease-in-out infinite",
      },
      keyframes: {
        blob1: {
          "0%": {
            transform: "translate(0, 0) rotate(0deg) scale(1)",
          },
          "33%": {
            transform: "scale(1.2)",
          },
          "50%": {
            transform: "translate(50%, 0)",
          },
          "66%": {
            transform: "scale(0.8)",
          },
          "100%": {
            transform: "translate(0, 0) rotate(360deg) scale(1)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0, 0) rotate(0deg) scale(1)",
          },
          "33%": {
            transform: "scale(1.1)",
          },
          "50%": {
            transform: "translate(-50%, 0)",
          },
          "66%": {
            transform: "scale(0.9)",
          },
          "100%": {
            transform: "translate(0, 0) rotate(360deg) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
