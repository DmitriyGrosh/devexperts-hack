module.exports = {
  printWidth: 120,
  tabWidth: 2,
  jsxSingleQuote: true,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  quoteProps: 'consistent',
  overrides: [
    {
      files: '*.{json,css,yml,md}',
      options: { singleQuote: false },
    },
  ],
};