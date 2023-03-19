module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'react-app',
    'react-app/jest',
  ],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    eqeqeq: ['error'],
    'eol-last': ['error', 'always'],
    'jest/valid-title': 'off',
    'keyword-spacing': ['error'],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', 120],
    'no-duplicate-imports': 'error',
    'no-tabs': ['error'],
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'quote-props': ['error', 'as-needed'],
    '@typescript-eslint/consistent-type-imports': 'error',
  },
}
