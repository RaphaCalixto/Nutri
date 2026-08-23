/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F4F7F4',
          100: '#E8EFEA',
          200: '#CFDDD1',
          300: '#A9C2AD',
          400: '#7FA185',
          500: '#5C7E63',
          600: '#48664E',
          700: '#38503D',
          800: '#2A3B2D',
          900: '#1B261D',
        },
        beige: {
          50: '#FAF8F5',
          100: '#F4EFE6',
          200: '#E8DFCE',
          300: '#D7C7B0',
          400: '#BFA88D',
          500: '#A48B70',
        },
        gold: {
          400: '#D4B38A',
          500: '#C29B72',
          600: '#A88057',
        },
        brand: {
          dark: '#1C2920',
          medium: '#3E5645',
          light: '#8BA590',
          soft: '#EBF1EC',
          bg: '#F5F3ED',
          card: '#E3DDD0',
          button: '#6E8A73',
          buttonHover: '#5B7660',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'arch': '160px 160px 24px 24px',
        'arch-full': '9999px 9999px 0 0',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(44, 54, 46, 0.08)',
        'card': '0 15px 35px -5px rgba(28, 41, 32, 0.1)',
        'pill': '0 4px 14px 0 rgba(72, 102, 78, 0.25)',
      }
    },
  },
  plugins: [],
}
