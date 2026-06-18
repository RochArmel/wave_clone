/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      screens: {
        xs: '390px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
      colors: {
        wave: {
          sky: '#1AB3E5',
          business: '#1DC8FF',
          navy: '#0E0D5D',
          burnt: '#882A1A',
          gold: '#FBDE87',
          gray: '#F8F8F8',
          pale: '#EFFBFF',
          mist: '#F7F9FC',
          orange: '#F16A21',
          notice: '#D85F1D',
          black: '#020203',
          ink: '#1C1C1C',
        },
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        walsheim: ['GT Walsheim Regular', 'Inter', 'system-ui', 'sans-serif'],
        walsheimBold: ['GT Walsheim Bold', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        wave: '0 4px 8px rgba(0, 0, 0, 0.05)',
        button: '0 12px 24px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
