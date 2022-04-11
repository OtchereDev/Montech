module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryGreen : "#14F195",
        primaryBlue: "#1E1A2F",
        primaryDarkBlue: "#1b1f2e",
        lightBlue:"#3D3B4F"
      },
      fontFamily:{
        primary: "'Montserrat', sans-serif",
        secondary: "'Poppins', sans-serif;",
        tertiary: "'Inter', sans-serif;"
      }
    },
  },
  plugins: [],
}
