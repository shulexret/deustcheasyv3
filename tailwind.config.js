/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        lavanda: "#b388eb",
        acento: "#9b5de5",
        verdeClaro: "#84dcc6",
        fondoBlancoSuave: "#f9f9fb"
      }
    },
  },
  plugins: [],
};
