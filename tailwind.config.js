/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideAndColor: {
          '0%': { transform: 'translateY(-100%)', opacity: '0', color: '#93C5FD' },
          '50%': { transform: 'translateY(0)', opacity: '1', color: '#FFFFFF' },
          '100%': { transform: 'translateY(0)', opacity: '1', color: '#93C5FD' },
        },
      },
      animation: {
        slideAndColor: 'slideAndColor 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('daisyui')],
}
