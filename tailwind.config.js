/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "blue-300": "hsl(223, 64%, 98%)",
      "blue-500": "hsl(220, 14%, 75%)",
      "blue-700": "hsl(219, 9%, 45%)",
      "blue-900": "hsl(220, 13%, 13%)",
      "bg-black": "hsl(0, 0%, 75%)",
    },
    extend: {},
  },
  plugins: [],
};
