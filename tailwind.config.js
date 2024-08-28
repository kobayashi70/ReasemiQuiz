module.exports = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: "560px" },
      md: { max: "768px" },
      tb: { max: "960px" },
    },
    extend: {},
  },
  plugins: [],
};
