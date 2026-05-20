/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f8',
          100: '#d5ddef',
          200: '#aabbdf',
          300: '#7a96cb',
          400: '#4f74b8',
          500: '#2d55a0',
          600: '#1B2B5E',
          700: '#162349',
          800: '#101a36',
          900: '#0a1123',
        },
        green: {
          50: '#eef7ec',
          100: '#d3ecd0',
          200: '#a5d89f',
          300: '#72c069',
          400: '#4aaa3f',
          500: '#3A7D2C',
          600: '#2e6422',
          700: '#234c1a',
          800: '#173312',
          900: '#0c1a09',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'hero-desktop': "url('/src/assets/images/hero-desktop.png')",
        'hero-mobile': "url('/src/assets/images/hero-mobile.png')",
      },
      keyframes: {
        pulse_glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(58,125,44,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(58,125,44,0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        pulse_glow: 'pulse_glow 2.5s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}
