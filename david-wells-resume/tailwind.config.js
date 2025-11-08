/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      // Material Design 3 Color System
      colors: {
        // Primary colors (Professional blue-gray)
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Secondary colors (Warm accent)
        secondary: {
          50: '#fef7ee',
          100: '#fdecd6',
          200: '#fbd5ad',
          300: '#f7b479',
          400: '#f28743',
          500: '#ee6f1e',
          600: '#df5814',
          700: '#b84212',
          800: '#933516',
          900: '#762d14',
          950: '#401408',
        },
        // Neutral grays
        surface: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Success/Error/Warning
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
      },

      // Typography scale
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],

        // Custom resume sizes
        'display-large': [
          '3.5rem',
          { lineHeight: '4rem', letterSpacing: '-0.025em' },
        ],
        'display-medium': [
          '2.75rem',
          { lineHeight: '3.25rem', letterSpacing: '-0.025em' },
        ],
        'display-small': ['2.25rem', { lineHeight: '2.75rem' }],
        'headline-large': ['2rem', { lineHeight: '2.5rem' }],
        'headline-medium': ['1.75rem', { lineHeight: '2.25rem' }],
        'headline-small': ['1.5rem', { lineHeight: '2rem' }],
        'title-large': ['1.375rem', { lineHeight: '1.75rem' }],
        'title-medium': ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }],
        'title-small': [
          '0.875rem',
          { lineHeight: '1.25rem', fontWeight: '500' },
        ],
        'body-large': ['1rem', { lineHeight: '1.5rem' }],
        'body-medium': ['0.875rem', { lineHeight: '1.25rem' }],
        'body-small': ['0.75rem', { lineHeight: '1rem' }],
        'label-large': [
          '0.875rem',
          { lineHeight: '1.25rem', fontWeight: '500' },
        ],
        'label-medium': ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
        'label-small': ['0.6875rem', { lineHeight: '1rem', fontWeight: '500' }],
      },

      // Spacing scale
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
        144: '36rem',
      },

      // Animation and transitions
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },

      // Shadows (Material Design elevation)
      boxShadow: {
        'elevation-1':
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'elevation-2':
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'elevation-3':
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'elevation-4':
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'elevation-5': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },

      // Border radius
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',

        // Material Design values
        xs: '0.25rem',
        'extra-small': '0.25rem',
        small: '0.5rem',
        medium: '0.75rem',
        large: '1rem',
        'extra-large': '1.75rem',
        container: '0.75rem',
      },

      // Grid templates for resume layout
      gridTemplateColumns: {
        resume: '1fr 2fr',
        'resume-mobile': '1fr',
        skills: 'repeat(auto-fit, minmax(200px, 1fr))',
        timeline: 'auto 1fr',
      },

      // Custom utilities
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [
    // Custom utilities plugin
    function ({ addUtilities }) {
      const newUtilities = {
        // Surface containers (Material Design)
        '.surface-container': {
          backgroundColor: 'rgb(var(--surface-container))',
          color: 'rgb(var(--on-surface))',
        },
        '.surface-container-low': {
          backgroundColor: 'rgb(var(--surface-container-low))',
          color: 'rgb(var(--on-surface))',
        },
        '.surface-container-high': {
          backgroundColor: 'rgb(var(--surface-container-high))',
          color: 'rgb(var(--on-surface))',
        },

        // Text utilities
        '.text-balance': {
          textWrap: 'balance',
        },
        '.text-pretty': {
          textWrap: 'pretty',
        },

        // Focus utilities
        '.focus-ring': {
          '&:focus-visible': {
            outline: '2px solid rgb(var(--primary))',
            outlineOffset: '2px',
          },
        },
      }

      addUtilities(newUtilities)
    },
  ],
}
