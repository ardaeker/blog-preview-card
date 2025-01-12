import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      yellow: 'var(--color-yellow)',
      white: 'var(--color-white)',
      gray: {
        500: 'var(--color-gray-500)',
        950: 'var(--color-gray-950)',
      },
    },
    extend: {
      fontSize: {
        xs: ['.75rem', { lineHeight: '1.125rem' }],
        sm: ['.875rem', { lineHeight: '1.3125rem' }],
        xl: ['1.25rem', { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      },
      boxShadow: {
        card: '8px 8px 0px 0px #000000',
      },
      borderRadius: {
        xl: '.625rem',
        '3xl': '1.25rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
