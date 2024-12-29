/** @type {import("prettier").Config} */
export default {
  htmlWhitespaceSensitivity: 'strict',
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
