module.exports = () => ({
  plugins: {
    'postcss-import-ext-glob': {
      sort: 'desc',
    },
    'postcss-import': {
      plugins: [
        require('stylelint')(),
      ],
    },
    'postcss-simple-vars': {},
    'postcss-mixins': {},
    'postcss-color-function': {},
    'postcss-calc': {},
    'postcss-functions': {
      functions: {
        calcvw: (num, width = 750) => {
          return `${num / width * 100}vw`;
        },
      }
    },
    'postcss-nested': {},
    'postcss-sorting': {
      'properties-order': 'alphabetical',
    },
    'stylelint': {},
    'postcss-sort-media-queries': {
      // sort: 'desktop-first',
      // sort: 'mobile-first',
    },
    'autoprefixer': {
      grid: true,
    },
  }
});
