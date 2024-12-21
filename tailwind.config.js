/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
      animation: {
        blob: "blob 5s infinite",
        moveline: "moveline 6s linear forwards",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg) scale(1)",
          },
          "33%": {
            transform: "translate(-50%, -50%) scale(1, 1.2)",
          },
          "66%": {
            transform: "translate(-50%, -50%) scale(1, 0.8)",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(360deg) scale(1)",
          },
        },
        moveline: {
          "0%": {
            height: 0,
          },
          "100%": {
            height: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
