/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#1E40AF',
        action: '#2563EB',
        mainText: '#1A1A1A',
        secondaryText: '#374151',
        neutralBg: '#F5F7FA'
      }
    },
  },
  plugins: [],
}
