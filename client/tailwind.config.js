/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB", // brand primary
          grey: "#6B7280", // neutral grey
          green: "#22C55E",
          red: "#EF4444",
          yellow: "#EAB308"
        }
      },
      transitionTimingFunction: {
        'modest': 'cubic-bezier(0.2, 0.8, 0.2, 1)'
      }
    }
  },
  plugins: []
}
