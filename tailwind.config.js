/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FCEE4F',    // Sunshine Yellow
          peach: '#F9CBA5',     // Pastel Peach
          blue: '#ADDDE5',      // Puppy Blue
          black: '#1A1A1A',     // Soft Black
          white: '#FFFFFF',     // Clean White
        }
      },
      fontFamily: {
        logo: ['Courier Prime', 'Courier New', 'monospace'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
        accent: ['Playfair Display', 'Baskerville', 'serif'],
        body: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      letterSpacing: {
        logo: '0.15em',
        heading: '0.08em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
