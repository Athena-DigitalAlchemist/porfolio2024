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
        'bebas': ['var(--font-bebas)', 'sans-serif'],
        'sans': ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    aspectRatio,
  ],
};

export default config;
