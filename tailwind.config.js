module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    content: [
      'components/**/*.js',
      'components/**/*.css',
      'pages/**/*.js',
      'pages/**/*.css',
      'styles/**/*.css',
      'nuxt.config.js'
    ]
  },
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
    },
  },
}
