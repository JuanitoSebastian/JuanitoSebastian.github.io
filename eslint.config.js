import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { ignores: ['src/env.d.ts'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      quotes: [2, 'single', { avoidEscape: true }],
      indent: [2, 2],
    },
  },
];
