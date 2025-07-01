/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-html'],
  plugins: ['stylelint-prettier'],
  rules: {
    'color-no-hex': true,
    'selector-no-qualifying-type': null,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'color-function-notation': null,
    'scss/no-global-function-names': null,
    'scss/double-slash-comment-empty-line-before': null,
    'selector-class-pattern': null,
    'block-no-empty': [true, { ignore: ['comments'] }],
    'prettier/prettier': true,
    'color-hex-length': null,
    'alpha-value-notation': 'number',
    'max-nesting-depth': [
      2,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes'],
      },
    ],
    'declaration-property-value-disallowed-list': {
      '/^(margin|padding)/': ['8px', '16px', '32px', '64px', '128px'],
    },
  },
  overrides: [
    {
      files: ['**/*.astro'],
      customSyntax: 'postcss-html',
    },
  ],
};
