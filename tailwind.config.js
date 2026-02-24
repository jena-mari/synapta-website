export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        synaptaPurple: "#6a4ab6",
        synaptaBlue: "#3252c1",
        synaptaWhite: "#FFFFFF",
        pastelPurple: "#8e89f3",
        pastelLavender: "#d998f4"

      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}