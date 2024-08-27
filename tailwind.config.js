module.exports = {
  mode: "jit",
  darkMode: false, // 'media' or 'class',
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
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
