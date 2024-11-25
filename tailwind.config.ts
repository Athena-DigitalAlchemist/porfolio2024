import type { Config } from 'tailwindcss';
import aspectRatio from '@tailwindcss/aspect-ratio';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['var(--font-bebas-neue)', 'sans-serif'],
        'oswald': ['var(--font-oswald)', 'sans-serif'],
      },
    },
  },
  plugins: [
    aspectRatio,
  ],
};

export default config;
