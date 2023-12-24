const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const { colorTheme } = require('./src/config/tailwind.conf');
const { spacingTheme } = require('./src/config/tailwind.conf');

module.exports = {
  content: ['./src/**/*.{pug,html,js}'],
  important: true,
  purge: false,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      spacing: {
        '130px': '130px',
      },
      width: {
        ...defaultTheme.width,
        fit: 'fit-content',
      },
      height: {
        ...defaultTheme.height,
        fit: 'fit-content',
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      }
    },
    // container: {
    //   center: true,
    //   screens: {
    //     sm: '100%',
    //     md: '100%',
    //     lg: "1280px",
    //     xl: "1400px",
    //   },
    // },
    screens: {
      xs: '320px',
      sm: '480px',
      md: '720px',
      lg: '1024px',
      '2lg': '1280px',
      xl: '1440px',
    },
    spacing: {
      ...spacingTheme,
    },
    colors: {
      'black':'var(--black)',
      'bej':'var(--bej)',
      'darkbej':'var(--darkbej)',
      'red':'var(--red)',
      'bej2':'var(--bej2)',
      'awc':'var(--awc)',
    },
    borderColor: {
      ...colorTheme,
    },
    backgroundColor: {
      ...colorTheme,
    },
    fontSize: {
      '90px': '90px',
      '70px': '70px',
      '60px': '60px',
      '56px': '56px',
      '54px': '54px',
      '50px': '50px',
      '40px': '40px',
      '32px': '32px',
      '30px': '30px',
      '28px': '28px',
      '24px': '24px',
      '21px': '21px',
      '20px': '20px',
      '18px': '18px',
      '16px': '16px',
      '14px': '14px',
      '12px': '12px',
    },
    transitionDuration: {
      fast: '0.3s',
      mid: '0.6s',
      slow: '0.9s',
    },
    lineHeight: {
      ...defaultTheme.lineHeight,
      tight: '1.2',
      relaxed: '1.6',
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0 16px',
          '@screen sm': {
            maxWidth: '480px',
            padding: '0 21px',
            margin: 'auto',
          },
          '@screen md': {
            maxWidth: '720px',
            padding: '0 27px',
          },
          '@screen lg': {
            maxWidth: '1024px',
            padding: '0 51px',
          },
          '@screen 2lg': {
            maxWidth: '1280px',
            padding: '0 31px',
          },
          '@screen xl': {
            maxWidth: '1440px',
            padding: '0 80px',
          },
        },
      });
    }),
    // require('@tailwindcss/line-clamp'),
  ],
};
