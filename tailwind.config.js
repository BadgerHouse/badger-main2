/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React dosyalarını kapsar
    "./public/index.html"         // varsa HTML içinde Tailwind class'ları
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#10B981",
        accent: "#F59E0B",
        background: "#F9FAFB",
        surface: "#FFFFFF",
        textPrimary: "#111827",
        textSecondary: "#6B7280",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
