import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './messages/**/*.json'],
  theme: {
    extend: {
      colors: {
        ink: '#05080d',
        steel: '#111821',
        line: 'rgba(148, 163, 184, 0.18)',
        gold: '#f2b84b'
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0, 0, 0, 0.34)'
      }
    }
  },
  plugins: []
};

export default config;
