/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-50": "#eff6ff",
        "blue-500": "#3b82f6",
        "blue-600": "#2563eb",
        "orange-600": "#ea580c",
      },
    },
  },
  plugins: [],
};
