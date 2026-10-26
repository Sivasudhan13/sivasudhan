/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#FBFBFE',
          canvas: '#F5F3FF',
          card: '#FFFFFF',
          dark: '#1D1D1F',
          secondary: '#6E6E73',
          muted: '#86868B',
          border: 'rgba(0, 0, 0, 0.08)',
          borderHover: 'rgba(124, 58, 237, 0.35)',
        },
        dark: {
          bg: '#FBFBFE',
          surface: '#FFFFFF',
          surfaceElevated: '#F5F3FF',
          border: 'rgba(124, 58, 237, 0.1)',
          borderHover: 'rgba(124, 58, 237, 0.35)',
        },
        brand: {
          // Lavender
          lavender: '#7C3AED',
          lavenderLight: '#DDD6FE',
          lavenderSoft: '#F5F3FF',
          lavenderDark: '#5B21B6',
          // Tomato Orange
          tomato: '#FF5A36',
          tomatoLight: '#FF7A59',
          tomatoDark: '#EA580C',
          // Green
          green: '#10B981',
          greenLight: '#34D399',
          greenDark: '#059669',
          // Cyan / Blue secondary
          cyan: '#06B6D4',
          blue: '#3B82F6',
        },
        content: {
          white: '#FFFFFF',
          primary: '#1D1D1F',
          secondary: '#6E6E73',
          muted: '#86868B',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Inter"', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"SF Mono"', '"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'apple-lavender-mesh': 'radial-gradient(at 0% 0%, rgba(221, 214, 254, 0.5) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(254, 242, 242, 0.6) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(245, 243, 255, 0.8) 0px, transparent 100%)',
        'grid-pattern': "linear-gradient(to right, rgba(124, 58, 237, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(124, 58, 237, 0.04) 1px, transparent 1px)",
        'radial-gradient-hero': "radial-gradient(circle at 50% 20%, rgba(221, 214, 254, 0.6) 0%, rgba(245, 243, 255, 0.5) 40%, rgba(251, 251, 254, 0.95) 80%)",
        'gradient-aurora': "linear-gradient(135deg, rgba(221, 214, 254, 0.6), rgba(254, 226, 226, 0.5), rgba(209, 250, 229, 0.5))",
      },
      backgroundSize: {
        'grid-size': '48px 48px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shiny-text': 'shiny-text 6s ease-in-out infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'shiny-text': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
      }
    },
  },
  plugins: [],
}
