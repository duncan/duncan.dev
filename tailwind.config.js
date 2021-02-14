module.exports = {
  purge: [
    './pages/**/*.{js,tsx,md}',
    './components/**/*.{js,tsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    // fontSize: {
    //   sm: ['14px', '20px'],
    //   base: ['16px', '24px'],
    //   lg: ['20px', '28px'],
    //   xl: ['24px', '32px'],
    // },
    extend: {
      // screens: {
      //   'dark-mode': { raw: '(prefers-color-scheme: dark)' }
      // },
      typography: {
        DEFAULT: {
          css: {
            p: {
              fontWeight: '300',
            },
            code: {
              fontWeight: '300',
            },
          },
        },
      },
      fontFamily: {
        sans: [
          //'Source Sans Variable',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji"
        ],
        mono: [
          //'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          "Liberation Mono",
          "Courier New",
          'monospace']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
