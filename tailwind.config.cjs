/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'project': '#0066FF',  // Electric Blue
        'skill': '#8B5CF6',    // Purple
        'award': '#FFD700',    // Gold
        'tool': '#1F2937',     // Dark Gray
        'role': '#065F46',     // Dark Green
      },
    },
  },
  plugins: [],
}