import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['node_modules/', 'dist/', 'coverage/'],
  },

  {
    files: ['**/*.{js,cjs,mjs}'],

    languageOptions: {
      ecmaVersion: 'latest',

      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },

    rules: {
      ...js.configs.recommended.rules,

      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'no-console': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
    },
  },
];