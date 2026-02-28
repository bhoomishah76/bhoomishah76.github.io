/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f172a',
        'navy-light': '#1e293b',
        sky: '#0ea5e9',
        'sky-light': '#f0f9ff',
        primary: '#1e40af',
        secondary: '#7dd3fc',
        accent: '#3b82f6',
        'bg-main': '#ffffff',
        'bg-soft': '#f8fafc',
        'text-main': '#0f172a',
        'text-muted': '#64748b',
        'border-subtle': '#e2e8f0',
      },
      fontFamily: {
        main: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
