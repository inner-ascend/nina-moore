/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nina Moore Color System - calm, contained, grounded

        // Base palette (80-85% of site)
        linen: '#F8F6F2',        // Main background (warm linen)
        'linen-dark': '#F1EEE9', // Alt background (subtle section shift)
        divider: '#E2DED8',      // Divider lines

        // Text colors (never pure black)
        'text-primary': '#2A2623',    // Headings + body
        'text-secondary': '#6F6A65',  // Secondary text
        'text-tertiary': '#9A948E',   // Tertiary text

        // Dark grounding (use rarely - max 2 sections)
        ground: '#2E2A27',       // Footer, primary CTA, anchoring moments

        // Accent (almost invisible)
        clay: '#C6A58B',         // Bullets, dividers, focus rings, subtle emphasis
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'Cambria', 'serif'],
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
}
