/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-green": "#4DF69B",
        "brand-amber": "#FF8656",
        "brand-blue": "#1B273C",
        "icon-blue": "#346E8C",
      },
    },
  },
  plugins: [],
};
