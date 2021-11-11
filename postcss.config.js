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
    'postcss-nested': {},
    'postcss-sorting': {
      'properties-order': 'alphabetical',
    },
    'autoprefixer': {
      grid: true,
    },
  }
});
