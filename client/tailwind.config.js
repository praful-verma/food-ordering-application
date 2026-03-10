export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        button: "rgb(var(--button))",
        hoverButtonColor: "rgb(var(--hoverButtonColor))",
      },
    },
  },
  plugins: [],
}
