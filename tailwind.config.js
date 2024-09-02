/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Adjust paths as needed
    './public/index.html'
  ],
  theme: {
    extend: {

      colors: {
        "custom-green": "#60A61B",
        "custom-black": "rgb(0,0,0)"
      },

      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '.8' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
        'custom-pulse': 'pulse 2s infinite',
        'spin-slow': 'rotate 6s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        fadeIn: 'fadeIn 1s ease-in-out',  // Add fadeIn animation
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
