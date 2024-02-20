import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 4px rgba(255, 255, 255, 0.8)',
      },
      colors: {
        'realm-dark-blue': '#0c1929',
        'primary-dark-blue': '#0c1929',
        'primary-white': '#ffffff',
        'brand-green-light': '#8BEC90', // new light green
        'brand-green-dark': '#49B583', // new dark green
        "brand-black": "#000000",
        "neon-orange": '#FFA500',
        
        // other colors from the branding guide...
      },
    },
  },
  corePlugins: {
    aspectRatio: false, // disable the core plugin
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // add the plugin
  ],
}
export default config
