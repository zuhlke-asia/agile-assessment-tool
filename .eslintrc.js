module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:cypress/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    indent: ['error', 2],
    'arrow-parens': ['error', 'always'],
    'object-curly-newline': 'off',
    'object-curly-spacing': 'error',
    'array-bracket-spacing': 'error',
    'react/jsx-filename-extension': 'off',
    'no-console': [
      1,
      {
        allow: ['warn', 'error'],
      },
    ],
  },
};
