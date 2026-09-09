/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#003f63",
        brandBlueLight: "#f1f7fb",
        brandOrange: "#f26a2b",
        brandBgLight: "#fafbff",
        textMain: "#1f2933",
        textMuted: "#6b7280",
        borderSoft: "#e5e7eb",
      },
      boxShadow: {
        soft: "0 7px 16px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        lg: "12px",
        xl: "16px",
      },
      maxWidth: {
        page: "1500px",
      },
    },
  },
  plugins: [],
};
