module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-selector-no-empty',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-scss',
    'stylelint-use-nesting',
  ],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'plugin/stylelint-selector-no-empty': true,
    'plugin/declaration-block-no-ignored-properties': true,
    'declaration-colon-newline-after': null,
    'value-keyword-case': ['lower', { ignoreKeywords: ['dummyValue'] }],
    indentation: 2,
    'string-quotes': 'single',
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['stylelint-config-standard-scss'],
      // customSyntax: 'postcss-scss',
      rules: {
        'csstools/use-nesting': 'always',
      },
    },
  ],
}
