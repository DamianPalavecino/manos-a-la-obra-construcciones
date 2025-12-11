/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#2D2D2D',
          primary: '#333333',
          light: '#A0A0A0',
          accent: '#F3F4F6',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -4px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 40px -12px rgba(45, 45, 45, 0.25)',
        'button': '0 10px 30px -6px rgba(45, 45, 45, 0.5)',
      },
    },
  },
  plugins: [],
};

