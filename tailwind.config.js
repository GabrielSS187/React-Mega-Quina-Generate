import flowbite from "flowbite/plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        jump: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        }
      },
      animation: {
        jump: 'jump 10s cubic-bezier(5, 0.3, 5,5)',
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [flowbite],
}

