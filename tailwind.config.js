/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 40px 180px 80px rgba(28, 29, 34, 0.06)',
        'input': '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
        'onDrag': '6px 20px 36px rgba(28, 29, 34, 0.1)'
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      }
    },
  },
  plugins: [],
}
