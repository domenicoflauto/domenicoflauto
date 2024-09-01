/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "base-1": 'var(--color-base-1)',      
      "base-2": 'var(--color-base-2)',      
      'sharp': 'var(--color-sharp)',      
      'soft': 'var(--color-soft)',      
      'border': 'var(--color-border-1)',      
      'border-2': 'var(--color-border-2)',      
      'logo': 'var(--color-logo)',      
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
